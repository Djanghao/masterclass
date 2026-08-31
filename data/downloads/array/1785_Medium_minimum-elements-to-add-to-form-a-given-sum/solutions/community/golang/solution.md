# 😊Runtime 76 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/5203971/](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/5203971/)

---

# Code
```
func minElements(nums []int, limit int, goal int) int {
	var sum int64 = 0
	for _, num := range nums {
		sum += int64(num)
	}

	diff := math.Abs(float64(goal) - float64(sum))
	return int(math.Ceil(diff / float64(limit)))
}
```