# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/gcd-sort-of-an-array/solutions/3242800/](https://leetcode.com/problems/gcd-sort-of-an-array/solutions/3242800/)

---

# Code
```
impl Solution {
    pub fn gcd_sort(nums: Vec<i32>) -> bool {
        use std::collections::{HashMap, HashSet};
        fn prime_set(n: usize) -> HashSet<usize> {
            for i in 2..((n as f64).sqrt() as usize + 1) {
                if n % i == 0 {
                    let mut set = prime_set(n / i);
                    set.insert(i);
                    return set;
                }
            }
            HashSet::from([n])
        }

        let len = nums.len();
        let mut uf = UnionFind::new(len);

        let mut indexes = HashMap::new();
        for (i, v) in nums.iter().enumerate() {
            indexes.insert(*v, i);
        }

        let sorted = {
            let mut sorted = nums.clone();
            sorted.sort_unstable();
            sorted
        };

        let mut primes: HashMap<usize, Vec<usize>> = HashMap::new();
        for (i, &num) in nums.iter().enumerate().take(len) {
            let prime_set = prime_set(num as usize);
            for p in prime_set {
                (*primes.entry(p).or_default()).push(i);
            }
        }

        for (_, v) in primes {
            for i in 1..v.len() {
                uf.union(v[i - 1], v[i]);
            }
        }

        for i in 0..len {
            if uf.find(indexes[&sorted[i]]) != uf.find(i) {
                return false;
            }
        }

        true
    }
}

struct UnionFind {
    parents: Vec<usize>,
}

impl UnionFind {
    fn new(len: usize) -> Self {
        UnionFind {
            parents: (0..len).collect(),
        }
    }

    fn find(&mut self, node: usize) -> usize {
        if self.parents[node] == node {
            node
        } else {
            self.parents[node] = self.find(self.parents[node]);
            self.parents[node]
        }
    }

    fn union(&mut self, a: usize, b: usize) {
        let a = self.find(a);
        let b = self.find(b);
        self.parents[a] = b;
    }
}
```