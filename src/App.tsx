import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { HeaderSection } from "./HeaderSection";
import { Sidebar } from "./Sidebar";
import visa from "./assets/visa-logo.png";
import download from "./assets/download.svg";
import { Table } from "./Table";
import { CardDetails } from "./form/CardDetails";
import { Contact } from "./form/Contact";

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex">
      <Header {...{ isOpen, setOpen }} />
      <Sidebar isOpen={isOpen} />
      <Dashboard />
    </div>
  );
}

export const tabs = [
  "My details",
  "Profile",
  "Password",
  "Team",
  "Plan",
  "Billing",
  "Notifications",
  "Integrations",
  "API",
];

function PaymentSection() {
  return (
    <section>
      <h2 className="text-lg text-[#101828] font-medium">Payment method</h2>
      <p className="text-[#667085]">Update your billing details and address.</p>
    </section>
  );
}

function FormSection() {
  return (
    <>
      <Contact />
      <CardDetails />
    </>
  );
}

function Dashboard() {
  return (
    <main className="bg-[#F9FAFB] px-4 py-8 mt-16 lg:mt-0 w-full flex flex-col gap-6 lg:ml-[280px]">
      <HeaderSection />
      <PaymentSection />
      <FormSection />
      <section>
        <div className="lg:flex lg:justify-between lg:items-center">
          <h2 className="text-lg text-[#101828] font-medium">
            Billing history
          </h2>
          <div className="flex gap-2 items-center py-[6px] px-[12px] min-w-fit border border-[#D0D5DD] rounded-lg">
            <img src={download} alt="download" />
            <p className="bg-transparent outline-none text-[#101828] text-sm font-normal">
              Download all
            </p>
          </div>
        </div>

        <Table />
      </section>
    </main>
  );
}

export default App;
