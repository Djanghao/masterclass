# 4 cases Java

**Author:** Student2091
**Votes:** 2
**Link:** [https://leetcode.com/problems/move-sub-tree-of-n-ary-tree/solutions/2208578/](https://leetcode.com/problems/move-sub-tree-of-n-ary-tree/solutions/2208578/)

---

I can get why there are so many downvotes. 
It is not a difficult problem at all, but it is not a fun problem either. 
We basically have 4 cases.
1. Do nothing
2. when `p = root`.
3. when `q is a subset of p`
4. everything else

Treat it case by case.
```Java
class Solution {
    public Node moveSubTree(Node root, Node p, Node q) {
        if (q.children.contains(p)){ // do nothing
            return root;
        }
        Node pParent = findParent(root, p);
        Node qParent = findParent(root, q);
        if (p==root){ // p = root
            qParent.children.remove(q);
            q.children.add(root);
            return q;
        }
        if (isSubSet(p, q)){ // q is a subset of p
            int idx = pParent.children.indexOf(p);
            pParent.children.set(idx, q);
            qParent.children.remove(q);
            q.children.add(p);
        }else{ // everything else
            pParent.children.remove(p);
            q.children.add(p);
        }
        return root;
    }

    private boolean isSubSet(Node p, Node q){
        for (Node next : p.children){
            if (next == q || isSubSet(next, q)){
                return true;
            }
        }
        return false;
    }


    private Node findParent(Node cur, Node target){
        for (Node next : cur.children){
            if (next == target){
                return cur;
            }
            Node res = findParent(next, target);
            if (res != null){
                return res;
            }
        }

        return null;
    }
}
```