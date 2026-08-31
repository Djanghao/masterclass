# golang best solution 99%

**Author:** zarifjorayev
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/solutions/5944532/](https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/solutions/5944532/)

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
```golang []

// isPerfect checks if the subtree rooted at node is a perfect binary tree and returns its size
func isPerfect(node *TreeNode) (bool, int) {
 if node == nil {
  return true, 0
 }

 // Check left and right subtree
 leftPerfect, leftSize := isPerfect(node.Left)
 rightPerfect, rightSize := isPerfect(node.Right)

 if leftPerfect && rightPerfect && leftSize == rightSize {
  // The current node forms a perfect subtree
  return true, leftSize + rightSize + 1
 }

 // If it doesn't form a perfect subtree
 return false, 0
}

// kthLargestPerfectSubtreeSize returns the k-th largest perfect binary subtree size
func kthLargestPerfectSubtree(root *TreeNode, k int) int {
 var sizes []int

 var collectSizes func(node *TreeNode)
 collectSizes = func(node *TreeNode) {
  if node == nil {
   return
  }

  // Check if the current subtree is a perfect binary tree
  if perfect, size := isPerfect(node); perfect {
   sizes = append(sizes, size)
  }

  // Continue traversing left and right
  collectSizes(node.Left)
  collectSizes(node.Right)
 }

 // Collect sizes of all perfect binary subtrees
 collectSizes(root)

 // Sort sizes in descending order
 sort.Sort(sort.Reverse(sort.IntSlice(sizes)))

 // If k is valid, return the k-th largest size
 if k <= len(sizes) {
  return sizes[k-1] // k-1 for zero-based indexing
 }

 return -1 // Not enough perfect binary subtrees
}
```