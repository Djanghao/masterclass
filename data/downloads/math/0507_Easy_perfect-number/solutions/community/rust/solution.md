# Fastest any language solution

**Author:** non-descriptive
**Votes:** 1
**Link:** [https://leetcode.com/problems/perfect-number/solutions/2110997/](https://leetcode.com/problems/perfect-number/solutions/2110997/)

---

If we check already calculated values of perfect numbers we can see as they rapidly grow beyond simple types, and since upper number bound is 10^8, we can just use precalculated values from [OEIS](https://oeis.org/A000396) database. 
```
	6, 28, 496, 8128, 33550336
```
Next valid number already will not fit in 32-bit integral type, so we just check if number equals one of them
in python
```python
class Solution:
    def checkPerfectNumber(self, num: int) -> bool:
        return num in [6, 28, 496, 8128, 33550336]
```
in c++
```cpp
class Solution {
public:
    bool checkPerfectNumber(int num) {
        const int nums[]{6, 28, 496, 8128, 33550336};
        for (auto i: nums) {
            if (num == i) return true;
        }
        return false;
    }
};
```
in rust
```rust
impl Solution {
    pub fn check_perfect_number(num: i32) -> bool {
        [6, 28, 496, 8128, 33550336]
        .iter()
        .find(|&&n| n==num )
        .is_some()
        
    }
}
```