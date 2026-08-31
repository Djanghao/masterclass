# ✅ [Rust] 0 ms, a fast straightforward solution (with detailed comments)

**Author:** iablokov
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-palindromic-number/solutions/2588425/](https://leetcode.com/problems/largest-palindromic-number/solutions/2588425/)

---

This [solution](https://leetcode.com/submissions/detail/802175558/) employs a straightforward approach to construct a palindrome. It demonstrated **0 ms runtime (100.00%)** and used **2.5 MB memory (44.83%)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
impl Solution 
{
    pub fn largest_palindromic(num: String) -> String 
    {
        let mut digits: [usize;10] = [0;10];
        let mut palindrome: Vec<u8> = Vec::with_capacity(num.len());
        
        // [1] count digits
        for ch in num.as_bytes()
        {
            digits[(ch - b'0') as usize] += 1;
        }
        
        // [2] degenerate case: all digits are '0'
        if digits[0] == num.len() { return String::from("0"); }
        
        let mut max_middle: usize = 10;
        
        // [3] to construct a larger number, start from larger digits 
        for d in (0..=9 as usize).rev()
        {
            if digits[d] > 0
            {
                // [4] remember the middle digit in the palindrome
                if digits[d] % 2 == 1 && max_middle == 10 { max_middle = d; }
                
                // [5] fill the left half of the palindrome
                for c in 0..digits[d]/2
                {
                    if palindrome.len() == 0 && d == 0 { break; }
                    palindrome.push(d as u8 + b'0');
                }
            }
        }
        
        let half_len = palindrome.len();
        
        // [6] insert middle digit
        if max_middle < 10
        {
            palindrome.push(max_middle as u8 + b'0');
        }
        
        // [7] fill the right half of the palindrome
        for i in (0..half_len).rev()
        {
            palindrome.push(palindrome[i]);
        }
        
        return String::from_utf8(palindrome).unwrap();
    }
}
```