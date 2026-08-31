# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/2738774/](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/solutions/2738774/)

---

```
impl Solution {
    pub fn minimum_buckets(street: String) -> i32 {
        let mut s = street.chars().collect::<Vec<char>>();
        s.insert(0,'H');
        s.push('H');

        let n = s.len();
        for i in 1..n-1 {
            if s[i-1] == 'H' && s[i] == 'H' && s[i+1] == 'H' {
                return -1
            }
        }

        s[0] = '.';
        s[n-1] = '.';
        let mut count = 0;
        for i in 1..n-1 {
            if s[i-1] == 'H' && s[i] == '.' && s[i+1] == 'H' {
                count += 1;
                s[i-1] = '.';
                s[i+1] = '.';
            }
        }

        for i in 1..n-1 {
            if s[i] == 'H' {
                count += 1;
            }
        }
        
        count
    }
}
```