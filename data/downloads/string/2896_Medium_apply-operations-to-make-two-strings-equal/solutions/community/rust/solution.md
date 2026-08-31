# [Rust] dynamic programming

**Author:** iablokov
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4147339/](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4147339/)

---

```rust
use std::collections::HashMap;

impl Solution 
{
    pub fn min_operations(s1: String, s2: String, x: i32) -> i32 
    {
        let idx: Vec<i32> = s1.bytes()
                              .zip(s2.bytes())
                              .enumerate()
                              .filter(|(_,(b1,b2))| *b1 != *b2)
                              .map(|(i,(_,_))| i as i32)
                              .collect();
        
        if idx.len() % 2 == 1 { return -1; }
        if idx.len() == 0     { return 0; }

        fn dfs(l: usize, r: usize, x: i32, 
               cache: &mut HashMap<(usize,usize), i32>, idx: &Vec<i32>) -> i32
        {
            if l >= r { return 0; }
            if let Some(&v) = cache.get(&(l,r)) { return v; }

            let s1 = x.min(idx[r]-idx[l])   
                   + dfs(l.saturating_add(1), r.saturating_sub(1), x, cache, idx);
            let s2 = x.min(idx[l+1]-idx[l]) 
                   + dfs(l.saturating_add(2), r, x, cache, idx);
            let s3 = x.min(idx[r]-idx[r-1]) 
                   + dfs(l, r.saturating_sub(2), x, cache, idx);
            let score = s1.min(s2).min(s3);
            
            cache.insert((l,r), score);
            score
        }
        
        let mut cache: HashMap<(usize,usize), i32> = HashMap::new();
        dfs(0, idx.len()-1, x, &mut cache, &idx)
    }
}

```