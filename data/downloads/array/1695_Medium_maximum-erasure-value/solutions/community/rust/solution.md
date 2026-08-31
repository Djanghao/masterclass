# Rust - Sliding Window

**Author:** idiotleon
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-erasure-value/solutions/2144282/](https://leetcode.com/problems/maximum-erasure-value/solutions/2144282/)

---

Solution - [github](https://github.com/An7One/lc_soln_rust_leon/tree/main/src/leetcode/lvl2/lc1695)

<b>Problem List</b>
#SlidingWindow - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_technique/n_pointers/by_pointer_amount/2_pointers/sliding_window)
#Subarray - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/array/by_data_structure/subarray.txt)

```
use std::collections::HashSet;
/// @author: Leon
/// https://leetcode.com/problems/maximum-erasure-value/
/// Time Complexity:    O(`len_n`)
/// Space Complexity:   O(`len_n`)
/// Reference:
/// https://leetcode.com/problems/maximum-erasure-value/discuss/978552/Java-O(n)-Sliding-Window-%2B-HashSet
impl Solution {
    pub fn maximum_unique_subarray(nums: Vec<i32>) -> i32 {
        let len_n: usize = nums.len();
        let mut seen: HashSet<i32> = HashSet::new();
        let mut lo: usize = 0;
        let mut hi: usize = 0;
        let mut sum: i32 = 0;
        let mut most: i32 = 0;
        while hi < len_n{
            if seen.insert(nums[hi]){
                sum += nums[hi];
                most = std::cmp::max(most, sum);
                hi += 1;
            }else{
                sum -= nums[lo];
                seen.remove(&nums[lo]);
                lo += 1;
            }
        }
        most
    }
}
```

```
use std::collections::HashSet;
/// @author: Leon
/// https://leetcode.com/problems/maximum-erasure-value/
/// Time Complexity:    O(`len_n`)
/// Space Complexity:   O(`len_n`)
impl Solution {
    pub fn maximum_unique_subarray(nums: Vec<i32>) -> i32 {
        let len_n: usize = nums.len();
        let mut seen: HashSet<i32> = HashSet::new();
        let mut lo: usize = 0;
        let mut most: i32 = 0;
        let mut sum: i32 = 0;
        for hi in 0..len_n {
            sum += nums[hi];
            while lo < hi && seen.contains(&nums[hi]) {
                sum -= nums[lo];
                seen.remove(&nums[lo]);
                lo += 1;
            }
            seen.insert(nums[hi]);
            most = std::cmp::max(most, sum);
        }
        most
    }
}
```

```
/// @author: Leon
/// https://leetcode.com/problems/maximum-erasure-value/
/// Time Complexity:    O(`len_n`)
/// Space Complexity:   O(`RANGE`)
impl Solution {
    pub fn maximum_unique_subarray(nums: Vec<i32>) -> i32 {
        const RANGE: usize = 10e4 as usize + 7;
        let len_n: usize = nums.len();
        let mut freqs: Vec<u16> = vec![0; RANGE];
        let mut lo: usize = 0;
        let mut most: i32 = 0;
        let mut sum: i32 = 0;
        for hi in 0..len_n {
            sum += nums[hi];
            freqs[nums[hi] as usize] += 1;
            while lo < hi && freqs[nums[hi] as usize] > 1 {
                sum -= nums[lo];
                freqs[nums[lo] as usize] -= 1;
                lo += 1;
            }
            most = std::cmp::max(most, sum);
        }
        most
    }
}
```

```
use std::collections::HashMap;
/// @author: Leon
/// https://leetcode.com/problems/maximum-erasure-value/
/// Time Complexity:    O(`len_n`)
/// Space Complexity:   O(`len_n`)
impl Solution {
    pub fn maximum_unique_subarray(nums: Vec<i32>) -> i32 {
        let len_n: usize = nums.len();
        let mut num_to_freq: HashMap<i32, u16> = HashMap::new();
        let mut lo: usize = 0;
        let mut most: i32 = 0;
        let mut sum: i32 = 0;
        for hi in 0..len_n {
            sum += nums[hi];
            *num_to_freq.entry(nums[hi]).or_default() += 1;
            while lo < hi && *num_to_freq.get(&nums[hi]).unwrap() > 1 {
                sum -= nums[lo];
                *num_to_freq.entry(nums[lo]).or_default() -= 1;
                lo += 1;
            }
            most = std::cmp::max(most, sum);
        }
        most
    }
}
```

```
use std::collections::HashSet;
/// @author: Leon
/// https://leetcode.com/problems/maximum-erasure-value/
/// Time Complexity:    O(`len_n`)
/// Space Complexity:   O(`len_n`)
impl Solution {
    pub fn maximum_unique_subarray(nums: Vec<i32>) -> i32 {
        let len_n: usize = nums.len();
        let mut seen: HashSet<i32> = HashSet::new();
        let mut lo: usize = 0;
        let mut hi: usize = 0;
        let mut most: i32 = 0;
        let mut sum: i32 = 0;
        while hi < len_n {
            while hi < len_n && seen.insert(nums[hi]) {
                sum += nums[hi];
                hi += 1;
            }
            most = std::cmp::max(most, sum);
            while hi < len_n && lo < hi && seen.contains(&nums[hi]) {
                seen.remove(&nums[lo]);
                sum -= nums[lo];
                lo += 1;
            }
            if hi < len_n{
                sum += nums[hi];
                seen.insert(nums[hi]);
            }
            hi += 1;
        }
        most
    }
}
```