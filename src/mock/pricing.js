export const pricing = {
  frequencies: [
    { value: "yearly", label: "Yearly", priceSuffix: "/yearly" },
    { value: "monthly", label: "Monthly", priceSuffix: "/monthly" },
    { value: "enterprise", label: "Enterprise", priceSuffix: "/enterprise" },
  ],
  tiers: [
    {
      name: "Free",
      id: "tier-free",
      href: "#",
      price: { monthly: "$0.00", annually: "$0.00" },
      description: "Perfect for individual and small business owners.",
      features: [
        "Privacy Features",
        "Start New Chat",
        "Copy Message",
        "2 Templates (Text only)",
        "Unlimited Broadcasting with Branding",
        "Quick Audience",
        "Chat Link Generator",
        "Install for Free",
      ],
    },
    {
      name: "Basic",
      id: "tier-basic",
      href: "#",
      price: { monthly: "$7.99", annually: "$79.99" },
      description:
        "Perfect for individuals, primarily for saving WhatsApp contacts.",
      features: [
        "Export Contacts",
        "Privacy Features",
        "Start New Chat",
        "Copy Message",
        "5 Templates",
        "2 Workflows",
        "500 Audience",
        "Unlimited Broadcasts",
        "Schedule Broadcasting",
        "Broadcasting in WhatsApp Groups",
        "Personalised Broadcasting",
        "Broadcasting Analytics",
      ],
    },
    {
      name: "Pro",
      id: "tier-pro",
      href: "#",
      price: { monthly: "$12.99", annually: "$129.99" },
      description: "Perfect for individuals, more control over WhatsApp.",
      features: [
        "20 Templates",
        "2500 Audience",
        "10 Workflows",
        "Export Contacts",
        "Unlimited Broadcasts",
        "Schedule Broadcasting",
        "Broadcasting in WhatsApp Groups",
        "Personalised Broadcasting",
        "Broadcasting Analytics",
        "ChatGPT Integration (Rephrase, Grammar check)",
        "Unlimited Notes",
        "Privacy Features",
        "Start New Chat",
        "Copy Message",
        "Delete WhatsApp Group",
        "Click to Chat Generator",
        "Number Validator",
      ],
    },
    {
      name: "Premium",
      id: "tier-premium",
      href: "#",
      price: { monthly: "$23.99", annually: "$239.99" },
      description:
        "Perfect for individuals, seamless third-party integrations.",
      features: [
        "Everything in Pro",
        "40 Templates",
        "5000 Audience",
        "20 Workflows",
        "ChatGPT Custom Integration",
        "Hubspot Integration",
        "Export Contacts",
        "Unlimited Broadcasts",
        "Schedule Broadcasting",
        "Broadcasting in WhatsApp Groups",
        "Personalised Broadcasting",
        "Broadcasting Analytics",
        "ChatGPT Integration (Rephrase, Grammar check)",
        "Unlimited Notes",
        "Privacy Features",
        "Start New Chat",
        "Copy Message",
        "Delete WhatsApp Group",
        "Click to Chat Generator",
        "Number Validator",
      ],
    },
  ],
};

export const tableSections = [
  {
    name: "",
    features: [
      {
        name: "Edge content delivery",
        tiers: { Starter: true, Growth: true },
      },
      {
        name: "Custom domains",
        tiers: { Starter: "1", Growth: "3" },
      },
      {
        name: "Team members",
        tiers: { Starter: "3", Growth: "20" },
      },
      {
        name: "Single sign-on (SSO)",
        tiers: { Starter: false, Growth: false },
      },
    ],
  },
  {
    name: "Reporting",
    features: [
      {
        name: "Advanced analytics",
        tiers: { Starter: true, Growth: true },
      },
      {
        name: "Basic reports",
        tiers: { Starter: false, Growth: true },
      },
      {
        name: "Professional reports",
        tiers: { Starter: false, Growth: false },
      },
      {
        name: "Custom report builder",
        tiers: { Starter: false, Growth: false },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "24/7 online support",
        tiers: { Starter: true, Growth: true },
      },
      {
        name: "Quarterly workshops",
        tiers: { Starter: false, Growth: true },
      },
      {
        name: "Priority phone support",
        tiers: { Starter: false, Growth: false },
      },
      {
        name: "1:1 onboarding tour",
        tiers: { Starter: false, Growth: false },
      },
    ],
  },
];

export const frequencies = [
  { value: "monthly", label: "Monthly" },
  { value: "annually", label: "Annually" },
];
export const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
  },
  {
    name: "Scale",
    id: "tier-scale",
  },
  {
    name: "Growth",
    id: "tier-growth",
  },
];
