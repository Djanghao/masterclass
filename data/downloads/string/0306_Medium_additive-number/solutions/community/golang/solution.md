# Go clean solution (Iterations)

**Author:** nick_shkaruba
**Votes:** 1
**Link:** [https://leetcode.com/problems/additive-number/solutions/3047092/](https://leetcode.com/problems/additive-number/solutions/3047092/)

---

**Time complexity**: O(n^2) becase in the worst case we iterate over each loop n times
**Space complexity**: O(1) because we do it iterativelly.

Checkout my second solution that works recursivelly, resulting in more memory:
https://leetcode.com/problems/additive-number/discuss/3044748/Go-clean-solution-(Recursion)
```
func isAdditiveNumber(num string) bool {
	firstL := 0
	for firstR := 0; firstR < len(num)/2; firstR++ {
		secondL := firstR + 1
		for secondR := secondL; secondR < len(num)-1; secondR++ {
			if helper(num, firstL, firstR, secondL, secondR) {
				return true
			}
		}
	}

	return false
}

func helper(num string, firstL int, firstR int, secondL int, secondR int) bool {
	for {
		if firstL != firstR && num[firstL] == '0' || secondL != secondR && num[secondL] == '0' {
			return false
		}
		if secondR == len(num)-1 {
			return true
		}

		first, _ := strconv.Atoi(num[firstL : firstR+1])
		second, _ := strconv.Atoi(num[secondL : secondR+1])
		third := first + second

		thirdStr := strconv.Itoa(third)
		thirdL := secondR + 1
		thirdR := thirdL + len(thirdStr) - 1

		if thirdR >= len(num) || num[thirdL:thirdR+1] != thirdStr {
			return false
		}

		firstL = secondL
		firstR = secondR
		secondL = thirdL
		secondR = thirdR
	}
}
```