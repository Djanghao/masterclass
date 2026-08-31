# My DFS and BFS java solution

**Author:** SOY
**Votes:** 328
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/34981/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/34981/)

---

DFS solution:

    public class Solution {
        public List<List<Integer>> levelOrderBottom(TreeNode root) {
            Queue<TreeNode> queue = new LinkedList<TreeNode>();
            List<List<Integer>> wrapList = new LinkedList<List<Integer>>();
            
            if(root == null) return wrapList;
            
            queue.offer(root);
            while(!queue.isEmpty()){
                int levelNum = queue.size();
                List<Integer> subList = new LinkedList<Integer>();
                for(int i=0; i<levelNum; i++) {
                    if(queue.peek().left != null) queue.offer(queue.peek().left);
                    if(queue.peek().right != null) queue.offer(queue.peek().right);
                    subList.add(queue.poll().val);
                }
                wrapList.add(0, subList);
            }
            return wrapList;
        }
    }

BFS solution:

    public class Solution {
            public List<List<Integer>> levelOrderBottom(TreeNode root) {
                List<List<Integer>> wrapList = new LinkedList<List<Integer>>();
                levelMaker(wrapList, root, 0);
                return wrapList;
            }
            
            public void levelMaker(List<List<Integer>> list, TreeNode root, int level) {
                if(root == null) return;
                if(level >= list.size()) {
                    list.add(0, new LinkedList<Integer>());
                }
                levelMaker(list, root.left, level+1);
                levelMaker(list, root.right, level+1);
                list.get(list.size()-level-1).add(root.val);
            }
        }