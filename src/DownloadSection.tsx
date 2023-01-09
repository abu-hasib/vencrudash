import download from "./assets/download.svg";
// import { Table } from "./Table";

export function DownloadSection() {
  return (
    <section>
      <div className="lg:flex lg:justify-between">
        <h2 className="text-lg text-[#101828] font-medium">
          Billing history
        </h2>
        <div className="flex gap-2 items-center py-[6px] w-max px-[12px] border border-[#D0D5DD] rounded-lg">
          <img src={download} alt="download" />
          <p className="bg-transparent outline-none text-[#101828] text-sm font-normal">
            Download all
          </p>
        </div>
      </div>
      {/* <Table /> */}
    </section>
  );
}
