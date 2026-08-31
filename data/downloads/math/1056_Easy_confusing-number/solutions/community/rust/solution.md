# Rotate numbers the Rust way

**Author:** adradek
**Votes:** 0
**Link:** [https://leetcode.com/problems/confusing-number/solutions/4227951/](https://leetcode.com/problems/confusing-number/solutions/4227951/)

---

# Intuition
A slight trick is to use the array for matching the incoming digit and the result of rotation.
**-1** elements are just placeholders for digits that brake the rotation

# Complexity
- Time complexity: **O(lg(n))**
- Space complexity: **O(1)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn confusing_number(mut n: i32) -> bool {
        let original = n;
        let mut remainder: i32;
        let mut rotated_number = 0;

        let rotation = [0, 1, -1, -1, -1, -1, 9, -1, 8, 6];

        while n > 0 {
            remainder = n % 10;

            match(remainder) {
                2 | 3 | 4 | 5 | 7 => return false,
                _ => rotated_number = rotated_number * 10 + rotation[remainder as usize],
            }

            n = n / 10;
        }

        original != rotated_number
    }
}
```