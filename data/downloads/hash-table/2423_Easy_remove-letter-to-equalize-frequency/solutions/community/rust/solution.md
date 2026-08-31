# ✅ [Rust] 0 ms, HashMap-based counter (with detailed comments)

**Author:** iablokov
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/2647687/](https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/2647687/)

---

This [**solution**](https://leetcode.com/submissions/detail/812949562/) employs a *HashMap*-based counter with subsequent checking of 4 frequency conditions. It demonstrated **0 ms runtime (100.00%)** and used **2.1 MB memory (100.00%)**. Time complexity is linear: **O(N)**. Space complexity is constant: **O(1)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
use std::collections::HashMap;

impl Solution 
{
    pub fn equal_frequency(word: String) -> bool 
    {
        // [1] count letter frequencies
        let freq_map: HashMap<char,i32> = 
            word
                .chars()
                .fold(HashMap::new(), |mut freq, ch|
                {
                    freq.entry(ch)
                        .and_modify(|item| *item += 1)
                        .or_insert(1);
                    freq
                });
        
        // [2] sort frequencies
        let mut freq_vec: Vec<i32> = freq_map.into_values().collect();
        freq_vec.sort_unstable();
        
        // [3] check several frequency conditions

        //     - for a single unique letter in the word
        if freq_vec.len() == 1  { return true; }
        
        //     - for all frequencies being equal to 1
        if freq_vec[freq_vec.len()-1] == 1     { return true; }

        //     - for one less frequent element
        if freq_vec[1] - freq_vec[0] == 1 
           && freq_vec[1] == freq_vec[freq_vec.len()-1]  { return true; }

        //     - for one most frequent element
        if freq_vec[freq_vec.len()-1] - freq_vec[freq_vec.len()-2] == 1 
           && freq_vec[0] == freq_vec[freq_vec.len()-2]  { return true; }

        return false;
    }
}
```