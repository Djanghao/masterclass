# Go, min swap to sort nums + bfs

**Author:** viktor_komarov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/4138799/](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/4138799/)

---

# Code
```
func minimumOperations(root *TreeNode) int {
    if root == nil {
        return 0
    }

    out := 0
    queue := []*TreeNode{root}
    for len(queue) > 0 {
        row := make([]int, 0, len(queue))
        sz := len(queue)
        for i := 0; i < sz; i++ {
            top := queue[0]
            queue = queue[1:]
            row = append(row, top.Val)
            if top.Left != nil {
                queue = append(queue, top.Left)
            }
            if top.Right != nil {
                queue = append(queue, top.Right)
            }
        }
        if len(row) == 4 {
            out++
            out--
        }
        out+=minSwapsToSort(row)
    }
    return out
}

func minSwapsToSort(nums []int) int {
    sorted := make([]int, len(nums))
    copy(sorted, nums)
    sort.Ints(sorted)
    idx := make(map[int]int)
    for i, num := range nums {
        idx[num] = i
    }
    out := 0

    for i := range sorted {
        if sorted[i] != nums[i] {
            out++
            newPos := idx[sorted[i]]
            idx[nums[i]] = newPos
            idx[nums[newPos]] = i
            nums[i], nums[newPos] = nums[newPos], nums[i]
        }
    }
    return out
}
```