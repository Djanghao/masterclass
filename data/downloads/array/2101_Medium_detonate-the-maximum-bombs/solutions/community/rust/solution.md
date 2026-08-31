# Maybe fastest Rust solution (100% beat by runtime and memory)

**Author:** zlumyo
**Votes:** 2
**Link:** [https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/3590157/](https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/3590157/)

---

# Intuition
First thought was to sort by influence to neighbor bombs, then link top influencers. But I've quickly infered it's a wrong way.

Second thought was describe bombs and ther "victims" as graph. Then there is need to extract separated clusters of connected nodes. Cluster with biggest number of nodes is the answer. And it was bingo! 

# Approach
Build directed graph where nodes are bombs and edges are connections to bombs affected by blast. Pythagorean theorem is in game here. To avoid floating point arithmetic we can use squared blast radius:

$$r_{i}^2 <= d_{ij}^2 = (x_{i} - x_{j})^2 + (y_{i} - y_{j})^2$$

# Complexity
- Time complexity:
$$O(n^3)$$

- Space complexity:
$$O(n^2)$$

# Code
```
impl Solution {
    // beats 100% by runtime and memory, so code is a bit wired
    pub fn maximum_detonation(bombs: Vec<Vec<i32>>) -> i32 {
        // Deep first graph traversing helper.
        // Pass a starting node to search from. 
        fn count_nodes_in_cluster(graph: &Vec<Vec<usize>>, node: usize, stack: &mut Vec<usize>, visited: &mut Vec<bool>) -> usize {
            stack.push(node);
            while let Some(current) = stack.pop() {
                if visited[current] {
                    continue;
                }
                visited[current] = true;
                stack.extend(graph[current].iter().cloned());
            }

            return visited.iter().filter(|&&flag| flag).count();
        }

        let bombs_count = bombs.len(); // to avoid multiple function calling
        let mut visited = vec![false; bombs_count]; // reusable substitute of HashMap
        let mut connected_bombs = vec![Vec::with_capacity(bombs_count-1); bombs_count]; // allocate memory ahead

        for i in 0..bombs_count {
            let x_i = bombs[i][0] as i64; // squared value may not fit in i32
            let y_i = bombs[i][1] as i64;
            let r_i = (bombs[i][2] as i64) * (bombs[i][2] as i64);

            for j in i + 1..bombs_count {
                let x_j = bombs[j][0] as i64;
                let y_j = bombs[j][1] as i64;
                let r_j = bombs[j][2] as i64;

                let d = (x_i - x_j) * (x_i - x_j) + (y_i - y_j) * (y_i - y_j);
                if d <= r_i {
                    connected_bombs[i].push(j);
                }
                // don't forget to check reverse blast
                if d <= r_j * r_j {
                    connected_bombs[j].push(i);
                }
            }
        }

        let mut result = 0;
        let mut stack = vec![]; // reusable stack for performance reason
        for i in 0..bombs_count {
            let excluded = count_nodes_in_cluster(&connected_bombs, i, &mut stack, &mut visited);
            if excluded > result {
                result = excluded;
            }
            visited.fill(false);
        }

        return result as i32;
    }
}
```