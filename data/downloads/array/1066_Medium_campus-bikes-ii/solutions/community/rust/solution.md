# Rust - DFS and Memorized

**Author:** zoo868e
**Votes:** 0
**Link:** [https://leetcode.com/problems/campus-bikes-ii/solutions/4510437/](https://leetcode.com/problems/campus-bikes-ii/solutions/4510437/)

---

# Intuition
The problem involves assigning bikes to workers in such a way that the sum of Manhattan distances between each worker and their assigned bike is minimized. The intuition here is to use a recursive Depth-First Search (DFS) approach to explore all possible assignments while keeping track of the minimum distance.

# Approach
The given code implements a DFS approach using a bitmask to keep track of assigned bikes. The `assign_bikes` function initializes a memoization array (`mem`) and calls the DFS function with the initial parameters.

The DFS function (`dfs`) takes the current worker index (`w`), the bitmask representing assigned bikes (`mask`), and recursively explores all possible assignments. It calculates the Manhattan distance between the current worker and each unassigned bike, updating the answer with the minimum distance. The bitmask is used to mark assigned bikes to avoid redundant computations.

The memoization array (`mem`) is used to store and retrieve previously computed results to optimize the recursive approach and avoid redundant calculations.

# Complexity
- Time complexity: It depends on the number of workers and bikes. Let's denote the number of workers as `n` and the number of bikes as `m`. The time complexity is approximately O(m*n*2^n).

- Space complexity: The space complexity is O(2^n), where `n` is the number of workers. This is due to the bitmask used to represent the assignment of bikes. The memoization array also contributes to the space complexity, but it is relatively small compared to the bitmask.

# Code
```
impl Solution {
    pub fn assign_bikes(workers: Vec<Vec<i32>>, bikes: Vec<Vec<i32>>) -> i32 {
        let mut mem:Vec<i32> = vec![-1; 1024];
        return Self::dfs(&workers, &bikes, &mut mem, 0, 0);
    }

    fn dfs(workers: &Vec<Vec<i32>>, bikes: &Vec<Vec<i32>>, mem: &mut Vec<i32>, w: usize, mask: usize) -> i32 {
        if w == workers.len() { return 0; }
        if mem[mask] != -1 { return mem[mask]; }
        let mut ans = i32::MAX;
        for bike in 0..bikes.len() {
            if (mask & (1 << bike)) == 0 {
                ans = ans.min((workers[w][0] - bikes[bike][0]).abs() + (workers[w][1] - bikes[bike][1]).abs() + Self::dfs(&workers, &bikes, mem, w + 1, mask ^ (1 << bike)));
            }
        }
        mem[mask] = ans;
        return ans;
    }
}
```