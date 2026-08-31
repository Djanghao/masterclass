# GO Sorting + Prefix Sum

**Author:** Arkadiy1A
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3822484/](https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3822484/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(m*log(m))

- Space complexity:
O(m)

# Code
```
func maxRunTime(n int, batteries []int) int64 {
    sort.Ints(batteries)
    live := make([]int64, n)
    for i := 0; i < n; i++{
        live[i] = int64(batteries[len(batteries) - n + i])
    }
    extra := int64(0)
    for i := 0; i < len(batteries) - n; i++{
        extra += int64(batteries[i])
    }
    for i := 0; i < n-1; i++{
        if extra < int64(i + 1) * (live[i + 1] - live[i]){
            return live[i] + extra / int64(i + 1)
        }
        extra -= int64(i + 1) * (live[i + 1] - live[i])
    }
    return live[n - 1] + extra / int64(n)
}
```