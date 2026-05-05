import { Shield, FileText, TrendingUp, Users, Building2, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceDetailSection = {
  title: string;
  content?: string;
  points?: string[];
};

export type ServiceData = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  cardPoints: string[];
  detailSections: ServiceDetailSection[];
};

export const servicesData: ServiceData[] = [
  {
    id: "audit-and-assurance",
    title: "Audit and Assurance",
    tagline: "Quality audit and assurance services.",
    description:
      "Our team has the right mix of skills and competencies to fulfil their roles properly in order to provide best and quality audit and assurance services.",
    icon: Shield,
    cardPoints: ["Internal Audit", "Compliance Audit", "Statutory audit", "Certification Services"],
    detailSections: [
      {
        title: "Internal Audit",
        content:
          "Evaluating internal processes to identify inefficiencies, improve controls, and mitigate risks for better governance and operational efficiency.",
      },
      {
        title: "Compliance Audit",
        content:
          "A compliance audit involves a comprehensive review of an organization's adherence to regulatory guidelines, risk management procedures, IT and accounting practices. We have extended our compliance Audit services to the Financial market industry, Textile industry, and Jewelry industry.",
      },
      {
        title: "Statutory audit",
        content:
          "Auditing financial statements to ensure compliance with statutory and regulatory requirements, providing stakeholders with a true and fair view of the organization's finances.",
      },
      {
        title: "Certification Services",
        content:
          "Offering a wide range of certification services to meet regulatory and stakeholder requirements, enhancing trust and compliance.",
      },
    ],
  },
  {
    id: "compliance-assistance",
    title: "Compliance Assistance",
    tagline: "SEBI-overseen regulatory compliance support.",
    description:
      "we are also providing comprehensive regulatory compliance assistance overseen by SEBI for a wide array of financial entities. We offer tailored support to ensure your operations remain in line with the latest regulatory mandates.",
    icon: FileText,
    cardPoints: ["Stock Brokers", "Depository Participants", "Research Analyst", "Investment Advisors"],
    detailSections: [
      {
        title: "Overview",
        content:
          "we are also providing comprehensive regulatory compliance assistance overseen by SEBI for a wide array of financial entities. We offer tailored support to ensure your operations remain in line with the latest regulatory mandates.",
      },
      {
        title: "Service Scope",
        points: [
          "Stock Brokers: regulatory compliance as per SEBI & Exchange includes compliance with trading practices, reporting standards, and ethical conduct",
          "Depository Participants: Guidance on regulations govern by NSDL & CDSL, Record-keeping, compliances of client onboarding, KYC (Know Your Customer) processe",
          "Research Analyst",
          "Investment Advisors",
        ],
      },
    ],
  },
  {
    id: "tax-solution",
    title: "Tax Solution",
    tagline: "Comprehensive taxation and regulatory support.",
    description:
      "Simplify your tax strategies and navigate the regulatory landscape with confidence and proactive support . With a team of seasoned tax professionals, we offer comprehensive solutions to address your tax challenges effectively.",
    icon: TrendingUp,
    cardPoints: ["Tax Planning", "Direct Taxation", "Indirect Taxation", "GST audit"],
    detailSections: [
      {
        title: "Integrated Taxation and Regulatory Services",
        content:
          "Our integrated Taxation and Regulatory Services provide comprehensive support across compliance, governance, litigation, and strategic planning. By leveraging our expertise, businesses can minimize risks, optimize operations, and achieve long-term success.",
      },
      {
        title: "Tax Planning",
        content:
          "Our tax professionals offer strategic guidance to individuals and businesses, helping them structure their finances in a tax-efficient manner.",
      },
      {
        title: "Direct Taxation",
        content:
          "Our team helps clients understand their tax obligations and optimize their tax positions to minimize liabilities legally.",
      },
      {
        title: "Indirect Taxation",
        content:
          "From GST, value-added tax (VAT) to professional tax, our experts offer comprehensive assistance with indirect taxation",
      },
      {
        title: "GST audit",
        content:
          "conducts thorough audits to assess compliance with Income tax and GST laws, mitigating risks and providing recommendations to strengthen your tax position and ensure regulatory compliance.",
      },
    ],
  },
  {
    id: "book-keeping",
    title: "Book keeping",
    tagline: "Accounting services tailored to business needs.",
    description:
      "we offer a comprehensive range of Accounting Services tailored to meet your business needs.",
    icon: Users,
    cardPoints: ["Accurate data entry", "Financial reporting", "Account reconciliation", "Personalised consultancy services"],
    detailSections: [
      {
        title: "Accurate data entry",
        content:
          "Ensuring monthly compliance with GST, TDS, TCS, and profession tax liabilities through meticulous and timely data entry.",
      },
      {
        title: "Financial reporting",
        content:
          "Providing insights into your business's financial performance with detailed reports on a monthly, quarterly, and annual basis",
      },
      {
        title: "Account reconciliation",
        content:
          "Performing regular reconciliations of vendor and customer balances to maintain accurate financial records.",
      },
      {
        title: "Personalised consultancy services",
        content:
          "Offering strategic guidance to address specific accounting and finance challenges, supporting your business growth and success.",
      },
    ],
  },
  {
    id: "business-set-up",
    title: "Business set up",
    tagline: "Unlock your business potential.",
    description:
      "Unlock Your Business Potential with Our Business Process Setup Services",
    icon: TrendingUp,
    cardPoints: ["Expert guidance", "Redefined approach", "Tailored Solution", "Cost effective"],
    detailSections: [
      {
        title: "Expert guidance",
        content:
          "Our team will navigate complex regulations and best practices to ensure your processes are set up for success.",
      },
      {
        title: "Redefined approach",
        content:
          "Our efficient approach means faster implementation and fewer disruptions to your operations.",
      },
      {
        title: "Tailored Solution",
        content:
          "Our customizable solutions are designed to fit your specific goals, industry requirements, and company size.",
      },
      {
        title: "Cost effective",
        content:
          "Our services may initially seem like an expense, but they ultimately save you money by preventing costly errors and optimizing your operations for long-term success.",
      },
    ],
  },
  {
    id: "company-law-mattes",
    title: "Company law matters",
    tagline: "Formation. Compliance. Conversion.",
    description:
      "Comprehensive company law services covering the full lifecycle from formation to annual compliance. We handle all ROC-related matters, secretarial compliances, and corporate restructuring with meticulous attention to detail.",
    icon: Building2,
    cardPoints: [
      "Formation of Indian Private/Public/Section 8 Companies",
      "Drafting Memorandum and Articles of Association",
      "Filing of Various Returns with ROC",
      "Annual Return Filing in XBRL Environment",
    ],
    detailSections: [
      {
        title: "Service Scope",
        points: [
          "Formation of Indian Private/Public/Section 8 Companies",
          "Drafting Memorandum and Articles of Association",
          "Filing of Various Returns with ROC",
          "Conversion from Firm to Company",
          "100% Subsidiary / Branch Office / Liaison Office",
          "Private to Public Conversion & Company to LLP Conversion",
          "Annual Return Filing in XBRL Environment",
          "Consultation on Buyback of Shares",
        ],
      },
    ],
  },
  {
    id: "value-added-services",
    title: "Value added services",
    tagline: "Innovative and customized solutions.",
    description:
      "Our Value-Added Services are tailored to address the unique challenges of businesses across sectors. By providing innovative and customized solutions, we help organizations streamline operations, enhance compliance, and drive operational excellence",
    icon: Briefcase,
    cardPoints: ["Certification services", "Outsourcing support", "Virtual Office /Virtual CFO"],
    detailSections: [
      {
        title: "Certification services",
        content:
          "Providing certifications to meet industry standards and regulatory requirements",
      },
      {
        title: "Outsourcing support",
        content:
          "Outsourcing of various activities to aid organisation to meet their targets.",
      },
      {
        title: "Virtual Office /Virtual CFO",
        content:
          "We offer virtual office services to small and medium enterprises. They just need not to employ one person in accounts and finance department, as we take care of all their statutory compliances, provide HR services and also offer office infrastructure.",
        points: [
          "--Minimal Investment in Personnel",
          "--Best Suited for Clients Establishing Themselves in Gujarat",
          "--Savings in Money, Time and Infrastructure Cost",
          "--HR Services",
          "--Office Infrastructure for Day-to-Day Work & Meetings",
          "--Full Statutory Compliance Management",
        ],
      },
    ],
  },
];

export const homeServiceIds = servicesData.map((service) => service.id);
