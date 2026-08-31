# My answer

**Author:** Sebasers
**Votes:** 0
**Link:** [https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/5647814/](https://leetcode.com/problems/counting-words-with-a-given-prefix/solutions/5647814/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func prefixCount(words []string, pref string) (r int) {

	for i := 0; i < len(words); i++{

		if len(words[i]) >= len(pref) {

			if words[i][0:len(pref)] == pref {
				r++
			}

		}

	}

	return

}
```