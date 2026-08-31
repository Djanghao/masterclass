# GO | 2 Solutions | BRUTE FORCE | SEIVE

**Author:** 2107mohitverma
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/5451803/](https://leetcode.com/problems/closest-prime-numbers-in-range/solutions/5451803/)

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
func closestPrimes(left int, right int) []int {
	array := make([]bool, right+1)
	for i := 2; i*i <= right; i++ {
		for j := 2; j*i <= right; j++ {
			if !array[j*i] {
				array[j*i] = true
			}
		}
	}
	prevPrime, x, y := -1, -1, -1
    if left == 1 {
        left = 2
    }
	for i := left; i <= right; i++ {
		if !array[i] {
			if (prevPrime != -1) && (x != -1) && (y != -1) {
				if (i - prevPrime) < (y - x) {
					x = prevPrime
					y = i
				}
			} else {
				if prevPrime == -1 {
					x = i
				} else if y == -1 {
					y = i
				}
			}
			prevPrime = i
		}
	}
	if x == -1 || y == -1 {
		return []int{-1, -1}
	}
	return []int{x, y}
}

// BRUTE FORCE
// func closestPrimes(left int, right int) []int {
// 	prevPrime := -1
// 	l, r := -1, -1
// 	if left == 1 {
// 		left = 2
// 	}
// 	for i := left; i <= right; i++ {
// 		if isPrime(i) {
// 			if (prevPrime != -1) && (l != -1) && (r != -1) {
// 				if (i - prevPrime) < (r - l) {
// 					l, r = prevPrime, i
// 				}
// 			} else {
// 				if prevPrime == -1 {
// 					l = i
// 				} else if r == -1 {
// 					r = i
// 				}
// 			}
// 			prevPrime = i
// 		}
// 	}
// 	if l == -1 || r == -1 {
// 		return []int{-1, -1}
// 	}
// 	return []int{l, r}
// }

// func isPrime(n int) bool {
// 	for i := 2; i*i <= n; i++ {
// 		if n%i == 0 {
// 			return false
// 		}
// 	}
// 	return true
// }
```