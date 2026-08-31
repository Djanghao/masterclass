# C# Recursive Divide and Conquer solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/solutions/5198401/](https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/solutions/5198401/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->The solution recursively breaks down the problem into smaller sub-problems (sub-trees) and combines the results.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Node Definition:
//  *A 'Node' class is defined to represent each node in the quad-tree. Each node has attributes 'val' (indicating the value of the node), 'isLeaf' (indicating whether the node is a leaf node), and pointers to the four children nodes.
//  Intersect Function:
//  Base Case:
//  *If quadTree1 is a leaf:
//  *If its value (val) is true, it means the entire region represented by this node is 1. The result of an OR operation with any node will also be 1.
//  *If its value is false, the result will be quadTree2 since OR operation with 0 has no effect.
//  *If quadTree2 is a leaf, similar logic applies.
//  Recursive Case:
//  *If neither node is a leaf, recursively compute the OR for all four quadrants.
//  *After computing the results for all four quadrants, check if they can be merged into a single leaf node:
//  **This happens if all four child nodes are leaves and have the same value.
//  **If so, return a new leaf node with that value.
//  *Otherwise, return a non-leaf node with the computed children.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(N) where N is the number fo nodes in the quad tree.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(N). The space complexity is determined by the depth of the recursion stack. In the worst case, the depth of the recursion stack is proportional to the height of the quad-tree. For a perfectly balanced quad-tree, the height is O(log N), but since each node can have up to four children and the tree can be very unbalanced, the worst case can involve storing a stack frame for each node in the tree. Additionally, the space required to store the result is also O(N) as we are constructing a new quad-tree with potentially the same number of nodes.
___

# Code
```
/*
// Definition for a QuadTree node.
public class Node {
    public bool val;
    public bool isLeaf;
    public Node topLeft;
    public Node topRight;
    public Node bottomLeft;
    public Node bottomRight;

    public Node(){}
    public Node(bool _val,bool _isLeaf,Node _topLeft,Node _topRight,Node _bottomLeft,Node _bottomRight) {
        val = _val;
        isLeaf = _isLeaf;
        topLeft = _topLeft;
        topRight = _topRight;
        bottomLeft = _bottomLeft;
        bottomRight = _bottomRight;
    }
}
*/

public class Solution {
    public Node Intersect(Node quadTree1, Node quadTree2) {
        if (quadTree1.isLeaf) {
            if (quadTree1.val) {
                return new Node(true, true, null, null, null, null);
            } else {
                return quadTree2;
            }
        }
        
        if (quadTree2.isLeaf) {
            if (quadTree2.val) {
                return new Node(true, true, null, null, null, null);
            } else {
                return quadTree1;
            }
        }
        
        Node topLeft = Intersect(quadTree1.topLeft, quadTree2.topLeft);
        Node topRight = Intersect(quadTree1.topRight, quadTree2.topRight);
        Node bottomLeft = Intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
        Node bottomRight = Intersect(quadTree1.bottomRight, quadTree2.bottomRight);
        
        if (topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf &&
            topLeft.val == topRight.val && topRight.val == bottomLeft.val && bottomLeft.val == bottomRight.val) {
            return new Node(topLeft.val, true, null, null, null, null);
        }
        
        return new Node(false, false, topLeft, topRight, bottomLeft, bottomRight);
    }
}

```