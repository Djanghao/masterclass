# rust silly solution

**Author:** sovlynn
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-odd-binary-number/solutions/4802367/](https://leetcode.com/problems/maximum-odd-binary-number/solutions/4802367/)

---

# Intuition
iter in rust is realy addictive.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n) (including result), O(1) (without result)

# Code
```
use std::iter;

impl Solution {
    pub fn maximum_odd_binary_number(s: String) -> String {
        let ones=s.as_bytes().iter().filter(|x|**x==b'1').count()-1;
        iter::repeat('1').take(ones).chain(iter::repeat('0').take(s.len()-ones-1)).chain(iter::once('1')).collect()
    }
}
```