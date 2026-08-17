export type FaqItem = { q: string; a: string };

export const apiKeyFaq: FaqItem[] = [
  {
    q: "Can I try VideoVault before setting up a key?",
    a: 'Yes. Tap "Skip — try with sample videos" during setup and the app comes preloaded with a small kid-friendly library so you can see the review queue, the tags, and the kid home working. Add your key whenever you\'re ready, and VideoVault offers to clear the samples so you start clean.',
  },
  {
    q: "Is this safe?",
    a: "Yes. Your API key is stored in iOS Keychain on your device and is only ever sent to Google's YouTube API. VideoVault has no server, so your key never touches anything we control.",
  },
  {
    q: "What if I share a device with another kid?",
    a: "The key is yours, and the approved library lives on the device, so a sibling on the same iPad sees the same library you've curated. If you want separate libraries, export your library from Settings → Backup and import it on a second device — you get the same approved videos there, and you can leave favorites and watch history behind. Your API key is never included in an export.",
  },
  {
    q: "Will Google charge me?",
    a: "Almost certainly not. The YouTube Data API has a free quota of 10,000 units per day. Adding videos, checking your channels for new uploads, and refreshing thumbnails all cost about one unit per request, so ordinary use lands in the low hundreds. The one expensive action is searching YouTube from inside the app — that's 100 units per search — and even then you'd have to search dozens of times a day to get near the free limit.",
  },
  {
    q: "Does it work on iPhone?",
    a: "Yes. VideoVault runs on iPhone and iPad, iOS 17 or later. The library lives on whichever device you set it up on; use Settings → Backup to copy it to another one.",
  },
  {
    q: "Can I limit how long they watch?",
    a: "Use Screen Time. Because VideoVault is a normal app rather than a website, an app limit on VideoVault actually holds — Settings walks you through setting one up. That's deliberate: we'd rather point you at the tool Apple already built than ship a timer of our own.",
  },
];
