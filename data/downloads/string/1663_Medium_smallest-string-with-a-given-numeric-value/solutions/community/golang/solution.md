# Golang solution with quick explanation

**Author:** nathannaveen
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/1259581/](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/1259581/)

---

[1663. Smallest String With A Given Numeric Value](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/)

This solution aims to make all the characters equal `'a'` to start with, and then subtract `n` from `k` because we have added `n` amount of `'a'`'s. After that, we can keep removing `'z'`'s until `k > 25`, then we can remove the letter with an ASCII of `k + 'a'`.

``` go
func getSmallestString(n int, k int) string {
	k -= n
	res := make([]string, n)

	for i := 0; i < n; i++ {
		res[i] = "a"
	}

	for i := len(res) - 1; i >= 0; i-- {
		if k <= 25 {
			res[i] = string(k + 'a')
			break
		} else {
			res[i] = "z"
			k -= 25
		}
	}

	return strings.Join(res, "")
}
```

**We can edit this solution by removing the first loop and merging it into the second:**

``` go
func getSmallestString(n int, k int) string {
	k -= n
	res := make([]string, n)
    
	for i := len(res) - 1; i >= 0; i-- {
		if k == 0 {
			res[i] = "a"
		} else if k <= 25 {
			res[i] = string(k + 'a')
			k = 0
		} else {
			res[i] = "z"
			k -= 25
		}
	}

	return strings.Join(res, "")
}
```