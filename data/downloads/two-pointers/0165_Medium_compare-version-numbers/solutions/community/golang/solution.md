# Golang Simple Solution

**Author:** YairFernando67
**Votes:** 3
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/1798861/](https://leetcode.com/problems/compare-version-numbers/solutions/1798861/)

---

```
func compareVersion(version1 string, version2 string) int {
	v1, v2 := strings.Split(version1, "."), strings.Split(version2, ".")

	for i := 0; i < len(v1) || i < len(v2); i++ {
		a, b := 0, 0

		if i < len(v1) {
			a, _ = strconv.Atoi(v1[i])
		}

		if i < len(v2) {
			b, _ = strconv.Atoi(v2[i])
		}

		if a > b {
			return 1
		}

		if b > a {
			return -1
		}
	}

	return 0
}
```