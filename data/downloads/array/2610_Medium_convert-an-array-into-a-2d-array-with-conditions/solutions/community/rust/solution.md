# Rust/Python linear solution

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4491095/](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4491095/)

---

# Intuition
Because of small time constrains you can do this by iterating over every value and then you check which set does not have this value. Like I have done in Python. The problem here is that it can be quadratic (if all numbers are the same).

Then you can notice that you can create a hashmap which maps elements to the number of times you have seen it. For example [5, 5, 3, 4, 5, 6, 4, 5]` will be `{5: 4, 4: 2, 3: 1}`


Now you iterate over this map until it has something. At each time you take all the keys from it `[5, 4, 3]` (which is added to the result) and then you update the map by decreasing the count (and removing the key if count is 0). So you map will become `{5: 3, 4: 1}`.

As you see the most times changes are happening are the length of original array

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code


```Python []
class Solution:
  def findMatrix(self, nums: List[int]) -> List[List[int]]:
    res = []
    for v in nums:
      for pos in range(len(res)):
        if v not in res[pos]:
          res[pos].add(v)
          break
      else:
        res.append({v})

    return [list(v) for v in res]
```
```Rust []
use std::collections::HashMap;

impl Solution {
  pub fn find_matrix(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut data = HashMap::new();
    for v in nums {
      *data.entry(v).or_insert(0) += 1;
    }

    let mut res = Vec::new();
    while !data.is_empty() {
      let mut tmp = Vec::new();
      for (k, v) in &data {
        tmp.push(*k);
      } 

      for i in 0 .. tmp.len() {
        if *data.get(&tmp[i]).unwrap() == 1 {
          data.remove_entry(&tmp[i]);
        } else {
          *data.entry(tmp[i]).or_insert(0) -= 1;
        }
      }
      res.push(tmp);
    }

    return res;
  }
}
```