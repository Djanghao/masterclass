# Golang Code

**Author:** Prabhakar_Boggala
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/5013389/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/5013389/)

---



# Code
```
func findKOr(nums []int, k int) int {
	var result string
	for i := 0; i < 32; i++ {
		count := 0
		for _, val := range nums {
			if (val>>i)&1 != 0 {
				count++
			}
		}
		if count >=k {
			result = "1" + result
		} else {
			result = "0" + result
		}
	}

	num := []rune(result)
	rs := 0
	pt := 1
	for i := len(num) - 1; i >= 0; i-- {
		if num[i] == '1' {
			rs = rs + pt
		}
		pt = pt * 2
	}
	return rs

}
```