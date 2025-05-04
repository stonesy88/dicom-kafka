function e(r){switch(r){case"cloud":return`---\r
title: "Context: Cloud System"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  subgraph Cloud["Cloud System"]\r
    Cloud.Ui[Frontend]\r
    Cloud.Backend[Backend]\r
  end\r
  Provider[Managed Services]\r
  Customer -. "uses web and mobile" .-> Cloud.Ui\r
  Cloud.Ui -. "fetches data" .-> Cloud.Backend\r
  Cloud.Backend -. "reads/writes" .-> Provider\r
`;case"provider":return`---\r
title: "Context: Managed Services"\r
---\r
graph TB\r
  subgraph Cloud["Cloud System"]\r
    Cloud.Backend[Backend]\r
  end\r
  subgraph Provider["Managed Services"]\r
    Provider.Pg([PostgreSQL])\r
  end\r
  Cloud.Backend -. "reads/writes" .-> Provider.Pg\r
`;case"index":return`---\r
title: "Landscape"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  Cloud[Cloud System]\r
  Provider[Managed Services]\r
  Customer -. "uses and pays" .-> Cloud\r
  Cloud -. "uses services" .-> Provider\r
`;case"cloud_backend":return`---\r
title: "Backend"\r
---\r
graph TB\r
  subgraph Cloud["Cloud System"]\r
    Cloud.Ui[Frontend]\r
    subgraph Cloud.Backend["Backend"]\r
      Cloud.Backend.Graphql[GraphQL API]\r
    end\r
  end\r
  subgraph Provider["Managed Services"]\r
    subgraph Provider.Pg["PostgreSQL"]\r
      Provider.Pg.Tbl_customers([[ customers ]])\r
      Provider.Pg.Tbl_sessions([[ sessions ]])\r
    end\r
  end\r
  Cloud.Ui -. "fetches data" .-> Cloud.Backend.Graphql\r
  Cloud.Backend.Graphql -. "reads/writes" .-> Provider.Pg.Tbl_customers\r
  Cloud.Backend.Graphql -. "reads/writes" .-> Provider.Pg.Tbl_sessions\r
`;case"provider_pg":return`---\r
title: "Databases"\r
---\r
graph TB\r
  subgraph Cloud["Cloud System"]\r
    Cloud.Backend[Backend]\r
  end\r
  subgraph ProviderPg["PostgreSQL"]\r
    ProviderPg.Tbl_sessions([[ sessions ]])\r
    ProviderPg.Tbl_customers([[ customers ]])\r
  end\r
  ProviderPg.Tbl_sessions -. "belongs to" .-> ProviderPg.Tbl_customers\r
  Cloud.Backend -. "reads/writes" .-> ProviderPg.Tbl_customers\r
  Cloud.Backend -. "reads/writes" .-> ProviderPg.Tbl_sessions\r
`;case"cloud_ui":return`---\r
title: "Frontend"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  subgraph Cloud["Cloud System"]\r
    subgraph Cloud.Ui["Frontend"]\r
      Cloud.Ui.Dashboard[Customer Dashboard]\r
      Cloud.Ui.Mobile[Mobile App]\r
    end\r
    Cloud.Backend[Backend]\r
  end\r
  Customer -. "opens in browser" .-> Cloud.Ui.Dashboard\r
  Customer -. "opens on mobile device" .-> Cloud.Ui.Mobile\r
  Cloud.Ui.Dashboard -. "fetches data" .-> Cloud.Backend\r
  Cloud.Ui.Mobile -. "fetches data" .-> Cloud.Backend\r
`;case"cloud_ui_dashboard":return`---\r
title: "Frontend: Dashboard"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  subgraph CloudUi["Frontend"]\r
    CloudUi.Dashboard[Customer Dashboard]\r
  end\r
  CloudBackend[Backend]\r
  Customer -. "opens in browser" .-> CloudUi.Dashboard\r
  CloudUi.Dashboard -. "fetches data" .-> CloudBackend\r
`;case"cloud_ui_mobile":return`---\r
title: "Frontend: Mobile"\r
---\r
graph TB\r
  Customer[fa:fa-user Customer]\r
  subgraph CloudUi["Frontend"]\r
    CloudUi.Mobile[Mobile App]\r
  end\r
  CloudBackend[Backend]\r
  Customer -. "opens on mobile device" .-> CloudUi.Mobile\r
  CloudUi.Mobile -. "fetches data" .-> CloudBackend\r
`;default:throw new Error("Unknown viewId: "+r)}}export{e as mmdSource};
