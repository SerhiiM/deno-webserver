import { FreshContext, Handlers } from "$fresh/server.ts";

interface Sum {
  [key: number]: number;
}

type Res = number[];

const findPair = (arr1: number[], arr2: number[]) => {
  const result = [] as Res[];
  const firstPairs = arr1.reduce((sum: Sum, el: number) => {
    if (sum[el]) {
      sum[el] += 1;
    } else {
      sum[el] = 1;
    }
    return sum;
  }, {} as Sum);
  arr2.forEach(el => {
    const needed = el * (-1)
    if(firstPairs[needed] && firstPairs[needed] > 0) {
      result.push([el, needed]);
      firstPairs[needed] -= 1
    }
  })

  return result;
};

export const handler: Handlers = {
  GET(_req: Request, _ctx: FreshContext) {
    console.log(findPair([3, 1, -5, 6, -7, 5, 2], [2, -3, 2, 6, 6, 7, 5]));
    return new Response("Hello World");
  },
};
