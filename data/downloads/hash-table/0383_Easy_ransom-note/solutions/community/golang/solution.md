# Go pretty simple code

**Author:** josh-ferrell
**Votes:** 26
**Link:** [https://leetcode.com/problems/ransom-note/solutions/1947575/](https://leetcode.com/problems/ransom-note/solutions/1947575/)

---

```
func canConstruct(ransomNote string, magazine string) bool {
    	for _, v := range ransomNote {
		if strings.Count(ransomNote, string(v)) > strings.Count(magazine, string(v)) {
			return false
		}
	}
	return true
}
```