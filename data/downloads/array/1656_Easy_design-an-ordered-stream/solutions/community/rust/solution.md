# Rust | HashMap

**Author:** tomijaga
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-an-ordered-stream/solutions/2712191/](https://leetcode.com/problems/design-an-ordered-stream/solutions/2712191/)

---

```rust
use std::collections::HashMap;

#[derive(Default)]
struct OrderedStream {
    ptr : usize,
    store : HashMap<usize, String>
}


impl OrderedStream {

    fn new(n: i32) -> Self {
        Default::default()
    }
    
    fn insert(&mut self, id_key: i32, value: String) -> Vec<String> {
        let id_key = (id_key - 1) as usize;
        self.store.insert(id_key, value);
        
        let mut res = vec![];
        
        if id_key == self.ptr{
            while let Some(val) = self.store.remove(&self.ptr){
                res.push(val);
                self.ptr+=1;
            }
        }
        
        res
    }
}
```