# Python / Rust - Topological Sort ( If Queue has more than one Option )

**Author:** nuclearoreo
**Votes:** 1
**Link:** [https://leetcode.com/problems/sequence-reconstruction/solutions/801454/](https://leetcode.com/problems/sequence-reconstruction/solutions/801454/)

---

- **Python**

```python
class Solution:
    def sequenceReconstruction(self, org: List[int], seqs: List[List[int]]) -> bool:
        graph = { x: [] for seq in seqs for x in seq }
        indegress = { x: 0 for seq in seqs for x in seq }
        
        for seq in seqs:
            for i in range(len(seq)-1):
                graph[seq[i]].append(seq[i+1])
                indegress[seq[i+1]] += 1
        
        queue = []
        for node in indegress:
            if indegress[node] == 0:
                queue.append(node)
                
        res = []
        while queue:
            if len(queue) > 1:
                return False
            
            node = queue.pop(0)
            res.append(node)
            
            for neighbor in graph[node]:
                indegress[neighbor] -= 1
                if indegress[neighbor] == 0:
                    queue.append(neighbor)
        
        return len(res) == len(indegress) and res == org
```

- **Rust**

```rust 
use std::collections::HashMap;

impl Solution {
    pub fn sequence_reconstruction(org: Vec<i32>, seqs: Vec<Vec<i32>>) -> bool {
        let mut graph: HashMap<i32, Vec<i32>> = HashMap::new();
        let mut indegrees: HashMap<i32, i32> = HashMap::new();
                
        for seq in seqs.iter() {
            for num in seq.iter() {
                graph.insert(*num, Vec::new());
                indegrees.insert(*num, 0);
            }
        }
        
        for seq in seqs.iter() {
            for i in 0..seq.len()-1 {
                let mut neighbors = graph.get(&seq[i]).unwrap().to_vec();
                neighbors.push(seq[i+1]);
                graph.insert(seq[i], neighbors);
                indegrees.insert(seq[i+1], indegrees.get(&seq[i+1]).unwrap() + 1);
            } 
        }
        
        let mut queue: Vec<i32> = Vec::new();
        for (node, count) in indegrees.iter() {
            if *count == 0 {
                queue.push(*node);
            }
        }
        
        let mut res: Vec<i32> = Vec::new();
        while queue.len() > 0 {
            if queue.len() > 1 {
                return false;
            }
            
            let node = queue.remove(0);
            res.push(node);
            
            let neighbors = graph.get(&node).unwrap();
            
            for neighbor in neighbors.iter() {
                let indegree = *indegrees.get(neighbor).unwrap() - 1;
                indegrees.insert(*neighbor, indegree);
                if indegree == 0 {
                    queue.push(*neighbor);
                }
            }
            
        }
        
        return res.len() == indegrees.len() && Self::vec_compare(&res, &org);
    }
    
    fn vec_compare(a: &Vec<i32>, b: &Vec<i32>) -> bool {
        if a.len() != b.len() {
            return false;
        }
        
        for i in 0..a.len() {
            if a[i] != b[i] {
                return false;
            }
        }
        
        return true;
    }
}
```