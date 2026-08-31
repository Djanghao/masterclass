# LIS (Sort & Binary Search implementation), Russian Doll Similar Problem Solution

**Author:** muzakkiy
**Votes:** 2
**Link:** [https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5786728/](https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5786728/)

---

# Intuition
the problem ask us to get maximum increasing path in 2D data, this is similar with [Russian Doll](https://leetcode.com/problems/russian-doll-envelopes/description/) problem. In russian doll problem, main idea is to doing longest increasing subsequence by sorting the Y coordinate and doing LIS on the X coordinate.
The only difference is, 1 coordinate should be included in the LIS. So i adjust the algorithm, the coordinate that should be placed in the solution found, we can't replace it with smaller number next.

# Approach
sort the Y coordinate increasing, and doing LIS on the X coordinate. if the included coordinate found, previous index can't be changed, so the included coordinate will be there! 
LIS that i used is O(log n) time complexity

# Complexity
- Time complexity:
$$O(n log n)$$

- Space complexity:
$$O(n)$$

# Code
```golang []
func maxPathLength(c [][]int, k int) int {
    s := c[k]
    sort.Slice(c, func(i, j int) bool {
        return (c[i][0] < c[j][0]) || (c[i][0] == c[j][0] && c[i][1] > c[j][1])
    })

    nc := make([][]int, 0)
    for i := 0; i < len(c); i++ {
        if c[i][0] == s[0] && c[i][1] != s[1] {
            continue
        } else {
            nc = append(nc, c[i])
        } 
    }

    c = nc

    lis := make([]int, 0)
    cantChange := -1
    for i := 0; i < len(c); i++ {
        index := sort.SearchInts(lis, c[i][1])
        if index == len(lis) {
            lis = append(lis, c[i][1])
        } else if c[i][1] > cantChange {
            lis[index] = c[i][1]
        }
        if c[i][0] == s[0] && c[i][1] == s[1] {
            lis = lis[:index+1]
            cantChange = s[1]
        } 
    }
    return len(lis)
}
```