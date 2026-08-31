# Swift solution

**Author:** mveliseev
**Votes:** 2
**Link:** [https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/1251569/](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/1251569/)

---

```
func finalPrices(_ prices: [Int]) -> [Int] {
	let c = prices.count
	var r = prices
	for i in 0..<c {
		let pi = prices[i]
		for j in (i + 1)..<c {
			if prices[j] <= pi {
				r[i] = pi - prices[j]
				break
			}
		}
	}
	return r
}
```