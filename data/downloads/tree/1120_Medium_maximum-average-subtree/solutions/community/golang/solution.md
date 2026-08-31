# [Go] 4ms/100%/100% Postorder traversal

**Author:** svrakitin
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/903358/](https://leetcode.com/problems/maximum-average-subtree/solutions/903358/)

---

```
type Stats struct {
    Sum   int
    Count int
}

func maximumAverageSubtree(root *TreeNode) float64 {
    var result float64
    
    var traverse func(*TreeNode) Stats
    traverse = func(node *TreeNode) Stats {
        if node == nil {
            return Stats{}
        }
        
        left := traverse(node.Left)
        right := traverse(node.Right)
        
        stats := Stats{
            Sum: node.Val + left.Sum + right.Sum,
            Count: 1 + left.Count + right.Count,
        }
        
        avg := float64(stats.Sum) / float64(stats.Count)
        if avg > result {
            result = avg
        }
        
        return stats
    }
    
    traverse(root)
    
    return result
}
```