# Solution:

**Author:** Dharma_Bharath
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4792929/](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4792929/)

---

# Code

```python []
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
            if root is None:
                return
            queue=deque([root])
            leftmost=None
            while queue:
                leftmost=queue.popleft()
                if leftmost.right:
                    queue.append(leftmost.right)
                if leftmost.left:
                    queue.append(leftmost.left)     
            return leftmost.val
```
```javascript []
var findBottomLeftValue = function(root) {
            const queue=[root]
            let node
            while (queue.length){
                const leftmost=queue.shift();
                node = leftmost.val;
                if (leftmost.right){
                    queue.push(leftmost.right);
                }                    
                if (leftmost.left){
                    queue.push(leftmost.left);
                }                      
            }
                   
            return node
};
```
```typescript []
var findBottomLeftValue = function(root) {
            const queue=[root]
            let node
            while (queue.length){
                const leftmost=queue.shift();
                node = leftmost.val;
                if (leftmost.right){
                    queue.push(leftmost.right);
                }                    
                if (leftmost.left){
                    queue.push(leftmost.left);
                }                      
            }
                   
            return node
};
```
```php []
class Solution {
    function findBottomLeftValue($root) {
            $queue=array ($root);
            $node=null;
            while (!empty($queue)){
                $leftmost=array_shift($queue);
                $node = $leftmost->val;
                if ($leftmost->right){
                    array_push($queue,$leftmost->right);
                }                    
                if ($leftmost->left){
                    array_push($queue,$leftmost->left);
                }                      
            }
                   
            return $node;
    }
}
```
