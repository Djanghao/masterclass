# JavaScript LCA solution explained. Time: O(N) 96%; space: O(1) 85%

**Author:** takesanocean
**Votes:** 30
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/1183723/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/1183723/)

---

Suppose we have a tree
```
        a
	  /   \\
	 b     *q
    / 
   *p 
```

I followed the classical LCA algorithm for the case when each node contains a reference to a parent node (this problem).
It consists of a three short steps.
1. Find the depths of `p` and `q` (in this case it is 2 and 1 respectively)
2. Equalize the depths so that we can start off from the same tree level
3. Start bubbling up simultaneously from both nodes until we reach the same node (p === q) 

```
var lowestCommonAncestor = function(p, q) {
    let depthFirst = getDepth(p);
    let depthSecond = getDepth(q);
    
    while (depthFirst !== depthSecond) {
        if (depthFirst > depthSecond) {
            p = p.parent;
            depthFirst--;
        } else {
            q = q.parent;
            depthSecond--;
        }
    }
    
    while (p !== q) {
        p = p.parent;
        q = q.parent;
    }
    
    return p;
};

var getDepth = function (node) {
    let depth = 0;
    while (node) {
        node = node.parent;
        depth++;
    }
    
    return depth;
};
```

**Time complexity:** O(N) where N is the number of nodes. We traverse up from the nodes to the tree root 2 times to measure their depth, after that we equalize the depths by also going up. And then we find a common parent.
For the worst case (a skewed tree) this takes at most O(N) + O(N) + O(N) = O(3 * N) = O(N).

**Space complexity:** O(1). Ultimately we don't store anything apart from a few variables. Also we don't use recursion here. This is a constant space complexity.