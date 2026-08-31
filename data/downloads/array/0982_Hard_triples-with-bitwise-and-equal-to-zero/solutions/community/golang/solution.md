# 👍Runtime 3 ms  Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 1
**Link:** [https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/5039721/](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/5039721/)

---

# Code
```
func countTriplets(nums []int) int {
    max := 0
	for _, num := range nums {
		if num > max {
			max = num
		}
	}

	N := 1
	for N <= max {
		N <<= 1
	}

	cnt := make([]int, N)
	for _, x := range nums {
		for _, y := range nums {
			cnt[x&y]++
		}
	}

	ans := 0
	for _, num := range nums {
		subset := num ^ (N - 1)
		ans += cnt[0]
		for i := subset; i > 0; i = subset & (i - 1) {
			ans += cnt[i]
		}
	}

	return ans 
}
```