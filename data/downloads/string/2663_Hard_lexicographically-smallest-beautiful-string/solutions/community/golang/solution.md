# Golang

**Author:** tw13
**Votes:** 1
**Link:** [https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/3475422/](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/3475422/)

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
func smallestBeautifulString(s string, k int) string {
    A := []byte(s)
    i := len(s)-1
    for i >= 0 {
        A[i]++
        if A[i] == byte('a'+k) {
            i-- 
        } else if isValid(A, i) {
            for j := i+1; j < len(A); j++ {
                A[j]='a'
                for !isValid(A, j) {
                    A[j]++
                }
            }
            return string(A)
        }
    }
    return ""
}

func isValid(A []byte, i int) bool {
    return (i-1 < 0 || A[i-1] != A[i]) && (i-2 < 0 || A[i-2] != A[i])
}


```