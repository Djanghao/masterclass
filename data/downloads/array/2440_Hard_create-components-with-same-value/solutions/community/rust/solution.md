# Rust DFS Solution

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-components-with-same-value/solutions/2707126/](https://leetcode.com/problems/create-components-with-same-value/solutions/2707126/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1) The qual component amount has to be a factor of the total sum of all values. Therefore, we only need to verify every factor of the total sum as a potential target component sum. This steps will reduces the steps of verifying from O(N) to O(Log N).
 
2) We use DFS to verify the condition. Consider a node u: 
a) if a sub-tree has total sum that is divided by the targeted componenet sum, the sub-tree could be cut off from u. Otherwise, the node will be in the same component of u.
b) when a sub-tree could not be cut off, it will carry over a remaining that is less than the target component sum.
c) the sum of the remaining values come from sub-trees + nums[u] should not be more that the targted component sum.       
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N * Log N): Each DFS takes O(N) time & there are no more than O(Log N) calls to the DFS. 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
impl Solution {
    pub fn component_value(nums: Vec<i32>, edges: Vec<Vec<i32>>) -> i32 {
        let n = nums.len();
        let mut graph = vec![vec![]; n];

        for e in edges {
            let (u, v) = (e[0] as usize, e[1] as usize);
            graph[u].push(v);
            graph[v].push(u);
        }

        let sum: i32 = nums.iter().sum();

        for a in 1..sum as usize {
            let a = a as i32;
            if sum % a != 0 { continue }
            
            let mut flag = vec![0; n];
            flag[0] = 1;
            let mut rem = 0;
            if Self::check(&graph, &mut flag, 0, a, &mut rem, &nums) { return sum / a - 1 }
        }

        0
    }

    fn check(graph: &Vec<Vec<usize>>, flag: &mut Vec<i32>, u: usize, amt: i32, rem: &mut i32, nums: &Vec<i32>) -> bool {
        *rem = nums[u];
        for v in &graph[u] {
            if flag[*v] == 1 { continue }

            flag[*v] = 1;
            let mut t = 0;
            if Self::check(graph, flag, *v, amt, &mut t, nums) == false { return false }
            *rem += t;
        }
        if *rem > amt { return false }
        if *rem == amt { *rem = 0; }
        
        true
    }
}
```