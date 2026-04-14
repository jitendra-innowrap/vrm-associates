import {
  Shield,
  TrendingUp,
  FileText,
  Users,
  Building2,
  Briefcase,
  BookOpen,
  Layers,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceData = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
  scope: string[];
};

export const servicesData: ServiceData[] = [
  {
    id: "audit-assurance",
    title: "Audit and Assurance",
    tagline: "Quality audit and assurance services.",
    description:
      "Our team has the right mix of skills and competencies to fulfil their roles properly in order to provide best and quality audit and assurance services.",
    icon: Shield,
    highlights: ["Internal Audit", "Compliance Audit", "Statutory audit", "Certification Services"],
    scope: [
      "Internal Audit: Evaluating internal processes to identify inefficiencies, improve controls, and mitigate risks for better governance and operational efficiency.",
      "Compliance Audit: A compliance audit involves a comprehensive review of an organization's adherence to regulatory guidelines, risk management procedures, IT and accounting practices.",
      "Statutory audit: Auditing financial statements to ensure compliance with statutory and regulatory requirements, providing stakeholders with a true and fair view of the organization's finances.",
      "Certification Services: Offering a wide range of certification services to meet regulatory and stakeholder requirements, enhancing trust and compliance.",
      "Compliance Assistance: We are also providing comprehensive regulatory compliance assistance overseen by SEBI for a wide array of financial entities.",
      "Stocke Brokers: Regulatory compliance as per SEBI and Exchange includes compliance with trading practices, reporting standards, and ethical conduct.",
      "Depository Participants: Guidance on regulations govern by NSDL and CDSL, record-keeping, compliances of client onboarding, and KYC process.",
      "Research Analyst",
      "Investment Advisors",
    ],
  },
  {
    id: "tax-solution",
    title: "Tax Solution",
    tagline: "Comprehensive taxation and regulatory support.",
    description:
      "Simplify your tax strategies and navigate the regulatory landscape with confidence and proactive support.",
    icon: TrendingUp,
    highlights: ["Tax Planning", "Direct Taxation", "Indirect Taxation", "GST audit"],
    scope: [
      "Our integrated Taxation and Regulatory Services provide comprehensive support across compliance, governance, litigation, and strategic planning.",
      "Tax Planning: Our tax professionals offer strategic guidance to individuals and businesses, helping them structure their finances in a tax-efficient manner.",
      "Direct Taxation: Our team helps clients understand their tax obligations and optimize their tax positions to minimize liabilities legally.",
      "Indirect Taxation: From GST, value-added tax (VAT) to professional tax, our experts offer comprehensive assistance with indirect taxation.",
      "GST audit: Conducts thorough audits to assess compliance with Income tax and GST laws, mitigating risks and providing recommendations to strengthen your tax position and ensure regulatory compliance.",
    ],
  },
  {
    id: "book-keeping",
    title: "Book keeping",
    tagline: "Comprehensive accounting services tailored to business needs.",
    description:
      "We offer a comprehensive range of Accounting Services tailored to meet your business needs.",
    icon: FileText,
    highlights: ["Accurate data entry", "Financial reporting", "Account reconciliation", "Personalised consultancy services"],
    scope: [
      "Accurate data entry: Ensuring monthly compliance with GST, TDS, TCS, and profession tax liabilities through meticulous and timely data entry.",
      "Financial reporting: Providing insights into your business's financial performance with detailed reports on a monthly, quarterly, and annual basis.",
      "Account reconciliation: Performing regular reconciliations of vendor and customer balances to maintain accurate financial records.",
      "Personalised consultancy services: Offering strategic guidance to address specific accounting and finance challenges, supporting your business growth and success.",
    ],
  },
  {
    id: "business-set-up",
    title: "Business set up",
    tagline: "Unlock your business potential.",
    description:
      "Unlock Your Business Potential with Our Business Process Setup Services.",
    icon: Users,
    highlights: ["Expert guidance", "Redefined approach", "Tailored Solution", "Cost effective"],
    scope: [
      "Expert guidance: Our team will navigate complex regulations and best practices to ensure your processes are set up for success.",
      "Redefined approach: Our efficient approach means faster implementation and fewer disruptions to your operations.",
      "Tailored Solution: Our customizable solutions are designed to fit your specific goals, industry requirements, and company size.",
      "Cost effective: Our services may initially seem like an expense, but they ultimately save you money by preventing costly errors and optimizing your operations for long-term success.",
    ],
  },
  {
    id: "company-law-matters",
    title: "Company law mattes",
    tagline: "Formation. Compliance. Conversion.",
    description:
      "Comprehensive company law services covering the full lifecycle from formation to annual compliance.",
    icon: Building2,
    highlights: ["Company Formation", "ROC Filings", "XBRL Returns", "Corporate Restructuring"],
    scope: [
      "Formation of Indian Private/Public/Section 8 Companies",
      "Drafting Memorandum and Articles of Association",
      "Filing of Various Returns with ROC",
      "Conversion from Firm to Company",
      "100% Subsidiary / Branch Office / Liaison Office",
      "Private to Public Conversion and Company to LLP Conversion",
      "Annual Return Filing in XBRL Environment",
      "Consultation on Buyback of Shares",
    ],
  },
  {
    id: "value-added-services",
    title: "Value added services",
    tagline: "Innovative and customized solutions.",
    description:
      "Our Value-Added Services are tailored to address the unique challenges of businesses across sectors.",
    icon: Briefcase,
    highlights: ["Certification services", "Outsourcing support", "Operational excellence", "Compliance enhancement"],
    scope: [
      "Providing innovative and customized solutions to help organizations streamline operations.",
      "Enhancing compliance and driving operational excellence.",
      "Certification services: Providing certifications to meet industry standards and regulatory requirements.",
      "Outsourcing of various activities to aid organisation to meet their targets.",
    ],
  },
  {
    id: "virtual-office-cfo",
    title: "Virtual Office / Virtual CFO",
    tagline: "Small and medium enterprise focused support.",
    description:
      "We offer virtual office services to small and medium enterprises.",
    icon: BookOpen,
    highlights: ["Virtual Office", "Virtual CFO", "HR Support", "Compliance Management"],
    scope: [
      "Minimal Investment in Personnel",
      "Best Suited for Clients Establishing Themselves in Gujarat",
      "Savings in Money, Time and Infrastructure Cost",
      "HR Services",
      "Office Infrastructure for Day-to-Day Work and Meetings",
      "Full Statutory Compliance Management",
    ],
  },
];

export const homeServiceIds = servicesData.slice(0, 6).map((service) => service.id);
