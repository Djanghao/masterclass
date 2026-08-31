# Rust | HashMap

**Author:** tomijaga
**Votes:** 1
**Link:** [https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/2251604/](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/2251604/)

---

```rust
use std::collections::HashMap;

struct SparseVector {
	map: HashMap<usize, i32>
}

impl SparseVector {
    fn new(nums: Vec<i32>) -> Self {
        let mut map = HashMap::new();
        
        for (i, n) in nums.into_iter().enumerate(){
            if n != 0{
                map.entry(i).or_insert(n);
            }
        }
        
        Self{ map }
    }
	
    // Return the dotProduct of two sparse vectors
    fn dot_product(&self, other: SparseVector) -> i32 {
        
        other.map.into_iter()
            .map(|(i, n1)|{
                if let Some(n2) = self.map.get(&i){
                    n1 * n2
                } else{
                    0
                }
            })
            .sum()
    }
}
```