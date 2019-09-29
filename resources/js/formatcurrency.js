export function formatPrice(cents) {
    return (cents / 100).toLocaleString("en-UK", {
      style: "currency",
      currency: "GBP"
    });
  }
  
  