# Simple DFS in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5186554/](https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5186554/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
As a functional programming language, Erlang can do this problem with a trivial DFS. 

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$ for extra space
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec remove_leaf_nodes(Root :: #tree_node{} | null, Target :: integer()) -> #tree_node{} | null.
remove_leaf_nodes(Root, Target) -> solve(Root, #tree_node{val=Target, left='null', right='null'}).

solve(null, _) -> 'null';
solve(Node, Target) -> 
    R = #tree_node{val=Node#tree_node.val,
        left=solve(Node#tree_node.left, Target), 
        right=solve(Node#tree_node.right, Target)},
    case R == Target of 
         true -> 'null';
         false -> R
    end.
```