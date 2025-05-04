import os
import time
import json
import pydicom
from confluent_kafka import Producer
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

KAFKA_TOPIC = "dicom.ingest"

producer = Producer({'bootstrap.servers': 'localhost:9092'})

def send_to_kafka(filepath):
    ds = pydicom.dcmread(filepath)
    metadata = {
        "filepath": filepath,
        "study_uid": str(ds.StudyInstanceUID),
        "patient_id": str(ds.PatientID),
        "modality": ds.Modality
    }
    producer.produce(KAFKA_TOPIC, json.dumps(metadata).encode('utf-8'))
    producer.flush()
    print(f"Published: {metadata}")

class DicomWatcher(FileSystemEventHandler):
    def on_created(self, event):
        if event.src_path.endswith(".dcm"):
            send_to_kafka(event.src_path)

if __name__ == "__main__":
    path_to_watch = "./dicom_files"
    os.makedirs(path_to_watch, exist_ok=True)

    observer = Observer()
    observer.schedule(DicomWatcher(), path=path_to_watch, recursive=False)
    observer.start()

    print(f"Watching {path_to_watch} for new DICOM files...")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
