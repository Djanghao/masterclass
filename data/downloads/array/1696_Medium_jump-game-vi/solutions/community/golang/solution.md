# Go solution

**Author:** ganesh
**Votes:** 2
**Link:** [https://leetcode.com/problems/jump-game-vi/solutions/1261225/](https://leetcode.com/problems/jump-game-vi/solutions/1261225/)

---

https://github.com/ganeshskudva/Leetcode-Golang
Inspired by [this](https://leetcode.com/problems/jump-game-vi/discuss/978544/C%2B%2B-DP-%2B-Pruning-vs.-Monodeq) solution
```
func maxResult(nums []int, k int) int {
    	var dq []int
	dq = append(dq, 0)
	for i := 1; i < len(nums); i++ {
		if dq[0]+k < i {
			dq = dq[1:]
		}
		nums[i] += nums[dq[0]]
		for len(dq) > 0 && nums[dq[len(dq)-1]] <= nums[i] {
			dq = dq[:len(dq)-1]
		}
		dq = append(dq, i)
	}

	return nums[len(nums)-1]
}
```