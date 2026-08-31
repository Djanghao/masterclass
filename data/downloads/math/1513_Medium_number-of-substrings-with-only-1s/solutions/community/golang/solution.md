# Go 2ms beats 100%

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/2180878/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/2180878/)

---

```
func numSub(s string) int {
	if len(s) == 0 {
		return 0
	}

	if len(s) == 1 {
		if s[0] == 49 {
			return 1
		}

		return 0
	}

	left := 0

    for left < len(s) && s[left] != 49 {
		left++
	}

	var res int

	for i := left; i < len(s); i++ {
		if s[i] == s[left] {
			continue
		} else {
			if s[i] == 48 {
				res += helper(i - left)
			}

			left = i
		}
	}

    if left < len(s) && s[left] == 49 {
		res += helper(len(s) - left)
	}

	return res % (int(math.Pow10(9)) + 7)
}

func helper(length int) int {
	if length < 2 {
		return length
	}

	var res int

	for i := 1; i < length; i++ {
		res += length - i
	}

	return res + length
}


```