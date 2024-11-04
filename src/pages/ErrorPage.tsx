import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

export default function ErrorPage() {

  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-row justify-center items-center font-serif text-center">
      <div className="flex flex-col gap-2">
        <h1 className="text-7xl font-black">404</h1>
        <p className="text-xl">Page not found.</p>
        <Button onClick={() => navigate("/")}>Go back</Button>
      </div>
    </div>
  )
}
