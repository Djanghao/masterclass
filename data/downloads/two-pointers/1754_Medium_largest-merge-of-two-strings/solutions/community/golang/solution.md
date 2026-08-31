# Simple Easy Golang solution with quick explanation

**Author:** nathannaveen
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-merge-of-two-strings/solutions/1227796/](https://leetcode.com/problems/largest-merge-of-two-strings/solutions/1227796/)

---

**The idea of this solution is:**

* If `word1` is greater than `word2` we know that we can add the first letter of`word1`, and then remove the first letter.
* Else, we can add the first letter of `word2`, and remove the first letter of `word2`.
* At the end if `len(word2)` is greater than `len(word1)` or vise versa we can add `word1 + word2`. If we remove all the values from `word1` but not all from `word2`, so `word1 = ""` and `word2 = "abc"` we can just add `"" + "abc"` to `res`.

``` go
func largestMerge(word1 string, word2 string) string {
	res := ""

	for len(word1) != 0 && len(word2) != 0 {
		if word1 > word2 {
			res += string(word1[0])
			word1 = word1[1:]
		} else {
			res += string(word2[0])
			word2 = word2[1:]
		}
	}
	res += word1 + word2
	return res
}

```