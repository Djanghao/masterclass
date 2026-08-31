# Rust bottom-up DP with 4 arrays

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-palindromic-subsequences/solutions/5310707/](https://leetcode.com/problems/count-palindromic-subsequences/solutions/5310707/)

---

# Approach
Let the format of palindrome subsequence be `abcba`. Then:
`count1[a]` means the number of occurrences found for pattern `a`.

`count2[ab]` means the number of occurrences found for pattern `ab`.

`count3[ab]` means the number of occurrences found for pattern `abc`, i.e. the number of subsequences which needs a suffix `ba` to form a palindrome.

`count4[a]` means the number of occurrences found for pattern `abcb`, i.e. the number of subsequences which needs a suffix `a` to form a palindrome.
# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
impl Solution {
    pub fn count_palindromes(s: String) -> i32 {
        let large = 1_000_000_007i32;
        let mut count1 = [0; 10];
        let mut count2 = [0; 100];
        let mut count3 = [0; 100];
        let mut count4 = [0; 10];
        let mut ans = 0;
        for b in s.bytes() {
            let i = (b - b'0') as usize;
            ans = (ans + count4[i]) % large;
            for j in 0..10 {
                count4[j] = (count4[j] + count3[j * 10 + i]) % large;
            }
            for j in 0..100 {
                count3[j] = (count3[j] + count2[j]) % large;
            }
            for j in 0..10 {
                count2[j * 10 + i] = (count2[j * 10 + i] + count1[j]) % large;
            }
            count1[i] = (count1[i] + 1) % large;
        }
        ans
    }
}
```