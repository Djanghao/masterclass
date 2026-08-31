# Golang simple brute force solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/closest-dessert-cost/solutions/1087409/](https://leetcode.com/problems/closest-dessert-cost/solutions/1087409/)

---

```go
func closestCost(baseCosts []int, toppingCosts []int, target int) int {
	cost := math.MaxInt32
	hash := make(map[int]struct{})
	// without topping is accepted
	for _, base := range baseCosts {
		hash[base] = struct{}{}
	}
	construct(toppingCosts, hash)
	if _, exist := hash[target]; exist {
		return target
	}
	for c := range hash {
		if abs(c-target) < abs(cost-target) {
			cost = c
		} else if abs(c-target) == abs(cost-target) && c < cost {
			cost = c
		}
	}
	return cost
}

func construct(costs []int, hash map[int]struct{}) {
	if len(costs) == 0 {
		return
	}
	// we can't modify map when range it
	keys := make([]int, 0, len(hash))
	for k := range hash {
		keys = append(keys, k)
	}
	for _, k := range keys {
		hash[k+costs[0]*1] = struct{}{}
		hash[k+costs[0]*2] = struct{}{}
	}
	construct(costs[1:], hash)
}

func abs(v int) int {
	if v > 0 {
		return v
	}
	return v * -1
}
```