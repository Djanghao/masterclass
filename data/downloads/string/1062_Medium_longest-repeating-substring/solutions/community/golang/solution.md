# Binary Search + Hashset

**Author:** arzonus
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-repeating-substring/solutions/3496833/](https://leetcode.com/problems/longest-repeating-substring/solutions/3496833/)

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
func longestRepeatingSubstring(s string) int {
    var longest int
    
    for i := 1; i < len(s); i++ {
        var visited = make(map[string]struct{})
        
        for j := 0; j <= len(s) - i; j++ {
            sub := s[j:j+i]
            if _, ok := visited[sub]; ok {
                longest = i
                break
            }
            visited[sub] = struct{}{}
        }

        if longest != i {
            break
        }
    }

    return longest
}
```