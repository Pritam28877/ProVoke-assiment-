import { CheckIcon } from '@heroicons/react/outline'
// import { Product } from '@stripe/firestore-stripe-payments'

const products = [{}]

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
                            ? 'text-[#E50914]'
                            : 'text-[gray]'
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
                  ? 'text-[#5609e5]'
                  : 'text-[gray]'
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
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
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
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.portability === 'true' && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default Table
