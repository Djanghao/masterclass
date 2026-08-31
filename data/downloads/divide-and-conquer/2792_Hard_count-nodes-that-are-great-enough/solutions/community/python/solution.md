# [python] A (n log n) solution that is independent of k

**Author:** hxu10
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-nodes-that-are-great-enough/solutions/3821361/](https://leetcode.com/problems/count-nodes-that-are-great-enough/solutions/3821361/)

---

# Intuition
We can only keep k smallest value when k <= 10, however if k is very large, say,  k<=n,  what will be the solution.
This is much more difficult,  and if the k has no constraint,  the question should be label as hard.  But it is still solvable. 

Suppose we have n nodes,  and the node index is from 0 to n-1,  like example 1,  we mark the node by the sequence of inorder tranversal.  We can observe that,  if the index of the node is i,  and the subtree size excluding itself is m,  then from i+1 to i+m,  i is always their ancester,  an they are all below to the subtree of i.

Then we can sort all the nodes by value, and go from smallest value to largest value.  When a node is selected,  we mark them,  and we can see that,  the number of the node that has already marked before it is greater or equal then k,  then this node is great enough.

We can solve this by using fenwick tree/segment tree,  to reduce the time complexity from O(n^2) to O(n),  no matter what k is. 



# Approach
<!-- Describe your approach to solving the problem. -->

1, Do a dfs search,  and calculate the size of subtree excluding itself.
2, Sort all the node by its value,  and mark them one by one.  We initialize a [0]*n array,   if the node is marked,  we change it to 1
3, for each node,  calculate the marked node,  that is, if the tree size is m,  calcualte sum(arr[i+1:i+m]),  to judge if it is greater than k.

Since it is single point update and block query,  and we only care about the sum. We can initilize a n size fenwick tree and query the block sum, then update the single point. 



# Complexity
- Time complexity:
- O(nlgn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class fenwick(object):
    def __init__(self, n):
        self.n = n
        self.cul = [0]*n
        self.maxd = len(bin(n))-3
    def update(self,index,diff):
        i = index
        while i<self.n:
            self.cul[i] += diff
            i += (i+1)&(-i-1)
    def getaccu(self,index):
        output = 0
        i = index
        while i>=0:
            output += self.cul[i]
            i -= (i+1)&(-i-1)
        return output

class Solution(object):
    def countGreatEnoughNodes(self, root, k):
        """
        :type root: Optional[TreeNode]
        :type k: int
        :rtype: int
        """
        count = [0]
        childnum = []
        values = {}
        def getnext(p):
            if p==None:  return 0
            index = count[0]
            count[0] += 1
            childnum.append(0)
            left = getnext(p.left)
            right = getnext(p.right)
            childnum[index] = left+right
            if p.val not in values:  values[p.val] = []
            values[p.val].append(index)
            return left+right+1

        getnext(root)
        n = len(childnum)
        ans = 0
        fen = fenwick(n)
        for key in sorted(values.keys()):
            for index in values[key]:
                smaller = fen.getaccu(index+childnum[index]) - fen.getaccu(index)
                if smaller >= k:  ans += 1
            for index in values[key]:
                fen.update(index,1)
        return ans


        


        
```