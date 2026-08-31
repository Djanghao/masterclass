# Swift using default methods 'init' and 'reversed'

**Author:** barabash
**Votes:** 1
**Link:** [https://leetcode.com/problems/strictly-palindromic-number/solutions/2524864/](https://leetcode.com/problems/strictly-palindromic-number/solutions/2524864/)

---

```
func isStrictlyPalindromic(_ n: Int) -> Bool {
	for i in 2...n-2 {
		let str = Array(String(n, radix: i))
		let isPalindromic = str == str.reversed()
		guard isPalindromic else { return false }
	}
	return true
}
```