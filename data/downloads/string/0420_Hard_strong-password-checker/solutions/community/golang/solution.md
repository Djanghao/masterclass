# Golang | 0ms | O(N) (single run) | O(1) space

**Author:** Arkhamvm
**Votes:** 16
**Link:** [https://leetcode.com/problems/strong-password-checker/solutions/2660649/](https://leetcode.com/problems/strong-password-checker/solutions/2660649/)

---

Spend 3 hours of life, so upvote.

```golang
func strongPasswordChecker(password string) int {
	n := len(password)

	missingLC, missingUC, missingD := 1, 1, 1
	mustChanged, deleteOne, deleteTwo := 0, 0, 0
	for idx := 0; idx < n; idx++ {
		char := password[idx]
		if 97 <= char && char <= 122 { // 'a' - 'z'
			missingLC = 0
		}
		if 65 <= char && char <= 90 { // 'A' - 'Z'
			missingUC = 0
		}
		if 48 <= char && char <= 57 { // '0' - '9'
			missingD = 0
		}

		if idx > 1 && password[idx] == password[idx-1] && password[idx] == password[idx-2] {
			seqLen := 3
			for idx < n-1 && password[idx+1] == password[idx] {
				seqLen++
				idx++
			}

			mustChanged += seqLen / 3
			if seqLen%3 == 0 { // "aaa" => "aa"
				deleteOne++
			} else if seqLen%3 == 1 { // "aaaa" => "aa"
				deleteTwo++
			}
		}
	}

	missingTotal := missingLC + missingUC + missingD

	if n < 6 {
		return max420(missingTotal, 6-n)
	} else if n <= 20 {
		return max420(missingTotal, mustChanged)
	} else {
		mustDeleted := n - 20

		mustChanged -= min420(mustDeleted, deleteOne)
		mustChanged -= min420(max420(mustDeleted-deleteOne, 0), deleteTwo*2) / 2
		mustChanged -= max420(mustDeleted-deleteOne-2*deleteTwo, 0) / 3

		return mustDeleted + max420(missingTotal, mustChanged)
	}
}

func max420(a, b int) int {
	if a > b {
		return a
	}

	return b
}

func min420(a, b int) int {
	if a < b {
		return a
	}

	return b
}
```

![ac9176bf-ce84-48a7-ac3e-74b0ba735101_1677453394.161722\\[1\\].webp](https://assets.leetcode.com/users/images/a6d32713-5bfa-44ca-8a6b-7b1a68205785_1677672353.319509.webp)
