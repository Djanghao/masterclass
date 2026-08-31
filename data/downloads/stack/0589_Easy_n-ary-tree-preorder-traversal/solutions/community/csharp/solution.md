# 💢☠💫Easiest👾Faster✅💯 Lesser🧠 🎯 C++✅Python3🐍✅Java✅C✅Python🐍✅C#✅💥🔥💫Explained☠💥🔥 Beats 100

**Author:** Edwards310
**Votes:** 11
**Link:** [https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/5692438/](https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/5692438/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![Screenshot 2024-08-26 113704.png](./images/1.png)
![Screenshot 2024-08-26 114739.png](./images/2.png)
![Screenshot 2024-08-26 115832.png](./images/3.png)
![Screenshot 2024-08-26 120048.png](./images/4.png)
![Screenshot 2024-08-26 120311.png](./images/5.png)
![Screenshot 2024-08-26 120650.png](./images/6.png)
![Screenshot 2024-08-26 120945.png](./images/7.png)

---
***Also Visit the PostOrder for N-ary Tree .. This will help you to learn the concept better***
1. ***Q - 590***
https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/5691837/easiestfaster-lesser-cpython3javacpythoncexplained-beats-100
2. ***Q - 429***
 https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/5693741/easiestfaster-lesser-cpython3javacpythoncexplained-beats-100
---


```javascript []
//JavaScript Code
/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const arr = []
    const preOrder = ((root) =>{
        if (root == undefined)
            return
        
        arr.push(root.val)
        for (let child of root.children)
            preOrder(child)
    })
    
    preOrder(root)
    return arr
};
```
```C++ []
//C++ Code
/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;

    Node() {}

    Node(int _val) {
        val = _val;
    }

    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    vector<int> res;
    void preOrder(Node* root){
        if(!root)
            return;
        res.push_back(root->val);
        
        for(auto child : root->children)
            preOrder(child);
        
    }
public:
    vector<int> preorder(Node* root) {
        preOrder(root);
        return res;
    }
};
```
```Python3 []
#python3 Code
"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        result = []
        def dfs(root : 'Node') -> None:
            if not root:
                return
            
            result.append(root.val)
            for child in root.children:
                dfs(child)
                
        dfs(root)
        return result
        
```
```Java []
//Java Code
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    private void preOrder(Node root, List<Integer> res){
        if (root == null)
            return;
        
        res.add(root.val);
        
        for (Node node : root.children)
            preOrder(node, res);
    }
    public List<Integer> preorder(Node root) {
        List<Integer> res = new ArrayList<>();
        preOrder(root, res);
        return res;
    }
}
```
```C []
//C Code
/**
 * Definition for a Node.
 * struct Node {
 *     int val;
 *     int numChildren;
 *     struct Node** children;
 * };
 */

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
void preOrder(struct Node* root, int* arr, int* returnSize){
    if(!root)
        return ;
    arr[(*returnSize)++] = root->val;
    
    for(int i = 0; i < root->numChildren; ++i)
        preOrder(root->children[i], arr, returnSize);
}

int* preorder(struct Node* root, int* returnSize) {
    int* arr = (int*)calloc(sizeof(int), 10001);
    *returnSize = 0;
    preOrder(root, arr, returnSize);
    return arr;
}
```
```Python []
#Python Code
"""
# Definition for a Node.
class Node(object):
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution(object):
    def preorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        res = []
        def preOrder(root):
            if not root:
                return
            res.append(root.val)
            for child in root.children:
                preOrder(child)
        
        preOrder(root)
        return res
```
```C# []
//C# Code
/*
// Definition for a Node.
public class Node {
    public int val;
    public IList<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val,IList<Node> _children) {
        val = _val;
        children = _children;
    }
}
*/

public class Solution {
    List<int> res = new List<int>();
    private void preOrder(Node root){
        if(root == null)
            return;
        res.Add(root.val);
        
        foreach(Node child in root.children)
            preOrder(child);
    }
    public IList<int> Preorder(Node root) {
        preOrder(root);
        return res;
    }
}
```
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(n)
# Code
![th.jpeg](./images/8.jpeg)
