# ✅ Golang, Python & Javascript One Liner : String || Array || Filter || unicode

**Author:** lakshmikant4u
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-segments-in-a-string/solutions/3090392/](https://leetcode.com/problems/number-of-segments-in-a-string/solutions/3090392/)

---

**Feel free to ask Q's...**
*#happytohelpu*

***Do upvote if you find this solution useful. Happy Coding!***

1. ***Javascript Solution***

Runtime: 42 ms
Memory Usage: 41.1 MB

```

let countSegments = s => s.split(" ").filter(s => s.trim().length).length;

````

2. ***Golang Solution***

Runtime: 1 ms
Memory Usage: 1.9 MB

```
func countSegments(s string) int {
    fields := strings.FieldsFunc(s, unicode.IsSpace)
	count := 0
	for _, field := range fields {
		if field != "" {
			count++
		}
	}
	return count
}
```

3. ***Python Solution***

Runtime: 16 ms
Memory Usage: 13.4 MB

```
class Solution(object):
    def countSegments(self, s):
        return len([word for word in s.split() if word.strip()])
```
