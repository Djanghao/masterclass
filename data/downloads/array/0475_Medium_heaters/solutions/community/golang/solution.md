# O(1) Space | O(n Log n) Time | Single Iteration | Simple Intuition | Go

**Author:** alprose11
**Votes:** 2
**Link:** [https://leetcode.com/problems/heaters/solutions/5737230/](https://leetcode.com/problems/heaters/solutions/5737230/)

---

# Intuition
If we plot the graph of x - axis we can observe that for every house just need to check with nearest two heaters only

# Approach
Sorted the array so that houses and heaters are in sequence.

Kept two pointer : one on house and one on heater, for every house checked with current Heater and next heater [to visualize this - you have a case where your house is at 3 and current heater at 1 and next heater at 5], for this house took the minimum difference between two heater.

Edge case : One house at 1 and other house at 999, and we have multiple heaters in between, so for that case we need to keep checking for next heater, so that we can find heater at minimum distance from house.

Similarly calculated for every house and calculated minimum value and that is my answer.

# Complexity
- Time complexity:
$$O(n Logn)$$

- Space complexity:
$$O(1)$$

# Code
```golang []
func findRadius(houses []int, heaters []int) int {
	l1, l2 := len(houses), len(heaters)
	p1, p2 := 0, 0
	sort.Ints(houses)
	sort.Ints(heaters)
    maxm := 0
	for p1 < l1 && p2 < l2 {
		curDif := abs(houses[p1] - heaters[p2])
		for p2+1 < l2 {
			newDif := abs(houses[p1] - heaters[p2+1])
			if newDif > curDif {
				break
			}
			p2++
			curDif = newDif
		}
		maxm = max(maxm, curDif)
		p1++
	}
	return maxm
}
func abs(a int) int {
	if a < 0 {
		a = -a
	}
	return a
}
```