# Union Find | Rust

**Author:** yzhong32
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/solutions/4486689/](https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/solutions/4486689/)

---

```
use std::collections::{BinaryHeap, HashMap};
use std::cmp::Reverse;

impl Solution {
    pub fn lexicographically_smallest_array(nums: Vec<i32>, limit: i32) -> Vec<i32> {
        let n = nums.len();
        let mut uf: Vec<usize> = (0..n).collect();
        
        fn find(x: usize, uf: &mut Vec<usize>) -> usize {
            if uf[x] != x {
                uf[x] = find(uf[x], uf);
            }
            uf[x]
        }
        
        fn union(x: usize, y: usize, uf: &mut Vec<usize>) {
            let fx = find(x, uf);
            let fy = find(y, uf);
            uf[fx] = fy;
        }
        
        let mut pairs: Vec<(i32, usize)> = nums.iter()
                                            .enumerate()
                                            .map(|(i, &num)| (num, i))
                                            .collect();
        pairs.sort();
        
        for i in 1..n {
            if pairs[i].0 - pairs[i-1].0 <= limit {
                union(pairs[i].1, pairs[i-1].1, &mut uf);
            }
        }
        
        for i in 0..n {
            find(i,&mut uf);
        }
        
        let mut m = HashMap::new();
        for (i, &c) in uf.iter().enumerate() {
            m.entry(c)
                .and_modify(|x: &mut BinaryHeap<Reverse<i32>>| x.push(Reverse(nums[i])))
                .or_insert_with(|| {
                    let mut heap = BinaryHeap::new();
                    heap.push(Reverse(nums[i]));
                    heap
                });
        }
        
        let mut ans = Vec::new();
        for i in 0..n {
            ans.push(m.get_mut(&uf[i]).unwrap().pop().unwrap().0);
        }
        ans
    }
}
```