function n(r){switch(r){case"cloud":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Cloud: {\r
  label: "Cloud System"\r
\r
  Ui: {\r
    label: "Frontend"\r
  }\r
  Backend: {\r
    label: "Backend"\r
  }\r
}\r
Provider: {\r
  label: "Managed Services"\r
}\r
\r
Customer -> Cloud.Ui: "uses web and mobile"\r
Cloud.Ui -> Cloud.Backend: "fetches data"\r
Cloud.Backend -> Provider: "reads/writes"\r
`;case"provider":return`direction: down\r
\r
Cloud: {\r
  label: "Cloud System"\r
\r
  Backend: {\r
    label: "Backend"\r
  }\r
}\r
Provider: {\r
  label: "Managed Services"\r
\r
  Pg: {\r
    label: "PostgreSQL"\r
    shape: stored_data\r
  }\r
}\r
\r
Cloud.Backend -> Provider.Pg: "reads/writes"\r
`;case"index":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Cloud: {\r
  label: "Cloud System"\r
}\r
Provider: {\r
  label: "Managed Services"\r
}\r
\r
Customer -> Cloud: "uses and pays"\r
Cloud -> Provider: "uses services"\r
`;case"cloud_backend":return`direction: down\r
\r
Cloud: {\r
  label: "Cloud System"\r
\r
  Ui: {\r
    label: "Frontend"\r
  }\r
  Backend: {\r
    label: "Backend"\r
\r
    Graphql: {\r
      label: "GraphQL API"\r
    }\r
  }\r
}\r
Provider: {\r
  label: "Managed Services"\r
\r
  Pg: {\r
    label: "PostgreSQL"\r
    shape: stored_data\r
\r
    Tbl_customers: {\r
      label: "[ customers ]"\r
      shape: stored_data\r
    }\r
    Tbl_sessions: {\r
      label: "[ sessions ]"\r
      shape: stored_data\r
    }\r
  }\r
}\r
\r
Cloud.Ui -> Cloud.Backend.Graphql: "fetches data"\r
Cloud.Backend.Graphql -> Provider.Pg.Tbl_customers: "reads/writes"\r
Cloud.Backend.Graphql -> Provider.Pg.Tbl_sessions: "reads/writes"\r
`;case"provider_pg":return`direction: down\r
\r
Cloud: {\r
  label: "Cloud System"\r
\r
  Backend: {\r
    label: "Backend"\r
  }\r
}\r
ProviderPg: {\r
  label: "PostgreSQL"\r
  shape: stored_data\r
\r
  Tbl_sessions: {\r
    label: "[ sessions ]"\r
    shape: stored_data\r
  }\r
  Tbl_customers: {\r
    label: "[ customers ]"\r
    shape: stored_data\r
  }\r
}\r
\r
ProviderPg.Tbl_sessions -> ProviderPg.Tbl_customers: "belongs to"\r
Cloud.Backend -> ProviderPg.Tbl_customers: "reads/writes"\r
Cloud.Backend -> ProviderPg.Tbl_sessions: "reads/writes"\r
`;case"cloud_ui":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Cloud: {\r
  label: "Cloud System"\r
\r
  Ui: {\r
    label: "Frontend"\r
\r
    Dashboard: {\r
      label: "Customer Dashboard"\r
    }\r
    Mobile: {\r
      label: "Mobile App"\r
    }\r
  }\r
  Backend: {\r
    label: "Backend"\r
  }\r
}\r
\r
Customer -> Cloud.Ui.Dashboard: "opens in browser"\r
Customer -> Cloud.Ui.Mobile: "opens on mobile device"\r
Cloud.Ui.Dashboard -> Cloud.Backend: "fetches data"\r
Cloud.Ui.Mobile -> Cloud.Backend: "fetches data"\r
`;case"cloud_ui_dashboard":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
CloudUi: {\r
  label: "Frontend"\r
\r
  Dashboard: {\r
    label: "Customer Dashboard"\r
  }\r
}\r
CloudBackend: {\r
  label: "Backend"\r
}\r
\r
Customer -> CloudUi.Dashboard: "opens in browser"\r
CloudUi.Dashboard -> CloudBackend: "fetches data"\r
`;case"cloud_ui_mobile":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
CloudUi: {\r
  label: "Frontend"\r
\r
  Mobile: {\r
    label: "Mobile App"\r
  }\r
}\r
CloudBackend: {\r
  label: "Backend"\r
}\r
\r
Customer -> CloudUi.Mobile: "opens on mobile device"\r
CloudUi.Mobile -> CloudBackend: "fetches data"\r
`;default:throw new Error("Unknown viewId: "+r)}}export{n as d2Source};
