# Rust Solution

**Author:** dacozai
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-frequent-ids/solutions/4918426/](https://leetcode.com/problems/most-frequent-ids/solutions/4918426/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O N
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O N
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn most_frequent_i_ds(nums: Vec<i32>, freq: Vec<i32>) -> Vec<i64> {
        use std::collections::HashMap;
        use std::collections::BTreeMap;
        let mut ans: Vec<i64> = vec![];
        let mut id_to_freq: HashMap<i32, i64> = HashMap::new();
        let mut freq_to_id: BTreeMap<i64, i32> = BTreeMap::new();

        for i in 0..nums.len() {
            let e = id_to_freq.entry(nums[i]).or_default();
            if freq_to_id.contains_key(e) {
                let f = freq_to_id.get_mut(e).unwrap();
                *f -= 1;
                if *f == 0 {
                    freq_to_id.remove(e);
                }
            }
            *e += freq[i] as i64;
            freq_to_id.entry(*e).and_modify(|v| *v += 1).or_insert(1);
            let (&largest, _) = freq_to_id.iter().last().unwrap();
            ans.push(largest);
        }
            
        ans
    }
}
```