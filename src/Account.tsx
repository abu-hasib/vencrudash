import avatar from "./assets/avatar.png";

export function Account() {
  return (
    <div className="flex justify-between py-4 items-center border-t-[1px] border-[#EAECF0]">
      <div>
        <img src={avatar} alt="avatar" />
      </div>
      <div className="flex flex-col items-start">
        <h5 className="text-sm text-[#101828]">Olivia Rhye</h5>
        <p className="text-sm text-[#667085]">olivia@untitledui.com</p>
      </div>
      <div className="self-start">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 16.5H3.16667C2.72464 16.5 2.30072 16.3244 1.98816 16.0118C1.67559 15.6993 1.5 15.2754 1.5 14.8333V3.16667C1.5 2.72464 1.67559 2.30072 1.98816 1.98816C2.30072 1.67559 2.72464 1.5 3.16667 1.5H6.5M12.3333 13.1667L16.5 9M16.5 9L12.3333 4.83333M16.5 9H6.5"
            stroke="#667085"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
