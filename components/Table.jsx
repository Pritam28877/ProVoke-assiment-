// import { CheckIcon } from '@heroicons/react/outline'
// import { Product } from '@stripe/firestore-stripe-payments'
import CheckOut from "./CheckOut";

const products = [{}];

function Table({ products, selectedPlan }) {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? "text-[#5609e5]"
                  : "text-[gray]"
              }`}
              key={product.id}
            >
              AED{(product.prices[0].unit_amount || 0) / 100}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? "text-[#5609e5]"
                  : "text-[gray]"
              }`}
              key={product.id}
            >
              {product.metadata.videoQuality}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? "text-[#4b09e5]"
                  : "text-[gray]"
              }`}
              key={product.id}
            >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan?.id === product.id
                  ? "text-[#2a09e5]"
                  : "text-[gray]"
              }`}
              key={product.id}
            >
              {product.metadata.portability === "true" && (
                <button className="flex  justify-center">
                  {/* <CheckIcon className="h-5 w-5" />
                   */}
                  <CheckOut className="h-5 w-5" />
                </button>
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
