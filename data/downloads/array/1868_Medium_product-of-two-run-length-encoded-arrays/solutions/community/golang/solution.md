# O(len(encoded1))

**Author:** dspasibenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/5232970/](https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/5232970/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(len(encoded1))

- Space complexity:
O(len(encoded1))

# Code
```
func findRLEArray(encoded1 [][]int, encoded2 [][]int) [][]int {
    res := [][]int{}
    for len(encoded1) > 0 && len(encoded2) > 0 {
        l := min(encoded1[0][1], encoded2[0][1])
        p := encoded1[0][0]*encoded2[0][0]
        if len(res) > 0 && res[len(res)-1][0] == p {
            res[len(res)-1][1] += l 
        } else {
            res = append(res, []int{p, l})
        }
        encoded1[0][1]-= l
        encoded2[0][1]-= l
        if encoded1[0][1] == 0 {
            encoded1 = encoded1[1:]
        } 
        if encoded2[0][1] == 0 {
            encoded2 = encoded2[1:]
        }
    }
    return res
}
```