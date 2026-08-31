# Java code ✅

**Author:** deleted_user
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-subtree-sizes-after-changes/solutions/5971320/](https://leetcode.com/problems/find-subtree-sizes-after-changes/solutions/5971320/)

---

### Approach
1. **Tree Representation**: Construct an adjacency list to represent the tree based on the `parent` array.
2. **Adjust Parents**: Use a DFS traversal to adjust the parents based on the last seen characters in the string `s`.
3. **Count Subtree Sizes**: Perform another DFS traversal to calculate the sizes of the subtrees and store them in the `answer` array.

### Complexity
- **Time**: \\( O(n) \\), where \\( n \\) is the number of nodes (length of `parent`).
- **Space**: \\( O(n) \\) for the adjacency list and the `answer` array.

### Code
```java
class Solution {
    public int[] findSubtreeSizes(int[] parent, String s) {
        int n = parent.length;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }

        for (int i = 1; i < n; i++) {
            adj.get(parent[i]).add(i);
        }

        int[] newParent = Arrays.copyOf(parent, n);
        Map<Character, Integer> lastSeen = new HashMap<>();
        dfsAdjustParent(0, s, adj, lastSeen, newParent);

        List<List<Integer>> finalAdj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            finalAdj.add(new ArrayList<>());
        }
        for (int i = 1; i < n; i++) {
            finalAdj.get(newParent[i]).add(i);
        }

        int[] answer = new int[n];
        dfsCountSubtreeSizes(0, finalAdj, answer);
        
        return answer;
    }

    public void dfsAdjustParent(int node, String s, List<List<Integer>> adj, Map<Character, Integer> lastSeen, int[] newParent) {
        char c = s.charAt(node);
        Integer prev = lastSeen.get(c);
        if (prev != null && prev != newParent[node]) {
            newParent[node] = prev;
        }

        Integer originalParent = lastSeen.put(c, node);
        for (int child : adj.get(node)) {
            dfsAdjustParent(child, s, adj, lastSeen, newParent);
        }
        if (originalParent == null) {
            lastSeen.remove(c);
        } else {
            lastSeen.put(c, originalParent);
        }
    }

    public int dfsCountSubtreeSizes(int node, List<List<Integer>> adj, int[] answer) {
        int size = 1;
        for (int child : adj.get(node)) {
            size += dfsCountSubtreeSizes(child, adj, answer);
        }
        answer[node] = size;
        return size;
    }
}
```

### Upvote if you found this helpful! \uD83D\uDE0A