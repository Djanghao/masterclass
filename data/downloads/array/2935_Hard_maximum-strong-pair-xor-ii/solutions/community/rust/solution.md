# bit scan and binary search

**Author:** cinoss
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4279718/](https://leetcode.com/problems/maximum-strong-pair-xor-ii/solutions/4279718/)

---

# Intuition
The problem is equivalent to for each number x find a number in range [x/2, x] to maximize XOR with x. if we look at the most significant bit of x (which must be 1) we want to find a number in the range that should be 0, which means we have a condition to cut down the range in half. 
# Approach
- sort the list
- use 2 pointer to have the range of [x/2,x] for each element
- scan bit from 20 to 0, for each bit, if they are all 1 or 0 we move on, if not we pick the one that complement the bit of x then we narrow the range, we can find the new range by binary search

# Complexity
- Time complexity:
$$O(n log n)$$

- Space complexity:
$$O(n)$$

# Code
```rust
impl Solution {
    pub fn maximum_strong_pair_xor(nums: Vec<i32>) -> i32 {
        let mut res = 0;
        let mut a = nums;
        a.sort();
        let mut i = 0;
        let n = a.len();
        for j in 0..n {
            let x = a[j];
            while i < j && a[i] * 2 < a[j] { i += 1; }
            let mut l = i;
            let mut r = j;
            let mut t = 20;
            while l<r {
                while t >= 0 && (a[l] >> t & 1) == (a[r] >> t & 1) {
                    t -= 1;
                }
                if t == -1 { break }
                if ((x >> t & 1) == (a[l] >> t & 1)) {
                    let mut ll = l;
                    let mut rr = r;
                    while ll <= rr {
                        let mid = (ll + rr) / 2;
                        if ((x >> t & 1) == (a[mid] >> t & 1)) {
                            ll = mid + 1;
                        } else {
                            l = mid;
                            rr = mid - 1;
                        }
                    }
                }
                if ((x >> t & 1) == (a[r] >> t & 1)) {
                    let mut ll = l;
                    let mut rr = r;
                    while ll <= rr {
                        let mid = (ll + rr) / 2;
                        if ((x >> t & 1) == (a[mid] >> t & 1)) {
                            rr = mid - 1;
                        } else {
                            r = mid;
                            ll = mid + 1;
                        }
                    }
                }
            }
            res = res.max(a[j] ^ a[l])
        }
        res
    }
}
```