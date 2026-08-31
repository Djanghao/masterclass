# ✅ [Python/Rust] fast & easy & concise + mini-proof (with detailed comments)

**Author:** iablokov
**Votes:** 10
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/2708217/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/2708217/)

---

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**

**Comment.** Both brute-force solutions use range **[n/2, n]**. This is explained by the fact that if two numbers sum up to a third number then one of them is not less than **n/2** and the other is not greater than **n/2**. Why not to use range **[0, n/2]** then? The answer here is that starting from low numbers like **1=001** we will never get **100** (let alone the reverse is not unique). However, the opposite is always true.

**Python.** This [**solution**](https://leetcode.com/submissions/detail/823514408/) employs a brute force approach. It demonstrated **1495 ms runtime (100.00%)** and used **13.8 MB memory (100.00%)**. Time complexity is linear: **O(N)**. Space complexity is constant: **O(1)**.
```
class Solution:
    def sumOfNumberAndReverse(self, num: int) -> bool:
        # check the sum condition for all combinations
        return any(n + int(str(n)[::-1]) == num for n in range(num//2,num+1))
```

**Rust.** This [**solution**](https://leetcode.com/submissions/detail/823517356/) employs a brute force approach. It demonstrated **18 ms runtime (100.00%)** and used **2.0 MB memory (100.00%)**. Time complexity is linear: **O(N)**. Space complexity is constant: **O(1)**.
```
impl Solution 
{
    pub fn sum_of_number_and_reverse(num: i32) -> bool 
    {
        // [1] a helper function to reverse a number
        fn revnum(mut n: i32) -> i32
        {
            let mut rev : i32 = 0;
            while n > 0
            {
                rev *= 10;
                rev += (n%10);
                n   /= 10;
            }
            rev
        }
        
        // [2] check the sum condition for all combinations
        (num/2..=num).any(|n| n + revnum(n) == num)
    }
}
```