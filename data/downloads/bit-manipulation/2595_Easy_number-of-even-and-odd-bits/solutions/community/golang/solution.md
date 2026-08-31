# Using  strconv.FormatInt,strings.Split in Golang

**Author:** thinkchar
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3319302/](https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3319302/)

---

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:o(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func evenOddBit(num int) []int {

	binary := strconv.FormatInt(int64(num), 2)
	temp := strings.Split(binary, "")
	for i, j := 0, len(temp)-1; i < j; i, j = i+1, j-1 {
		temp[i], temp[j] = temp[j], temp[i]
	}
	var arr =make([]int,2)
	for i := 0; i < len(temp); i++ {
		if temp[i] == "1" {
			if i%2 == 0 {
				arr[0] += 1
			} else {
				arr[1] += 1
			}
		}
	}
	return arr
}
```