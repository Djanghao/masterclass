# Simple Python solution using dict

**Author:** agave
**Votes:** 83
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/83815/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/83815/)

---

    class Solution(object):
        def findLeaves(self, root):
            def order(root, dic):
                if not root:
                    return 0
                left = order(root.left, dic)
                right = order(root.right, dic)
                lev = max(left, right) + 1
                dic[lev] += root.val,
                return lev
            dic, ret = collections.defaultdict(list), []
            order(root, dic)
            for i in range(1, len(dic) + 1):
                ret.append(dic[i])
            return ret