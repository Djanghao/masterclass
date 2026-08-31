# Python & Rust Solutions

**Author:** ajesh-mishra
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/4070644/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/4070644/)

---

# Code
```python []
class Solution:
    @staticmethod
    def gcd(a: int, b: int) -> int:
        result = min(a, b)
        while result > 0:
            if a % result == 0 and b % result == 0:
                break
            result -= 1
        return result
        
    def countBeautifulPairs(self, nums: List[int]) -> int:
        count = 0
        for i in range(len(nums) - 1):
            first_digit = int(str(nums[i])[0])
            for j in range(i + 1, len(nums)):
                last_digit = nums[j] % 10
                if Solution.gcd(first_digit, last_digit) == 1:
                    count += 1
        return count
```
```rust []
impl Solution {
    pub fn count_beautiful_pairs(nums: Vec<i32>) -> i32 {
        let len = nums.len();
        let mut count = 0;
        let gcd = |a: i32, b: i32| {
            let mut result = a.min(b);
            while result > 0 {
                if a % result == 0 && b % result == 0 {
                    break;
                }
                result -= 1
            }
            result
        };
        for i in 0..len - 1 {
            let first_char = format!("{}", nums[i]).chars().next().unwrap();
            let first_digit = first_char.to_digit(10).unwrap() as i32;
            for j in i + 1..len {
                let last_digit = nums[j] % 10;
                if gcd(first_digit, last_digit) == 1 {
                    count += 1;
                }
            }
        }
        count
    }
}
```