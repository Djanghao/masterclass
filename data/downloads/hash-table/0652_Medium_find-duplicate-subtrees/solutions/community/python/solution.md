# Python solution explained in two steps - for beginners

**Author:** ikna
**Votes:** 158
**Link:** [https://leetcode.com/problems/find-duplicate-subtrees/solutions/1571352/](https://leetcode.com/problems/find-duplicate-subtrees/solutions/1571352/)

---

Lets divide the problem into two:

**Overview**: We need to somehow serialize the tree for every node in the tree. Then in a hash map (dict), we need to increment the count when serialization from another matches the existing key in hmap. 

```
			1
		2     3
```
If we serialize from each node, the output is as follows ( I am doing preorder serialization)

from node with value 2: ```2,#,#``` 
from node with value 3: ```3,#,# ```
from node with value 1: ```1,2,#,#,3,#,#```

```plain
			1
		2     1'
			 2'
		
```
If we serialize from each node, the output is as follows ( I am doing preorder serialization)

from node with value 2': ```2',#,#``` (MATCHED)
from node with value 1': ```1',2',#,#,# ```
from node with value 2: ```2,#,#``` (MATCHED)
from node with value 1: ```1,2,#,#,1',2',#,#,#```

**So step 1**: lets just generate this preorder serialization 

```
def serialization(node, path):
	if node is None: return '#'
	
	path = ','.join([str(node.val), serialization(node.left, path), serialization(node.right, path)])
	
	return path
	
serialization(root,'')
	
```

**Step 2**: now in the above step, lets build hmap with key as path and value as the number of times it appears

```
hmap = {}
def serialization(node, path):
	if node is None: return '#'
	
	path = ','.join([str(node.val), serialization(node.left, path), serialization(node.right, path)])
	if path in hmap:
		hmap[path] += 1
	else:
		hmap[path] = 1
	
	return path
	
serialization(root,'')
```

**Final Solution:**

we collect all the paths for which hmap[path] == 2 (which means it is repeated atleast once)

```
class Solution:
    def findDuplicateSubtrees(self, root: Optional[TreeNode]) -> List[Optional[TreeNode]]:
        
        res = []
        
        hmap = {}
        
        def recurse(node, path):
            if node is None:
                return '#'
            
            path += ','.join([str(node.val), recurse(node.left, path), recurse(node.right, path)])
            
            if path in hmap:
                hmap[path] += 1
                if hmap[path] == 2:
                    res.append(node)
            else:
                hmap[path] = 1
                
            
            return path
        
        recurse(root, '')
        #print(hmap) I SUGGEST YOU PRINT THIS - TO UNDERSTAND WHAT IS HAPPENING.
        return res
```

Please upvote if you like my explanation.