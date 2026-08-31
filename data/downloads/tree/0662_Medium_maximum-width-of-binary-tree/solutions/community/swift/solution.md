# Help wanted, BFS solution, process exited with signal SIGILL ?

**Author:** AlexanderBogdan
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/2026613/](https://leetcode.com/problems/maximum-width-of-binary-tree/solutions/2026613/)

---

The solution is right, and straitforward.
Unfortunatly sometimes leetcode returns.
```
Runtime Error
process exited with signal SIGILL
```
for this input:
[0,0,0,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null,null,0,0,null]

It is my solution, but I tested all other solution that were before accepted and get a Runtime Error for all of them.
```
class Solution {
    
    func widthOfBinaryTree(_ root: TreeNode?) -> Int {
        guard let root = root else {
            return 0
        }
        
        var deque: [(TreeNode, Int)] = [(root, 1)]
        var maxWidth = 1
        
        
        while deque.count > 0 {
            let count = deque.count
            let (_, indexL) = deque.first!
            let (_, indexR) = deque.last!
            maxWidth = max(indexR - indexL + 1, maxWidth)
            
            for _ in 0..<count {
                let (node, index) = deque.removeFirst()
                if let left = node.left {
                    deque.append((left, index * 2))
                }
                if let right = node.right {
                    deque.append((right, index * 2 + 1))
                }
            }   
        }
        return maxWidth
    }
}
```