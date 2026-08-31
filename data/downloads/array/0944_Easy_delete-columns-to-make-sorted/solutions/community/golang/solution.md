# Golang solution with quick explanation

**Author:** nathannaveen
**Votes:** 5
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/1249501/](https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/1249501/)

---

This solution loops through every column, and then if the previous letter in the column is greater than the current letter, we know that this column can be removed.

``` go
func minDeletionSize(strs []string) int {
	res := 0
	for i := 0; i < len(strs[0]); i++ {
		for j := 1; j < len(strs); j++ {
			if strs[j][i] < strs[j-1][i] {
				res++
				break
			}
		}
	}
	return res
}
```