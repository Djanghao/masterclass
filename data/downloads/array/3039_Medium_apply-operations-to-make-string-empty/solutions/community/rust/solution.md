# 0ms solution rust

**Author:** Varun_EA
**Votes:** 1
**Link:** [https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4743705/](https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4743705/)

---

#  Intuition
 The idea is to use a frequency map to count the occurrences of each character in the string
 Then, find the maximum number of occurrences minus one, which is the threshold for filtering out the characters
 Finally, iterate over the reversed string and keep only the characters that have less than or equal to the threshold occurrences

# Approach
 Create a fixed-size array of 128 integers to store the frequency map
Loop over the string and increment the corresponding entry in the map for each character
 Find the maximum value in the map and subtract one to get the threshold
 Use the rev method to reverse the string and the filter method to filter out the characters that have more than the threshold occurrences
 Use the collect method to convert the iterator into a string
Reverse the string again and return it

# Complexity
- Time complexity: $$O(n)$$, where $$n$$ is the length of the string. We loop over the string twice, once to build the map and once to filter the characters. Both operations take linear time.
- Space complexity: $$O(1)$$, since we use a fixed-size array of 128 integers to store the map. The size of the array does not depend on the input string.

# Code
```
impl Solution {
    pub fn last_non_empty_string(s: String) -> String {
        let mut map = [0i32; 128];
        
        for ch in s.chars() {
            map[ch as usize] += 1;
        }
        
        let max_occurrences = map.iter().max().unwrap() - 1;
        
        // Use iterators instead of loops
        let ans: String = s.chars()
            .rev()
            // Use match instead of if else
            .filter(|&ch| match map[ch as usize] {
                n if n > max_occurrences => {
                    map[ch as usize] -= 1;
                    true
                }
                _ => false
            })
            .collect();
        
        ans.chars().rev().collect()
    }
}

```