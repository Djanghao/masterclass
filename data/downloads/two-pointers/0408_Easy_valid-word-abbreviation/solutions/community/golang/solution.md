# Go solution

**Author:** singhsaubhik
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-word-abbreviation/solutions/4897856/](https://leetcode.com/problems/valid-word-abbreviation/solutions/4897856/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
func validWordAbbreviation(word string, abbr string) bool {
	// internationalization
	n := len(word)
	m := len(abbr)

	i := 0
	j := 0

	for i < n && j < m {
		if word[i] == abbr[j] {
            i++
            j++
            continue
        }

        // At this stage they don't match and abbr does not have digits
        if abbr[j] <= '0' || abbr[j] > '9' {
            return false
        }

        inds := ""
        for j < m && abbr[j] >= '0' && abbr[j] <= '9' {
            inds += string(abbr[j])
            j++
        }

        ind, _ := strconv.Atoi(inds)
        i += ind
	}

	return i == n && j == m
}
```