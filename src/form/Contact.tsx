export function Contact() {
  return (
    <section className="flex flex-col gap-4 lg:flex lg:flex-row lg:gap-24 py-4 border-b-[1px]">
      <div>
        <h3 className="text-[#344054] text-sm font-medium">Contact email</h3>
        <p className="text-[#667085] text-sm font-normal">
          Where should invoices be sent?
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-2">
          <input className="mt-1" type="radio" name="email" id="email" />
          <label className="flex flex-col" htmlFor="email">
            <span className="text-[#344054] text-sm font-medium">
              Send to my account email
            </span>
            <span className="text-[#667085] text-sm font-normal">
              olivia@untitledui.com
            </span>
          </label>
        </div>
        <div className="flex gap-2 items-start">
          <input className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" name="email" id="alternative" />
          <label htmlFor="alternative">
            <span className="text-[#344054] text-sm font-medium">
              Send to an alternative email
            </span>
            <div className="flex gap-2 items-center py-[8px] px-[12px] border border-[#D0D5DD] rounded-lg">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3333 3.00001C18.3333 2.08334 17.5833 1.33334 16.6666 1.33334H3.33329C2.41663 1.33334 1.66663 2.08334 1.66663 3.00001M18.3333 3.00001V13C18.3333 13.9167 17.5833 14.6667 16.6666 14.6667H3.33329C2.41663 14.6667 1.66663 13.9167 1.66663 13V3.00001M18.3333 3.00001L9.99996 8.83334L1.66663 3.00001"
                  stroke="#667085"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input
                className="bg-transparent outline-none placeholder:text-[#667085]"
                type="text"
                placeholder="billing@untitledui.com"
              />
            </div>
          </label>
        </div>
      </div>
    </section>
  );
}
