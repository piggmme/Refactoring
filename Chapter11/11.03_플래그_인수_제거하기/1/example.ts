// 플래그 인수 제거하기

type Order = {
  basePrice: number;
  discountRate: number;
  discountThreshold: number;
  deliveryState: string;
  placedOn: {
    plusDays: (days: number) => number;
  };
};

export function use() {
  const anOrder = {
    basePrice: 100,
    discountRate: 0.1,
    discountThreshold: 10,
    deliveryState: "MA",
    placedOn: {
      plusDays: (days) => days,
    },
  };
  const deliveryTime = deliveryDate(anOrder, true);
  return deliveryTime;
}

export function deliveryDate(anOrder: Order, isRush: boolean) {
  if (isRush) {
    let deliveryTime;
    if (["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  } else {
    let deliveryTime;
    if (["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if (["ME", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}
