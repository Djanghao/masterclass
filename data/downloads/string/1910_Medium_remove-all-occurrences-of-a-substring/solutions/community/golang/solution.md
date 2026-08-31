# Short solution with using slices substractions

**Author:** shurikace
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/3356350/](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/3356350/)

---

# Intuition
We compare slices and in case of equality subtract the specified slice from our processed string (**s**) and return ***i*** to ***0*** (-1 cause in end of cycle's block ***i*** will be increase by +1). Then we start to find the matches again from the beginning.
# Complexity
- Time complexity: O(n)


# Code
```
func removeOccurrences(s string, part string) string {
    for i := 0; i <= len(s)-len(part); i++ {
		if s[i:i+len(part)] == part {
			s = s[0:i] + s[i+len(part):]
			i = -1
		}
	}
	return s
}
```