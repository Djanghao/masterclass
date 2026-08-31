# [Golang] - O(n) using Map

**Author:** nithingudla23
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-good-partitions/solutions/4413961/](https://leetcode.com/problems/count-the-number-of-good-partitions/solutions/4413961/)

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
func subArrayCount(a []int) int{
    m := map[int]int{}
    for i := 0; i < len(a); i++{
        m[a[i]] = i
    }

    var res int
    for i := 0; i < len(a); res++{
        lastIndex := m[a[i]]
        for j := i + 1; j < lastIndex; j++{
            lastIndex = max(m[a[j]], lastIndex)
        }
        i = lastIndex + 1
    }
    return res
}

func numberOfGoodPartitions(a []int) int {
    mod := 1000000007
    res := 1
    for i := subArrayCount(a); i > 1; i--{
        res = (res * 2) % mod
    }

    return res

}
```