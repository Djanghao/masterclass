# 10 lines simple Java solution using recursion with explanation

**Author:** sky-xu
**Votes:** 522
**Link:** [https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/83778/](https://leetcode.com/problems/find-leaves-of-binary-tree/solutions/83778/)

---

    public class Solution {
        public List<List<Integer>> findLeaves(TreeNode root) {
            List<List<Integer>> res = new ArrayList<>();
            height(root, res);
            return res;
        }
        private int height(TreeNode node, List<List<Integer>> res){
            if(null==node)  return -1;
            int level = 1 + Math.max(height(node.left, res), height(node.right, res));
            if(res.size()<level+1)  res.add(new ArrayList<>());
            res.get(level).add(node.val);
            return level;
        }
    }
For this question we need to take bottom-up approach. The key is to find the height of each node. Here the definition of height is:
<cite>The height of a node is the number of edges from the node to the deepest leaf. --[CMU 15-121 Binary Trees](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html)</cite>

I used a helper function to return the height of current node. According to the definition, the height of leaf is 0. ```h(node) = 1 + max(h(node.left), h(node.right))```.
The height of a node is also the its index in the result list (res). For example, leaves, whose heights are 0, are stored in res[0]. Once we find the height of a node, we can put it directly into the result.

UPDATE:
Thanks @adrianliu0729 for pointing out that my previous code does not actually remove leaves. I added one line ```node.left = node.right = null;``` to remove visited nodes

UPDATE:
There seems to be some debate over whether we need to actually "remove" leaves from the input tree. Anyway, it is just a matter of one line code. In the actual interview, just confirm with the interviewer whether removal is required.