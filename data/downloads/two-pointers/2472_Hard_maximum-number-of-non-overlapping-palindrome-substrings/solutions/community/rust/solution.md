# Rust Greedy

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/2810824/](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/2810824/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Perform double loop to find all palindrome-substrings in the form of pair<start index, end index> with length k or k + 1.
Sort the substrings & calculate the result. 
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
impl Solution {
    pub fn max_palindromes(s: String, k: i32) -> i32 {
        let mut  data = Self::collect(&s, k as usize);
        data.sort();
        data.reverse();

        let (mut count, mut last) = (0, 0);
        while data.is_empty() == false {
            while data.is_empty() == false && last > 0 && data[data.len() - 1].0 <= last { data.pop(); }
            if data.is_empty() { continue }
            count += 1;
            last = data[data.len() - 1].1; 
            data.pop();
        }

        count
    }

    fn collect(s: &String, k: usize) -> Vec<(usize, usize)> {
        let n = s.len();
        let s = s.chars().collect::<Vec<char>>();
        let mut ret = vec![];
        for i in 0 .. n {
            let (mut left, mut right) = (i, i);
            while left > 0 && right + 1 < n && right - left + 1 < k && s[left - 1] == s[right + 1] {
                left -= 1;
                right += 1;
            }
            if right - left + 1 >= k { ret.push((left, right)); }

            let (mut left, mut right) = (i, i + 1);
            if right == n || s[left] != s[right] { continue }

            while left > 0 && right + 1 < n && right - left + 1 < k && s[left - 1] == s[right + 1] {
                left -= 1;
                right += 1;
            }
            if right - left + 1 >= k { ret.push((left, right)); }
        } 

        ret
    }
}
```