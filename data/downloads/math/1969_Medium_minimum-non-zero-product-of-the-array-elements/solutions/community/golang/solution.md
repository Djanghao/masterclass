# Golang solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/1518663/](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/solutions/1518663/)

---

```go
func minNonZeroProduct(p int) int {
	powerOfTwo := make([]int, p+1)
	powerOfTwo[0] = 1
	baseValue := 1
	for i := 1; i <= p; i++ {
		baseValue *= 2
		powerOfTwo[i] = baseValue
	}
	// products[i]: 2**i products[0] multi result
	products := make([]int, p+1)
	products[0] = (baseValue - 2) % 1000000007
	for i := 1; i <= p; i++ {
		products[i] = products[i-1] * products[i-1] % 1000000007
	}
	factor := (baseValue - 2) / 2
	minProduct := (baseValue - 1) % 1000000007
	for index := p; factor > 0; {
		for powerOfTwo[index] > factor {
			index--
		}
		factor -= powerOfTwo[index]
		minProduct = minProduct * products[index] % 1000000007
	}
	return minProduct
}
```