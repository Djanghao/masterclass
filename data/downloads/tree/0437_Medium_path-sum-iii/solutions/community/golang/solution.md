# DFS - 2 solutions - 9ms

**Author:** tuanbieber
**Votes:** 5
**Link:** [https://leetcode.com/problems/path-sum-iii/solutions/2309165/](https://leetcode.com/problems/path-sum-iii/solutions/2309165/)

---

**Be careful with your shallow copy and deep copy in the currentPath parameter**
- As you see in my 1st solution: I use deep copy for every new currentPath, that would be a little bit slower, but you don't need to remove the last item you append to the recursion stack later (The line before the return statement)
	- Deep copy
	`newCurrentPath := make([]int, len(currentPath))`
    `copy(newCurrentPath, currentPath)`

- In 2nd solution, I use the shallow copy, basically, it means all the recursion use the same currentPath, that's why you need to remove item from recursion stack (The line before the return statement)
	- Shallow copy
	Then need to remove 
	`currentPath = currentPath[:len(currentPath)-1]`

```
func pathSum(root *TreeNode, targetSum int) int {
    return dfs(root, targetSum, []int{})
}

func dfs(root *TreeNode, target int, currentPath []int) int {
    if root == nil {
        return 0
    }
    
    newCurrentPath := make([]int, len(currentPath))
    copy(newCurrentPath, currentPath)
    
    newCurrentPath = append(newCurrentPath, root.Val)
    pathCount, pathSum := 0, 0
    
    for i := len(newCurrentPath)-1; i >= 0; i-- {
        pathSum += newCurrentPath[i]
        
        if pathSum == target {
            pathCount++
        }
    }
    
    pathCount += dfs(root.Left, target, newCurrentPath)
    pathCount += dfs(root.Right, target, newCurrentPath)
    
    return pathCount
}
```

```
func pathSum(root *TreeNode, targetSum int) int {
    return dfs(root, targetSum, []int{})
}

func dfs(root *TreeNode, target int, currentPath []int) int {
    if root == nil {
        return 0
    }
    
    currentPath = append(currentPath, root.Val)
    pathCount, pathSum := 0, 0
    
    for i := len(currentPath)-1; i >= 0; i-- {
        pathSum += currentPath[i]
        
        if pathSum == target {
            pathCount++
        }
    }
    
    pathCount += dfs(root.Left, target, currentPath)
    pathCount += dfs(root.Right, target, currentPath)
    
    currentPath = currentPath[:len(currentPath)-1]
    
    return pathCount
}
```