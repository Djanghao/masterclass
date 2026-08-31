# Rust/Python. Linear solution, Range updates with +1, -1 trick with explanation

**Author:** SalvadorDali
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/3771296/](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/3771296/)

---

# Intuition
When you see a number `v` you can create all numbers in range `[v - k; v + k]`. If k would be small you can just generate all of them and add in dictionary and then find the element with highest frequency. 

But k is big, so you need to do a range update in a constant time. Instead we use a classic +1/-1 trick where we increment the value at position `v - k` and decrement the value at position `v + k + 1` and this way mark start and end of the interval.

Then we iterate over all values maintaining current value and update it with our updates. And because we only care about the max frequency we remember it and return at the end.

We do not need to store values below 0 and above max(nums) as if the frequency is maximum at those values, one of the values inside of interval will have the same frequency. Also technically we do not need to even have this array and use a dictionary (so the answer will work even if `nums[i]` be arbitrary big).




# Complexity
- Time complexity:$O(len(nums))$
- Space complexity:$O(max(nums))$

# Code


```Rust []
impl Solution {
  pub fn maximum_beauty(nums: Vec<i32>, k: i32) -> i32 {
    let n = (*nums.iter().max().unwrap() + 2) as usize;
    let mut cnt = vec![0; n];
    for v in nums {
      cnt[0.max(v - k) as usize] += 1;
      cnt[(n - 1).min((v + k + 1) as usize)] -= 1;
    }
    
    let (mut res, mut curr) = (0, 0);
    for v in cnt {
      curr += v;
      res = res.max(curr);
    }
    return res;
  }
}
```
```python []
class Solution:
  def maximumBeauty(self, nums: List[int], k: int) -> int:
    cnt = [0] * (max(nums) + 2)
    for v in nums:
      cnt[max(0, v - k)] += 1
      cnt[min(len(cnt) - 1, v + k + 1)] -= 1
    
    res, curr = 0, 0
    for v in cnt:
      curr += v
      res = max(res, curr)
    return res
```
   
```