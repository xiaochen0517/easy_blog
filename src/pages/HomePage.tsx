import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

function getRandomChineseCharacter() {
  const start = parseInt("4e00", 16);
  const end = parseInt("9fa5", 16);
  const randomCode = Math.floor(Math.random() * (end - start + 1)) + start;
  return String.fromCharCode(randomCode);
}

function getRandomChineseString(length: number) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += getRandomChineseCharacter();
  }
  return result;
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      {[...Array(5)].map((_, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{getRandomChineseString(20)}</CardTitle>
            <CardDescription>
              {getRandomChineseString(200)}
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="link" asChild>
              <Link to="/article/test">Read more</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
