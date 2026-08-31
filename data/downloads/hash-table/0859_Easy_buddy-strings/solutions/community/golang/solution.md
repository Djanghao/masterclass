# Go Solution Beats 100% | O(n) Time & Space

**Author:** jazelly
**Votes:** 1
**Link:** [https://leetcode.com/problems/buddy-strings/solutions/3712509/](https://leetcode.com/problems/buddy-strings/solutions/3712509/)

---

# Code
```
func buddyStrings(s string, goal string) bool {
    similarity := 0 

    sn := len(s)
    gn := len(goal)

    if sn != gn {
        return false
    }

    smap := make(map[byte]int)
    for i:=0; i < sn; i++ {
        if s[i] == goal[i] {
            similarity++
        }
        smap[s[i]]++
        
    }

    // for same strings, there has to be a repeated char for swapping
    if similarity == sn {
        for i := 0; i < sn; i++ {
            if smap[s[i]] >= 2 {
                return true
            }
        }
        return false
    }

    // for other cases, the diff is not exactly 2, immediate false
    if similarity != sn - 2 {
        return false
    }
    // there has to be a swapped char in goal
    wrongi1 := -1
    for i:=0; i < sn; i++ {
        if s[i] != goal[i] {
            if wrongi1 == -1 {
                wrongi1 = i
            } else {
                if goal[i] != s[wrongi1] || goal[wrongi1] != s[i] {
                    return false
                }
            }
        }

    }

    return true
}
```