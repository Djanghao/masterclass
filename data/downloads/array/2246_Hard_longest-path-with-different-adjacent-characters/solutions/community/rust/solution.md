# Simple Rust Recursive DFS

**Author:** nottu
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3043683/](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/solutions/3043683/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
 Create an adjacency list to easily travel the graph

**DFS** starting at node `0`.

For the DFS, we want to keep track of the maximum length of a branch, if we take the node, and the maximum length of a path, regardelss of if we use the node or note.

For a given node it's longest branch will be `1` if all it's children have the same label, or `1 + longest_child_branch`.

The longest path will be the longest_path from all child nodes or `1 + longest_child_branch + second_longest_child_branch`.

# Complexity

- Time complexity:
$$O(n)$$ since we visit each node once.

- Space complexity:
$$O(n)$$ for the `adjacency_list`
$$O(\\log_n)$$ for the **DFS** reecursive stack.

# Code
```
impl Solution {
    pub fn longest_path(parent: Vec<i32>, s: String) -> i32 {
        let tree = Solution::get_adjacency_list(parent);
        let (_, longest_path) = Solution::dfs(&tree, &s.chars().collect(), 0);
        longest_path
    }
    fn dfs(tree: &Vec<Vec<usize>>, labels: &Vec<char>, node: usize) -> (i32, i32) {
        let mut longest_branch = 1;
        let mut longest_path = 1;
        
        for child in &tree[node] {
            let (longest_child_branch, longest_child_path) = Solution::dfs(tree, labels, *child);
            longest_path = longest_path.max(longest_child_path);
            if labels[*child] == labels[node] { continue }
            longest_path = longest_path.max(longest_branch + longest_child_branch);
            longest_branch = longest_branch.max(longest_child_branch + 1);
        }

        (longest_branch, longest_path)
    }
    fn get_adjacency_list(parent: Vec<i32>) -> Vec<Vec<usize>> {
        let mut graph = vec![Vec::new(); parent.len()];
        for i in 1..parent.len() {
            graph[parent[i] as usize].push(i);
        }
        graph
    }
}
```