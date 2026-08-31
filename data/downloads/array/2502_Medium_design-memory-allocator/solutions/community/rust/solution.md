# Split and merge memory blocks

**Author:** tomijaga
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-memory-allocator/solutions/4177509/](https://leetcode.com/problems/design-memory-allocator/solutions/4177509/)

---


# Complexity
- Time complexity:
    - free(): $$O(n)$$
    - allocate(): $$O(n log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ where $$n$$ is the number of memory blocks
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::{BTreeMap, HashMap};

struct Allocator {
    free_memory: BTreeMap<i32, i32>,
    allocated: HashMap<i32, Vec<(i32, i32)>>,
}


impl Allocator {

    fn new(n: i32) -> Self {
        Self{
            free_memory: BTreeMap::from([(0, n)]),
            allocated: HashMap::new(),
        }
    }
    
    fn allocate(&mut self, size: i32, m_id: i32) -> i32 {
        if let Some((&index, &ptr_size)) = self.free_memory
            .iter()
            .find(|(k, &v)| v >= size){
            
                self.free_memory.remove(&index);
                let ptr = if ptr_size == size{
                    (index, size)
                }else{
                    self.free_memory.insert(index + size, ptr_size - size);
                    (index, size)
                };

                let arr = self.allocated.entry(m_id).or_insert(vec![]);
                arr.push(ptr);


                return ptr.0;
        }

        -1
    }

    fn deallocate(&mut self, (index, size): (i32, i32)){
        let mut size = size;
        let mut index = index;
        let right_index = index + size;

        if self.free_memory.contains_key(&right_index){
            let adjacent_ptr = self.free_memory.remove(&right_index).unwrap();
            size += adjacent_ptr;
        }

        if let Some((&left_index, &left_size)) = self.free_memory
            .range(0..index).rev().next(){

                if left_index + left_size == index {
                    index = left_index;
                    size += left_size;
                }
        }

        self.free_memory.insert(index, size);
        
    }
    
    fn free(&mut self, m_id: i32) -> i32 {
        if let Some(ptrs) = self.allocated.remove(&m_id){
            let mut mem = 0;

            for ptr in ptrs.into_iter(){
                self.deallocate(ptr);
                mem += ptr.1
            }
            
            return mem;
        }

        0
    }
}

```