# Golang O(n)

**Author:** Balloon66688
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/2940950/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/2940950/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minSwaps(data []int) int {
    nm := 0
    for _, v := range data {
        if v == 1 {
            nm += 1
        }
    }
    tem := 0
    ans := 0
    for i := 0; i < nm; i ++ {
        if data[i] == 0 {
            ans += 1
        }
    }
    tem = ans
    for i := nm; i < len(data); i++ {
        if data[i] == 0 {
            ans += 1
        }
        k := i - nm
        if data[k] == 0 {
            ans -= 1
        }
        if tem > ans {
            tem = ans
        }
    }
    return tem
}
```