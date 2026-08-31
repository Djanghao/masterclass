# Java 100%. This is a Linked List question.

**Author:** o_inari
**Votes:** 74
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/933885/](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/solutions/933885/)

---

Intuition:
This is a Linked List question. Think of the `parent` pointer as the `next` pointer in most Linked List questions. Use it to climb up the tree.

We can follow the steps in hints:
1. Record the path from node p to root. (O(N) space, N is length of path P)
2. Traverse from node q to root and find the first common point.

```
class Solution {
    public Node lowestCommonAncestor(Node p, Node q) {
        List<Node> path = find_Path(p);
        while (q.parent != null) {
            for (Node node : path) {
                if (node == q) return q;
            }
            q = q.parent;
        }
        return q;
    }
    
    public List<Node> find_Path(Node p) {
        List<Node> path = new ArrayList<>();
        while (p.parent != null) {
            path.add(p);
            p = p.parent;
        }
        return path;
    }
}
```

We can optimize the previous solution by not using extra space. Since it is guaranteed that there will be a LCA, we can use two pointers for each list. When we reach the end of one list, switch it to point at the beginning of the other list until p1 is p2. 

```
public Node lowestCommonAncestor(Node p, Node q) {
     Node p1 = p, p2 = q;
	 while (p1 != p2) {
		 p1 = p1 == null ? q : p1.parent;
		 p2 = p2 == null ? p : p2.parent;    
	  }
	  return p1;
}
```
