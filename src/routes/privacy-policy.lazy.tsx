// import PrivacyPolicy from '@/pages/PrivacyPolicy'

// import { createLazyFileRoute } from '@tanstack/react-router'

// export const Route = createLazyFileRoute('/privacy-policy')({
//   component: PrivacyPolicy,
// })



import { createLazyFileRoute } from "@tanstack/react-router";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

export const Route = createLazyFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
});