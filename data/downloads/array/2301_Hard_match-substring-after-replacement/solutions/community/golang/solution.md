# Golang n^2  doable

**Author:** cakuang1
**Votes:** 0
**Link:** [https://leetcode.com/problems/match-substring-after-replacement/solutions/5866222/](https://leetcode.com/problems/match-substring-after-replacement/solutions/5866222/)

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
```golang []
func matchReplacement(s string, sub string, mappings [][]byte) bool {
    nestedmapper := map[byte]map[byte]bool{}
    

    for _, v := range mappings {
        if _, ok := nestedmapper[v[0]]; !ok {
            nestedmapper[v[0]] = map[byte]bool{}
        }
        nestedmapper[v[0]][v[1]] = true
    }
    
    for i := 0; i <= len(s)-len(sub); i++ {
        match := true

        for j := 0; j < len(sub); j++ {
            sc := s[i+j]  
            subc := sub[j] 

            if sc != subc && (!nestedmapper[subc][sc]) {
                match = false
                break
            }
        }

        if match {
            return true
        }
    }

    return false
}
```