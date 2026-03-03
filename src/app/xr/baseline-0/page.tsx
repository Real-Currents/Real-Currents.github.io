import type { Metadata } from "next";

import HomePage from "@/app/page";

export const metadata: Metadata = {
  alternates: {
    canonical: "/xr/baseline-0",
  },
};

export default function Baseline0Page() {
  return <HomePage />;
}
