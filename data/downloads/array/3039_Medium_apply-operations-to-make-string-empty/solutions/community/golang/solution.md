# The maximum frequency of occurrence of a letter

**Author:** skharchenko87
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4743589/](https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4743589/)

---

# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func lastNonEmptyString(s string) string {
	letterFrequency := [26]int{}
	maxLetterFrequency := 0
	for _, c := range s {
		index := c - 'a'
		letterFrequency[index]++
		if letterFrequency[index] > maxLetterFrequency {
			maxLetterFrequency = letterFrequency[index]
		}
	}
	var res []byte
	for i := len(s) - 1; i >= 0; i-- {
		if letterFrequency[s[i]-'a'] == maxLetterFrequency {
			res = append([]byte{s[i]}, res...)
			letterFrequency[s[i]-'a'] = 0
		}
	}
	return string(res[:])
}
```