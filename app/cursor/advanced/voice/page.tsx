"use client";

import ApiKeyDisplay from "@/components/api-key-display";
import CompanyForm from "@/components/company-form";
import { useState } from "react";

interface CompanyInfo {
  companyName: string;
  companyAddress: string;
  companyContact: string;
  companyLogo: File | null;
}

export default function Voice() {
  const [step, setStep] = useState(1);
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [apiKey, setApiKey] = useState("");

  const handleCompanySubmit = (data: CompanyInfo) => {
    setCompanyInfo(data);
    // Simulate API key generation
    setApiKey("API_" + Math.random().toString(36).substr(2, 9));
    setStep(2);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Developer Platform</h1>
      {step === 1 ? (
        <CompanyForm onSubmit={handleCompanySubmit} />
      ) : companyInfo ? (
        <ApiKeyDisplay
          apiKey={apiKey}
          companyInfo={companyInfo}
        />
      ) : (
        <p>Error: Company information is missing.</p>
      )}
    </div>
  );
}