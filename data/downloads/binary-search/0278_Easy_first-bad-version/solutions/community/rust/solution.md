# Rust - Binary Search and notes on overflows

**Author:** guydude1
**Votes:** 3
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/1939030/](https://leetcode.com/problems/first-bad-version/solutions/1939030/)

---

```
impl Solution {
    pub fn first_bad_version(&self, n: i32) -> i32 {
        let mut low = 1i32;
        let mut high = n;
        let mut mid = low + (high - low)/2;
        
        while low <= high {
            if self.isBadVersion(mid) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
            mid = low + (high - low)/2;
        }
        high + 1
    }
}
```

Note how ```mid``` is computed:```mid = low + (high - low)/2;```
This is mathematically equivalent to ```mid = (low + high)/2;```
However, the latter will cause overflow on one of the test cases ([2126753390, 1702766719]) since we're dealing with ```i32``` types.