# [Go] No backtracking involved, reduced complexity

**Author:** bleepbloopsify
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/3464780/](https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/3464780/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Initially I considered having to backtrack, but the math makes the complexity go down very quickly after attempting a couple of numbers.


# Approach
<!-- Describe your approach to solving the problem. -->
* Step 1: we need to write a function to check for valid numbers
* Step 2: we need to use the first two numbers to get the third number, so the first two must be pre-calculated
* Step 3: two numbers can only add up to a single number, so if we fail at any point after this, we need to regenerate our first two numbers.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$10 * 10* n = O(100n)$$  

The first two numbers can have up to 10 digits each, so we need to check each combination of first two numbers against the rest of the string.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
We must keep the number somewhere.

# Code
```
func isValidNumber(num string) (bool, int) {
	if num[0] == '0' && len(num) > 1 {
		return false, 0
	}

	i32, err := strconv.ParseInt(num, 10, 32)
	if err != nil {
		return false, 0
	}

	return true, int(i32)
}

// two numbers can only add up to one number, there is no option explosion after the 
// first two
func sifHelper(target int, currIdx int, num string) (bool, int, int) {
	for i := 1; i < 11 && i + currIdx <= len(num); i++ {
		valid, n := isValidNumber(num[currIdx:currIdx+i])

		if !valid {
			continue
		}

		if n == target {
			return true, n, len(num[currIdx:currIdx+i])
		}
	}

	return false, 0, 0
}

func splitIntoFibonacci(num string) []int {
	for i := 1; i < 11; i++ {
		for j := 1; j < 11; j++ {
			if i >= len(num) || i+j >= len(num) {
				break
			}

			firstValid, first := isValidNumber(num[0:i])
			secondValid, second := isValidNumber(num[i:i+j])
			if !firstValid || !secondValid {
				continue
			}

			curr := []int{first, second}
			currIdx := i+j

			for currIdx < len(num) {
				target := curr[len(curr) - 2] + curr[len(curr) - 1]
				if works, v, l := sifHelper(target, currIdx, num); works {
					curr = append(curr, v)
					currIdx += l
				} else {
					break	
				}
			}

			if currIdx == len(num) {
				return curr
			}
		}
	}


	return []int{}
}
```