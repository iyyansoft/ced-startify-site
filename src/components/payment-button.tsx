import { Button } from "@/components/ui/button";

interface PaymentButtonProps {
  callbackFn: () => void;
}

export default function PaymentButton({
  callbackFn,
}: PaymentButtonProps) {
  function handlePayment(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    callbackFn();
  }

  return (
    <Button onClick={handlePayment}>
      Submit
    </Button>
  );
}
