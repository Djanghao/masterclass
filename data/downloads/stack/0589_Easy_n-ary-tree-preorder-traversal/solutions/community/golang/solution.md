# Python/Go O( n ) sol. based on recursive and iterative. [ w/ Explanation ]

**Author:** brianchiang_tw
**Votes:** 9
**Link:** [https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/475016/](https://leetcode.com/problems/n-ary-tree-preorder-traversal/solutions/475016/)

---

Method_#1 Recursive pre-oreder traversal

```
class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        
        if not root:
            # base case:
            # empty node or empty tree
            return []
        
        else:
            # general case:

            path = []

            # Travese current node with preorder:
            path.append( root.val )
            
            # Traverse children with preorder:
            for child in root.children:
                path += self.preorder( child )
                
            return path
```

-------------------------------------------------

Method_#2 Iterative pre-order traversal

```
class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        
        # base_case:
        traverse_stack = [root]
        path = []
        
        # general case:
        while traverse_stack:
            
            current = traverse_stack.pop()
            
            if current:
                
                # Travese current node with preorder:
                path.append( current.val )
                

                if not current.children:
                    continue
                
                
                # Traverse children with preorder:
                # Left part if of higher priority than right part.
                # Thus, push right part before left part.
                for i in range( len(current.children)-1, -1, -1 ):
                    traverse_stack.append( current.children[i] )
                
        return path
```

-------------------------------------------------

Method_#3 DFS with generator

```

class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        
        def dfs( node ):
            
			## base case
            if not node:
				
				# empty node or empty tree
                return
            
			## general cases:
			
            yield node.val
            
            for child in node.children:
                yield from dfs( child )
            
            return
        
        # --------------------------
        return [ *dfs(root) ]
```

---

Recursive pre-order traversal in Go

```

func preorder(root *Node) []int {
    
    path := []int{}
    dfs(root, &path)
    return path
}


func dfs(node *Node, path *[]int){
    
    // base case
    if node == nil{
        return
    }
    
    // general cases
    *path = append(*path, node.Val)
    
    for _, child := range node.Children{
        dfs(child, path)   
    }
    
    return
    
}
```

---

Related leetcode challenge:

[Leetcode #144 Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)

---

Reference:

[1] [Python official docs about generator](https://docs.python.org/3/whatsnew/3.3.html#pep-380)