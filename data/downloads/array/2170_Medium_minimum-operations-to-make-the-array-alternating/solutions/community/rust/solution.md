# i got the inspiration after reading the hint, (need to be cleaned) | RUST^tm

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/4060924/](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/solutions/4060924/)

---

# Code
```
use std::collections::HashMap;
impl Solution {
    pub fn minimum_operations(nums: Vec<i32>) -> i32 {
        if nums.len() <= 1 {return 0}
        let mut odd_pos: HashMap<i32, i32> = HashMap::new();
        // let mut max_freq_odd: [i32; 3] = [0, 0, nums.len() as i32 / 2]; // [max_freq, num, the_length]
        // if nums.len() % 2 != 0 {
        //     max_freq_odd[2] += 1;
        // }
        let mut even_pos: HashMap<i32, i32> = HashMap::new();
        // let mut max_freq_even: [i32; 3] = [0, 0, nums.len() as i32 / 2]; // [max_freq, num, the_length]

        for i in 0..nums.len() {
            if (i+1) % 2 != 0 { // odd
                if let Some(freq) = odd_pos.get_mut(&nums[i]) {
                    *freq += 1;
                    // if *freq > max_freq_odd[0] {
                    //     max_freq_odd[0] = *freq;
                    //     max_freq_odd[1] = nums[i];
                    // }
                } else {
                    odd_pos.insert(nums[i], 1);
                    // if max_freq_odd[0] < 1 {
                    //     max_freq_odd[0] = 1;
                    //     max_freq_odd[1] = nums[i];
                    // }
                }
                continue;
            }
            if let Some(freq) = even_pos.get_mut(&nums[i]) {
                *freq += 1;
                // if *freq > max_freq_even[0] {
                //     max_freq_even[0] = *freq;
                //     max_freq_even[1] = nums[i];
                // }
            } else {
                even_pos.insert(nums[i], 1);
                // if max_freq_even[0] < 1 {
                //     max_freq_even[0] = 1;
                //     max_freq_even[1] = nums[i];
                // }
            }
 
        }
        let mut odd_freq: Vec<Vec<i32>> = vec![];
        let mut even_freq: Vec<Vec<i32>> = vec![];
        // [[num, freq]]
        for (num, freq) in odd_pos.iter() {
            odd_freq.push(vec![*num, *freq]);
        }
        for (num, freq) in even_pos.iter() {
            even_freq.push(vec![*num, *freq]);
        }
        odd_freq.sort_by(|a, b| {
           if a[1] != b[1] {b[1].cmp(&a[1])}
           else {a[0].cmp(&b[0])} 
        });
        even_freq.sort_by(|a, b| {
           if a[1] != b[1] {b[1].cmp(&a[1])}
           else {a[0].cmp(&b[0])} 
        });

        // println!("{:?}\
{:?}", odd_pos, even_pos);
        // println!("odd=>{:?}\
even=>{:?}", max_freq_odd, max_freq_even);
        // println!("odd_vec=>{:?}\
even_vec=>{:?}", odd_freq, even_freq);
        
        let mut count: i32 = 0;
        // the idea behind the solution is, i got it from reading the hint,
        // finding the num combination to maximaze unreplaced nums

        // the first thing after we sort the nums based on the frequencies
        
        // condition 1 : if the odd and even have different num at the max frequencies
        // so to maximize it we just need to replace the number that arent the max freq in both odd and even, so just add the frequencies after the indices 0 -> 1,2,3,... on both odd and even

        // condition 2 : if the nums are the same at the max frequencies
        // i made two count : the first -> if we replace the odd so the the num that need to be replaced are --> for odd (0,2,3,...) we skip indice 1 cause if we want to replace the odd the indice 1 is the next max frequencies after indeice 0
        // the second we replace the even, its the same as the odd, but we just reverse

        // after that we compare it, which one is leesser

        if odd_freq[0][0] != even_freq[0][0] {
            for i in 1..odd_freq.len() {
                count += odd_freq[i][1];
            }
            for i in 1..even_freq.len() {
                count += even_freq[i][1];
            } 
        } else {
            let mut temp_1: i32 = odd_freq[0][1];
            // we change the odd
            for i in 2..odd_freq.len() {
                temp_1 += odd_freq[i][1];
            }
            for i in 1..even_freq.len() {
                temp_1 += even_freq[i][1];
            }
            let mut temp_2: i32 = even_freq[0][1];
            // we change the even
            for i in 2..even_freq.len() {
                temp_2 += even_freq[i][1];
            }
            for i in 1..odd_freq.len() {
                temp_2 += odd_freq[i][1];
            }
            // println!("1:>{}\
2:>{}", temp_1, temp_2);
            count = if (temp_1 >= temp_2) {temp_2} else {temp_1};
        }


        count
    }
}
```