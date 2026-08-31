# Go 0 ms 100.00% easy code; 3 ways

**Author:** shikuan
**Votes:** 31
**Link:** [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/287974/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/287974/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# 1. Fast Code
```golang
func strStr(haystack string, needle string) int {
	if needle == "" {
		return 0
	}
	h := len(haystack)
	n := len(needle)
	for i := 0; i < h-n+1; i++ {
		if haystack[i:i+n] == needle {
			return i
		}
	}
	return -1
}
```

# 2. Sample Code

```golang
func strStrSample(haystack string, needle string) int {
	return strings.Index(haystack, needle)
}
```

# 3. Optimization Code
```golang
func strStrOptimize(haystack string, needle string) int {
	h := len(haystack)
	n := len(needle)
	switch {
	case n == 0:
		return 0
	case n == 1:
		for i := 0; i < h; i++ {
			if string(haystack[i]) == needle {
				return i
			}
		}
		return -1
	case n == h:
		if haystack == needle {
			return 0
		}
		return -1
	case n > h:
		return -1
	default:
		for i := 0; i < h-n+1; i++ {
			if haystack[i:i+n] == needle {
				return i
			}
		}
		return -1
	}
}
```