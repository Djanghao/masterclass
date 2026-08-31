# 📌 [ Typescript, Go ] Easy Solution || Tree || DFS || Recursion

**Author:** deatryde
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/2465133/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/2465133/)

---

# Typescript
| **Time Complexity**| **Space Complexity**|
|:--------------------:|:---------------------:|
|       O(N)       	 |        O(N)       	 |
```
function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    
    return DFS(root, 0)
}; 

function DFS(root: TreeNode | null, count : number): number {
    if(!root){
        return count;
    }
    
    count++;
    return Math.max(DFS(root.left, count), DFS(root.right, count))
}
```

# Go
| **Time Complexity**| **Space Complexity**|
|:--------------------:|:---------------------:|
|       O(N)       	 |        O(N)       	 |
```
func maxDepth(root *TreeNode) int {
    if root == nil {
        return 0
    }
    
    left := maxDepth(root.Left)
    right := maxDepth(root.Right)
    
    var curr int
    
    if left > right {
        curr = left
    } else {
        curr = right
    }
    
    return curr + 1
}
```