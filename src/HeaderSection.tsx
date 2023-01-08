import { tabs } from "./App";

export function HeaderSection() {
  return (
    <section>
      <h1 className="text-2xl text-[#101828]  font-medium">Settings</h1>
      <p className="text-[#667085]">Manage your team and preferences here.</p>
      <ul className="flex overflow-hidden border rounded-lg">
        {tabs.map((tab) => (
          <li className="border-l-[1px] min-w-fit p-2">{tab}</li>
        ))}
      </ul>
    </section>
  );
}
