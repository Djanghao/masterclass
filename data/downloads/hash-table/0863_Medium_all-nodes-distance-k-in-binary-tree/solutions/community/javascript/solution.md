# Javascript DFS

**Author:** fbecker11
**Votes:** 28
**Link:** [https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/843575/](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/solutions/843575/)

---

```
var distanceK = function(root, target, K) {
  if(!root) return []
  const node = findTarget(root, null, target)  
  const res = []
  findAllKApart(node, K, res)
  return res
};

function findTarget(root, parent, target){
  if(!root) return null
  root.parent = parent
  if(root === target){    
   return root 
  }    
  return findTarget(root.left, root, target) || findTarget(root.right, root, target)    
}

function findAllKApart(root, k, res){
  if(!root || root.visited) return res
  if(k == 0){
    res.push(root.val)
    return res
  }   
  root.visited = true
  findAllKApart(root.left, k-1, res)
  findAllKApart(root.right, k-1, res)
  findAllKApart(root.parent, k-1, res)
  return res
}
```