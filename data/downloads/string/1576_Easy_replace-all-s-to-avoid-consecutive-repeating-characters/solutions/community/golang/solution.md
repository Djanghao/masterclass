# Golang Simple O(n)

**Author:** alfinm01
**Votes:** 2
**Link:** [https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/1565630/](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/1565630/)

---

```
func modifyString(s string) string {
    str := strings.Split(s, "")
    chars := []string{"a", "b", "c"}
	
    for i := range str {
        if str[i] != "?" {
			continue
		}
		
		for _, c := range chars {
			if (i == 0 || str[i-1] != c) && (i == len(s)-1 || str[i+1] != c) {
				str[i] = c
				break
			}
		}
    }
	
    return strings.Join(str[:], "")
}
```