# my solution

**Author:** hxuan190
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/5941130/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/5941130/)

---


# Code
```golang []
import "strconv"

func countDigits(num int) int {
	str := strconv.Itoa(num)
	countDigits := 0
	for _, v := range str {
		if num%int(v -  '0') == 0 {
			countDigits++
		}

	}
	return countDigits
}
```