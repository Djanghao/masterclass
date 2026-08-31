# Rust | Kahn's Algorithm

**Author:** obei
**Votes:** 0
**Link:** [https://leetcode.com/problems/parallel-courses/solutions/5248787/](https://leetcode.com/problems/parallel-courses/solutions/5248787/)

---

# Approach
Kahn's Algorithm

# Code
```
use std::collections::{HashMap, HashSet, VecDeque};

impl Solution {
    pub fn minimum_semesters(n: i32, relations: Vec<Vec<i32>>) -> i32 {
        let mut graph: HashMap<i32, HashSet<i32>> = HashMap::new();
        let mut in_degree: HashMap<i32, i32> = HashMap::new();
        (1..=n).collect::<Vec<i32>>().iter().for_each(|key| {
            in_degree.insert(*key, 0);
        });
        for relation in relations.iter() {
            graph.entry(relation[0]).or_default().insert(relation[1]);
            in_degree.entry(relation[1]).and_modify(|c| *c += 1);
        }

        let mut queue: VecDeque<i32> = VecDeque::new();
        for (vertex, deg) in in_degree.iter() {
            if *deg == 0 {
                queue.push_back(*vertex);
            }
        }

        let mut semesters = 0;
        let mut count = 0;
        while !queue.is_empty() {
            let qlen = queue.len();
            for _ in 0..qlen {
                if let Some(curr) = queue.pop_front() {
                    if graph.contains_key(&curr) {
                        for neighbor in graph.get(&curr).unwrap().iter() {
                            if let Some(deg) = in_degree.get_mut(neighbor) {
                                *deg -= 1;
                                if *deg == 0 {
                                    queue.push_back(*neighbor);
                                }
                            }
                        }
                    }
                    count += 1;
                }
            }
            semesters += 1;
        }

        if count == n {
            return semesters;
        }
        -1
    }
}
```