# 👍Runtime 161 ms Beats 100.00%

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/5380288/](https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/5380288/)

---

# Code
```
func minimumSeconds(nums []int) int {
	mapIndex := make(map[int]int)
	mapDist := make(map[int]int)
	n := len(nums)
	
	for i := 0; i < 2 * n; i++ {
		curr := nums[i % n]
		
		if val, exists := mapIndex[curr]; exists && val != i {
			maxDist := i - val
			if val > i {
				maxDist = n + val - i
			}
			
			if _, existsDist := mapDist[curr]; !existsDist || maxDist > mapDist[curr] {
				mapDist[curr] = maxDist
			}
		}
		mapIndex[curr] = i
	}
	
	res := math.MaxInt32
	for _, dist := range mapDist {
		res = int(math.Min(float64(res), float64(dist / 2)))
	}
	return res
}
```