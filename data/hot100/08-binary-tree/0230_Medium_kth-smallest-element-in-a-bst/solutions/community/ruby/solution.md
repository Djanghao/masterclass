# 1-Liner in Ruby

**Author:** StefanPochmann
**Votes:** 3
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/63947/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/63947/)

---

Just do a recursive inorder traversal and stop at the k-th element and return that.

    def kth_smallest(root, k)
        (f=->r{r&&(f[r.left]or(k-=1)<1?r.val: f[r.right])})[root]
    end

Here's a more readable version:

    def kth_smallest(root, k)
        find = -> root { root && (find[root.left] or
                                  (k-=1) == 0 ? root.val :
                                  find[root.right]) }
        find[root]
    end

At each actual node, search the wanted element in the left subtree. If found, return it right away. Otherwise, if decrementing `k` makes it zero, return the value of the current node. Otherwise, return what a search in the right subtree produces.