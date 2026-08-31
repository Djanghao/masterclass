# This should be easy [Rust]

**Author:** nisaacdz
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-in-mountain-array/solutions/3427325/](https://leetcode.com/problems/find-in-mountain-array/solutions/3427325/)

---

# Complexity
- Time complexity: $$O(long(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn find_in_mountain_array(target: i32, mount: &MountainArray) -> i32 {
        let n = mount.length();
        let (mut left, mut right) = (0, n - 1);
        while left < right {
            let mid = (left + right) / 2;
            if mount.get(mid) > mount.get(mid + 1) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        let search = |mut begin, mut end, f: &dyn Fn(i32, i32) -> bool| {
            while begin <= end {
                let mid = (begin + end) / 2;
                let value = mount.get(mid);

                if value == target {
                    return Some(mid);
                } else if f(value, target) {
                    begin = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
            return None;
        };

        if let Some(v) = search(0, left, &|a, b| a < b) {
            v
        } else if let Some(v) = search(left, n - 1, &|a, b| a > b) {
            v
        } else {
            -1
        }
    }
}

```