import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-serif font-bold text-primary">404</h1>
        <h2 className="text-2xl font-serif">Oops! We couldn't find that page.</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          It looks like the page you're looking for has moved or no longer exists. 
          Let's get you back to the café.
        </p>
        <Button asChild size="lg" className="mt-8 rounded-full">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
