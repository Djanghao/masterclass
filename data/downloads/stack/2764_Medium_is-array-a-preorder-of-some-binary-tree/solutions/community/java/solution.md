# Java Stack based solution

**Author:** Syang1216
**Votes:** 3
**Link:** [https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/solutions/3734166/](https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/solutions/3734166/)

---

Follow stack order and check parents. If a node's parent isn't in stack, return false. This works because the input is guaranteed to be a valid binary tree.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```
class Solution {
    public boolean isPreorder(List<List<Integer>> nodes) {
        // Check each seen node in a stack
        Deque<Integer> dq = new LinkedList<>();
        dq.add(nodes.get(0).get(0));
        for(int i=1; i<nodes.size(); i++) {
            List<Integer> node = nodes.get(i);
            int curr = node.get(0);
            int parent = node.get(1);
            while(!dq.isEmpty() && parent != dq.peekLast()) {
                dq.pollLast();

            }
            if(dq.isEmpty()) {
                return false;
            }
            dq.addLast(curr);
        }
        return true;
    }
}
```