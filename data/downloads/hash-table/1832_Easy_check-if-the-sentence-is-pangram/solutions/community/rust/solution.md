# ✅ [Python/Rust] just one-liners using hashset... (with detailed comments)

**Author:** iablokov
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/2714193/](https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/2714193/)

---

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**

**Python.** This [**solution**](https://leetcode.com/submissions/detail/824403614/) employs a simple one-liner using *set*. It demonstrated **28 ms runtime (97.56%)** and used **13.8 MB memory (95.55%)**. Time complexity is linear: **O(n)**. Space complexity is constant: **O(1)**. 
```
class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        # in Python, a set can automatically be constructed
        # from iterables such as strings, lists, ...
        return len(set(sentence)) == 26
```

**Rust.** This [**solution**](https://leetcode.com/submissions/detail/824403614/) employs a simple one-liner using *HashSet*. It demonstrated **0 ms runtime (100.00%)** and used **2.2 MB memory (26.92%)**. Time complexity is linear: **O(n)**. Space complexity is constant: **O(1)**. 
```
use std::collections::HashSet;

impl Solution 
{
    pub fn check_if_pangram(sentence: String) -> bool 
    {
        // in Rust, a HashSet can automatically be
        // built (collected) from an iterator 
        sentence.chars().collect::<HashSet<char>>().len() == 26
    }
}
```