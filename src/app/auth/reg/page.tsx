import { RegForm } from "@/components/forms/auth.forms/reg";

export default function RegPage() {
  return (
    <div className="w-screen lg:h-[calc(100vh-3rem)] grid lg:grid-cols-2">
      <div className="w-full h-full object-cover px-10 py-10 flex flex-col relative bg-gradient-to-tr from-blue-100 to-white lg:bg-none">
        <h1 className="text-5xl font-kanit font-light">Welcome to elvidoes</h1>
        <p className="mt-7 text-3xl w-full pr-5 font-thin font-kanit">
          Create an account to access trials, demos and services.
        </p>
        <div
          style={{ backgroundImage: "url('/URX-bg.svg')" }}
          className="w-full hidden lg:block absolute bottom-0 left-0 -z-10 h-full bg-repeat-x bg-cover"
        ></div>
      </div>
      <div className="w-full">
        <RegForm />
      </div>
    </div>
  );
}
