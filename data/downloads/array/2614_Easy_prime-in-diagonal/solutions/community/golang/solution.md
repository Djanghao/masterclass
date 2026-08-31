# GO | To check prime you only need to check values till Sqrt(number)

**Author:** 2107mohitverma
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/5040575/](https://leetcode.com/problems/prime-in-diagonal/solutions/5040575/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func diagonalPrime(nums [][]int) int {
	ans := 0
	for i := 0; i < len(nums); i++ {
		if isPrime(nums[i][i]) && nums[i][i] > ans {
			ans = nums[i][i]
		}
		if isPrime(nums[i][len(nums)-i-1]) && nums[i][len(nums)-i-1] > ans {
			ans = nums[i][len(nums)-i-1]
		}
	}
	return ans
}

func isPrime(num int) bool {
	if num == 1 {
		return false
	}
	for i := 2; i <= int(math.Sqrt(float64(num))); i++ {
		if num%i == 0 {
			return false
		}
	}
	return true
}
```