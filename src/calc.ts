import { add, multiply } from './math';

export function computeTotal(price: number, qty: number, tax: number): number {
  const subtotal = multiply(price, qty);
  return add(subtotal, multiply(subtotal, tax));
}
