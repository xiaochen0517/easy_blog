import {useParams} from "react-router-dom";
import {useEffect} from "react";

export default function ArticlePage() {

  const routerParams = useParams()

  console.log("routerParams", routerParams)

  useEffect(() => {
    console.log("ArticlePage mounted")
    return () => {
      console.log("ArticlePage unmounted")
    }
  });

  return (
    <div>
      <h1>ArticlePage</h1>
    </div>
  )
}
