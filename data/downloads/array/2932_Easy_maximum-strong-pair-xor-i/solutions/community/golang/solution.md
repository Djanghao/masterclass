# ☑️ Golang solution

**Author:** CodeMonkey80s
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/5860786/](https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/5860786/)

---

# Code
```golang []
func maximumStrongPairXor(nums []int) int {
	var v, m, maxXor int
	for i := 0; i < len(nums); i++ {
		for j := 0; j < len(nums); j++ {
			v = int(math.Abs(float64(nums[i]) - float64(nums[j])))
			if v <= min(nums[i], nums[j]) {
				maxXor = nums[i] ^ nums[j]
				m = max(m, maxXor)
			}

		}
	}

	return m

}
```