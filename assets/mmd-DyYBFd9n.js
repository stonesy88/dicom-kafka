function n(e){switch(e){case"cloud_backend":return`---
title: "Backend"
---
graph TB
  subgraph Cloud["Cloud System"]
    Cloud.Ui[Frontend]
    subgraph Cloud.Backend["Backend"]
      Cloud.Backend.Graphql[GraphQL API]
    end
  end
  subgraph Provider["Managed Services"]
    subgraph Provider.Pg["PostgreSQL"]
      Provider.Pg.Tbl_customers([[ customers ]])
      Provider.Pg.Tbl_sessions([[ sessions ]])
    end
  end
  Cloud.Ui -. "fetches data" .-> Cloud.Backend.Graphql
  Cloud.Backend.Graphql -. "reads/writes" .-> Provider.Pg.Tbl_customers
  Cloud.Backend.Graphql -. "reads/writes" .-> Provider.Pg.Tbl_sessions
`;case"provider_pg":return`---
title: "Databases"
---
graph TB
  subgraph Cloud["Cloud System"]
    Cloud.Backend[Backend]
  end
  subgraph ProviderPg["PostgreSQL"]
    ProviderPg.Tbl_sessions([[ sessions ]])
    ProviderPg.Tbl_customers([[ customers ]])
  end
  ProviderPg.Tbl_sessions -. "belongs to" .-> ProviderPg.Tbl_customers
  Cloud.Backend -. "reads/writes" .-> ProviderPg.Tbl_customers
  Cloud.Backend -. "reads/writes" .-> ProviderPg.Tbl_sessions
`;case"cloud":return`---
title: "Context: Cloud System"
---
graph TB
  Customer[fa:fa-user Customer]
  subgraph Cloud["Cloud System"]
    Cloud.Ui[Frontend]
    Cloud.Backend[Backend]
  end
  Provider[Managed Services]
  Customer -. "uses web and mobile" .-> Cloud.Ui
  Cloud.Ui -. "fetches data" .-> Cloud.Backend
  Cloud.Backend -. "reads/writes" .-> Provider
`;case"provider":return`---
title: "Context: Managed Services"
---
graph TB
  subgraph Cloud["Cloud System"]
    Cloud.Backend[Backend]
  end
  subgraph Provider["Managed Services"]
    Provider.Pg([PostgreSQL])
  end
  Cloud.Backend -. "reads/writes" .-> Provider.Pg
`;case"index":return`---
title: "Landscape"
---
graph TB
  Customer[fa:fa-user Customer]
  Cloud[Cloud System]
  Provider[Managed Services]
  Customer -. "uses and pays" .-> Cloud
  Cloud -. "uses services" .-> Provider
`;case"cloud_ui":return`---
title: "Frontend"
---
graph TB
  Customer[fa:fa-user Customer]
  subgraph Cloud["Cloud System"]
    subgraph Cloud.Ui["Frontend"]
      Cloud.Ui.Dashboard[Customer Dashboard]
      Cloud.Ui.Mobile[Mobile App]
    end
    Cloud.Backend[Backend]
  end
  Customer -. "opens in browser" .-> Cloud.Ui.Dashboard
  Customer -. "opens on mobile device" .-> Cloud.Ui.Mobile
  Cloud.Ui.Dashboard -. "fetches data" .-> Cloud.Backend
  Cloud.Ui.Mobile -. "fetches data" .-> Cloud.Backend
`;case"cloud_ui_dashboard":return`---
title: "Frontend: Dashboard"
---
graph TB
  Customer[fa:fa-user Customer]
  subgraph CloudUi["Frontend"]
    CloudUi.Dashboard[Customer Dashboard]
  end
  CloudBackend[Backend]
  Customer -. "opens in browser" .-> CloudUi.Dashboard
  CloudUi.Dashboard -. "fetches data" .-> CloudBackend
`;case"cloud_ui_mobile":return`---
title: "Frontend: Mobile"
---
graph TB
  Customer[fa:fa-user Customer]
  subgraph CloudUi["Frontend"]
    CloudUi.Mobile[Mobile App]
  end
  CloudBackend[Backend]
  Customer -. "opens on mobile device" .-> CloudUi.Mobile
  CloudUi.Mobile -. "fetches data" .-> CloudBackend
`;default:throw new Error("Unknown viewId: "+e)}}export{n as mmdSource};
