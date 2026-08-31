# 🌻 100% | Classic BFS . 2 ways in each language (C++, Go, Python, Ts/Js, Java)

**Author:** nuoxoxo
**Votes:** 1
**Link:** [https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/2533561/](https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/2533561/)

---

There are two ways to add values of each level to the `result` array 
1. add one at a time, when we have finished iterating through the children of a particular node to the `deque`, like this:
```
for (Node *n: node->children)
{
	dq.push_back(n);
}
temp.push_back(node->val);
```
2. or, we can add them as we iterate through children, 
```
for (Node *n: node->children)
{
	dq.push_back(n);
	temp.push_back(n->val); // added
}
```
Note: in the 2nd way, result should be initiated with the `root.val` inside.
```
vector<vector<int>> r;

r.push_back({root->val}); /* Here */
```
Also on each level traversal, before we add `temp` to the `result` array, we have to make sure that `temp` is not empty. 

-----
# C++ . 1
```cpp
class Solution {
public:
    vector<vector<int>> levelOrder(Node* root)
    {
        vector<vector<int>> r;
        deque<Node*>        dq;

        if (!root)
            return r;
        dq.push_back(root);
        while (!dq.empty())
        {
            vector<int>	temp;
            int		len;

	    len = dq.size();
            while (len--)
            {
                Node *node = dq.front();

                dq.pop_front();
                for (Node *n: node->children)
                {
                    dq.push_back(n);
                }
                temp.push_back(node->val);
            }
            r.push_back(temp);
        }
        return r;
    }
};
```
C++ . 2
```cpp
class Solution {
public:
    vector<vector<int>> levelOrder(Node* root)
    {
        vector<vector<int>> r;
        deque<Node*>        dq;

        if (!root)
            return r;
        dq.push_back(root);
        r.push_back({root->val}); // added
        while (!dq.empty())
        {
            int len = dq.size();
            vector<int> temp;

            while (len--)
            {
                Node *node = dq.front();

                dq.pop_front();
                for (Node *n: node->children)
                {
                    dq.push_back(n);
                    temp.push_back(n->val); // added
                }
            }
            if (!temp.empty())
                r.push_back(temp);
        }
        return r;
    }
};
```
Python . 1
```py
class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        r = []
        if not root:
            return r
        dq = deque()
        dq.append(root)
        while dq:
            temp = []
            size = len(dq)
            for _ in range(size):
                node = dq.popleft()
                for n in node.children:
                    dq.append(n)
                temp.append(node.val)
            r.append(temp)
        return r
```py
# Python . 2
```py
class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        r = []
        if not root:
            return r
        r.append([root.val])
        dq = deque()
        dq.append(root)
        while dq:
            temp = []
            size = len(dq)
            for _ in range(size):
                node = dq.popleft()
                for n in node.children:
                    dq.append(n)
                    temp.append(n.val)
            if temp:
                r.append(temp)
        return r
```
# Go . 1
```go
func levelOrder(root *Node) [][]int {
    r := [][] int {}
    dq := [] *Node {}
    if root == nil {
        return r
    }
    dq = append(dq, root)
    for len(dq) > 0 {
        temp := [] int {}
        size := len(dq)
        for i := 0; i < size; i++ {
            node := dq[0]
            dq = dq[1:]
            temp = append(temp, node.Val)
            for _, child := range node.Children {
                dq = append(dq, child)
            }
        }
        r = append(r, temp)
    }
    return r
}
```
# Go . 2
```go

func levelOrder(root *Node) [][]int {
    r := [][] int {}
    dq := [] *Node {}
    if root == nil {
        return r
    }
    r = append(r, [] int { root.Val })
    dq = append(dq, root)
    for len(dq) > 0 {
        temp := [] int {}
        size := len(dq)
        for i := 0; i < size; i++ {
            node := dq[0]
            dq = dq[1:]
            for _, child := range node.Children {
                dq = append(dq, child)
                temp = append(temp, child.Val)
            }
        }
        if len(temp) != 0 {
            r = append(r, temp)
        }
    }
    return r
}
```
# TS / Js . 1
```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
    let r = []
    if (!root) {
        return r
    }
    let dq = [root]
    while (dq.length > 0) {
        let temp = []
        let len = dq.length
        while (len-- > 0) {
            let node = dq.shift()
            for (let n of node.children) {
                dq.push(n)
            }
            temp.push(node.val)
        }
        r.push(temp)
    }
    return r
};
```
# TS/Js . 2
```ts
var levelOrder = function(root) {
    let r = []
    if (!root) {
        return r
    }
    r.push([root.val])
    let dq = [root]
    while (dq.length > 0) {
        let temp = []
        let len = dq.length
        while (len-- > 0) {
            let node = dq.shift()
            for (let n of node.children) {
                dq.push(n)
                temp.push(n.val)
            }
        }
        if (temp.length > 0) {
            r.push(temp)
        }
    }
    return r
};
```
Java
```java
class Solution {
    public List<List<Integer>> levelOrder(Node root) {
        List<List<Integer>> r = new LinkedList<>();
        LinkedList<Node>    dq = new LinkedList<>();

        if (root == null)
            return r;
        dq.add(root);
        while (! dq.isEmpty())
        {
            LinkedList<Integer> temp = new LinkedList<>();
            int                 len = dq.size();

            while (len-- > 0)
            {
                System.out.println(len);
                Node    node = dq.pollFirst();

                for (Node n: node.children)
                    dq.addLast(n);
                temp.add(node.val);
            }
            r.add(temp);
        }
        return r;
    }
}
```