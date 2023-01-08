import image from "./assets/image.png";

export function Featured() {
  return (
    <div className="flex hidden flex-col gap-3 bg-[#F9FAFB] rounded-lg px-4 py-6 items-start text-start">
      <h4 className="text-sm font-medium text-[#101828]">New features available!</h4>
      <p className="text-sm font-medium text-[#667085]">Check out the new dashboard view. Pages now load faster. </p>
      <div className="w-[215px] rounded-lg">
        <img className="rounded-lg object-cover w-full h-full" src={image} alt="life" />
      </div>
      <div className="flex gap-2">
        <a className="text-sm font-medium text-[#667085]">Dismiss</a>
        <a className="text-sm font-medium text-[#6941C6]">What's new</a>
      </div>
    </div>
  );
}
