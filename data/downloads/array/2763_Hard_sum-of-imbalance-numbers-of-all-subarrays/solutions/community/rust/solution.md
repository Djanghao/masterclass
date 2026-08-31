# Rust 12ms/Python 500ms. Quadratic with detailed explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/solutions/3710105/](https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/solutions/3710105/)

---

# Intuition
Lets assume that we already have some array and for it we already calculated imbalanced number for it. Lets assume that the array is `[1, 5, 6, 8, 12]`. The number here is 3, but right now it is not important at all. What we will be focusing on is what happens when we add a new element to this sorted list.

The easiest case is when **the number is already in the list**. As you see that the imbalanced number is not changed. Now when the element is inserted somewhere in the array.

The important part is whetehr the element +1 or -1 already exist. If they do not exist (for example we add element 10 and we see that 9 and 11 do not exist) we see that out of 1 previous imbalanced number, we got 2 (`+1`)

If we add an element 7, and we see that 6 and 8 both exist we see that out of previous 1 imbalanced number, we got 0 (`-1`).

If we add number 4 (where one exist and another does not), the number does not change.

# Complexity
- Time complexity: $O(n^2)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {
  pub fn sum_imbalance_numbers(nums: Vec<i32>) -> i32 {
    let (mut res, n) = (0, nums.len());
    for i in 0 .. n - 1 {
      let mut seen = vec![false; n + 2];
      let mut curr = 0;
      seen[nums[i] as usize] = true;

      for j in i + 1 .. n {
        let p = nums[j] as usize;
        if !seen[p] {
          seen[p] = true;
          if seen[p - 1] && seen[p + 1] {
            curr -= 1;
          } else if !seen[p - 1] && !seen[p + 1] {
            curr += 1;
          }
        }
        res += curr;
      }
    }
    return res;
  }
}
```
```python []
class Solution:
  def sumImbalanceNumbers(self, nums: List[int]) -> int:
    res = 0
    for i in range(len(nums)):
      seen, curr = [0] * (len(nums) + 2), 0
      seen[nums[i]] = True
      for j in range(i + 1, len(nums)):
        if not seen[nums[j]]:
          seen[nums[j]] = True
          if seen[nums[j] - 1] and seen[nums[j] + 1]:
            curr -= 1
          elif not seen[nums[j] - 1] and not seen[nums[j] + 1]:
            curr += 1

        res += curr

    return res
```