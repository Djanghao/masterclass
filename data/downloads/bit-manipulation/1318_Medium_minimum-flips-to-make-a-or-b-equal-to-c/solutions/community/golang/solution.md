# Golang | Beats 100% | Easy to understand | Simple code

**Author:** dimaglushkov
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3608282/](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/3608282/)

---

# Approach
Compare these three numbers bit-by-bit. 
- `ai OR bi == ci` - this case means no flips are needed for $$ith$$ bits.
- `ai OR bi != ci` - this case means that there must be at least one flip operation. But actually, there is a possiblity that we need to perform two flips, when `ci` is 0 and both `ai` and `bi` are 1.

# Code
```
func minFlips(a int, b int, c int) int {
	ans := 0
	for a > 0 || b > 0 || c > 0 {
		ai, bi, ci := a%2, b%2, c%2
		a, b, c = a/2, b/2, c/2
		if ai|bi != ci {
			ans++
			if ci == 0 && ai == 1 && bi == 1 {
				ans++
			}
		}

	}
	return ans
}

```