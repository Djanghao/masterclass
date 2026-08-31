# Rust Bitmask & DFS

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/solutions/3809055/](https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/solutions/3809055/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Fact: a palindrome path contains no more than 1 character with odd count. 
Therefore, we only need to record the parities of all characters along each path. 

# Approach
<!-- Describe your approach to solving the problem. -->
1) The cases of different parities could be represented as an integer a: 0 <= a < 2^26. We will use HashMap<i32, i64> to record the counts of different parities of all the paths starting from root 0. 
2) Perform DFS to populate the HashMap.
3) Perform another DFS to use each node as the new "root" and collect the counts of palindrome paths starting from the new root. One key property we can use:
a) Let k be the parity mask of the path from root (which is 0) to u, when we re-root the tree at u.
b) Let v be any node and m was the parity mask with the tree rooted at 0.
c) The parity mask of v in the tree rooted at u will be k ^ m.
4) It needs to be noticed that the final answer is (count - n) / 2 because of the folowing reasons:
a) Each path is counted twice, one from each end as the starting node.
b) A special path of length 0 (from the root to itself) is also added to the count.         

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
use std::collections::HashMap;
impl Solution {
    pub fn count_palindrome_paths(parent: Vec<i32>, s: String) -> i64 {
        let n = parent.len();
        let mut graph = vec![vec![]; n];
        
        for u in 1 .. n { graph[parent[u] as usize].push(u); }

        let mut count = HashMap::<i32, i64>::new();
        let s = s.chars().into_iter().map(|c| c as i32 - 'a' as i32).collect::<Vec<i32>>();
        let mut ret = 0;

        Self::dfs(&graph, 0, &mut count, 0, &s);
        Self::collect(&graph, 0, &count, 0, &mut ret, &s);
        (ret - n as i64) / 2
    }

    fn dfs(g: &Vec<Vec<usize>>, u: usize, cnt: &mut HashMap<i32, i64>, mask: i32, s: &Vec<i32>) {
        *cnt.entry(mask).or_insert(0) += 1;
        for v in &g[u] {
            Self::dfs(g, *v, cnt, mask ^ 1 << s[*v], s);
        } 
    }

    fn collect(g: &Vec<Vec<usize>>, u: usize, cnt: &HashMap<i32, i64>, mask: i32, ret: &mut i64, s: &Vec<i32>) {
        if let Some(a) = cnt.get(&mask) { *ret += *a; }
        for i in 0 .. 26 {
            if let Some(a) = cnt.get(&(mask ^ 1 << i)) { *ret += *a; }
        }
        for v in &g[u] {
            Self::collect(g, *v, cnt, mask ^ 1 << s[*v], ret, s);
        }
    }
}
```