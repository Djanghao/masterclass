# Go. 8ms solution

**Author:** mondayguy
**Votes:** 29
**Link:** [https://leetcode.com/problems/palindrome-number/solutions/981758/](https://leetcode.com/problems/palindrome-number/solutions/981758/)

---

```
func isPalindrome(num int) bool {
	if num < 0 {
		return false
	}
	x := num
	reversed := 0
	for x != 0 {
		reversed = 10*reversed + x%10
		x /= 10
	}
	return (reversed == num)
}
```