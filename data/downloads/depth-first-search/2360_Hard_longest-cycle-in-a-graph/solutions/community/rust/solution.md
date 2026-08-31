# Rust, fastest 100%, dfs

**Author:** sdds7667
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3342884/](https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/3342884/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Key of this problem, is that each vertex can have at most one outgoing edge. As such, an easy way to detect cycles is to dfs through the graph, and if you reach a node that you previously reached in this iteration of the dfs, you got yourself a cycle. 

# Approach
<!-- Describe your approach to solving the problem. -->

In order for the dfs to work, I keep some information: the current ```level``` or depth of dfs, the depths for all the other nodes (in ```levels```). 

Meanings of different level values for each node:
- ```levels[node] == -1```: Previously explored, terminate early.
- ```levels[node] == 0```: First time encountering it, save the current depth of dfs. 
- ```levels[node] > 0```: The depth of dfs when I previously encountered it. The length of the cycle is ```levels[node] - level```

When returning through the dfs stack, remember to set each level to -1, since you explored it once. 



# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n)$ go through each node once, or terminate early since it was previsouly visited. 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n) for keeping the data length of the longest cycle. 
# Code
```
impl Solution {
    pub fn longest_cycle(edges: Vec<i32>) -> i32 {

        let mut levels = vec![0; edges.len()];
        let mut res = -1;
        for i in 0..(edges.len() as i32){
            res = res.max(Solution::dfs(&edges, &mut levels, 1, i));
        }
        return res;
    }

    pub fn dfs(edges: &Vec<i32>, levels: &mut Vec<i32>, level: i32, node: i32) -> i32 {
        if node < 0 {
            return -1;
        }
        let node = node as usize;
        return if edges[node] == -1 || levels[node] == -1 {
            -1
        } else if levels[node] > 0 {
            let old_level = levels[node];
            levels[node] = -1;
            level - old_level
        } else {
            levels[node] = level;
            let res = Solution::dfs(edges, levels, level + 1, edges[node]);
            levels[node] = -1;
            res
        }
    }
}
```