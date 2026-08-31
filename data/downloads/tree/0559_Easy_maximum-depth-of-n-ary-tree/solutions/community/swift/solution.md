# Swift Easy Iterative and Recursive solution

**Author:** punk9595
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/757546/](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/solutions/757546/)

---

```
class Solution {
//Iterative
    func maxDepth(_ root: Node?) -> Int {
        guard let root = root else { return 0 }
        var stack: [(node: Node, level: Int)] = [(root, 1)]
        var maxLevel = 1
        
        while !stack.isEmpty {
            let parent = stack.popLast()
            maxLevel = max(maxLevel, parent!.level)
            
            parent!.node.children.forEach { 
                stack.append(($0, parent!.level+1))
            }
            
        }
        return maxLevel
    }
//Recursive    
    func maxDepth(_ root: Node?) -> Int {
        guard let root = root else { return 0 }
        var tempMax = 0
        root.children.forEach {
            tempMax = max(tempMax, maxDepth($0))
        }
        return tempMax + 1
    }
    
}
```