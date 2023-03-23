import React from "react";

export default function Footer() {
  return (
    <footer className=" px-4 sm:px-6 py-6 mt-24">
      <p className=" text-center text-sm to-gray-500">
        © {new Date().getFullYear()} AlterClass. All rights reserved.
      </p>
    </footer>
  );
}
