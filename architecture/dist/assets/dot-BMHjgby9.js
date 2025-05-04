function t(e){switch(e){case"cloud_backend":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=cloud_backend,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_cloud {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CLOUD SYSTEM</B></FONT>>,
            likec4_depth=2,
            likec4_id=cloud,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_backend {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BACKEND</B></FONT>>,
                likec4_depth=1,
                likec4_id="cloud.backend",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            graphql [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">GraphQL API</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The GraphQL API of the cloud system</FONT></TD></TR></TABLE>>,
                likec4_id="cloud.backend.graphql",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
        ui [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Frontend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">All the frontend applications of the cloud<BR/>system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.ui",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    subgraph cluster_provider {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MANAGED SERVICES</B></FONT>>,
            likec4_depth=2,
            likec4_id=provider,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        subgraph cluster_pg {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>POSTGRESQL</B></FONT>>,
                likec4_depth=1,
                likec4_id="provider.pg",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            tbl_customers [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">[ customers ]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">private schema</FONT></TD></TR></TABLE>>,
                likec4_id="provider.pg.tbl_customers",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            tbl_sessions [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">[ sessions ]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">private schema</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Active sessions</FONT></TD></TR></TABLE>>,
                likec4_id="provider.pg.tbl_sessions",
                likec4_level=2,
                margin="0.223,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
    }
    ui -> graphql [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fetches data</FONT></TD></TR></TABLE>>,
        likec4_id="6ur171",
        minlen=0,
        style=dashed,
        weight=4];
    graphql -> tbl_customers [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads/writes</FONT></TD></TR></TABLE>>,
        likec4_id="1bissei",
        minlen=1,
        style=dashed];
    graphql -> tbl_sessions [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads/writes</FONT></TD></TR></TABLE>>,
        likec4_id="2cnxps",
        minlen=1,
        style=dashed];
}
`;case"provider_pg":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=provider_pg,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_cloud {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CLOUD SYSTEM</B></FONT>>,
            likec4_depth=1,
            likec4_id=cloud,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        backend [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Backend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The backend services of the cloud system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.backend",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_pg {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>POSTGRESQL</B></FONT>>,
            likec4_depth=1,
            likec4_id="provider.pg",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        tbl_sessions [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">[ sessions ]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">private schema</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Active sessions</FONT></TD></TR></TABLE>>,
            likec4_id="provider.pg.tbl_sessions",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        tbl_customers [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">[ customers ]</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">private schema</FONT></TD></TR></TABLE>>,
            likec4_id="provider.pg.tbl_customers",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    backend -> tbl_sessions [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads/writes</FONT></TD></TR></TABLE>>,
        likec4_id=oyehpr,
        style=dashed];
    backend -> tbl_customers [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads/writes</FONT></TD></TR></TABLE>>,
        likec4_id="192ilx",
        style=dashed];
    tbl_sessions -> tbl_customers [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">belongs to</FONT></TD></TR></TABLE>>,
        likec4_id=m1dqk0,
        minlen=0,
        style=dashed,
        weight=4];
}
`;case"cloud":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=cloud,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_cloud {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CLOUD SYSTEM</B></FONT>>,
            likec4_depth=1,
            likec4_id=cloud,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Frontend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">All the frontend applications of the cloud<BR/>system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.ui",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
        backend [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Backend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The backend services of the cloud system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.backend",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    customer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Customer of the cloud system</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> ui [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses web and mobile</FONT></TD></TR></TABLE>>,
        likec4_id="1r2spnx",
        minlen=1,
        style=dashed];
    ui -> backend [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fetches data</FONT></TD></TR></TABLE>>,
        likec4_id="15ahhde",
        minlen=0,
        style=dashed,
        weight=2];
    provider [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Managed Services</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Provider of managed services<BR/>and cloud hosting</FONT></TD></TR></TABLE>>,
        likec4_id=provider,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    backend -> provider [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads/writes</FONT></TD></TR></TABLE>>,
        likec4_id="8mnxcg",
        minlen=1,
        style=dashed];
}
`;case"provider":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=provider,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_cloud {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CLOUD SYSTEM</B></FONT>>,
            likec4_depth=1,
            likec4_id=cloud,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        backend [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Backend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The backend services of the cloud system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.backend",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    subgraph cluster_provider {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>MANAGED SERVICES</B></FONT>>,
            likec4_depth=1,
            likec4_id=provider,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        pg [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="19">PostgreSQL</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Database for storing relational<BR/>data</FONT></TD></TR></TABLE>>,
            likec4_id="provider.pg",
            likec4_level=1,
            margin="0.112,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    backend -> pg [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">reads/writes</FONT></TD></TR></TABLE>>,
        likec4_id=nr8p,
        style=dashed,
        weight=3];
}
`;case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    customer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Customer of the cloud system</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    cloud [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Cloud System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Our SaaS platfrom that allows<BR/>customers to interact with<BR/>the latest technologies</FONT></TD></TR></TABLE>>,
        likec4_id=cloud,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> cloud [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses and pays</FONT></TD></TR></TABLE>>,
        likec4_id=kzb1r3,
        minlen=1,
        style=dashed];
    provider [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Managed Services</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Provider of managed services<BR/>and cloud hosting</FONT></TD></TR></TABLE>>,
        likec4_id=provider,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    cloud -> provider [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses services</FONT></TD></TR></TABLE>>,
        likec4_id="1uipxga",
        minlen=1,
        style=dashed];
}
`;case"cloud_ui":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=cloud_ui,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_cloud {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>CLOUD SYSTEM</B></FONT>>,
            likec4_depth=2,
            likec4_id=cloud,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_ui {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FRONTEND</B></FONT>>,
                likec4_depth=1,
                likec4_id="cloud.ui",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            dashboard [group=cloud,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer Dashboard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Nextjs</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Web application, that allows customers to<BR/>interact with the cloud system</FONT></TD></TR></TABLE>>,
                likec4_id="cloud.ui.dashboard",
                likec4_level=2,
                margin="0.278,0.306",
                width=4.445];
            mobile [group=cloud,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Mobile App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The mobile app of the cloud system</FONT></TD></TR></TABLE>>,
                likec4_id="cloud.ui.mobile",
                likec4_level=2,
                margin="0.278,0.223",
                width=4.445];
        }
        backend [group=cloud,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Backend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The backend services of the cloud system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.backend",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    customer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Customer of the cloud system</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> dashboard [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">opens in browser</FONT></TD></TR></TABLE>>,
        likec4_id=v1ckrr,
        style=dashed];
    customer -> mobile [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">opens on mobile device</FONT></TD></TR></TABLE>>,
        likec4_id="1uzcqkj",
        style=dashed];
    dashboard -> backend [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fetches data</FONT></TD></TR></TABLE>>,
        likec4_id="142oxyw",
        style=dashed,
        weight=2];
    mobile -> backend [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fetches data</FONT></TD></TR></TABLE>>,
        likec4_id="1xndi3g",
        style=dashed,
        weight=2];
}
`;case"cloud_ui_dashboard":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=cloud_ui_dashboard,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_ui {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FRONTEND</B></FONT>>,
            likec4_depth=1,
            likec4_id="cloud.ui",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        dashboard [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer Dashboard</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Nextjs</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Web application, that allows customers to<BR/>interact with the cloud system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.ui.dashboard",
            likec4_level=1,
            margin="0.278,0.306",
            width=4.445];
    }
    customer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Customer of the cloud system</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> dashboard [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">opens in browser</FONT></TD></TR></TABLE>>,
        likec4_id=v1ckrr,
        minlen=1,
        style=dashed];
    backend [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Backend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The backend services of the cloud system</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.backend",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    dashboard -> backend [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fetches data</FONT></TD></TR></TABLE>>,
        likec4_id="142oxyw",
        minlen=1,
        style=dashed,
        weight=2];
}
`;case"cloud_ui_mobile":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=cloud_ui_mobile,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_ui {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>FRONTEND</B></FONT>>,
            likec4_depth=1,
            likec4_id="cloud.ui",
            likec4_level=0,
            margin=32,
            style=filled
        ];
        mobile [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Mobile App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The mobile app of the cloud system</FONT></TD></TR></TABLE>>,
            likec4_id="cloud.ui.mobile",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
    }
    customer [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Customer</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Customer of the cloud system</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> mobile [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">opens on mobile device</FONT></TD></TR></TABLE>>,
        likec4_id="1uzcqkj",
        minlen=1,
        style=dashed];
    backend [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Backend</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">The backend services of the cloud system</FONT></TD></TR></TABLE>>,
        likec4_id="cloud.backend",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    mobile -> backend [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">fetches data</FONT></TD></TR></TABLE>>,
        likec4_id="1xndi3g",
        minlen=1,
        style=dashed,
        weight=2];
}
`;default:throw new Error("Unknown viewId: "+e)}}function n(e){switch(e){case"cloud_backend":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="1234pt" height="818pt"
 viewBox="0.00 0.00 1234.10 817.70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 802.65)">
<g id="clust1" class="cluster">
<title>cluster_cloud</title>
<polygon fill="#1a468d" stroke="#1c3979" points="252,-413.2 252,-779.6 1196,-779.6 1196,-413.2 252,-413.2"/>
<text text-anchor="start" x="260" y="-766.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CLOUD SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_backend</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="292,-453.2 292,-718.4 676,-718.4 676,-453.2 292,-453.2"/>
<text text-anchor="start" x="300" y="-705.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BACKEND</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_provider</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-8 8,-374.4 902,-374.4 902,-8 8,-8"/>
<text text-anchor="start" x="16" y="-361.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MANAGED SERVICES</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_pg</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="40,-40 40,-321.2 870,-321.2 870,-40 40,-40"/>
<text text-anchor="start" x="48" y="-308.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">POSTGRESQL</text>
</g>
<!-- graphql -->
<g id="node1" class="node">
<title>graphql</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="644.02,-665.2 323.98,-665.2 323.98,-485.2 644.02,-485.2 644.02,-665.2"/>
<text text-anchor="start" x="426.97" y="-580.5" font-family="Arial" font-size="19.00" fill="#eff6ff">GraphQL API</text>
<text text-anchor="start" x="357.27" y="-557.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">The GraphQL API of the cloud system</text>
</g>
<!-- ui -->
<g id="node2" class="node">
<title>ui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1156.02,-665.2 835.98,-665.2 835.98,-485.2 1156.02,-485.2 1156.02,-665.2"/>
<text text-anchor="start" x="957.98" y="-589.5" font-family="Arial" font-size="19.00" fill="#eff6ff">Frontend</text>
<text text-anchor="start" x="863" y="-566.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">All the frontend applications of the cloud</text>
<text text-anchor="start" x="972.25" y="-548.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">system</text>
</g>
<!-- tbl_customers -->
<g id="node3" class="node">
<title>tbl_customers</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M400.02,-243.64C400.02,-252.67 328.3,-260 240,-260 151.7,-260 79.98,-252.67 79.98,-243.64 79.98,-243.64 79.98,-96.36 79.98,-96.36 79.98,-87.33 151.7,-80 240,-80 328.3,-80 400.02,-87.33 400.02,-96.36 400.02,-96.36 400.02,-243.64 400.02,-243.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M400.02,-243.64C400.02,-234.61 328.3,-227.27 240,-227.27 151.7,-227.27 79.98,-234.61 79.98,-243.64"/>
<text text-anchor="start" x="185.63" y="-174.1" font-family="Arial" font-size="19.00" fill="#eff6ff">[ customers ]</text>
<text text-anchor="start" x="195.93" y="-152.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">private schema</text>
</g>
<!-- tbl_sessions -->
<g id="node4" class="node">
<title>tbl_sessions</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M830.02,-243.64C830.02,-252.67 758.3,-260 670,-260 581.7,-260 509.98,-252.67 509.98,-243.64 509.98,-243.64 509.98,-96.36 509.98,-96.36 509.98,-87.33 581.7,-80 670,-80 758.3,-80 830.02,-87.33 830.02,-96.36 830.02,-96.36 830.02,-243.64 830.02,-243.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M830.02,-243.64C830.02,-234.61 758.3,-227.27 670,-227.27 581.7,-227.27 509.98,-234.61 509.98,-243.64"/>
<text text-anchor="start" x="622.48" y="-185.1" font-family="Arial" font-size="19.00" fill="#eff6ff">[ sessions ]</text>
<text text-anchor="start" x="625.93" y="-163.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">private schema</text>
<text text-anchor="start" x="618.31" y="-142.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Active sessions</text>
</g>
<!-- graphql&#45;&gt;tbl_customers -->
<g id="edge2" class="edge">
<title>graphql&#45;&gt;tbl_customers</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M430.15,-485.22C391.54,-421.41 339.51,-335.44 299.64,-269.55"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="302.04,-268.45 295.91,-263.39 297.55,-271.17 302.04,-268.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="380.24,-382.4 380.24,-405.2 461.71,-405.2 461.71,-382.4 380.24,-382.4"/>
<text text-anchor="start" x="383.24" y="-389.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">reads/writes</text>
</g>
<!-- graphql&#45;&gt;tbl_sessions -->
<g id="edge3" class="edge">
<title>graphql&#45;&gt;tbl_sessions</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M525.05,-485.22C554.36,-421.67 593.82,-336.14 624.17,-270.36"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="626.55,-271.46 627.31,-263.55 621.78,-269.26 626.55,-271.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="571.42,-382.4 571.42,-405.2 652.89,-405.2 652.89,-382.4 571.42,-382.4"/>
<text text-anchor="start" x="574.42" y="-389.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">reads/writes</text>
</g>
<!-- ui&#45;&gt;graphql -->
<g id="edge1" class="edge">
<title>ui&#45;&gt;graphql</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M836,-575.2C778.28,-575.2 712.94,-575.2 654.37,-575.2"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="654.42,-572.58 646.92,-575.2 654.42,-577.83 654.42,-572.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="698.86,-578.2 698.86,-601 781.14,-601 781.14,-578.2 698.86,-578.2"/>
<text text-anchor="start" x="701.86" y="-585.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">fetches data</text>
</g>
</g>
</svg>
`;case"provider_pg":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="947pt" height="651pt"
 viewBox="0.00 0.00 947.10 651.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 636.25)">
<g id="clust1" class="cluster">
<title>cluster_cloud</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="304,-348 304,-613.2 688,-613.2 688,-348 304,-348"/>
<text text-anchor="start" x="312" y="-600.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CLOUD SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_pg</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-289.2 909,-289.2 909,-8 8,-8"/>
<text text-anchor="start" x="16" y="-276.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">POSTGRESQL</text>
</g>
<!-- backend -->
<g id="node1" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="656.02,-560 335.98,-560 335.98,-380 656.02,-380 656.02,-560"/>
<text text-anchor="start" x="459.03" y="-475.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Backend</text>
<text text-anchor="start" x="356.35" y="-452.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The backend services of the cloud system</text>
</g>
<!-- tbl_sessions -->
<g id="node2" class="node">
<title>tbl_sessions</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M368.02,-211.64C368.02,-220.67 296.3,-228 208,-228 119.7,-228 47.98,-220.67 47.98,-211.64 47.98,-211.64 47.98,-64.36 47.98,-64.36 47.98,-55.33 119.7,-48 208,-48 296.3,-48 368.02,-55.33 368.02,-64.36 368.02,-64.36 368.02,-211.64 368.02,-211.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M368.02,-211.64C368.02,-202.61 296.3,-195.27 208,-195.27 119.7,-195.27 47.98,-202.61 47.98,-211.64"/>
<text text-anchor="start" x="160.48" y="-153.1" font-family="Arial" font-size="19.00" fill="#eff6ff">[ sessions ]</text>
<text text-anchor="start" x="163.93" y="-131.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">private schema</text>
<text text-anchor="start" x="156.31" y="-110.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Active sessions</text>
</g>
<!-- tbl_customers -->
<g id="node3" class="node">
<title>tbl_customers</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M869.02,-211.64C869.02,-220.67 797.3,-228 709,-228 620.7,-228 548.98,-220.67 548.98,-211.64 548.98,-211.64 548.98,-64.36 548.98,-64.36 548.98,-55.33 620.7,-48 709,-48 797.3,-48 869.02,-55.33 869.02,-64.36 869.02,-64.36 869.02,-211.64 869.02,-211.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M869.02,-211.64C869.02,-202.61 797.3,-195.27 709,-195.27 620.7,-195.27 548.98,-202.61 548.98,-211.64"/>
<text text-anchor="start" x="654.63" y="-142.1" font-family="Arial" font-size="19.00" fill="#eff6ff">[ customers ]</text>
<text text-anchor="start" x="664.93" y="-120.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">private schema</text>
</g>
<!-- backend&#45;&gt;tbl_sessions -->
<g id="edge1" class="edge">
<title>backend&#45;&gt;tbl_sessions</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M418.44,-380.13C379.78,-335.83 332.93,-282.15 293.26,-236.69"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="295.35,-235.09 288.44,-231.17 291.39,-238.54 295.35,-235.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="360.64,-297.2 360.64,-320 442.1,-320 442.1,-297.2 360.64,-297.2"/>
<text text-anchor="start" x="363.64" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">reads/writes</text>
</g>
<!-- backend&#45;&gt;tbl_customers -->
<g id="edge2" class="edge">
<title>backend&#45;&gt;tbl_customers</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M553.36,-380.13C581.78,-336.1 616.18,-282.81 645.4,-237.54"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="647.48,-239.16 649.34,-231.43 643.07,-236.31 647.48,-239.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="602.5,-297.2 602.5,-320 683.97,-320 683.97,-297.2 602.5,-297.2"/>
<text text-anchor="start" x="605.5" y="-304.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">reads/writes</text>
</g>
<!-- tbl_sessions&#45;&gt;tbl_customers -->
<g id="edge3" class="edge">
<title>tbl_sessions&#45;&gt;tbl_customers</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M368.93,-138C422.83,-138 483.09,-138 537.75,-138"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="537.72,-140.63 545.22,-138 537.72,-135.38 537.72,-140.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="423.2,-141 423.2,-163.8 493.8,-163.8 493.8,-141 423.2,-141"/>
<text text-anchor="start" x="426.2" y="-148.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">belongs to</text>
</g>
</g>
</svg>
`;case"cloud":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="958pt" height="865pt"
 viewBox="0.00 0.00 958.10 864.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 849.85)">
<g id="clust1" class="cluster">
<title>cluster_cloud</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-282.8 8,-564 920,-564 920,-282.8 8,-282.8"/>
<text text-anchor="start" x="16" y="-551.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CLOUD SYSTEM</text>
</g>
<!-- ui -->
<g id="node1" class="node">
<title>ui</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-502.8 47.98,-502.8 47.98,-322.8 368.02,-322.8 368.02,-502.8"/>
<text text-anchor="start" x="169.98" y="-427.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Frontend</text>
<text text-anchor="start" x="75" y="-403.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">All the frontend applications of the cloud</text>
<text text-anchor="start" x="184.25" y="-385.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">system</text>
</g>
<!-- backend -->
<g id="node2" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="880.02,-502.8 559.98,-502.8 559.98,-322.8 880.02,-322.8 880.02,-502.8"/>
<text text-anchor="start" x="683.03" y="-418.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Backend</text>
<text text-anchor="start" x="580.35" y="-394.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">The backend services of the cloud system</text>
</g>
<!-- customer -->
<g id="node3" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="368.02,-834.8 47.98,-834.8 47.98,-654.8 368.02,-654.8 368.02,-834.8"/>
<text text-anchor="start" x="166.82" y="-750.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="108.79" y="-726.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Customer of the cloud system</text>
</g>
<!-- provider -->
<g id="node4" class="node">
<title>provider</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="880.02,-180 559.98,-180 559.98,0 880.02,0 880.02,-180"/>
<text text-anchor="start" x="641.32" y="-104.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Managed Services</text>
<text text-anchor="start" x="620.79" y="-81.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Provider of managed services</text>
<text text-anchor="start" x="661.2" y="-63.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">and cloud hosting</text>
</g>
<!-- ui&#45;&gt;backend -->
<g id="edge2" class="edge">
<title>ui&#45;&gt;backend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M367.89,-412.8C425.61,-412.8 490.94,-412.8 549.52,-412.8"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="549.47,-415.43 556.97,-412.8 549.47,-410.18 549.47,-415.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="422.86,-415.8 422.86,-438.6 505.14,-438.6 505.14,-415.8 422.86,-415.8"/>
<text text-anchor="start" x="425.86" y="-423" font-family="Arial" font-size="14.00" fill="#c6c6c6">fetches data</text>
</g>
<!-- backend&#45;&gt;provider -->
<g id="edge3" class="edge">
<title>backend&#45;&gt;provider</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M720,-322.87C720,-281.67 720,-232.56 720,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="722.63,-190.36 720,-182.86 717.38,-190.36 722.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="720,-240 720,-262.8 801.47,-262.8 801.47,-240 720,-240"/>
<text text-anchor="start" x="723" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">reads/writes</text>
</g>
<!-- customer&#45;&gt;ui -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;ui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M208,-654.93C208,-611.1 208,-558.08 208,-512.94"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="210.63,-513.07 208,-505.57 205.38,-513.07 210.63,-513.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="208,-572 208,-594.8 345.52,-594.8 345.52,-572 208,-572"/>
<text text-anchor="start" x="211" y="-579.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">uses web and mobile</text>
</g>
</g>
</svg>
`;case"provider":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="434pt" height="635pt"
 viewBox="0.00 0.00 434.10 635.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 620.25)">
<g id="clust1" class="cluster">
<title>cluster_cloud</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="10,-332 10,-597.2 394,-597.2 394,-332 10,-332"/>
<text text-anchor="start" x="18" y="-584.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CLOUD SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_provider</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 396,-273.2 396,-8 8,-8"/>
<text text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">MANAGED SERVICES</text>
</g>
<!-- backend -->
<g id="node1" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="362.02,-544 41.98,-544 41.98,-364 362.02,-364 362.02,-544"/>
<text text-anchor="start" x="165.03" y="-459.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Backend</text>
<text text-anchor="start" x="62.35" y="-436.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The backend services of the cloud system</text>
</g>
<!-- pg -->
<g id="node2" class="node">
<title>pg</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M364.12,-203.64C364.12,-212.67 291.46,-220 202,-220 112.54,-220 39.88,-212.67 39.88,-203.64 39.88,-203.64 39.88,-56.36 39.88,-56.36 39.88,-47.33 112.54,-40 202,-40 291.46,-40 364.12,-47.33 364.12,-56.36 364.12,-56.36 364.12,-203.64 364.12,-203.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M364.12,-203.64C364.12,-194.61 291.46,-187.27 202,-187.27 112.54,-187.27 39.88,-194.61 39.88,-203.64"/>
<text text-anchor="start" x="88" y="-125.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="131.94" y="-144.3" font-family="Arial" font-size="19.00" fill="#eff6ff">PostgreSQL</text>
<text text-anchor="start" x="342.11" y="-125.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="131.94" y="-121.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Database for storing relational</text>
<text text-anchor="start" x="131.94" y="-103.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">data</text>
</g>
<!-- backend&#45;&gt;pg -->
<g id="edge1" class="edge">
<title>backend&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M202,-364.16C202,-322.97 202,-273.84 202,-231.32"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="204.63,-231.48 202,-223.98 199.38,-231.48 204.63,-231.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="202,-281.2 202,-304 283.47,-304 283.47,-281.2 202,-281.2"/>
<text text-anchor="start" x="205" y="-288.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">reads/writes</text>
</g>
</g>
</svg>
`;case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="856pt"
 viewBox="0.00 0.00 350.14 855.70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 840.65)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-825.6 0,-825.6 0,-645.6 320.04,-645.6 320.04,-825.6"/>
<text text-anchor="start" x="118.84" y="-740.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="60.81" y="-717.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Customer of the cloud system</text>
</g>
<!-- cloud -->
<g id="node2" class="node">
<title>cloud</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-502.8 0,-502.8 0,-322.8 320.04,-322.8 320.04,-502.8"/>
<text text-anchor="start" x="100.89" y="-436.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Cloud System</text>
<text text-anchor="start" x="60.39" y="-412.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Our SaaS platfrom that allows</text>
<text text-anchor="start" x="74.99" y="-394.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">customers to interact with</text>
<text text-anchor="start" x="85.39" y="-376.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">the latest technologies</text>
</g>
<!-- provider -->
<g id="node3" class="node">
<title>provider</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text text-anchor="start" x="81.34" y="-104.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Managed Services</text>
<text text-anchor="start" x="60.81" y="-81.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Provider of managed services</text>
<text text-anchor="start" x="101.22" y="-63.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">and cloud hosting</text>
</g>
<!-- customer&#45;&gt;cloud -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;cloud</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M160.02,-645.67C160.02,-604.47 160.02,-555.36 160.02,-512.97"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="162.65,-513.16 160.02,-505.66 157.4,-513.16 162.65,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="160.02,-562.8 160.02,-585.6 256.3,-585.6 256.3,-562.8 160.02,-562.8"/>
<text text-anchor="start" x="163.02" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">uses and pays</text>
</g>
<!-- cloud&#45;&gt;provider -->
<g id="edge2" class="edge">
<title>cloud&#45;&gt;provider</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M160.02,-322.87C160.02,-281.67 160.02,-232.56 160.02,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="162.65,-190.36 160.02,-182.86 157.4,-190.36 162.65,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="160.02,-240 160.02,-262.8 250.83,-262.8 250.83,-240 160.02,-240"/>
<text text-anchor="start" x="163.02" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">uses services</text>
</g>
</g>
</svg>
`;case"cloud_ui":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="960pt" height="974pt"
 viewBox="0.00 0.00 960.10 974.10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 959.05)">
<g id="clust1" class="cluster">
<title>cluster_cloud</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-8 8,-673.2 922,-673.2 922,-8 8,-8"/>
<text text-anchor="start" x="16" y="-660.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">CLOUD SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_ui</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="48,-330.8 48,-612 882,-612 882,-330.8 48,-330.8"/>
<text text-anchor="start" x="56" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FRONTEND</text>
</g>
<!-- dashboard -->
<g id="node1" class="node">
<title>dashboard</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="412,-550.8 88,-550.8 88,-370.8 412,-370.8 412,-550.8"/>
<text text-anchor="start" x="159.71" y="-484.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Dashboard</text>
<text text-anchor="start" x="231.94" y="-463.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Nextjs</text>
<text text-anchor="start" x="112.02" y="-442.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Web application, that allows customers to</text>
<text text-anchor="start" x="151.62" y="-424.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">interact with the cloud system</text>
</g>
<!-- mobile -->
<g id="node2" class="node">
<title>mobile</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="842.02,-550.8 521.98,-550.8 521.98,-370.8 842.02,-370.8 842.02,-550.8"/>
<text text-anchor="start" x="634.47" y="-466.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Mobile App</text>
<text text-anchor="start" x="563.6" y="-442.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">The mobile app of the cloud system</text>
</g>
<!-- backend -->
<g id="node3" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="567.02,-228 246.98,-228 246.98,-48 567.02,-48 567.02,-228"/>
<text text-anchor="start" x="370.03" y="-143.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Backend</text>
<text text-anchor="start" x="267.35" y="-120.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The backend services of the cloud system</text>
</g>
<!-- customer -->
<g id="node4" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="626.02,-944 305.98,-944 305.98,-764 626.02,-764 626.02,-944"/>
<text text-anchor="start" x="424.82" y="-859.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="366.79" y="-836.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Customer of the cloud system</text>
</g>
<!-- dashboard&#45;&gt;backend -->
<g id="edge3" class="edge">
<title>dashboard&#45;&gt;backend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M293.52,-370.87C313.86,-329.32 338.13,-279.73 358.99,-237.1"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="361.26,-238.44 362.2,-230.55 356.54,-236.13 361.26,-238.44"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="333.21,-288 333.21,-310.8 415.48,-310.8 415.48,-288 333.21,-288"/>
<text text-anchor="start" x="336.21" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">fetches data</text>
</g>
<!-- mobile&#45;&gt;backend -->
<g id="edge4" class="edge">
<title>mobile&#45;&gt;backend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M605.76,-370.87C569.77,-328.88 526.75,-278.69 489.94,-235.76"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="491.99,-234.11 485.12,-230.13 488.01,-237.53 491.99,-234.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="552.75,-288 552.75,-310.8 635.02,-310.8 635.02,-288 552.75,-288"/>
<text text-anchor="start" x="555.75" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">fetches data</text>
</g>
<!-- customer&#45;&gt;dashboard -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;dashboard</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M415.16,-764.13C403.96,-744.37 392.22,-723.51 381.39,-704 355.1,-656.65 326.38,-603.82 302.5,-559.61"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="304.95,-558.62 299.08,-553.27 300.33,-561.11 304.95,-558.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="381.39,-681.2 381.39,-704 494,-704 494,-681.2 381.39,-681.2"/>
<text text-anchor="start" x="384.39" y="-688.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">opens in browser</text>
</g>
<!-- customer&#45;&gt;mobile -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;mobile</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M515.01,-764.23C548.65,-703.32 593.29,-622.46 627.95,-559.68"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="630.2,-561.04 631.53,-553.21 625.61,-558.5 630.2,-561.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="554.65,-681.2 554.65,-704 707.75,-704 707.75,-681.2 554.65,-681.2"/>
<text text-anchor="start" x="557.65" y="-688.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">opens on mobile device</text>
</g>
</g>
</svg>
`;case"cloud_ui_dashboard":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="434pt" height="857pt"
 viewBox="0.00 0.00 434.10 856.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 841.85)">
<g id="clust1" class="cluster">
<title>cluster_ui</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-290.8 8,-556 396,-556 396,-290.8 8,-290.8"/>
<text text-anchor="start" x="16" y="-543.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FRONTEND</text>
</g>
<!-- dashboard -->
<g id="node1" class="node">
<title>dashboard</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="364,-502.8 40,-502.8 40,-322.8 364,-322.8 364,-502.8"/>
<text text-anchor="start" x="111.71" y="-436.9" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer Dashboard</text>
<text text-anchor="start" x="183.94" y="-415.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Nextjs</text>
<text text-anchor="start" x="64.02" y="-394.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Web application, that allows customers to</text>
<text text-anchor="start" x="103.62" y="-376.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">interact with the cloud system</text>
</g>
<!-- customer -->
<g id="node2" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="362.02,-826.8 41.98,-826.8 41.98,-646.8 362.02,-646.8 362.02,-826.8"/>
<text text-anchor="start" x="160.82" y="-742.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="102.79" y="-718.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Customer of the cloud system</text>
</g>
<!-- backend -->
<g id="node3" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="362.02,-180 41.98,-180 41.98,0 362.02,0 362.02,-180"/>
<text text-anchor="start" x="165.03" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Backend</text>
<text text-anchor="start" x="62.35" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The backend services of the cloud system</text>
</g>
<!-- dashboard&#45;&gt;backend -->
<g id="edge2" class="edge">
<title>dashboard&#45;&gt;backend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M202,-322.87C202,-281.67 202,-232.56 202,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="204.63,-190.36 202,-182.86 199.38,-190.36 204.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="202,-240 202,-262.8 284.28,-262.8 284.28,-240 202,-240"/>
<text text-anchor="start" x="205" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">fetches data</text>
</g>
<!-- customer&#45;&gt;dashboard -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;dashboard</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M202,-646.96C202,-605.43 202,-555.82 202,-513.06"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="204.63,-513.16 202,-505.66 199.38,-513.16 204.63,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="202,-564 202,-586.8 314.61,-586.8 314.61,-564 202,-564"/>
<text text-anchor="start" x="205" y="-571.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">opens in browser</text>
</g>
</g>
</svg>
`;case"cloud_ui_mobile":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 12.2.1 (0)
 -->
<!-- Pages: 1 -->
<svg width="430pt" height="857pt"
 viewBox="0.00 0.00 430.10 856.90" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 841.85)">
<g id="clust1" class="cluster">
<title>cluster_ui</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-290.8 8,-556 392,-556 392,-290.8 8,-290.8"/>
<text text-anchor="start" x="16" y="-543.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">FRONTEND</text>
</g>
<!-- mobile -->
<g id="node1" class="node">
<title>mobile</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-502.8 39.98,-502.8 39.98,-322.8 360.02,-322.8 360.02,-502.8"/>
<text text-anchor="start" x="152.47" y="-418.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Mobile App</text>
<text text-anchor="start" x="81.6" y="-394.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">The mobile app of the cloud system</text>
</g>
<!-- customer -->
<g id="node2" class="node">
<title>customer</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-826.8 39.98,-826.8 39.98,-646.8 360.02,-646.8 360.02,-826.8"/>
<text text-anchor="start" x="158.82" y="-742.1" font-family="Arial" font-size="19.00" fill="#eff6ff">Customer</text>
<text text-anchor="start" x="100.79" y="-718.9" font-family="Arial" font-size="15.00" fill="#bfdbfe">Customer of the cloud system</text>
</g>
<!-- backend -->
<g id="node3" class="node">
<title>backend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="360.02,-180 39.98,-180 39.98,0 360.02,0 360.02,-180"/>
<text text-anchor="start" x="163.03" y="-95.3" font-family="Arial" font-size="19.00" fill="#eff6ff">Backend</text>
<text text-anchor="start" x="60.35" y="-72.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">The backend services of the cloud system</text>
</g>
<!-- mobile&#45;&gt;backend -->
<g id="edge2" class="edge">
<title>mobile&#45;&gt;backend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M200,-322.87C200,-281.67 200,-232.56 200,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="202.63,-190.36 200,-182.86 197.38,-190.36 202.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="200,-240 200,-262.8 282.28,-262.8 282.28,-240 200,-240"/>
<text text-anchor="start" x="203" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">fetches data</text>
</g>
<!-- customer&#45;&gt;mobile -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;mobile</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M200,-646.96C200,-605.43 200,-555.82 200,-513.06"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="202.63,-513.16 200,-505.66 197.38,-513.16 202.63,-513.16"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="200,-564 200,-586.8 353.1,-586.8 353.1,-564 200,-564"/>
<text text-anchor="start" x="203" y="-571.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">opens on mobile device</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}export{t as dotSource,n as svgSource};
