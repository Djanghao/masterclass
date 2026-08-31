# Swift and Rust solutions

**Author:** hsdsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/3736352/](https://leetcode.com/problems/number-of-unique-good-subsequences/solutions/3736352/)

---


# Code
swift
```
class Solution {
    func numberOfUniqueGoodSubsequences(_ binary: String) -> Int {
        var e0 = 0
        var e1 = 0
        var h0 = 0
        for bi in Array(binary) {
            if bi == "1" {
                e1 = (e0 + e1 + 1) % 1_000_000_007
            } else {
                e0 = (e0 + e1) % 1_000_000_007
                h0 = 1
            }
        }
        return (e0 + e1 + h0) % 1_000_000_007
    }
}

```
rust
```
impl Solution {
    pub fn number_of_unique_good_subsequences(binary: String) -> i32 {
        let mut e0 = 0;
        let mut e1 = 0;
        let mut h0 = 0;
        for bi in &binary.chars().collect::<Vec<char>>() {
            if(bi==&'1'){
                e1 = (e0+e1+1)%1000000007;
            } else {
                e0 = (e0 + e1)%1000000007;
                h0 = 1;
            }
        }
        return (e0+e1+h0)%1000000007;
    }
}
```
