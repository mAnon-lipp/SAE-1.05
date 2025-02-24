let DataPricing = {
    pricingTitle: "Pricing Plans",
    pricingSubtitle: "Start with a free trial. No credit card needed. Cancel at any time.",
    plans: [
        {
            planClass: "pricing__plan--free",
            planTitle: "Free",
            planSubtitle: "Forever Free",
            planPrice: "$0",
            buttonText: "Get Started for Free",
            planFeatures: [
                "1 GB of Space"
            ]
        },
        {
            planClass: "pricing__plan--starter",
            planTitle: "Starter",
            planSubtitle: "Perfect for Freelancers",
            planPrice: "$19",
            buttonText: "Get Started",
            planFeatures: [
                "10 GB of Space",
                "Unlimited Projects",
                "Unlimited Users"
            ]
        },
        {
            planClass: "pricing__plan--pro",
            planTitle: "Pro",
            planSubtitle: "Perfect for Small Teams",
            planPrice: "$49",
            buttonText: "Get Started",
            planFeatures: [
                "100 GB of Space",
                "Unlimited Projects",
                "Unlimited Users",
                "Unlimited Dates"
            ]
        },
        {
            planClass: "pricing__plan--premium",
            planTitle: "Premium",
            planSubtitle: "Perfect for Enterprises",
            planPrice: "$149",
            buttonText: "Get Started",
            planFeatures: [
                "As Much Space as Needed",
                "Unlimited Projects",
                "Unlimited Users",
                "Unlimited Dates",
                "Unlimited File Recovery"
            ]
        }
    ]
};

export { DataPricing };
