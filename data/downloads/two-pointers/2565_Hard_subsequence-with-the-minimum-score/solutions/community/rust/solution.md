# Rust Solution

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/subsequence-with-the-minimum-score/solutions/3182481/](https://leetcode.com/problems/subsequence-with-the-minimum-score/solutions/3182481/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1) Intruce two vectors: left & right.
2) left[i] be the number of characters covered in t (starting from left end) by s[0 ..i - 1].
3) right[i] be the nuber of characters covered in t ( starting from right end) by s[i.. m-1].
4) Once left & right have been calculated, the final solution could derived with a loop.
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
    pub fn minimum_score(s: String, t: String) -> i32 {
        let (m, n) = (s.len(), t.len());
        let (s, t) = (s.chars().collect::<Vec<char>>(), t.chars().collect::<Vec<char>>());
        
        let (mut left, mut right) = (vec![0; m + 1], vec![0; m + 1]);
        let mut count = 0;
        
        for i in 0 .. m {
            if count < n && s[i] == t[count] { count += 1; }
            left[i + 1] = count;
        }
        
        count = 0;
        for i in (0 .. m).rev() {
            if count < n && s[i] == t[n - count - 1] { count += 1; }
            right[i] = count;
        }
        
        let mut ret = n as i32;
        for i in 0 ..= m {
            ret = ret.min(0.max(n as i32 - left[i] as i32 - right[i] as i32));
        }
        
        ret
    }
}
```