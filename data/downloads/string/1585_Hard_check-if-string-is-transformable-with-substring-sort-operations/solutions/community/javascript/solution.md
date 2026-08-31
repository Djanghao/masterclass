# JS

**Author:** shaheenparveen
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/2942810/](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/solutions/2942810/)

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

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isTransformable (s, t, n = s.length) {
    const indices = Array.from({ length: 10 }, () => [])

    for (let i = n - 1; i >= 0; i--) {
        indices[s[i] | 0].push(i)
    }

    for (let i = 0; i < n; i++) {
        const num = t[i] | 0

        if (!indices[num].length) {
            return false
        }

        const index = indices[num].pop()

        for (let i = 0; i < num; i++) {
            if (indices[i].length && indices[i][indices[i].length-1] < index) return false
        }
    }

    return true
}
```