# Simple Rust solution

**Author:** Belyth
**Votes:** 4
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3125400/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3125400/)

---

# Intuition
If `str1 + str2 != str2 + str1`, there is no common divisor.

# Approach
The next step is find the gcd of the length of two strings.

# Complexity
- Time complexity:
$$O(m + n)$$

- Space complexity:
$$O(m + n)$$


# Code
```
impl Solution {
    pub fn gcd_of_strings(str1: String, str2: String) -> String {
        if &(str1.clone() + &str2) != &(str2.clone() + &str1) {
            return "".to_string();
        }
        let length = gcd(str1.len(), str2.len());
        str1[0..length].to_owned()
    }
}
pub fn gcd(n1: usize, n2: usize) -> usize{
    if n2 == 0 {
        return n1;
    }
    gcd(n2, n1 % n2)
}
```