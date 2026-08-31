# Python & Rust Solution

**Author:** ajesh-mishra
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5708204/](https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5708204/)

---

# Code
```python []
class Solution:
    def maxHeightOfTriangle(self, red: int, blue: int) -> int:
        def attempt(red: int, blue: int, is_blue: bool):
            height: int = 1

            while True:
                if is_blue:
                    if height > blue:
                        return height - 1
                    blue -= height
                else:
                    if height > red:
                        return height - 1
                    red -= height

                is_blue = not is_blue
                height += 1

        return max(attempt(red, blue, True), attempt(red, blue, False))
```
```rust []
impl Solution {
    pub fn max_height_of_triangle(red: i32, blue: i32) -> i32 {
        fn attempt(mut red: i32, mut blue: i32, mut is_blue: bool) -> i32 {
            let mut height = 1;

            loop {
                if is_blue {
                    if height > blue {
                        return height - 1;
                    }
                    blue -= height;
                } else {
                    if height > red {
                        return height - 1;
                    }
                    red -= height;
                }
                is_blue = !is_blue;
                height += 1;
            }
        }

        attempt(red, blue, true).max(attempt(red, blue, false))
    }
}
```