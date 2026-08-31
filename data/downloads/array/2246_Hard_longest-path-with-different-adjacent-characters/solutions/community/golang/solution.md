# Golang | DFS

**Author:** tw13
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3043547/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3043547/)

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
func longestPath(parent []int, s string) int {
    maxLength := 0
    n := len(parent)

    children := make([][]int, n)
    for i, pi := range parent {
        if pi == -1 {
            continue
        }
        children[pi] = append(children[pi], i)
    }

    dfs(0, children, s, &maxLength)
    return maxLength
}

func dfs(curNode int, children [][]int, s string, maxLength *int) int {
    maxPath1, maxPath2 := 0, 0
    for _, child := range children[curNode] {
        l := dfs(child, children, s, maxLength)
        if s[curNode] != s[child] {
            if l >= maxPath1 {
                maxPath2 = maxPath1
                maxPath1 = l
            } else if l > maxPath2 {
                maxPath2 = l
            }
        }
    }
    *maxLength = max(*maxLength, maxPath1+maxPath2+1)
    return maxPath1+1
}

func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}
```