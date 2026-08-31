# Rust Trie + DFS with Special Consideration

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-of-two-non-overlapping-subtrees/solutions/2921945/](https://leetcode.com/problems/maximum-xor-of-two-non-overlapping-subtrees/solutions/2921945/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This LC problem is an enhanced version of LC421 (https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/). The main idea is to use a Trie data structure for managing the values of the nodes. To avoid XOR the sums of two sub-trees, we need to handle the add the add & get with care. In short, we first get the value of each node using DFS, we then use another DFS call to build the Trie tree & to get the optimal solution up to the subtree we are working on. The key step is: to evaluate XOR as the first step, at this time, Trie data structure only contains values from those sub-trees that contains no node in the sub-tree of the node are working on.     
# Approach
<!-- Describe your approach to solving the problem. -->
1) Use Trie to manage the vaules of the nodes
2) The nodes are ordered in the order discovered of DFS traversal.
3) Perform one DFS to calculate the values of the node.
4) Perform a second DFS, upon entering a new node, execute following in order:
      a) calculating the XOR between the value of current with each value already in the Trie.
      b) Recursively calling DFS on each unvisited child.
      c) Adding the value of current into Trie data structure    
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashMap;

struct Trie {
    children: HashMap::<i32, Trie>
}

impl Trie {
    fn new() -> Self {
        Self { children: HashMap::new() }
    }
}

impl Solution {
    pub fn max_xor(n: i32, edges: Vec<Vec<i32>>, values: Vec<i32>) -> i64 {
        let n = n as usize;
        let mut graph = vec![vec![]; n];
        for e in edges {
            let (u, v) = (e[0] as usize, e[1] as usize);
            graph[u].push(v);
            graph[v].push(u);
        }

        let (mut sum, mut flag) = (vec![0; n], vec![0; n]);
        Self::get_sum(&graph, &values, &mut flag, &mut sum, 0);
        
        let mut root = Trie::new();
        let mut ret = 0;
        flag = vec![0; n];
        Self::dfs(&graph, &sum, &mut flag, &mut root, 0)
    }

    fn dfs(graph: &Vec<Vec<usize>>, sum: &Vec<i64>, flag: &mut Vec<i32>, root: &mut Trie, u: usize) -> i64 {
        flag[u] = 1;
        let mut ret = Self::get(root, sum[u]);

        for v in &graph[u] {
            if flag[*v] == 1 { continue }
            ret = ret.max(Self::dfs(graph, sum, flag, root, *v));
        }
        Self::add(root, sum[u]);
        ret
    }


    fn get(root: &mut Trie, a: i64) -> i64 {
        let mut a = a;
        let mut data = vec![];
        while a > 0 {
            data.push((a % 2) as i32);
            a >>= 1;
        }
        while data.len() < 60 { data.push(0); }

        let mut ret = 0i64;
        let mut node = root;
        for i in (0 .. data.len()).rev() {
            if node.children.contains_key(&(1 - data[i])) {
                ret += 1 << i as i64;
                node = node.children.get_mut(&(1 - data[i])).unwrap();
            } else if node.children.contains_key(&data[i]) == false { break }
            else { node = node.children.get_mut(&data[i]).unwrap(); }
        }
        ret
    }

    fn add(root: &mut Trie, a: i64) {
        let mut a = a;
        let mut data = vec![];
        while a > 0 {
            data.push((a % 2) as i32);
            a >>= 1;
        }
        while data.len() < 60 { data.push(0); }

        let mut node = root;
        while let Some(d) = data.pop() {
            node = node.children.entry(d).or_insert(Trie::new());
        }
    }

    fn get_sum(graph: &Vec<Vec<usize>>, values: &Vec<i32>, flag: &mut Vec<i32>, sum: &mut Vec<i64>, u: usize) {
        flag[u] = 1;
        sum[u] = values[u] as i64;
        for v in &graph[u] {
            if flag[*v] == 1 { continue }
            
            Self::get_sum(graph, values, flag, sum, *v);
            sum[u] += sum[*v];
        }
    }
}
```