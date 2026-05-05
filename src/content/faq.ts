export type FaqItem = { q: string; a: string };

export const apiKeyFaq: FaqItem[] = [
  {
    q: "Is this safe?",
    a: "Yes. Your API key is stored in iOS Keychain on your device and is only ever sent to Google's YouTube API. VideoVault has no server, so your key never touches anything we control.",
  },
  {
    q: "What if I share my iPad with another kid?",
    a: "The key is yours, and the approved library lives on the device. If a sibling uses the same iPad, they see the same library you've curated. If you want separate libraries, use separate iPads or iOS user profiles.",
  },
  {
    q: "Will Google charge me?",
    a: "Almost certainly not. The YouTube Data API has a free quota of 10,000 units per day. A careful parent typically uses around 50 units per day — adding videos and refreshing thumbnails. You'd have to work hard to exceed the free tier.",
  },
];
