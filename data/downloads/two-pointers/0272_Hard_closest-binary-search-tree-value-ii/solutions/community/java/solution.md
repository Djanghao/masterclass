# AC clean Java solution using two stacks

**Author:** jeantimex
**Votes:** 286
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/70511/](https://leetcode.com/problems/closest-binary-search-tree-value-ii/solutions/70511/)

---

The idea is to compare the predecessors and successors of the closest node to the target, we can use two stacks to track the predecessors and successors, then like what we do in merge sort, we compare and pick the closest one to the target and put it to the result list.

As we know, inorder traversal gives us sorted predecessors, whereas reverse-inorder traversal gives us sorted successors.

We can use iterative inorder traversal rather than recursion, but to keep the code clean, here is the recursion version.

    public List<Integer> closestKValues(TreeNode root, double target, int k) {
      List<Integer> res = new ArrayList<>();

      Stack<Integer> s1 = new Stack<>(); // predecessors
      Stack<Integer> s2 = new Stack<>(); // successors

      inorder(root, target, false, s1);
      inorder(root, target, true, s2);
      
      while (k-- > 0) {
        if (s1.isEmpty())
          res.add(s2.pop());
        else if (s2.isEmpty())
          res.add(s1.pop());
        else if (Math.abs(s1.peek() - target) < Math.abs(s2.peek() - target))
          res.add(s1.pop());
        else
          res.add(s2.pop());
      }
      
      return res;
    }
    
    // inorder traversal
    void inorder(TreeNode root, double target, boolean reverse, Stack<Integer> stack) {
      if (root == null) return;

      inorder(reverse ? root.right : root.left, target, reverse, stack);
      // early terminate, no need to traverse the whole tree
      if ((reverse && root.val <= target) || (!reverse && root.val > target)) return;
      // track the value of current node
      stack.push(root.val);
      inorder(reverse ? root.left : root.right, target, reverse, stack);
    }