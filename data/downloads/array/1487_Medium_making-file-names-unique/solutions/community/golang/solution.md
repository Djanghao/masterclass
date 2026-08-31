# O(N) Simple Map

**Author:** aacebo
**Votes:** 0
**Link:** [https://leetcode.com/problems/making-file-names-unique/solutions/3565797/](https://leetcode.com/problems/making-file-names-unique/solutions/3565797/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Use a map of integers to track occurances of filenames
2. When a duplicate is found increment the counter until the name is unique

# Complexity
- Time complexity: O(N)

- Space complexity: O(N)

# Code
```
func getFolderNames(names []string) []string {
    res := []string{}
    m := map[string]int{}

    // for each name keep a counter and
    // increment until we find a name that
    // is not used
    for _, name := range names {
        if m[name] > 0 {
            str := name

            for m[str] > 0 {
                str = fmt.Sprintf("%s(%d)", name, m[name])
                m[name]++
            }

            res = append(res, str)
            m[str] = 1
        } else {
            res = append(res, name)
            m[name] = 1
        }
    }

    return res
}

```