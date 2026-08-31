# solution using sorting and two pointers | RUST^tm

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3931170/](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3931170/)

---

# Code
```
// use std::collections::HashSet;
impl Solution {
    pub fn max_num_of_marked_indices(nums: Vec<i32>) -> i32 {
        // Pick two different unmarked indices i and j such that 2 * nums[i] <= nums[j], then mark i and j
        let mut temp_nums: Vec<i32> = nums.to_vec();
        let mut count: i32 = 0; 
        temp_nums.sort_by(|a,b| a.cmp(b));
        let mut l: usize = 0;
        let mut r: usize = temp_nums.len()/2;
        // let mut idx_set: HashSet<usize> = HashSet::new();
        // println!("l:{},r:{}\
{:?}", l, r, temp_nums);
        while l < (temp_nums.len()/2) && r < temp_nums.len() {
            // if idx_set.contains(&l) {
            //     break;
            // }
            // println!("{:?}", idx_set);
            let first_val: i32 = temp_nums[l] * 2;
            let second_val: i32 = temp_nums[r];
            // println!("l:{},r:{},1:{},2:{}", l, r, first_val, second_val);
            if first_val <= second_val {
                count += 2;
                // idx_set.insert(r);
                l += 1;
                r += 1;
                continue;
            }
            r += 1;
        }
        // println!("{:?}", idx_set);

        count
    }
}
```