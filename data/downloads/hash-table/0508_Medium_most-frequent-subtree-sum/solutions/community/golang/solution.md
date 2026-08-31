# GoLang Solution

**Author:** b0mink
**Votes:** 2
**Link:** [https://leetcode.com/problems/most-frequent-subtree-sum/solutions/948357/](https://leetcode.com/problems/most-frequent-subtree-sum/solutions/948357/)

---


```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

// Find the most frequent sum of subtree
func findFrequentTreeSum(root *TreeNode) []int {
    
    // Create map to count the frequency (key = sum, value = frequency)
    var m = make(map[int]int)
    
    // Handle nil input
    if root == nil {
        return []int{}
    }
    
    DFSFunc(root, m)
    
    return findMostFrequent(m)
    
}

// DFS function to return the sum of subtree and update the map 
func DFSFunc(root *TreeNode, m map[int]int) int{
    
    sum := root.Val
    
    if root.Left != nil {
        sum += DFSFunc(root.Left, m)
    }
    if root.Right != nil {
        sum += DFSFunc(root.Right, m)
    }

    m[sum]++
    
    return sum
}

// Find the most frequent sum(s) in the map
func findMostFrequent(m map[int]int)[]int{
    
    max := 0
    
    retVal := []int{}
    
    for key, count := range m {
        if count > max{
            max=count
            retVal = nil
            retVal = append(retVal, key)
        } else if count == max {
            retVal = append(retVal, key)
        }
    }
    return retVal
}

```