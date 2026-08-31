# Golang 100%

**Author:** Balloon66688
**Votes:** 0
**Link:** [https://leetcode.com/problems/depth-of-bst-given-insertion-order/solutions/3822181/](https://leetcode.com/problems/depth-of-bst-given-insertion-order/solutions/3822181/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxDepthBST(order []int) int {
    if len(order) == 0 {
        return 0
    }
    if len(order) == 1 {
        return 1
    }

    if (check(order)) {
        return len(order)
    }

    d := order[0]
    // index := 1
    left := []int{}
    right := []int{}
    for _, v := range order {
        if v < d {
            left = append(left, v)
        }
        if v > d {
            right = append(right, v)
        }
    }
    // left := order[:index]
    // right := order[index:]
    // fmt.Println(left, right)
    // if len(left) == 0 {
    //     return len(order)
    // } else if len(right) == 0 {
    //     return len(order)
    // } else {
        return 1 + max(maxDepthBST(left), maxDepthBST(right))
    // }
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func check(order []int) bool {
    i := 0
    for i < len(order) - 1 && order[i+1] > order[i] {
        i++
    }

    if i == len(order) - 1 {
        return true
    }

    i = 0
    for i < len(order)-1 && order[i+1] < order[i] {
        i++
    }

    if i == len(order) - 1{
        return true
    }
    return false
}
```