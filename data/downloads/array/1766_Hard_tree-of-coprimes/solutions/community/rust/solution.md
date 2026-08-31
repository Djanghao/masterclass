# 💥💥Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/tree-of-coprimes/solutions/5884427/](https://leetcode.com/problems/tree-of-coprimes/solutions/5884427/)

---

# Intuition
Finding coprime ancestors for each node in a tree structure, where two numbers are considered coprime if their greatest common divisor (GCD) is 1. We need to efficiently track these relationships while traversing the tree.

# Approach
We create a graph from the edges, use a depth-first search (DFS) to explore each node, maintain a record of ancestors and their levels, and check for coprime relationships as we traverse.

# Complexity
- Time complexity:
O(N2) in the worst case due to the nested loops for checking coprimes, where N is the number of unique numbers.

- Space complexity:
O(N) for storing the adjacency list and the maps of coprimes and ancestors.

# Code
```rust []
impl Solution {
    pub fn get_coprimes(nums: Vec<i32>, edges: Vec<Vec<i32>>) -> Vec<i32> {
        use std::collections::{HashMap, HashSet};

        // Function to traverse the graph and find coprime ancestors
        fn traverse(
            nums: &Vec<i32>,          // List of numbers
            adjacency_list: &Vec<Vec<i32>>, // Adjacency list representing the graph
            current_node: i32,        // Current node being visited
            parent_node: i32,         // Parent node to avoid cycling back
            current_level: i32,       // Depth level in the graph
            result: &mut Vec<i32>,     // Result array to store coprime ancestors
            coprimes: &mut HashMap<i32, Vec<i32>>, // Map of numbers to their coprimes
            ancestors: &mut HashMap<i32, Vec<(i32, i32)>>, // Map of coprimes to their levels and nodes
        ) {
            let mut max_level = -1; // Initialize maximum level of found coprimes

            // Check for coprime ancestors
            if let Some(coprimes_for_current) = coprimes.get(&nums[current_node as usize]) {
                for &cop in coprimes_for_current.iter() {
                    if let Some(ancestor_list) = ancestors.get(&cop) {
                        if !ancestor_list.is_empty() && ancestor_list.last().unwrap().0 > max_level {
                            max_level = ancestor_list.last().unwrap().0;
                            result[current_node as usize] = ancestor_list.last().unwrap().1; // Update result with the coprime ancestor
                        }
                    }
                }
            }

            // Record the current node and its level in the ancestors map
            ancestors.entry(nums[current_node as usize]).or_insert(vec![]).push((current_level, current_node));

            // Traverse children nodes
            for &child in adjacency_list[current_node as usize].iter() {
                if child != parent_node { // Avoid going back to the parent
                    traverse(nums, adjacency_list, child, current_node, current_level + 1, result, coprimes, ancestors);
                }
            }

            // Remove the current node from the ancestors map after finishing traversal
            ancestors.get_mut(&nums[current_node as usize]).unwrap().pop();
        }

        // Function to calculate the greatest common divisor (GCD)
        fn gcd(a: i32, b: i32) -> i32 {
            if b == 0 {
                a
            } else {
                gcd(b, a % b)
            }
        }

        let mut coprimes = HashMap::new(); // Map of numbers to their coprimes
        let mut ancestors = HashMap::new(); // Map of numbers to their levels and nodes
        let unique_numbers: HashSet<i32> = nums.iter().cloned().collect(); // Get unique numbers from the input

        // Populate the coprimes map
        for &n1 in unique_numbers.iter() {
            for &n2 in unique_numbers.iter() {
                if gcd(n1, n2) == 1 { // Check if the numbers are coprime
                    coprimes.entry(n1).or_insert(vec![]).push(n2);
                }
            }
        }

        // Create adjacency list for the graph
        let mut adjacency_list = vec![vec![]; nums.len()];
        for edge in edges.iter() {
            adjacency_list[edge[0] as usize].push(edge[1]);
            adjacency_list[edge[1] as usize].push(edge[0]);
        }

        let mut result = vec![-1; nums.len()]; // Initialize result array with -1
        traverse(&nums, &adjacency_list, 0, -1, 0, &mut result, &mut coprimes, &mut ancestors); // Start traversal from the root node

        result // Return the result array
    }
}

```