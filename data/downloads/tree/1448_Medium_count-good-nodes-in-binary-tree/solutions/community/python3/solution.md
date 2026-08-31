# BFS With MaxValue | Template of Similar Problems Python

**Author:** Uttam1728
**Votes:** 116
**Link:** [https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/635351/](https://leetcode.com/problems/count-good-nodes-in-binary-tree/solutions/635351/)

---

From very First problem I used to apply BFS only so i have come up with this soln.
every Easy/Mediam level Tree Problems has same concept of travesal of tree and keep track of other parameter like path or sum etc... you can use Same template given hear or your Own..

```
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
	
		ans = 0
        q = deque()
		
        q.append((root,-inf))
        '''perform bfs  with track of maxval till perant node'''	

        while q:
            node,maxval = q.popleft()
			 '''if curr node has max or eqvalue till current max'''
            if node.val >= maxval:  
                ans += 1
				
            if node.left:    #new max update
                q.append((node.left,max(maxval,node.val)))
            
            if node.right:
                q.append((node.right,max(maxval,node.val)))
                
        return ans
```
hear listed a few problems you can do with same template..

[112. Path Sum](https://leetcode.com/problems/path-sum/)
```
def hasPathSum(self, root: TreeNode, sumT: int) -> bool:
        if not root:
            return False
        q = deque()
        q.append((root,0))        # track of path
        while q:
            node,value = q.popleft()
            print(value)
            if not node.left and not node.right:
                if sumT == value + node.val:
                    return True
            if node.left:
                q.append((node.left,value+node.val))
            if node.right:
                q.append((node.right,value+node.val))
        return False
```

[100.Same Tree](https://leetcode.com/problems/same-tree/)
```
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        queue = deque()
        queue.append(p)
        queue.append(q)
        while queue:
            node1= queue.popleft()
            node2 = queue.popleft()
            
            if not node1 and not node2:      # track of same node you can define fun isMatch(n1,n2) and based on that track or return also
                continue
            
            if not node1 or not node2:
                return False
            
            if node1.val != node2.val:
                return False
            
            queue.append(node1.left)
            queue.append(node2.left)
            queue.append(node1.right)
            queue.append(node2.right)
            
        return True
```
[101.symmetric-tree](https://leetcode.com/problems/symmetric-tree/)
```
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
#         q = deque()
#         q.append(root)
#         q.append(root)
#         while q:
#             t1 = q.popleft()
#             t2 = q.popleft()
            
#             if not t1 and not t2:
#                 continue
#             if not t1 or not t2:
#                 return False
#             if t1.val != t2.val:
#                 return False
            
#             q.append(t1.right)
#             q.append(t2.left)
#             q.append(t1.left)
#             q.append(t2.right)
#         return True
```
[102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
```
def levelOrder(self, root: TreeNode) -> List[List[int]]:

        if not root:
            return []
        q=deque()
        q.append((root,1))
        answer = defaultdict(list)        #track of level order nodes
        
        while q:
            node,depth= q.popleft()
            answer[depth].append(node.val)
            if node.left:
                q.append((node.left,depth+1))
            if node.right:
                q.append((node.right,depth+1))
        return answer.values()
```
[103. Binary Tree Zigzag Level Order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)
```
 def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        ans = defaultdict(list)
        if not root:
            return None
        q = deque()
        q.append((root,0))
        
        while q:
            node,depth = q.popleft()
            ans[depth].append(node.val)
            if node.left :
                q.append((node.left,depth+1))
            if node.right :
                q.append((node.right,depth+1))
        ct = 0        
        for i in ans:
            if ct % 2 :
                ans[i] = reversed(ans[i])
            ct+=1
        return ans.values()
```

And Many More [257. Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/) [404. Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/) [1022. Sum of Root To Leaf Binary Numbers](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/)

for N-array tree
[559. Maximum Depth of N-ary Tree](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/)
```
def maxDepth(self, root: 'Node') -> int:
        

    
        if not root:
            return 0
        q=deque()
        maxdepth=-(math.inf)
        q.append((root,1))
        while q:
            node,depth = q.popleft()
            if not node.children:
                maxdepth=max(maxdepth,depth)
                
            for i in  node.children:
                q.append((i,depth+1))
           
        return maxdepth
```

You can also find By your self many more examples...by your own.. find and try to applay this kind of methods and thinks in that way also a bit.. thank you. happy coding.