# Rust, DP Hasmap

**Author:** greymw
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/3672531/](https://leetcode.com/problems/longest-arithmetic-subsequence/solutions/3672531/)

---


# Approach
We build a list of all possible sequences at each entry for all previous entries, keeping track of the difference and the length of the sequence. When we do this we also check to see if the difference between the new value and the previous one matches the difference in a previous sequence. If we do find this then we are continuing a sequence.

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn longest_arith_seq_length(nums: Vec<i32>) -> i32 {

        //corner cases
        if nums.len() < 3 {
            return nums.len() as i32;
        }

        //key is difference, value is count
        let mut sequences: Vec<HashMap<i32, i32>> = vec!(HashMap::new(); nums.len());

        //smallest subsequence is guaranteed to be 2
        let mut longest_sequence = 2;


        for ptr1 in 0..nums.len() {

            //must check all new entries against all the previous entries
            for ptr2 in 0..ptr1 {
                let difference = nums[ptr2] - nums[ptr1];

                //a match means we are continuing an already found sequence, so we increment it
                let mut current_sequence_length = 2;
                if let Some(count) = sequences[ptr2].get(&difference) {
                    current_sequence_length = *count + 1;
                    if *count == longest_sequence {
                        longest_sequence += 1;
                    }
                }

                sequences[ptr1].insert(difference, current_sequence_length);
            }
        }

        longest_sequence
    }
}
```