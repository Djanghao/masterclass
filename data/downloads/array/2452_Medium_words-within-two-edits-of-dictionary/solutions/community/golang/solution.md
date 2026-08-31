# Easy to understand solution

**Author:** anikin_aa
**Votes:** 0
**Link:** [https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/3833576/](https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/3833576/)

---

# Intuition

Just check every query string if it could be changed 2 times.

# Approach

1. Loop over `q` string from `queries`
2. For each `q` loop over `dictionary` and check if there is a diff of 2 runes between them.
3. Add `q` to `res` if diff less or equal 2.

# Complexity
- Time complexity:
`O(len(queries) * len(dicitionary))`

- Space complexity:
`O(1)`

# Code
```
func twoEditWords(queries []string, dictionary []string) []string {

    twoEdit := func(word string) bool {
        for _, d := range dictionary {
            if len(word) != len(d) {continue}
            i, c := 0, 0
            for i < len(word) {
                if word[i] != d[i] {c += 1}
                if c > 2 {break}
                i += 1
            }
            if c <= 2 {return true}
        }
        return false
    }

    res := []string{}

    for _, q := range queries {
        if twoEdit(q) {
            res = append(res, q)
        }
    }

    return res
}
```