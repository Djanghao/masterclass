# Rust 12L / Python 7L. Very confusing description. Explanation

**Author:** SalvadorDali
**Votes:** 18
**Link:** [https://leetcode.com/problems/happy-students/solutions/4054076/](https://leetcode.com/problems/happy-students/solutions/4054076/)

---

# Intuition
I personally found the question description very confusing. 

First lets check what is needed to select zero people. As you will not select anyone, your number of selected is zero, so all `nums[i]` should be > 0.

Now lets see how to select at least some people. As we do not care about their ordering we will sort them. 

Now lets look at some selection `x x x .. x | y y ... y`
Here `x` are some selected people, `y` are unselected and `|` is just a delimiter for us to see two groups. How can we check if this selection is correct. We need to count number of selected people and check that last selected < this nubmer and first unselected is smaller than this number.

So we can iterate over all positions and check `nums[i] < i + 1 < nums[i + 1]`. To account for the last position we just appent some very big number at the end of our sorted list and iterate over all numbers - 1.


# Complexity
- Time complexity: $O(n\\log n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn count_ways(mut nums: Vec<i32>) -> i32 {
    nums.sort_unstable();    
    let mut res = 0;
    if nums[0] != 0 {
      res += 1;
    }

    nums.push(i32::MAX);
    for i in 0 .. nums.len() - 1 {
      if nums[i] < (i + 1) as i32 && nums[i + 1] > (i + 1) as i32 {
        res += 1
      }
    }

    return res;
  }
}
```
```python []
class Solution:
  def countWays(self, nums: List[int]) -> int:
    nums.sort()
    res = int(nums[0] != 0)
    nums.append(float('inf'))
    for i in range(len(nums) - 1):
      if nums[i] < i + 1 < nums[i + 1]:
        res += 1

    return res
```

