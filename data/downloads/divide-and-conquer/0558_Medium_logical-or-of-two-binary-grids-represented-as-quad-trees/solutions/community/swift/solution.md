# Stupid task

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/solutions/5131863/](https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/solutions/5131863/)

---

# Intuition
The problem is asking to return a new Quad-Tree that represents the logical OR of two given Quad-Trees. This means that if either of the corresponding nodes in the two Quad-Trees has a value of true, the resulting node in the new Quad-Tree should also have a value of true.

# Approach
The approach to solve this problem is to recursively traverse both Quad-Trees simultaneously. For each pair of corresponding nodes, if either node is a leaf and its value is true, then the corresponding node in the new Quad-Tree should also be a leaf with a value of true. If either node is a leaf and its value is false, then the corresponding node in the new Quad-Tree should be the other node. If neither node is a leaf, then the corresponding node in the new Quad-Tree should be an internal node, and its children should be the result of recursively applying the logical OR operation to the children of the two nodes.


# Complexity
- Time complexity: The time complexity is O(n) , where n
 is the total number of nodes in the Quad-Trees. This is because we need to visit every node in both Quad-Trees once.

- Space complexity: The space complexity is also O(n)
, because in the worst case, if neither of the Quad-Trees has any leaf nodes, we would need to create a new node for every node in the Quad-Trees. In addition, the recursive call stack could potentially go as deep as the height of the Quad-Trees, which in the worst case could be n.





# Code
```
class Solution {
    func intersect(_ quadTree1: Node?, _ quadTree2: Node?) -> Node? {
        if quadTree1 == nil {
            return quadTree2
        }
        if quadTree2 == nil {
            return quadTree1
        }
        if quadTree1!.isLeaf {
            return quadTree1!.val ? quadTree1 : quadTree2
        }
        if quadTree2!.isLeaf {
            return quadTree2!.val ? quadTree2 : quadTree1
        }
        
        let topLeft = intersect(quadTree1!.topLeft, quadTree2!.topLeft)
        let topRight = intersect(quadTree1!.topRight, quadTree2!.topRight)
        let bottomLeft = intersect(quadTree1!.bottomLeft, quadTree2!.bottomLeft)
        let bottomRight = intersect(quadTree1!.bottomRight, quadTree2!.bottomRight)
        
        if topLeft!.isLeaf && topRight!.isLeaf && bottomLeft!.isLeaf && bottomRight!.isLeaf && topLeft!.val == topRight!.val && topRight!.val == bottomLeft!.val && bottomLeft!.val == bottomRight!.val {
            return Node(topLeft!.val, true)
        } else {
            let node = Node(false, false)
            node.topLeft = topLeft
            node.topRight = topRight
            node.bottomLeft = bottomLeft
            node.bottomRight = bottomRight
            return node
        }
    }
}

```
Death for Putin! 
Glory to Ukraine, Freedom to Russia!