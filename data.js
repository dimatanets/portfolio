const portfolioData = [
  {
    "id": "case-wawi",
    "title": "Data-driven UX optimization for order management",
    "subtitle": "Conducted a UX audit and proposed improvements for the product's most business-critical workflows.",
    "tags": [
      "UX design",
      "Web app"
    ],
    "metadata": {
      "Category": [
        "UX design",
        "Web app"
      ],
      "Year": "2026",
      "Timeline": "2 weeks",
      "Role": "UX Designer"
    },
    "blocks": [
      {
        "type": "image",
        "src": "images/case-wawi/thumb-big-1600.png",
        "large": "images/case-wawi/thumb-big-2400.png"
      },
      {
        "type": "text",
        "content": "<h3>About the project</h3>\n<p>Wawi is a self-checkout and order management platform used by retail businesses to manage customers, orders, production, and delivery workflows.</p>\n<h3>My task</h3>\n<p>My task was to audit the existing experience, identify friction in the platform's most business-critical workflows, and prepare development-ready UX improvements backed by product data.</p>\n<h3>The process</h3>\n<p>Since no specific area had been identified as problematic, I first prioritized the product's most valuable workflows using stakeholder interviews, product analytics, heatmaps, and session recordings. After identifying these areas, I analyzed user behavior in PostHog to uncover usability issues and validate them with quantitative data.</p>\n<p>This research revealed three recurring UX problems that became the focus of the redesign:</p>\n<ul>\n<li>unclear navigation and orientation;</li>\n<li>difficult-to-discover filtering;</li>\n<li>friction during customer search.</li>\n</ul>\n<h3>The solution</h3>\n<h4>Navigation</h4>\n<p>The original sidebar was hidden by default and only expanded on hover. This made navigation harder to understand, required extra interactions, and often covered important content while users were working.</p>\n<p>I redesigned the navigation to open and collapse on click, shifting the layout instead of overlaying it. For sections with nested navigation, I also introduced contextual overlays that keep submenu items accessible even when the sidebar is collapsed.</p>"
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "images/case-wawi/animation-1-before.gif",
            "large": ""
          },
          {
            "src": "images/case-wawi/animation-1-after.gif",
            "large": ""
          }
        ]
      },
      {
        "type": "text",
        "content": "<h4>Filters</h4>\n<p>An important filter was hidden inside the Filter menu, making both its availability and current state difficult to discover.</p>\n<p>I exposed the filter directly in the interface, reducing unnecessary interactions and improving visibility of the active filtering state.</p>"
      },
      {
        "type": "image",
        "src": "images/case-wawi/image-2-1600.png",
        "large": "images/case-wawi/image-2-2400.png"
      },
      {
        "type": "text",
        "content": "<h4>Search</h4>\n<p>Users often searched for customers that existed in the system but were hidden by active filters. As a result, they repeatedly adjusted filters and restarted their search.</p>\n<p>I introduced a dedicated section for filtered-out matches, helping users understand why certain results were not visible and reducing unnecessary back-and-forth actions.</p>"
      },
      {
        "type": "image",
        "src": "images/case-wawi/image-3-1600.png",
        "large": "images/case-wawi/image-3-2400.png"
      },
      {
        "type": "text",
        "content": "<h3>The outcome</h3>\n<p>I delivered development-ready redesign proposals together with supporting UX artifacts, success metrics, and a PostHog analytics setup designed to measure the impact of each improvement after release.</p>"
      }
    ],
    "images": [
      "images/case-wawi/thumb-small-720.png",
      "images/case-wawi/thumb-big-1600.png",
      "images/case-wawi/animation-1-before.gif",
      "images/case-wawi/animation-1-after.gif",
      "images/case-wawi/image-2-1600.png",
      "images/case-wawi/image-3-1600.png"
    ]
  },
  {
    "id": "case-sc",
    "title": "Smart checkout daytime updates",
    "subtitle": "Designed a safe daytime update process that would not interrupt customer service.",
    "tags": [
      "UX design",
      "Android POS"
    ],
    "metadata": {
      "Category": [
        "UX design",
        "Android POS"
      ],
      "Year": "2026",
      "Timeline": "1 week",
      "Role": "UX Designer"
    },
    "blocks": [
      {
        "type": "image",
        "src": "images/case-sc/thumb-big-1600.png",
        "large": "images/case-sc/thumb-big-2400.png"
      },
      {
        "type": "text",
        "content": "<h3>Context and problem</h3>\n<p>The project focused on an Android-based POS system for bakeries, cafes, and restaurants. Previously, system updates were strictly nocturnal to avoid operational disruption. However, as businesses shifted to 24/7 operations across different time zones, this approach became highly impractical. I was tasked with designing a safe daytime update process that would not interrupt customer service.</p>\n<h3>Task</h3>\n<p>Design a background update logic that adapts to current checkout activity, preventing interruptions during critical scenarios (such as processing payments), while ensuring updates are installed in a timely manner.</p>\n<h3>Design process</h3>\n<p><strong>Stakeholder collaboration:</strong> Maintained continuous communication with developers, the support team, and the product manager. Through the PM, I gathered feedback directly from the customers (store management) to understand business constraints.</p>\n<p><strong>Research and analysis:</strong> Utilized internal analytics tools and reviewed relevant support tickets to deeply understand the cashiers' daily workflows. The main objective was to map out how cashiers actually work, uncover all possible edge cases, and eliminate any potential friction points during a shift.</p>\n<p><strong>Flowcharting:</strong> Created a comprehensive logic diagram mapping the four main stages of the update lifecycle to align stakeholders and developers.</p>\n<h3>Solution and logic</h3>\n<p>I divided the update lifecycle into four clear stages: update detected, update ready, update installing, and update installed. The UX concept is built on the following principles:</p>\n<p><strong>Smart interruption management:</strong> The system analyzes the device's current state. If the cashier is performing a critical task, the update is forcibly delayed until the task is completed.</p>\n<p><strong>Contextual notifications:</strong> When an update is detected, a non-intrusive icon and snackbar appear. If the checkout is active but handling non-critical tasks, a neat countdown timer is displayed in the interface.</p>\n<p><strong>Idle state utilization:</strong> If the device is currently idle, a prominent pop-up appears with a shorter timer, prompting the user to install the update immediately.</p>\n<p><strong>User control:</strong> To manage timings, I implemented a split button. It allows users to postpone the update by one hour with a single click, or select alternative options (like updating at night or the next day) via a dropdown menu.</p>\n<p><strong>Settings transparency:</strong> I designed a dedicated update settings section to give users full control over the process. Crucially, this included a toggle that allows them to opt out of the new feature entirely and switch back to the legacy nocturnal update behavior if they prefer.</p>\n<p><strong>Installation block:</strong> During the actual installation, the UI is fully blocked with a clear progress indicator to prevent accidental user interference and system failures.</p>"
      },
      {
        "type": "image",
        "src": "images/case-sc/image-1-1600.png",
        "large": "images/case-sc/image-1-2400.png"
      },
      {
        "type": "text",
        "content": "<h3>Outcome</h3>\n<p>I delivered fully documented system behaviors, comprehensive logic flowcharts, and the UI designs for all screens and edge-case states. This provided the engineering team with a clear, ready-to-implement blueprint for a safe and flexible daytime update ecosystem.</p>"
      },
      {
        "type": "image",
        "src": "images/case-sc/image-2-1600.png",
        "large": "images/case-sc/image-2-2400.png"
      }
    ],
    "images": [
      "images/case-sc/thumb-small-720.png",
      "images/case-sc/thumb-big-1600.png",
      "images/case-sc/image-1-1600.png",
      "images/case-sc/image-2-1600.png"
    ]
  },
  {
    "id": "case-releasegroups",
    "title": "Update management console",
    "subtitle": "Designed a bulk update deployment feature for an internal device management system.",
    "tags": [
      "UX design",
      "Internal tools",
      "Web"
    ],
    "metadata": {
      "Category": [
        "UX design",
        "Internal tools",
        "Web"
      ],
      "Year": "2025",
      "Timeline": "1 month",
      "Role": "UX Designer"
    },
    "blocks": [
      {
        "type": "image",
        "src": "images/case-releasegroups/thumb-big-1600.png",
        "large": "images/case-releasegroups/thumb-big-2400.png"
      },
      {
        "type": "text",
        "content": "<h3>About the project</h3>\n<p>The product is an internal administrative console used by the company to monitor devices, manage software versions, and analyze system logs.</p>\n<h3>The problem</h3>\n<p>The existing update deployment process was highly inefficient. The support team had to manually update devices either one by one or roll out updates to everyone all at once. Because client devices were categorized into distinct groups with varying stability requirements (Pilot, Test, Wave 1, Wave 2, and Enterprise), the CTO requested a streamlined solution to deploy updates to specific groups in bulk. The goal was to drastically reduce the support team's manual workload and minimize deployment risks.</p>\n<h3>The process</h3>\n<ul class=\"no-bullets\">\n<li><strong>Research &amp; alignment:</strong> Conducted interviews with the support team (the primary end-users) to understand their manual workflows and pain points. Simultaneously aligned the feature vision with the CTO and the Product Manager to ensure business goals were met.</li>\n<li><strong>Technical scoping:</strong> Collaborated closely with the development team to ensure the new interface could be built using the existing Material-UI (MUI) component library. This constraint was critical to keep the engineering effort minimal and speed up the release.</li>\n<li><strong>Iterative prototyping:</strong> Structured the design process into three rapid cycles of prototyping and testing. I validated wireframes with the stakeholders and support team, refining the user flow in each iteration until we reached the final, optimized version.</li>\n</ul>"
      },
      {
        "type": "text",
        "content": "<h3>The outcome</h3>\n<p>The feature was successfully developed and launched into production. Although exact time-saving metrics are not tracked, the new bulk update flow entirely eliminated the need for tedious, one-by-one manual updates. This significantly reduced operational overhead for the support team and created a safer, streamlined process for deploying targeted releases to specific client tiers. Additionally, by utilizing existing MUI components, the design ensured a fast and cost-effective engineering implementation.</p>"
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "images/case-releasegroups/image-1-1600.png",
            "large": "images/case-releasegroups/image-1-2400.png"
          },
          {
            "src": "images/case-releasegroups/image-2-1600.png",
            "large": "images/case-releasegroups/image-2-2400.png"
          },
          {
            "src": "images/case-releasegroups/image-3-1600.png",
            "large": "images/case-releasegroups/image-3-2400.png"
          },
          {
            "src": "images/case-releasegroups/image-4-1600.png",
            "large": "images/case-releasegroups/image-4-2400.png"
          },
          {
            "src": "images/case-releasegroups/image-5-1600.png",
            "large": "images/case-releasegroups/image-5-2400.png"
          },
          {
            "src": "images/case-releasegroups/image-6-1600.png",
            "large": "images/case-releasegroups/image-6-2400.png"
          }
        ]
      },
      {
        "type": "image",
        "src": "images/case-releasegroups/image-7-1600.png",
        "large": "images/case-releasegroups/image-7-2400.png"
      }
    ],
    "images": [
      "images/case-releasegroups/thumb-small-720.png",
      "images/case-releasegroups/thumb-big-1600.png",
      "images/case-releasegroups/image-1-1600.png",
      "images/case-releasegroups/image-2-1600.png",
      "images/case-releasegroups/image-3-1600.png",
      "images/case-releasegroups/image-4-1600.png",
      "images/case-releasegroups/image-5-1600.png",
      "images/case-releasegroups/image-6-1600.png",
      "images/case-releasegroups/image-7-1600.png"
    ]
  },
  {
    "id": "case-wizmenu",
    "title": "QR Menu Platform",
    "subtitle": "Designed key product modules from scratch, including the menu, admin panel, and waiter app.",
    "tags": [
      "Product design",
      "Web app"
    ],
    "metadata": {
      "Category": [
        "Product design",
        "Web app"
      ],
      "Year": "2024",
      "Timeline": "6 months",
      "Role": "Product Designer"
    },
    "blocks": [
      {
        "type": "image",
        "src": "images/case-wizmenu/thumb-big-1600.png",
        "large": "images/case-wizmenu/thumb-big-2400.png"
      },
      {
        "type": "text",
        "content": "<h3>About the project</h3>\n<p>WizMenu is a product designed for the restaurant business, with its core functionality focused on building and managing digital QR menus.</p>\n<h3>My task</h3>\n<p>The client approached me with a raw idea, and my objective was to bring it to life by designing the entire product from scratch. I needed to build a complete, working ecosystem that connected an admin panel, a waiter app, and a guest menu.</p>\n<h3>The process</h3>\n<p>I began with a discovery phase, analyzing competitors and interviewing restaurant owners to understand their daily operations and menu management. Based on these findings, I developed multiple wireframe iterations, refining the architecture closely with the client. Once the structure and user journeys were fully approved, I moved forward to design the complete visual interface for the entire ecosystem.</p>\n<p>While the initial guest menu concept by another designer was well-received, its complex gradients and shadows made it impossible to scale across different brands. I re-engineered this rigid design into a clean, white-label framework, creating a highly adaptable system that any restaurant could easily customize to fit their identity.</p>\n<h3>The outcome</h3>\n<p>Delivered a complete, development-ready design system, a comprehensive UI for all product modules, and reusable templates for creating custom restaurant menus.</p>"
      },
      {
        "type": "gallery",
        "images": [
          {
            "src": "images/case-wizmenu/image-1-1600.png",
            "large": "images/case-wizmenu/image-1-2400.png"
          },
          {
            "src": "images/case-wizmenu/image-3-1600.png",
            "large": "images/case-wizmenu/image-3-2400.png"
          },
          {
            "src": "images/case-wizmenu/image-4-1600.png",
            "large": "images/case-wizmenu/image-4-2400.png"
          },
          {
            "src": "images/case-wizmenu/image-5-1600.png",
            "large": "images/case-wizmenu/image-5-2400.png"
          }
        ]
      },
      {
        "type": "image",
        "src": "images/case-wizmenu/image-7-1600.png",
        "large": "images/case-wizmenu/image-7-2400.png"
      },
      {
        "type": "image",
        "src": "images/case-wizmenu/image-8-1600.png",
        "large": "images/case-wizmenu/image-8-2400.png"
      }
    ],
    "images": [
      "images/case-wizmenu/thumb-small-720.png",
      "images/case-wizmenu/thumb-big-1600.png",
      "images/case-wizmenu/image-1-1600.png",
      "images/case-wizmenu/image-3-1600.png",
      "images/case-wizmenu/image-4-1600.png",
      "images/case-wizmenu/image-5-1600.png",
      "images/case-wizmenu/image-7-1600.png",
      "images/case-wizmenu/image-8-1600.png"
    ]
  },
  {
    "id": "case-dmwaiter",
    "title": "QR orders lifecycle redesign",
    "subtitle": "Redesigned the UX behavior and interface for managing QR orders within a restaurant POS system.",
    "tags": [
      "UX design",
      "Android POS"
    ],
    "metadata": {
      "Category": [
        "UX design",
        "Android POS"
      ],
      "Year": "2026",
      "Timeline": "1 week",
      "Role": "UX Designer"
    },
    "blocks": [
      {
        "type": "image",
        "src": "images/case-dmwaiter/thumb-big-1600.png",
        "large": "images/case-dmwaiter/thumb-big-2400.png"
      },
      {
        "type": "text",
        "content": "<h3>About the project</h3>\n<p>CashAssist MobileWaiter is an all-in-one mobile POS terminal designed for cafes and restaurants. It allows waitstaff to manage table plans, take orders directly at the table, send them instantly to kitchen printers, and process payments.</p>\n<h3>Problem</h3>\n<p>Orders from the QR code menu had limited visibility and an unclear lifecycle across the POS application. After a successful payment, the table was booked for 15 minutes, after which it automatically became free and the order link was disabled. Waiters could only view orders via the 'Show receipt' button, and if multiple orders were placed at the same table, only the latest one remained visible.</p>\n<h3>Process</h3>\n<ul class=\"no-bullets\">\n<li><strong>Research:</strong> Conducted customer interviews and reviewed support tickets to understand exactly what was confusing waiters about the old system.</li>\n<li><strong>Lifecycle audit:</strong> Reviewed the existing QR order lifecycle to identify technical constraints and map out potential edge cases (such as handling overlapping orders or expired bookings).</li>\n<li><strong>Requirements:</strong> Collaborated with the Product Manager to define the strict business rules and system logic for the three core operating models (Pay after booking, Pay after meal, and Self-service).</li>\n<li><strong>Prototyping:</strong> Created multiple iterations of UX prototypes and system flowcharts to explore different interface layouts and test how the new behavioral logic would work in practice.</li>\n<li><strong>Validation:</strong> Shared early designs with several customers to gather direct feedback, as well as with the PM and developers to ensure the solutions actually solved the problem and were technically possible to build.</li>\n</ul>\n<h3>Old behavior</h3>\n<p>The legacy system relied on rigid logic that was not adapted to different service models, leading to operational confusion.</p>\n<ul class=\"no-bullets\">\n<li><strong>Pay after booking:</strong> After a successful payment, the system assigned a strict 15-minute booking to the table. Once this timer expired, the table automatically became free and the order link was disabled, regardless of whether the guests had actually finished their meal and left.</li>\n<li><strong>Pay after meal:</strong> Operated similarly to a standard table order but suffered from severe visibility issues. If multiple orders were placed at the same table, previous orders became hidden. Waitstaff could only view the latest order by manually clicking a 'Show receipt' button.</li>\n<li><strong>Self-service:</strong> This model was essentially unavailable because the system architecture dictated that an order could not exist without being attached to a physical table.</li>\n</ul>\n<h3>New behavior</h3>\n<p>I introduced flexible logic that adapts to the specific operating model of the restaurant, while providing global access to all QR orders via a new top navigation icon and tracking list.</p>\n<p><strong>Pay after booking:</strong> Following a successful payment, the table now transitions to a persistent occupied state. Waitstaff have access to a dedicated QR-occupied table view featuring order switchers at the top of the panel to manage multiple active orders easily. The table remains occupied until it is manually released by the waiter when the guests leave.</p>\n<p><strong>Pay after meal:</strong> When unpaid orders arrive, the system now automatically merges all incoming orders for that specific table into a single bill. The table is only cleared automatically after the final payment is successfully processed.</p>\n<p><strong>Self-service:</strong> Paid orders are now completely detached from tables. They are processed and managed exclusively within a single, independent QR orders list.</p>\n<h3>The outcome</h3>\n<p>Delivered a complete set of UX prototypes, system flowcharts, and detailed documentation for developer handoff. The redesigned logic solved the core visibility issues, gave waitstaff manual control over table occupancy, and adapted the system to fully support all three business models (\"Pay after booking\", \"Pay after meal\", and \"Self-service\"). The solution was successfully implemented and received positive feedback from customers.</p>"
      },
      {
        "type": "image",
        "src": "images/case-dmwaiter/image-1-1600.png",
        "large": "images/case-dmwaiter/image-1-2400.png"
      },
      {
        "type": "image",
        "src": "images/case-dmwaiter/image-2-1600.png",
        "large": "images/case-dmwaiter/image-2-2400.png"
      }
    ],
    "images": [
      "images/case-dmwaiter/thumb-small-720.png",
      "images/case-dmwaiter/thumb-big-1600.png",
      "images/case-dmwaiter/image-1-1600.png",
      "images/case-dmwaiter/image-2-1600.png"
    ]
  }
];
