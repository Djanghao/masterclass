# Python3 clean dfs solutin - Encode N-ary Tree to Binary Tree

**Author:** r0bertz
**Votes:** 3
**Link:** [https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/875973/](https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/solutions/875973/)

---

```
class Codec:
    def encode(self, root: 'Node') -> TreeNode:
        if not root:
            return
        ans = TreeNode(root.val)
        if root.children:
            children = list(map(self.encode, root.children))
            ans.right = children[0]
            for i in range(len(children)-1):
                children[i].left = children[i+1]
        return ans
        
    def decode(self, data: TreeNode) -> 'Node':
        if not data:
            return
        ans = Node(data.val, [])
        if data.right:
            n = data.right
            while n:
                ans.children.append(self.decode(n))
                n = n.left
        return ans  
```