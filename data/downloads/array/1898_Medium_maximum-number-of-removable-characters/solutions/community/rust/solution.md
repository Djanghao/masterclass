# Rust binary search solution

**Author:** wddwycc
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/1268969/](https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/1268969/)

---

```rust
impl Solution {
    // O(nlogn)
    pub fn maximum_removals(s: String, p: String, removable: Vec<i32>) -> i32 {
        let s = s.into_bytes();
        let p = p.into_bytes();
        // find removable count division of is_subsequence or not
        // similar to: https://leetcode.com/problems/first-bad-version/
        let mut tmp = s.clone();
        let mut l = 0;
        let mut r = removable.len();
        while l < r {
            let mid = (l + r) / 2;
            for i in 0..=mid {
                tmp[removable[i] as usize] = b' ';
            }
            if Self::is_subsequence(&tmp, &p) {
                l = mid + 1;
            } else {
                for i in 0..=mid {
                    tmp[removable[i] as usize] = s[removable[i] as usize];
                }
                r = mid;
            }
        }
        l as i32
    }

    // O(n)
    fn is_subsequence(s: &[u8], p: &[u8]) -> bool {
        let mut i = 0;
        let mut j = 0;
        while i < s.len() && j < p.len() {
            if s[i] == p[j] {
                j += 1;
            }
            i += 1;
        }
        j == p.len()
    }
}
```