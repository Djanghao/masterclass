# Rust/Python linear time, sliding window with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/3663414/](https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/3663414/)

---

# Intuition
All we need to have is a hashmap of all current values and to maintain this hashmap in a constant time. How can we achieve it?

`. . . . [x x x x] . .  .  .  .`
`0 1 2 3  4 5 6 7  8 9 10 11 12`

Our hashmap is all the values not in `x`. Now when move our sliding window we add the value at position 4 to the hashmap and remove the value at position 8. 

# Complexity

- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```Rust []
use std::collections::HashMap;

impl Solution {
  pub fn share_candies(arr: Vec<i32>, k: i32) -> i32 {
    let k = k as usize;
    let mut data = HashMap::new();
    for i in 0 .. arr.len() {
      *data.entry(arr[i]).or_insert(0) += 1;
    }

    for i in 0 .. k {
      let v = *data.get(&arr[i]).unwrap();
      if v == 1 {
        data.remove(&arr[i]);
      } else {
        data.insert(arr[i], v - 1);
      }
    }
    let mut res = data.len();

    for i in k .. arr.len() {
      *data.entry(arr[i - k]).or_insert(0) += 1;

      let v = *data.get(&arr[i]).unwrap();
      if v == 1 {
        data.remove(&arr[i]);
      } else {
        data.insert(arr[i], v - 1);
      }
      res = res.max(data.len());
    }

    return res as i32;
  }
}
```
```python []
class Solution:
  def shareCandies(self, arr: List[int], k: int) -> int:
    data = {}
    for v in arr:
      if v in data:
        data[v] += 1
      else:
        data[v] = 1
    
    for i in range(k):
      if data[arr[i]] == 1:
        del data[arr[i]]
      else:
        data[arr[i]] -= 1
    
    res = len(data)
    for i in range(k, len(arr)):
      if arr[i - k] not in data:
        data[arr[i - k]] = 1
      else:
        data[arr[i - k]] += 1
      
      if data[arr[i]] == 1:
        del data[arr[i]]
      else:
        data[arr[i]] -= 1
      
      res = max(res, len(data))
    return res
```
