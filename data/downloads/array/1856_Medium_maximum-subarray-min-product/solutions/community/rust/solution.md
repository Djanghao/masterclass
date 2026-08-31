# Rust - Dynamic Programming(Prefix Sums), with Monotonic Stack

**Author:** idiotleon
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-subarray-min-product/solutions/1203532/](https://leetcode.com/problems/maximum-subarray-min-product/solutions/1203532/)

---

[Problem List of Dedicated "Prefix Sums" - github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_algorithm/dynamic_programming/prefix_vs_suffix_sums.txt)

[Problem List of "Special Array" techinique - github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_algorithm/dynamic_programming/by_technique/with_help_of/special_array)

[Problem List of "Monotonic Stack" - github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/stack/stack_monotonic.txt)

[Problem List of "Subarray" - github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/array/by_data_structure/subarray.txt)

```
/// https://leetcode.com/problems/maximum-subarray-min-product/
/// 
/// Time Complexity:    O(`len_n`)
/// Space Complexity:   O(`len_n`)
/// 
/// Reference:
/// https://leetcode.com/problems/maximum-subarray-min-product/discuss/1198718/JavaPython-Stack-keeps-index-of-elements-less-than-numsi-O(N)
use std::collections::VecDeque;

impl Solution {
    pub fn max_sum_min_product(nums: Vec<i32>) -> i32 {
        const MOD: u64 = 1e9 as u64 + 7;
        let len_n = nums.len();
        
        let mut left_bound: Vec<usize> = vec![0; len_n];
        let mut right_bound: Vec<usize> = vec![0; len_n];
        
        let mut stack: VecDeque<usize> = VecDeque::new();
        for i in 0..len_n{
            while let Some(&top) = stack.back(){
                if nums[top] >= nums[i] {
                    stack.pop_back();
                }else{
                    break;
                }
            }
            
            if let Some(&top) = stack.back(){
                left_bound[i] = top + 1;
            }else{
                left_bound[i] = 0;
            }
            
            stack.push_back(i);
        }
        
        stack.clear();
        
        for i in (0..len_n).rev(){
            while let Some(&top) = stack.back(){
                if nums[top] >= nums[i]{
                    stack.pop_back();
                }else{
                    break;
                }
            }
            
            if let Some(&top) = stack.back(){
                right_bound[i] = top - 1;
            }else{
                right_bound[i] = len_n - 1;
            }
            
            stack.push_back(i);
        }
        
        let mut prefix_sums: Vec<u64> = vec![0; len_n + 1];
        for i in 0..len_n{
            prefix_sums[i + 1] = prefix_sums[i] + nums[i] as u64; 
        }
        
        let mut max_product: u64 = 0;
        for i in 0..len_n{
            max_product = std::cmp::max(max_product, Self::get_sum(left_bound[i], right_bound[i], &prefix_sums) * (nums[i] as u64));
        }
        
        (max_product % MOD) as i32
    }
    
    fn get_sum(lo: usize, hi: usize, prefix_sums: &Vec<u64>) -> u64{
        return prefix_sums[hi + 1] - prefix_sums[lo];
    }
}
```