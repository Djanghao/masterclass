# Python Using Dictionary Beats 98%

**Author:** r2rogator
**Votes:** 52
**Link:** [https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/565677/](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/solutions/565677/)

---

I have a dictionary with the keys being its vertical placement and the value being a tuple of (level, root.val). I then sort the dictionary based on keys and sort it again based on level. 


```
    def helper(self, placement,level, root, dic):
        if(not root):
            return
        dic[placement].append((level, root.val))
        self.helper(placement-1, level+1, root.left, dic)
        self.helper(placement+1, level+1, root.right, dic)
		
    def verticalTraversal(self, root: TreeNode) -> List[List[int]]:
        dic = defaultdict(list)
        self.helper(0,0, root, dic)
        result = []
        for i in sorted(dic.keys()):
            temp = []
            for j in sorted(dic[i]):
                temp.append(j[1])
            result.append(temp)
        return result
```

version to not have to sort dict keys:

```
def helper(self, placement,level, root, dic, limits):
        if(not root):
            return
        
		dic[placement].append((level, root.val))
        limits[0] = min(limits[0], placement)
        limits[1] = max(limits[1], placement)
        
        self.helper(placement-1, level+1, root.left, dic, limits)
        self.helper(placement+1, level+1, root.right, dic, limits)
		
    def verticalTraversal(self, root: TreeNode) -> List[List[int]]:
        dic = defaultdict(list)
        limits = [float('inf'), float('-inf')]
        
        self.helper(0,0, root, dic, limits)
        result = []
        
        for i in range(limits[0], limits[1]+1):
            temp = []
            for j in sorted(dic[i]):
                temp.append(j[1])
            result.append(temp)
        return result
```