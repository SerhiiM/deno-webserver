import { useSignal } from "@preact/signals";

type Stock = {
  id: string;
  name: string;
  amount: number;
};

const Portfolio = () => {
  const stocksSignal = useSignal<Stock[]>([]);
  const nameSignal = useSignal("");
  const amountSignal = useSignal(0);

  const onNameChange = (value: string) => {
    nameSignal.value = value;
  };

  const onAmountChange = (value: string) => {
    amountSignal.value = +value;
  };

  const onAdd = () => {
    stocksSignal.value = [...stocksSignal.value, {
      id: crypto.randomUUID(),
      name: nameSignal.value,
      amount: amountSignal.value,
    }];

    nameSignal.value = "";
    amountSignal.value = 0;

    // fetch(
    //   //   `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${name.value}&interval=60min&apikey=I05123U21K69JZ37`,
    //   `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${name.value}&apikey=I05123U21K69JZ37`,
    // ).then(async (response) => {
    //   console.log("TEST123", await response.json());
    // });
  };

  const onRemove = (id: string) => {
    stocksSignal.value = stocksSignal.value.filter((stock) => stock.id !== id);
  };

  return (
    <div class="bg-gray-900 text-white">
      <div class="text-center p-5 bg-gray-800">
        <h1 class="text-3xl font-bold">Portfolio</h1>
      </div>
      <div class="flex items-center justify-center min-h-screen">
        <div class="w-full max-w-md">
          <ul id="saved-values" class="mb-4 space-y-2">
            {stocksSignal.value.map((stock) => {
              return (
                <li
                  class="flex justify-between items-center p-4 bg-white rounded shadow"
                  key={stock.id}
                >
                  <span class="text-black font-semibold">
                    Name: {stock.name}, Amount: {stock.amount}
                  </span>
                  <button
                    class="bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded"
                    onClick={() => {
                      onRemove(stock.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
          <div class="flex space-x-4">
            <input
              type="text"
              class="p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-indigo-500"
              placeholder="Name"
              onInput={(event) => onNameChange(event.currentTarget.value)}
              value={nameSignal.value}
            />
            <input
              type="number"
              class="p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-indigo-500"
              placeholder="Amount"
              value={amountSignal.value}
              onInput={(event) => onAmountChange(event.currentTarget.value)}
            />
            <button
              class="p-2 bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              onClick={onAdd}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
