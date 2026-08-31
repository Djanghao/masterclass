# simple

**Author:** vladimirdjokic76
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/5501094/](https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/solutions/5501094/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
use std::collections::HashMap;
//"havefunonleetcode"
impl Solution {
    pub fn num_k_len_substr_no_repeats(s: String, k: i32) -> i32 {
        if s.len() < k as usize {
            return 0;
        }
        let mut result = 0;
        let mut map : HashMap<u8,usize>  = HashMap::new();

        let strings = s.as_bytes();
        let mut start_index = 0;
        let mut index = 0;
        while index < strings.len() {
            if map.contains_key(&strings[index]) == false {
                map.insert(strings[index],index);
                if map.len() == k as usize {
                    println!(" S: {}",&s[start_index..index]);
                    result += 1;
                    map.remove(&strings[start_index]);
                    start_index += 1;
                } 
                index += 1;
                continue;
            }
            let end_index = map[&strings[index]];
            println!(" S {} N {} index {} ",start_index,end_index,index);
            while start_index <= end_index {
                map.remove(&strings[start_index]);
                start_index += 1;
            }
        }
        return result;
    }
}
```