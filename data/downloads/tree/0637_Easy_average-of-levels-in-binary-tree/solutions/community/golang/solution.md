# Python/Go O(n) by level-order-traversal. [ w/ Explanation ]

**Author:** brianchiang_tw
**Votes:** 11
**Link:** [https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/492462/](https://leetcode.com/problems/average-of-levels-in-binary-tree/solutions/492462/)

---

Python/Go O( n ) sol. based on level-order-traversal

---

Concise version in Python:

```
class Solution:
    def averageOfLevels(self, root: TreeNode) -> List[float]:
        
        if not root:
            
            # Quick response for empty tree
            return []
        
        traversal_q = [root]
        
        average = []
        
        while traversal_q:
            
            # compute current level average
            cur_avg = sum( (node.val for node in traversal_q if node) ) / len(traversal_q)
            
            # add to result
            average.append( cur_avg )
            
            # update next level queue
            next_level_q = [ child for node in traversal_q for child in (node.left, node.right) if child ]
            
            # update traversal queue as next level's
            traversal_q = next_level_q
            
        return average
```

---
```

Share another implementation with deque in Python

from collections import deque

class Solution:
    def averageOfLevels(self, root: TreeNode) -> List[float]:

        queue = deque([root])
        
        average_of_level = []
        
        while queue:
            
            # valid nodes on current level
            size = len(queue)
            
            totalSum = 0
            
            for _ in range(size):
                
                # pop one node from traversal queue
                node = queue.popleft()
                
                # accumulate sum of current level
                totalSum += node.val
                
                # add left child if it exists
                if node.left:
                    queue.append(node.left)
                    
                # add right child if it exists
                if node.right:
                    queue.append(node.right)
            
            # add current level's average value to list
            average_of_level.append(totalSum/size)
        
        return average_of_level
```

---

**Implementation** in Go

```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func averageOfLevels(root *TreeNode) []float64 {
    
    if root == nil{
        return []float64{}
    }
    
    curLevelQ := []*TreeNode{root}
    
    averagePerLevel := []float64{}
    
    for len(curLevelQ) != 0{
        
        nextLevelQ := []*TreeNode{}
        curLevelSum := 0.0
        
        for _, node:= range curLevelQ{
        
            // update current level summation
            if node != nil{
                curLevelSum += float64(node.Val)
            }
            
            // Add left child
            if node.Left != nil{
                nextLevelQ = append(nextLevelQ, node.Left)
            }
            
            // Add right child
            if node.Right != nil{
                nextLevelQ = append(nextLevelQ, node.Right)
            }
            
        }
        
        curAvg := curLevelSum / float64(len(curLevelQ))
        
        averagePerLevel = append(averagePerLevel, curAvg)
        
        curLevelQ = nextLevelQ
        
    }
    //End of level order traversal
 
    return averagePerLevel
}
//End of function averageOfLevels
```