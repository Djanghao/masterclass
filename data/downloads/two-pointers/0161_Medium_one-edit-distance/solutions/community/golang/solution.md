# Golang Solution easy to read

**Author:** anikin_aa
**Votes:** 2
**Link:** [https://leetcode.com/problems/one-edit-distance/solutions/3845848/](https://leetcode.com/problems/one-edit-distance/solutions/3845848/)

---

# Approach

All of the cases should be splitted to 2:

1. Len of s and t is equal, then only need to count diff runes
2. Delete and Add case is the same, need to check that diff in len between input strings is 1, and then check that there is single diff in strings.

# Complexity
- Time complexity: $$O(n)$$ 

- Space complexity: $$O(1))$$ 

# Code
```
func isOneEditDistance(s string, t string) bool {

    checkReplace := func() bool {
        i, c := 0, 0
        for i < len(s) {
            if s[i] != t[i] {
                if c == 1 {return false}
                c += 1
            }
            i += 1
        }
        return c == 1
    }

    checkEdit := func(short, long string) bool {
        i, j := 0, 0
        for i < len(short) && j < len(long) {
            if short[i] != long[j] {
                if i != j {return false}
                j += 1
            } else {
                i += 1
                j += 1
            }
        }
        // fmt.Println("i: ", i, "j: ", j)
        return true
    }

    if len(s) == len(t) {
        return checkReplace()
    } else if len(s) + 1 == len(t) {
        return checkEdit(s, t)
    } else if len(t) + 1 == len(s) {
        return checkEdit(t, s)
    }
    return false
}
```