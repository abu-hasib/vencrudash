export function CardDetails() {
  return (
    <section className="lg:flex lg:gap-24">
      <div>
        <h3 className="text-[#344054] text-sm font-medium">Card details</h3>
        <p className="text-[#667085] text-sm font-normal">
          Select default payment method.
        </p>
      </div>
      <div className="lg:flex-1 lg:flex lg:flex-col lg:gap-4">
        <div className="flex gap-4 p-4 items-start justify-between bg-[#F9F5FF] border border-[#D6BBFB] rounded-lg">
          <div className="flex place-items-center w-[46px] h-[32px] p-2 bg-white">
            <svg
              width="33"
              height="12"
              viewBox="0 0 33 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.33369 11.1443H5.58737L3.52796 3.0565C3.43022 2.68446 3.22267 2.35556 2.91737 2.20054C2.15547 1.81098 1.31591 1.50094 0.400024 1.34458V1.0332H4.82413C5.43472 1.0332 5.89267 1.50094 5.96899 2.04418L7.03753 7.8782L9.78251 1.0332H12.4525L8.33369 11.1443ZM13.979 11.1443H11.3853L13.521 1.0332H16.1147L13.979 11.1443ZM19.4703 3.83429C19.5466 3.28971 20.0046 2.97833 20.5388 2.97833C21.3784 2.90014 22.2929 3.05651 23.0562 3.44472L23.5141 1.26775C22.7509 0.956368 21.9113 0.800003 21.1494 0.800003C18.6321 0.800003 16.8003 2.20055 16.8003 4.14432C16.8003 5.62305 18.0978 6.39948 19.0137 6.86722C20.0046 7.33362 20.3862 7.645 20.3099 8.1114C20.3099 8.811 19.5466 9.12238 18.7847 9.12238C17.8688 9.12238 16.9529 8.88918 16.1147 8.49962L15.6568 10.6779C16.5727 11.0662 17.5635 11.2225 18.4794 11.2225C21.3021 11.2994 23.0562 9.90016 23.0562 7.80002C23.0562 5.1553 19.4703 5.00028 19.4703 3.83429ZM32.1334 11.1443L30.074 1.0332H27.8619C27.404 1.0332 26.946 1.34458 26.7934 1.81098L22.9798 11.1443H25.6498L26.1828 9.66696H29.4634L29.7687 11.1443H32.1334ZM28.2435 3.75611L29.0054 7.56683H26.8697L28.2435 3.75611Z"
                fill="#172B85"
              />
            </svg>
          </div>
          <div className="flex-1 self-center">
            <h4 className="text-[#53389E] text-sm font-medium">
              Visa ending in 1234
            </h4>
            <p className="text-[#7F56D9] text-sm font-normal">Expiry 06/2024</p>
            <div className="flex gap-2">
              <a className="text-[#9E77ED] text-sm font-medium" href="">
                Set as default
              </a>
              <a className="text-[#6941C6] text-sm font-medium" href="">
                Edit
              </a>
            </div>
          </div>
          <input
            className="checked:bg-red-500"
            type="checkbox"
            name="check"
            id="check"
          />
        </div>
        <div className="flex gap-4 p-4 items-start justify-between bg-white border border-[#EAECF0] rounded-lg">
          <div className="flex place-items-center w-[46px] h-[32px] p-2 bg-white">
            <svg
              width="30"
              height="19"
              viewBox="0 0 30 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.9053 16.4392C13.3266 17.77 11.2787 18.5733 9.04092 18.5733C4.04776 18.5733 0 14.5737 0 9.63996C0 4.70621 4.04776 0.706623 9.04092 0.706623C11.2787 0.706623 13.3266 1.50995 14.9053 2.84068C16.484 1.50995 18.5319 0.706623 20.7697 0.706623C25.7628 0.706623 29.8106 4.70621 29.8106 9.63996C29.8106 14.5737 25.7628 18.5733 20.7697 18.5733C18.5319 18.5733 16.484 17.77 14.9053 16.4392Z"
                fill="#ED0006"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.9053 16.4392C16.8492 14.8007 18.0818 12.3626 18.0818 9.63996C18.0818 6.91735 16.8492 4.47921 14.9053 2.84068C16.484 1.50995 18.5319 0.706623 20.7697 0.706623C25.7628 0.706623 29.8106 4.70621 29.8106 9.63996C29.8106 14.5737 25.7628 18.5733 20.7697 18.5733C18.5319 18.5733 16.484 17.77 14.9053 16.4392Z"
                fill="#F9A000"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.9053 16.4392C16.8492 14.8007 18.0818 12.3626 18.0818 9.63997C18.0818 6.91738 16.8492 4.47926 14.9053 2.84072C12.9614 4.47926 11.7288 6.91738 11.7288 9.63997C11.7288 12.3626 12.9614 14.8007 14.9053 16.4392Z"
                fill="#FF5E00"
              />
            </svg>
          </div>
          <div className="flex-1 self-center">
            <h4 className="text-[#344054] text-sm font-medium">
              Mastecard ending in 1234
            </h4>
            <p className="text-[#667085] text-sm font-normal">Expiry 06/2024</p>
            <div className="flex gap-2">
              <a className="text-[#667085] text-sm font-medium" href="">
                Set as default
              </a>
              <a className="text-[#6941C6] text-sm font-medium" href="">
                Edit
              </a>
            </div>
          </div>
          <input
            className="checked:bg-red-500"
            type="checkbox"
            name="check"
            id="check"
          />
        </div>
        <div className="flex py-2 gap-2 items-center">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99996 1.16667V12.8333M1.16663 7H12.8333"
            stroke="#667085"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p className="text-[#667085] text-sm font-medium">
          Add new payment method
        </p>
      </div>
      </div>
      
    </section>
  );
}
