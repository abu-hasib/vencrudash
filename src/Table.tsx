import badge from "./assets/badge.png";
import user1 from "./assets/user1.png";
import user2 from "./assets/user2.png";
import user3 from "./assets/user3.png";
import user4 from "./assets/user4.png";
import user5 from "./assets/user5.png";

const tableHeaders = ["Amount", "Date", "Status", "Users on plan", ""];
const tableData = [
  { plan: "Basic Plan – Dec 2022", price: "USD $10.00", date: "Dec 1, 2022" },
  { plan: "Basic Plan – Dec 2022", price: "USD $10.00", date: "Dec 1, 2022" },
  { plan: "Basic Plan – Dec 2022", price: "USD $10.00", date: "Dec 1, 2022" },
  { plan: "Basic Plan – Dec 2022", price: "USD $10.00", date: "Dec 1, 2022" },
  { plan: "Basic Plan – Dec 2022", price: "USD $10.00", date: "Dec 1, 2022" },
  { plan: "Basic Plan – Dec 2022", price: "USD $10.00", date: "Dec 1, 2022" },
  { plan: "Basic Plan – Dec 2022", price: "USD $10.00", date: "Dec 1, 2022" },
];

const users = [user1, user2, user3, user4, user5];

export function Table() {
  return (
    <div className="overflow-x-scroll whitespace-nowrap">
      <table className="w-full my-8 rounded-lg bg-white border-collapse border border-[#EAECF0] min-w-[400px] text-sm drop-shadow-2xl">
        <thead className="text-left">
          <tr className="bg-[#F9FAFB]">
            <th className="px-4 py-4 text-[#667085] text-xs font-normal">
              <div className="flex place-items-center gap-1">
                <input type="checkbox" name="invoice" id="invoice" />
                <span>Invoice</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 1.33333V10.6667M6 10.6667L10.6667 6M6 10.6667L1.33333 6"
                    stroke="#667085"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </th>
            {tableHeaders.map((header) => (
              <th className="px-4 py-4 text-[#667085] text-xs font-normal">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ plan, price, date }) => (
            <tr className="border-b-[1px] border-[#EAECF0]">
              <td className="px-4 py-5 text-[#101828]">
                <input type="checkbox" name="invoice" id="invoice" />
                <span className="ml-2">{plan}</span>
              </td>
              <td className="px-4 py-5">{price}</td>
              <td className="px-4 py-5">{date}</td>
              <td className="px-4 py-5">
                <img src={badge} alt="badge" />
              </td>
              <td className="px-4 py-5">
                <div className="mt-3 flex -space-x-2 overflow-hidden">
                  {users.map((user) => (
                    <img
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src={user}
                      alt="user"
                    />
                  ))}
                </div>
              </td>
              <td className="px-4 py-5">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66661 13.1667L9.99994 16.5M9.99994 16.5L13.3333 13.1667M9.99994 16.5V9.00001M17.3999 14.075C18.1244 13.5655 18.6677 12.8385 18.951 11.9993C19.2343 11.1601 19.2428 10.2525 18.9753 9.40819C18.7078 8.56387 18.1782 7.82675 17.4633 7.30381C16.7485 6.78087 15.8856 6.49931 14.9999 6.50001H13.9499C13.6993 5.52323 13.2304 4.61605 12.5784 3.84674C11.9264 3.07743 11.1084 2.46606 10.186 2.05863C9.2635 1.65121 8.26065 1.45836 7.25288 1.4946C6.24512 1.53084 5.25871 1.79523 4.36791 2.26786C3.47711 2.74049 2.70513 3.40905 2.1101 4.2232C1.51507 5.03735 1.11249 5.97588 0.932662 6.96813C0.752836 7.96038 0.800453 8.9805 1.07193 9.95169C1.3434 10.9229 1.83166 11.8198 2.49994 12.575"
                    stroke="#344054"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
