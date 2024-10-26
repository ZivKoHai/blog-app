import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo({
  fallback,
  source,
}: {
  fallback: string;
  source: string;
}) {
  return (
    <Avatar>
      <AvatarImage src={source} alt="@shadcn" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
