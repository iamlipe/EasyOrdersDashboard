import products from "@/lib/mocked-database/products.json";

export function ListStock() {
  const data = products.map((i) => ({
    id: i.id,
    title: i.name,
    description: i.category_id,
    value: 10,
  }));

  return (
    <div className="space-y-2">
      {data.map((o) => (
        <div key={o.id} className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-lg font-medium">{o.title}</span>
            <span className="text-xs text-muted-foreground">
              {o.description}
            </span>
          </div>

          <span className="text-base font-semibold">
            {o.value.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      ))}
    </div>
  );
}
