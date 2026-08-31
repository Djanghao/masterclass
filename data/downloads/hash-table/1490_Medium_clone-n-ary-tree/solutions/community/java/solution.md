# Java - DFS (Iterative + Recursive) and BFS

**Author:** idiotleon
**Votes:** 18
**Link:** [https://leetcode.com/problems/clone-n-ary-tree/solutions/851620/](https://leetcode.com/problems/clone-n-ary-tree/solutions/851620/)

---

Solution - [github](https://github.com/idiotleon/leetcode-solution-java-leon/tree/main/src/main/java/com/idiotleon/leetcode/lvl2/lc1490)

<b>Problem List</b>
#DFS - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/tree/main/txt/by_algorithm/search/depth_first_search)
#BFS - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/tree/main/txt/by_algorithm/search/breath_first_search)
#Tree - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/tree/main/txt/by_data_structure/tree)

This is essentially the same as [lc0133.Clone Graph](https://leetcode.com/problems/clone-graph/): 
compared to the graph, there is no need in keeping track of visited "node"s for binary trees.

Thanks @looksLikeTeenSprit.

Recursive DFS
```
/**
 * @author: Leon
 * <a href="https://leetcode.com/problems/clone-n-ary-tree/">LC1490</a>
 * <p>
 * Time Complexity:     O(N)
 * Space Complexity:    O(H)
 */
public class Solution {
    public Node cloneTree(Node root) {
        return dfs(root);
    }

    private Node dfs(final Node cur) {
        if (cur == null)
            return null;

        final Node cloned = new Node(cur.val);

        for (final Node next : cur.children) {
            cloned.children.add(dfs(next));
        }

        return cloned;
    }
}
```

Iterative DFS
```
/**
 * @author: Leon
 * <a href="https://leetcode.com/problems/clone-n-ary-tree/">LC1490</a>
 * <p>
 * Time Complexity:     O(N)
 * Space Complexity:    O(H)
 */
class Solution {
    public Node cloneTree(Node root) {
        // sanity check
        if (root == null) return null;

        final Map<Node, Node> map = new HashMap<>();
        map.put(root, new Node(root.val));

        final Deque<Node> stack = new ArrayDeque<>();
        stack.addLast(root);

        while (!stack.isEmpty()) {
            final Node cur = stack.removeLast();

            for (Node next : cur.children) {
                if (!map.containsKey(next)) {
                    map.put(next, new Node(next.val));
                    stack.addLast(next);
                }

                map.get(cur).children.add(map.get(next));
            }
        }

        return map.get(root);
    }
}
```

BFS
```
/**
 * @author: Leon
 * <a href="https://leetcode.com/problems/clone-n-ary-tree/">LC1490</a>
 * <p>
 * Time Complexity:     O(N)
 * Space Complexity:    O(W)
 */
class Solution {
    public Node cloneTree(Node root) {
        // sanity check
        if (root == null)
            return null;

        final Map<Node, Node> map = new HashMap<>();
        map.put(root, new Node(root.val));

        final Deque<Node> queue = new ArrayDeque<>();
        queue.addLast(root);

        while (!queue.isEmpty()) {
            final int sizeQ = queue.size();

            for (int i = 0; i < sizeQ; ++i) {
                final Node cur = queue.removeFirst();

                for (final Node next : cur.children) {
                    if (!map.containsKey(next)) {
                        map.put(next, new Node(next.val));
                        queue.addLast(next);
                    }

                    map.get(cur).children.add(map.get(next));
                }
            }
        }

        return map.get(root);
    }
}
```