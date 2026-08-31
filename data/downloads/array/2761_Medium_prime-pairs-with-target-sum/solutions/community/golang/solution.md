# Easy Go Solution beats 64.5 run time and 59 memory

**Author:** anamul_haque
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/5814724/](https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/5814724/)

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
```golang []
import "fmt"
func findPrimePairs(n int) [][]int {
  prime := isPrime(n)
	var result [][]int
	for i := 2; i <= n/2; i++ {
		sub := n - i
		if prime[i] && prime[sub] {
			
			result = append(result, []int{i,sub})
		}
	}

    return result
}

func isPrime(num int) []bool {
	isPrime := make([]bool, num+1)
	for i := 1; i <= num; i++ {
		isPrime[i] = true
	}
	for i := 2; i*i <= num; i++ {
		if isPrime[i] {
			for j := i * i; j < num; j += i {
				isPrime[j] = false
			}
		}
	}
	return isPrime
}
```