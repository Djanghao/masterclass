# Rust solution

**Author:** alihaideralsawad
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/3215454/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/solutions/3215454/)

---

# Approach
In the context of the given code, a mask is an integer that encodes which characters of the input string `s` are included in the current subsequence being examined. In the loop for mask in `1..1<<s.len()`, each mask is an integer between 1 and 2^n - 1. 
The binary representation of each mask has a 1 in the i-th position if the i-th character of the input string is included in the current subsequence and a 0 otherwise.
    
For example, if `s` is "abc", then the mask 5 (which is 101 in binary) would indicate that the subsequence being examined includes the first and third characters of `s`.

# Code
```
impl Solution {
    pub fn max_product(s: String) -> i32 {
        // Create a vector of tuples containing the mask and length of each palindrome subsequence
        let mut pali_len: Vec<(usize, usize)> = (1..1 << s.len())
            .filter_map(|mask| {
                // Create the subsequence using the mask
                let subseq: String = (0..s.len()) // for each index in the input string
                    .filter(|i| mask & (1 << i) > 0) // if the bit corresponding to `i` is set in the mask
                    .map(|i| s.chars().nth(i).unwrap()) // append the character at that index to the subsequence
                    .collect();

                // Check if the subsequence is a palindrome
                if subseq == subseq.chars().rev().collect::<String>() {
                    // if it is, return a tuple containing the mask and subsequence length
                    Some((mask, subseq.len())) 
                } else {
                    None 
                }
            })
            .collect();

        // Sort the palindrome subsequence vector by length, descending
        pali_len.sort_by(|a, b| b.1.cmp(&a.1));

        let mut res = 1;
        // Loop through the palindrome subsequence vector
        for i in 0..pali_len.len() {
            let (m1, l1) = pali_len[i];
            // If the length of the current subsequence squared is less than the current result, 
            // we can break out of the loop since our palidromes are sorted in descending order by length.
            if l1.pow(2) < res {
                break;
            }
            // Loop through the rest of the palindrome subsequence vector
            for j in (i+1)..pali_len.len() {
                let (m2, l2) = pali_len[j];
                // If the two subsequence masks are disjoint and their lengths multiply to a 
                // value greater than the current result, update the result and 
                // break out of the inner loop
                if m1 & m2 == 0 && l1 * l2 > res {
                    res = l1 * l2;
                    break;
                }
            }
        }
        res as i32 
    }
}

```