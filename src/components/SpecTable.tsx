import { ProductSpec } from "@/data/product";

export function SpecTable({ specs }: { specs: ProductSpec[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-100">
      <table className="w-full text-left text-sm">
        <tbody>
          {specs.map((spec, i) => (
            <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : "bg-brand-50/60"}>
              <th scope="row" className="w-1/3 px-4 py-3 font-medium text-brand-700 sm:px-6">
                {spec.label}
              </th>
              <td className="px-4 py-3 text-brand-900 sm:px-6">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
