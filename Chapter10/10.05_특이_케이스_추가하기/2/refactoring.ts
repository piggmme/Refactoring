// 특이 케이스 추가하기: 객체 리터럴 이용하기
// 고객 정보를 갱신하는 클라이언트가 없는 경우

/********** Site 클래스를 사용하는 코드 예제 **********/
// 미확인 고객을 처리하는 클라이언트가 여러개 있다.
// 대부분 똑같은 방식으로 처리한다.
// 고객 이름은 '거주자'를 사용하고, 기본 요금제(billingPlan)를 청구하고, 연체기간은 0주로 분류(weeksDelinquent)
declare const site;
declare const registry;

export function use1() {
  const aCustomer = site.customer as any;
  const customerName = aCustomer.name;
}

export function use2(aCustomer: any) {
  const plan = aCustomer.billingPlan;
}

export function use3(aCustomer: any) {
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}

/********** Site 클래스 **********/
export class Site {
  private _customer: Customer | string;

  get customer() {
    return this._customer === "미확인 고객"
      ? createUnknownCustoner()
      : this._customer;
  }
}

type BillingPlan = any;
type PaymentHistory = any;

export class Customer {
  private _name: string;
  private _billingPlan: BillingPlan;
  private _paymentHistory: PaymentHistory;

  get name() {
    return this._name;
  }

  get billingPlan() {
    return this._billingPlan;
  }

  set billingPlan(arg) {
    this._billingPlan = arg;
  }

  get paymentHistory() {
    return this._paymentHistory;
  }

  get isUnknown() {
    return false;
  }
}

/********** 특이 케이스 객체 리터럴로 관리 **********/
export function isUnknown(arg) {
  return arg.isUnknown;
}

export function createUnknownCustoner() {
  return {
    isUnknown: true,
    name: "거주자",
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    },
  };
}
