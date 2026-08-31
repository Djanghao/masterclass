# Go  - Python - C++  BFS clean solution

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/2532159/](https://leetcode.com/problems/n-ary-tree-level-order-traversal/solutions/2532159/)

---

**Go solution**

```
func levelOrder(root *Node) [][]int {
    var result [][]int
    
    if root == nil { 
        return result 
    }
    
    var queue []*Node
    queue = append(queue, root)
    
    for len(queue) > 0 {
        length := len(queue)
        
        var levelNodes []int
        
        for i := 0; i < length; i++ {
            levelNodes = append(levelNodes, queue[i].Val)
            
            for _, child := range queue[i].Children {
                if child != nil {
                    queue = append(queue, child)
                }
            }
        }
        
        result = append(result, levelNodes)
        
        if len(queue) == length {
            break
        }
        
        queue = queue[length:]
    }

    return result
}

```

**C++ solution**

```
class Solution {
public:
  vector<vector<int>> levelOrder(Node* root) {
    vector<vector<int>> result;

    if (!root) {
        return result;
    }
      
    queue <Node *> q;
    q.push(root);

    while(!q.empty()) {
        int size = q.size();
        vector<int> levelNodes;

        while(size--) {      
            levelNodes.push_back(q.front()->val);
            
            for (int j = 0; j != q.front()->children.size(); j++) {
                q.push(q.front()->children[j]);
            }
            
            q.pop();
        }
        
        result.push_back(levelNodes);
    }
      
    return result;       
  }
};
```

**Python solution**

```
class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:
        result = []
        
        if root is None:
            return result
        
        queue = collections.deque()
        queue.append(root)
        
        while queue:
            length = len(queue)
            levelNodes = [] 
            
            for i in range(length):
                dequeuedItem = queue.popleft()
                
                levelNodes.append(dequeuedItem.val) 
                
                for child in dequeuedItem.children:  
                    queue.append(child)
            
            result.append(levelNodes) 

        return result
```