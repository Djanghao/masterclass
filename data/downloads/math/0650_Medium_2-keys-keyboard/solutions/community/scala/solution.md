# Iterative solution in Rust | Scala | Go | C | C++ | Python

**Author:** Tomas245
**Votes:** 0
**Link:** [https://leetcode.com/problems/2-keys-keyboard/solutions/5717329/](https://leetcode.com/problems/2-keys-keyboard/solutions/5717329/)

---

# Approach
Add `A` char to current string until n is not devisible but curr string. Then we just copy our current string and paste it until we done.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
`O(n)` in case of prime number

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
`O(1)`

```rust []
impl Solution {
    pub fn min_steps(n: i32) -> i32 {
        let mut curr: i32 = 1;
        let mut curr_copied: i32 = 0;
        let mut ans: i32 = 0;

        while curr < n {
            if n % curr == 0 {
                curr_copied = curr;
                ans += 1;
            }
            curr += curr_copied;
            ans += 1;
        }
        ans
    }
}
```
```scala []
object Solution {
    def minSteps(n: Int): Int = {
        var curr: Int = 1
        var curr_copied: Int = 0
        var ans: Int = 0

        while (curr < n) {
            if (n % curr == 0) {
                curr_copied = curr
                ans += 1
            }
            curr += curr_copied
            ans += 1
        }
        ans
    }
}
```
```golang []
func minSteps(n int) int {
    var curr int = 1
    var curr_copied int = 0
    var ans int = 0

    for curr < n {
        if n % curr == 0 {
            curr_copied = curr
            ans += 1
        }
        curr += curr_copied
        ans += 1
    }
    return ans
}
```
```c []
int minSteps(int n) {
    int curr = 1, curr_copied = 0, ans = 0;
    while (curr < n) {
        if (n % curr == 0) {
            curr_copied = curr;
            ++ans;
        }
        curr += curr_copied;
        ++ans;
    }
    return ans;
}
```
```cpp []
class Solution {
public:
    int minSteps(int n) {
        int curr{1}, curr_copied{0}, ans{0};
        while (curr < n) {
            if (n % curr == 0) {
                curr_copied = curr;
                ++ans;
            }
            curr += curr_copied;
            ++ans;
        }
        return ans;
    }
};
```
```python []
class Solution:
    def minSteps(self, n: int) -> int:
        curr = 1
        curr_copied = 0
        ans = 0
        while curr < n:
            if n % curr == 0:
                curr_copied = curr
                ans += 1
            curr += curr_copied
            ans += 1
        return ans
```