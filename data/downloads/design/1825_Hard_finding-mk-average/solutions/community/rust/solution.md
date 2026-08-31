# Rust | BTreeMap + VecDeque

**Author:** notraschi
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-mk-average/solutions/3019890/](https://leetcode.com/problems/finding-mk-average/solutions/3019890/)

---


# Approach
A deque (VecDeque) is used to keep track of the last m elements.
A BTreeMap stores the elements in the deque as keys and as value it has the number of occurences. 

# Complexity
For the add_element method, the time complexity is O(1) since all operations are constant time. The space complexity is O(n) where n is the number of elements in the stream and sort data structures.

For the calculate_mk_average method, the time complexity is O(k) where k is the number of elements removed from the sorted copy of the stream. The space complexity is O(1) since no new data structures are created.

# Code
```
use std::collections::{VecDeque, BTreeMap};
#[allow(unused)]
struct MKAverage {

   // NOTE:
   // m -> number of elements of which to calcolate the average
   // k -> number of smaller and bigger elements to remove before averaging
   m: usize,
   k: usize,
   m_sum: i32,
   stream: VecDeque<i32>,
   sort: BTreeMap<i32, i32>, // if it was counting sort, K: index (num), V: occurrences
}

/** 
* `&self` means the method takes an immutable reference.
* If you need a mutable reference, change it to `&mut self` instead.
*/
#[allow(unused)]
impl MKAverage {    

    fn new(m: i32, k: i32) -> Self {
        
        MKAverage { 
            m: m as usize, 
            k: k as usize, 
            m_sum: 0,
            stream: VecDeque::new(),
            sort: BTreeMap::new()
        }
    }
   
    fn add_element(&mut self, num: i32) {  // O(1)
        
        self.stream.push_back(num);
        *self.sort.entry(num).or_insert(0) += 1;
        self.m_sum += num;
        if self.stream.len() > self.m {

            let rem = self.stream.pop_front().unwrap();
            *self.sort.get_mut(&rem).unwrap() -= 1;
            if self.sort.get(&rem).unwrap() == &0 { self.sort.remove(&rem); }
            self.m_sum -= rem;
        }
    }
    
    fn calculate_mk_average(& self) -> i32 {
        
        if self.stream.len() < self.m { return -1; }

        // k smallest
        let mut k_sum = 0;
        let mut k_times = self.k;
        'label: for (num, count) in self.sort.iter().take(self.k) {
            for _ in 0..*count {
                k_sum += num;
                k_times -= 1;
                if k_times < 1 { break 'label; }
            }
        }
    
        // Remove the largest k elements from the sorted copy
        k_times = self.k;
        'label2: for (num, count) in self.sort.iter().rev().take(self.k) {
            for _ in 0..*count {
                k_sum += num;
                k_times -= 1;
                if k_times < 1 { break 'label2; }
            }
        }

        // calc average
        let sum = self.m_sum - k_sum as i32;
        sum / (self.m - 2*self.k) as i32
    }
}

```