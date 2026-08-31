# Golang 60ms

**Author:** kocherovf
**Votes:** 5
**Link:** [https://leetcode.com/problems/letter-case-permutation/solutions/320802/](https://leetcode.com/problems/letter-case-permutation/solutions/320802/)

---

```
func letterCasePermutation(S string) []string {
	if len(S) == 0 {
		return []string{""}
	}
	var res []string
	c := S[len(S)-1]
	for _, str := range letterCasePermutation(S[:len(S)-1]) {
		res = append(res, str+string(c))
		if c >= 'a' && c <= 'z' {
			res = append(res, str+string(c-32))
		} else if c >= 'A' && c <= 'Z' {
			res = append(res, str+string(c+32))
		}
	}
	return res
}
```