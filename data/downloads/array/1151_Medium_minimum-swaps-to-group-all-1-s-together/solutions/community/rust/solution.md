# Rust/Python Linear time, constant space. Explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/3561024/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/3561024/)

---

# Intuition
We can easily find the length of all consequitive ones (it will be equal to the number of ones in the array. Lets call it `total`). Then to find the number of swaps at each position would be the difference between all all ones and our string. For example:

```
     1 0 1 1 0 1 1 0 0 0 0 1 1
     x x x 1 1 1 1 1 1 1 x x x
idx: 0 1 2 3 4 5 6 7 8 9 ...... 
```

So here at position 3 we will have 4 swaps as the elements do not match at indices 4, 7, 8, 9. We also can calculate the number of swaps as the `total - sum(els)`

But after we calculated the number of swaps in one place, we can calculate the number of swaps in the next place in `O(1)`, by just looking at position we add to our sliding window and position we are removing. So we can iterate over all array and at each position find the number of swaps.


# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {
  pub fn min_swaps(data: Vec<i32>) -> i32 {
    let total: i32 = data.iter().sum();  
    let mut curr: i32 = data[..total as usize].iter().sum();
    let mut min_swaps = total - curr;

    for i in (total as usize) .. data.len() {
      curr += data[i] - data[i - total as usize];
      min_swaps = min_swaps.min(total - curr);
    }

    return min_swaps;
  }
}
```
```python []
class Solution:
  def minSwaps(self, data: List[int]) -> int:
    total = sum(data)
    curr = sum(data[:total])
    min_swaps = total - curr
    
    for i in range(total, len(data)):
      curr += data[i] - data[i - total]
      min_swaps = min(min_swaps, total - curr)
    return min_swaps
```
