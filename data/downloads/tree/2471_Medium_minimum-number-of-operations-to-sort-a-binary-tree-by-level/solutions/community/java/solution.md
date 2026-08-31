# Easy Java Solution

**Author:** Sumitk7970
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/2808850/](https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/solutions/2808850/)

---

```
class Solution {
    public int minimumOperations(TreeNode root) {
        int count = 0;
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        while(!q.isEmpty()) {
            int size = q.size();
            List<Integer> list = new ArrayList<>();
            while(size-- > 0) {
                TreeNode node = q.poll();
                if(node.left != null) {
                    q.offer(node.left);
                    list.add(node.left.val);
                }
                if(node.right != null) {
                    q.offer(node.right);
                    list.add(node.right.val);
                }
            }
            count += helper(list);
        }
        
        return count;
    }
    
    int helper(List<Integer> list) {
        int swaps = 0;
        int[] sorted = new int[list.size()];
        for(int i=0; i<sorted.length; i++) sorted[i] = list.get(i);
        Arrays.sort(sorted);
        Map<Integer, Integer> ind = new HashMap<>();
        for(int i=0; i<list.size(); i++) ind.put(list.get(i), i);
        
        for(int i=0; i<list.size(); i++) {
            if(list.get(i) != sorted[i]) {
                swaps++;
                ind.put(list.get(i), ind.get(sorted[i]));
                list.set(ind.get(sorted[i]), list.get(i));
            }
        }
        return swaps;
    }
}