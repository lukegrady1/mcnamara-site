"use client";

import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/constants";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="flex gap-2 bg-[#2F7D31] p-3 shadow-lg">
        <a
          href={"tel:" + BUSINESS_INFO.phoneRaw}
          className="flex-1 rounded-md bg-white px-4 py-3 text-center text-sm font-semibold text-[#2F7D31] transition-colors hover:bg-gray-100"
        >
          Call {BUSINESS_INFO.phone}
        </a>
        <Link
          href="/contact"
          className="flex-1 rounded-md border-2 border-white px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#246324]"
        >
          Get Quote
        </Link>
      </div>
    </div>
  );
}
