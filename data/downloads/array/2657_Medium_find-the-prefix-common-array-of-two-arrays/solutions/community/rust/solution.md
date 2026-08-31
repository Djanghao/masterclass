# Intuitive Rust Approach Using HashMap

**Author:** dedomenastorage
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/5288595/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/5288595/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashMap;
impl Solution {
    pub fn find_the_prefix_common_array(a: Vec<i32>, b: Vec<i32>) -> Vec<i32> {
        let mut map: HashMap<i32, i32> = HashMap::new();
        let mut stack: Vec<i32> = vec![0; a.len()];
        let mut i: usize = 0;
        let mut counter: i32 = 0;
        fn get_oc(local_map: &mut HashMap<i32, i32>, value: &i32){
            match local_map.get_mut(value){
                Some(occurence)=>{
                    *occurence += 1;
                }
                None=>{
                    local_map.insert(*value, 1);
                }
            }
        }   
          for index in 0..a.len(){
            let a_el: i32 = a[index];
            let b_el: i32 = b[index];
            get_oc(&mut map, &a_el);
            get_oc(&mut map, &b_el);
            if a_el != b_el{
                if *map.get(&a_el).unwrap() > 1{
                    counter += 1;
                }
                if *map.get(&b_el).unwrap() > 1{
                    counter += 1;
                }
            }else{
                counter += 1;
            }
            stack[i] = counter;
            i += 1;
        }
        stack
    }
}
```