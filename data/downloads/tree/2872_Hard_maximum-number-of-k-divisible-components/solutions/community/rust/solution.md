# Leaf to root traversal. Comparable Python and Rust solutions. Efficient and Readable

**Author:** JacobPhillips1
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/5909096/](https://leetcode.com/problems/maximum-number-of-k-divisible-components/solutions/5909096/)

---

# Intuition
Since the sum of the nodes in the graph is divisible by k, we can greedily trim nodes that are divisible by k without reaching a bad state.

It's not always clear which node is the root of the tree, but it is always clear when we have a leaf node: whenever it has a single occurrence in `edges`.

If a leaf node is divisble by k, increase the count of max components and disconnect  the leaf from the graph.

If a leaf node is not divisible by k, add its value to the single node it is connected to and then disconnect it from the graph.

Eventually, all candidate positions will be encountered this way. I was surprised too :D

# Approach
1. Build a graph using `edges`. Use a list since all nodes from 0 to n exist. Use a set for each element of the list so that disconnecting a node can be done in O(1) time. Also count the number of times each node appears in `edges`.
2. Initialize a queue with the nodes that occur in `edges` exactly once.
3. For each node in the queue, disconnect it from the graph. If its value is divisible by `k`, increase the component count. Otherwise add its value to the one and only node it is connected to. 
4. When disconnecting the node, if the connection count (`degree`) of its neighbor reaches `1`, add it to the queue.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```python []
class Solution:
    def maxKDivisibleComponents(self, n: int, edges: List[List[int]], values: List[int], k: int) -> int:
        graph = [set() for _ in range(n)]
        degree = [0] * n
        for a,b in edges:
            graph[a].add(b)
            graph[b].add(a)
            degree[a] += 1
            degree[b] += 1

        count = 0       

        q = deque([i for i,d in enumerate(degree) if d == 1])
        while q:
            i = q.pop()
            
            if values[i] % k == 0:
                count += 1

            if graph[i]: 
                j = graph[i].pop()
                graph[j].remove(i)
                degree[j] -= 1
                if degree[j] == 1:
                    q.append(j)
                values[j] = (values[j] + values[i]) % k            

        return count or 1
                
```
#
```rust []
use std::collections::{HashSet, VecDeque};
impl Solution {
    pub fn max_k_divisible_components(n: i32, edges: Vec<Vec<i32>>, mut values: Vec<i32>, k: i32) -> i32 {
        let n = n as usize;
        
        let mut graph: Vec<HashSet<usize>> = (0..n).map(|_| HashSet::new()).collect();
        let mut degree = vec![0; n];
        for pair in edges {
            let (a,b) = (pair[0] as usize, pair[1] as usize);
            graph[a].insert(b);
            graph[b].insert(a);
            degree[a] += 1;
            degree[b] += 1;            
        }
        
        let mut q = VecDeque::new();
        for i in 0..n {
            if degree[i] == 1 {
                q.push_back(i)
            }
        }

        let mut count = 0;

        while let Some(i) = q.pop_front() {
            if values[i] % k == 0 {
                count += 1;
            }
            if let Some(&j) = graph[i].iter().next() {
                graph[i].remove(&j);
                graph[j].remove(&i);
                degree[j] -= 1;
                if degree[j] == 1 {
                    q.push_back(j);
                }
                values[j] = (values[j] + values[i]) % k;            
            }
        }
        count.max(1)
    }
}
```