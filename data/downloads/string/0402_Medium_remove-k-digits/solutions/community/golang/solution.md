# Simpler golang solution

**Author:** ale_ale_jandro
**Votes:** 5
**Link:** [https://leetcode.com/problems/remove-k-digits/solutions/1628440/](https://leetcode.com/problems/remove-k-digits/solutions/1628440/)

---

```
func Removekdigits(num string, k int) string {
	stack := make([]rune, 0)
	for _, ch := range num {
		for len(stack) > 0 && stack[len(stack)-1] > ch && k > 0 {
			stack = stack[:len(stack)-1]
			k--
		}
		stack = append(stack, ch)
	}

	// If all k digits haven't been removed, remove them.
	for k > 0 {
		stack = stack[:len(stack)-1]
		k--
	}

	// Remove leading zeroes
	for i:=0;i<len(stack); i++ {
		// Return fast if you find a non-zero digit.
		if stack[i] != '0' {
			return string(stack[i:])
		} 
	}

	// If you reach here, result must be zero.
	return "0"
}