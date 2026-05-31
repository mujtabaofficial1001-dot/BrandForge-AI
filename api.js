/* BrandForge AI - API Service and Preset Data */

// Preset mock data for instant product simulations
const MOCK_PRODUCTS = {
  smartwatch: {
    id: "smartwatch",
    name: "NovaWatch Pro",
    description: "Matte-black aluminum aerospace-grade smartwatch with AMOLED display, 14-day battery life, and bio-sensors.",
    imageUrl: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=800",
    instagram: {
      caption: "Meet NovaWatch Pro. Built for those who demand performance and elegance. With an advanced AMOLED display, 14-day battery life, and military-grade carbon-fiber housing, it’s not just a smartwatch—it’s an extension of your ambition. Pre-order yours today and unlock the next tier of productivity. ⚡",
      hashtags: "#NovaWatchPro #Smartwatch #TechElegance #FutureWearables #ProductivityUnlocked #TechUpgrade",
      likes: "4,821 likes"
    },
    google: {
      title: "NovaWatch Pro | The Future of Wearable Tech | Pre-Order Today",
      description: "Supercharge your productivity with AMOLED display, 14-day battery, and advanced bio-tracking. Crafted with military-grade carbon fiber. Free shipping worldwide."
    },
    email: {
      subject: "⚡ Elevate your lifestyle: NovaWatch Pro is here.",
      title: "THE FUTURE ON YOUR WRIST",
      body: "Hello Innovator,\n\nWe are thrilled to unveil NovaWatch Pro—our most advanced smartwatch ever created. Engineered with a premium matte-black space-grade carbon fiber body, a brilliant always-on AMOLED touchscreen, and bio-tracking algorithms powered by machine learning, NovaWatch Pro keeps you ahead of the curve. Whether tracking your sleep, managing your calendar, or optimizing your workouts, it delivers flawless performance.\n\nBe the first to wear the future. Use code NEXTGEN15 for 15% off during checkout.",
      cta: "Explore NovaWatch Pro"
    },
    analytics: {
      ctr: "4.82%",
      conv: "3.12%",
      cpc: "$0.42",
      roi: "420%",
      ctrVal: 75,
      convVal: 62,
      cpcVal: 45,
      roiVal: 84
    }
  },
  energy: {
    id: "energy",
    name: "Zestora Organic Energy",
    description: "Premium organic sparkling energy drink with green tea extract, elderberry, zero sugar, and zero artificial additives.",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800",
    instagram: {
      caption: "Clean energy. Pure focus. No crash. Zestora Organic Energy is crafted with natural green tea extract, elderberry, and zero artificial sugars. Experience a crisp, refreshing surge of sustained mental clarity and physical vitality to power through your day. Fuel your body with the clean hydration it deserves. 🌱✨",
      hashtags: "#ZestoraEnergy #CleanEnergy #ZeroCrash #OrganicVitality #FocusUnlocked #MindfulLiving",
      likes: "2,912 likes"
    },
    google: {
      title: "Zestora Organic Energy Drink | Clean Energy, Zero Sugar | Shop Now",
      description: "Sustain focus and physical power without the crash. Certified organic, green tea extracts, elderberry, and zero artificial additives. Subscribe for 20% off."
    },
    email: {
      subject: "🌱 Pure Focus: Fuel your day with Zestora Energy",
      title: "CLEAN ENERGY, ZERO CRASH",
      body: "Hey Achiever,\n\nTired of synthetic energy drinks that leave you jittery and crashing by 2 PM? Meet Zestora Organic Energy.\n\nOur natural formula combines premium green tea antioxidants, refreshing elderberry infusions, and essential B-vitamins to deliver a smooth, sustainable wave of mental focus and stamina. We never use artificial sweeteners, preservatives, or high-fructose corn syrups. It is clean fuel for active minds and bodies.\n\nSubscribe to our weekly bundle today and save 20% forever.",
      cta: "Get Zestora Bundle"
    },
    analytics: {
      ctr: "3.65%",
      conv: "2.85%",
      cpc: "$0.28",
      roi: "310%",
      ctrVal: 57,
      convVal: 55,
      cpcVal: 30,
      roiVal: 62
    }
  },
  backpack: {
    id: "backpack",
    name: "TerraPack Eco-Backpack",
    description: "Sleek travel backpack crafted from 100% recycled marine-bound ocean plastics, with anti-theft zippers and USB charging dock.",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    instagram: {
      caption: "Built from the ocean, made for the mountains. The TerraPack Eco-Backpack is crafted entirely from 100% recycled marine-bound plastics. Water-resistant, anti-theft, and equipped with a modular smart-charging compartment, it is the ultimate companion for modern nomads and daily commuters alike. Walk lightly, travel far. 🎒🌊",
      hashtags: "#TerraPack #EcoFriendly #SustainableTravel #ModernNomad #RecycledOceanPlastics #TravelGreen",
      likes: "3,148 likes"
    },
    google: {
      title: "TerraPack Eco-Backpack | 100% Recycled Ocean Plastics | Travel Green",
      description: "Water-resistant, smart anti-theft design, modular charging, and lifetime warranty. Made from recycled marine plastics. Join the zero-waste movement."
    },
    email: {
      subject: "🎒 Travel sustainably: Meet the TerraPack Eco-Backpack",
      title: "BUILT FROM THE OCEAN, FOR THE WORLD",
      body: "Dear Adventurer,\n\nAt TerraPack, we believe that exploring the world shouldn't mean damaging it. That's why we spent 2 years engineering the ultimate sustainable backpack.\n\nEvery single TerraPack is made from 42 recycled plastic bottles rescued from marine coastlines. But we didn't sacrifice functionality for sustainability: it features a smart anti-theft security layer, water-repellent protective shielding, a 16\" padded laptop compartment, and an integrated USB power charging dock.\n\nJoin over 50,000 global nomads travelling sustainably.",
      cta: "Shop Sustainable Pack"
    },
    analytics: {
      ctr: "5.12%",
      conv: "3.42%",
      cpc: "$0.38",
      roi: "480%",
      ctrVal: 80,
      convVal: 68,
      cpcVal: 40,
      roiVal: 96
    }
  }
};

class GeminiService {
  /**
   * Generates campaign assets using the live Gemini API (gemini-1.5-flash)
   * @param {string} apiKey User's API Key
   * @param {string} productName Product Name
   * @param {string} productDesc Product Description
   * @param {string} base64Image Optional base64 image data (including mime type)
   * @returns {Promise<Object>} The generated campaigns structured in JSON
   */
  static async generateCampaign(apiKey, productName, productDesc, base64Image = null) {
    if (!apiKey) {
      throw new Error("Gemini API key is required.");
    }

    const promptText = `
      You are an expert autonomous E-commerce multi-agent advertising team.
      Analyze the following product details:
      Product Name: ${productName}
      Product Description: ${productDesc}
      
      Generate highly optimized marketing materials for three channels:
      1. Instagram Sponsored Post (social copywriting, emojis, hashtags, estimated mock likes)
      2. Google Search Sponsored Ad (SEO titles, descriptions, punchy call-to-actions)
      3. HTML Email Newsletter (compelling subject line, newsletter title, full email body copy, CTA button text)
      4. Estimated ROI/CTR performance analytics (projected Click-Through Rate, Conversion Rate, Cost Per Click, and ROI Percentage).

      Your output MUST be a valid JSON object ONLY. Do not include any markdown formatting like \`\`\`json or \`\`\`. Start and end exactly with braces. Use this JSON structure:
      {
        "instagram": {
          "caption": "Write an engaging, premium Instagram caption here. Highlight product benefits, use emojis, keep it professional but trendy.",
          "hashtags": "List 5-6 relevant hashtags here, space separated",
          "likes": "Generate a believable random like count between 1,000 and 6,000 followed by 'likes' e.g. '3,485 likes'"
        },
        "google": {
          "title": "A punchy Google Search ad headline under 30 characters | Target Keyword | CTA",
          "description": "A compelling Google search ad description under 90 characters highlighting main features and value proposition."
        },
        "email": {
          "subject": "An eye-catching, high-open-rate subject line with an emoji",
          "title": "THE MAIN EMAIL HERO HEADING IN UPPERCASE",
          "body": "Write a professional, beautiful email marketing letter. Address the reader as a potential valued customer. Outline the core problems this product solves in 2 body paragraphs. Use newlines (\\n) for paragraph spacing.",
          "cta": "The text on the Call-to-Action button e.g. 'Buy Now' or 'Shop Premium'"
        },
        "analytics": {
          "ctr": "Believable CTR between 3.0% and 6.0% e.g. '4.15%'",
          "conv": "Believable Conversion Rate between 2.0% and 5.0% e.g. '2.84%'",
          "cpc": "Believable CPC between $0.20 and $0.60 e.g. '$0.35'",
          "roi": "Believable ROI percentage between 250% and 500% e.g. '380%'",
          "ctrVal": 50 to 90 (integer percentage for visual chart height),
          "convVal": 40 to 80 (integer percentage for visual chart height),
          "cpcVal": 30 to 70 (integer percentage for visual chart height),
          "roiVal": 60 to 100 (integer percentage for visual chart height)
        }
      }
    `;

    const contents = [{
      parts: [
        { text: promptText }
      ]
    }];

    // If an image is provided, include it in the parts list
    if (base64Image) {
      const match = base64Image.match(/^data:(image\/[a-zA-Z]+);base64,(.+)$/);
      if (match) {
        const mimeType = match[1];
        const rawData = match[2];
        contents[0].parts.unshift({
          inlineData: {
            mimeType: mimeType,
            data: rawData
          }
        });
      }
    }

    // Sequential fallback list of Gemini endpoints to try (including Gemini 2.5 and 2.0 models)
    const endpoints = [
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-pro:generateContent?key=${apiKey}`,
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${apiKey}`
    ];

    let lastError = null;

    for (const url of endpoints) {
      try {
        console.log(`Attempting Gemini generation via: ${url.split("?")[0]}`);
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ contents })
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error?.message || `HTTP ${response.status} Error`);
        }

        const resData = await response.json();
        let textResponse = resData.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!textResponse) {
          throw new Error("Empty response received from Gemini API.");
        }

        // Clean the response text from any markdown code blocks
        textResponse = textResponse.replace(/^```json\s*/i, "").replace(/```\s*$/, "").trim();

        // Parse JSON
        const parsedData = JSON.parse(textResponse);
        return parsedData;

      } catch (error) {
        console.warn(`Endpoint attempt failed: ${url.split("?")[0]}. Error: ${error.message}`);
        lastError = error;
        // Continue to the next endpoint
      }
    }

    // If we reach here, all endpoints failed
    throw new Error(lastError ? lastError.message : "Failed to communicate with all Google Gemini API candidate models.");
  }
}
