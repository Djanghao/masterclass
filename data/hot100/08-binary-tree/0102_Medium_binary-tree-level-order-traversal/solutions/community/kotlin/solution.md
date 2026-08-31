# O(n)time/BEATS 99.97% MEMORY/SPEED 0ms MAY 2022

**Author:** darian-catalin-cucer
**Votes:** 9
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/2008729/](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/2008729/)

---

```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
public class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        List<List<Integer>> wrapList = new LinkedList<List<Integer>>();
        
        if(root == null) return wrapList;
        
        queue.offer(root);
        while(!queue.isEmpty()){
            int levelNum = queue.size();
            List<Integer> subList = new LinkedList<Integer>();
            for(int i=0; i<levelNum; i++) {
                if(queue.peek().left != null) queue.offer(queue.peek().left);
                if(queue.peek().right != null) queue.offer(queue.peek().right);
                subList.add(queue.poll().val);
            }
            wrapList.add(subList);
        }
        return wrapList;
    }
}
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
class Solution {
     public:
        vector<vector<int>> levelOrder(TreeNode* root) {
            if(root==NULL)
               return {};
           vector<vector<int>> ans; 
            queue<TreeNode*> q;
            q.push(root);
            TreeNode *temp;
            int len;
            while(!q.empty()){
               len=q.size();
		       vector<int> v;
               for(int i=0;i<len;i++){
                    temp=q.front();
                    q.pop();
                    v.push_back(temp->val);

                   if(temp->left) q.push(temp->left);
                   if(temp->right) q.push(temp->right);
                }
		        ans.push_back(v);
            }
          return ans;
        }
     };
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        queue, ans = deque([root] if root else []), []
        while len(queue):
            qlen, row = len(queue), []
            for _ in range(qlen):
                curr = queue.popleft()
                row.append(curr.val)
                if curr.left: queue.append(curr.left)
                if curr.right: queue.append(curr.right)
            ans.append(row)
        return ans
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
var levelOrder = function(root) {
    let q = [root], ans = []
    while (q[0]) {
        let qlen = q.length, row = []
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()
            row.push(curr.val)
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        ans.push(row)            
    }
    return ans
};
```

```
```

```
```

The best result for the code below is ***68ms / 44.2MB*** (beats 100.00% / 45.25%).
* ***Kotlin***
```
class BinaryTreeLevelOrderTraversal {
    fun levelOrder(root: TreeNode?): List<List<Int>> {
        if (root == null) return emptyList()
        val result = mutableListOf<List<Int>>()
        val queue = LinkedList<TreeNode>()
        queue.add(root)
        while (queue.isNotEmpty()) {
            result.add(queue.toList().map { it.`val` })
            for (i in queue.indices) {
                val cur = queue.poll()
                cur.left?.let { queue.add(it) }
                cur.right?.let { queue.add(it) }
            }
        }
        return result
    }
}
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
class Solution {
    func levelOrder(_ root: TreeNode?) -> [[Int]] {
        var res: [[Int]] = []
        var queue: [TreeNode?] = root != nil ? [root] : []
        var parent\u0421ount = root != nil ? 1 : 0
        var child\u0421ount = 0
        var array: [Int] = []
        var index = 0
        
        while parent\u0421ount > 0 {
            if let node = queue[index] {
                if node.left != nil {
                    queue.append(node.left)
                    child\u0421ount += 1
                }
                
                if node.right != nil {
                    queue.append(node.right)
                    child\u0421ount += 1
                }
                
                array.append(node.val)
                if array.count == parent\u0421ount {
                    res.append(array)
                    array = []
                    parent\u0421ount = child\u0421ount
                    child\u0421ount = 0
                }
                
                index += 1
            }
        }
        
        return res
    }
    
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***