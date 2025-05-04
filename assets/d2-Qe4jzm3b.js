function e(n){switch(n){case"cloud_backend":return`direction: down

Cloud: {
  label: "Cloud System"

  Ui: {
    label: "Frontend"
  }
  Backend: {
    label: "Backend"

    Graphql: {
      label: "GraphQL API"
    }
  }
}
Provider: {
  label: "Managed Services"

  Pg: {
    label: "PostgreSQL"
    shape: stored_data

    Tbl_customers: {
      label: "[ customers ]"
      shape: stored_data
    }
    Tbl_sessions: {
      label: "[ sessions ]"
      shape: stored_data
    }
  }
}

Cloud.Ui -> Cloud.Backend.Graphql: "fetches data"
Cloud.Backend.Graphql -> Provider.Pg.Tbl_customers: "reads/writes"
Cloud.Backend.Graphql -> Provider.Pg.Tbl_sessions: "reads/writes"
`;case"provider_pg":return`direction: down

Cloud: {
  label: "Cloud System"

  Backend: {
    label: "Backend"
  }
}
ProviderPg: {
  label: "PostgreSQL"
  shape: stored_data

  Tbl_sessions: {
    label: "[ sessions ]"
    shape: stored_data
  }
  Tbl_customers: {
    label: "[ customers ]"
    shape: stored_data
  }
}

ProviderPg.Tbl_sessions -> ProviderPg.Tbl_customers: "belongs to"
Cloud.Backend -> ProviderPg.Tbl_customers: "reads/writes"
Cloud.Backend -> ProviderPg.Tbl_sessions: "reads/writes"
`;case"cloud":return`direction: down

Customer: {
  label: "Customer"
  shape: person
}
Cloud: {
  label: "Cloud System"

  Ui: {
    label: "Frontend"
  }
  Backend: {
    label: "Backend"
  }
}
Provider: {
  label: "Managed Services"
}

Customer -> Cloud.Ui: "uses web and mobile"
Cloud.Ui -> Cloud.Backend: "fetches data"
Cloud.Backend -> Provider: "reads/writes"
`;case"provider":return`direction: down

Cloud: {
  label: "Cloud System"

  Backend: {
    label: "Backend"
  }
}
Provider: {
  label: "Managed Services"

  Pg: {
    label: "PostgreSQL"
    shape: stored_data
  }
}

Cloud.Backend -> Provider.Pg: "reads/writes"
`;case"index":return`direction: down

Customer: {
  label: "Customer"
  shape: person
}
Cloud: {
  label: "Cloud System"
}
Provider: {
  label: "Managed Services"
}

Customer -> Cloud: "uses and pays"
Cloud -> Provider: "uses services"
`;case"cloud_ui":return`direction: down

Customer: {
  label: "Customer"
  shape: person
}
Cloud: {
  label: "Cloud System"

  Ui: {
    label: "Frontend"

    Dashboard: {
      label: "Customer Dashboard"
    }
    Mobile: {
      label: "Mobile App"
    }
  }
  Backend: {
    label: "Backend"
  }
}

Customer -> Cloud.Ui.Dashboard: "opens in browser"
Customer -> Cloud.Ui.Mobile: "opens on mobile device"
Cloud.Ui.Dashboard -> Cloud.Backend: "fetches data"
Cloud.Ui.Mobile -> Cloud.Backend: "fetches data"
`;case"cloud_ui_dashboard":return`direction: down

Customer: {
  label: "Customer"
  shape: person
}
CloudUi: {
  label: "Frontend"

  Dashboard: {
    label: "Customer Dashboard"
  }
}
CloudBackend: {
  label: "Backend"
}

Customer -> CloudUi.Dashboard: "opens in browser"
CloudUi.Dashboard -> CloudBackend: "fetches data"
`;case"cloud_ui_mobile":return`direction: down

Customer: {
  label: "Customer"
  shape: person
}
CloudUi: {
  label: "Frontend"

  Mobile: {
    label: "Mobile App"
  }
}
CloudBackend: {
  label: "Backend"
}

Customer -> CloudUi.Mobile: "opens on mobile device"
CloudUi.Mobile -> CloudBackend: "fetches data"
`;default:throw new Error("Unknown viewId: "+n)}}export{e as d2Source};
