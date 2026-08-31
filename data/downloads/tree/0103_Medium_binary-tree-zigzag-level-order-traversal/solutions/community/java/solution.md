# My accepted JAVA solution

**Author:** awaylu
**Votes:** 467
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/33815/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/33815/)

---

    public class Solution {
        public List<List<Integer>> zigzagLevelOrder(TreeNode root) 
        {
            List<List<Integer>> sol = new ArrayList<>();
            travel(root, sol, 0);
            return sol;
        }
        
        private void travel(TreeNode curr, List<List<Integer>> sol, int level)
        {
            if(curr == null) return;
            
            if(sol.size() <= level)
            {
                List<Integer> newLevel = new LinkedList<>();
                sol.add(newLevel);
            }
            
            List<Integer> collection  = sol.get(level);
            if(level % 2 == 0) collection.add(curr.val);
            else collection.add(0, curr.val);
            
            travel(curr.left, sol, level + 1);
            travel(curr.right, sol, level + 1);
        }
    }

1.  O(n) solution by using LinkedList along with ArrayList.  So insertion in the inner list and outer list are both O(1),
2.  Using DFS and creating new lists when needed.

should be quite straightforward.  any better answer?