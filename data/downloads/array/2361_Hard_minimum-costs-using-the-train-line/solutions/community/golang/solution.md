# Beats 100% of solutions in Go

**Author:** ganeshsanap
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/4988869/](https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/4988869/)

---

# Approach
The approach is simply to maintain prev express & regular states & computes next states for both routes & use minimum value between them any any stage.

# Complexity
- Time complexity:
O(n) where n is the number of stops

- Space complexity:
O(n) where where n is the number of stops

# Code
```
unc minimumCosts(regular []int, express []int, expressCost int) []int64 {
    ans := make([]int64, 0)
    var r_prev int64 = 0
    var e_prev int64 =  int64(expressCost)

    for i:=0; i < len(regular); i++ {
        r_curr := min(r_prev, e_prev) + int64(regular[i])
        e_curr := min(e_prev, r_prev+int64(expressCost)) + int64(express[i])

        ans = append(ans, min(r_curr, e_curr))
        r_prev = r_curr
        e_prev = e_curr
    }
    return ans
}
```