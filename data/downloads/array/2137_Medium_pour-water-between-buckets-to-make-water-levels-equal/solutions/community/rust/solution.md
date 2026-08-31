# Rust/Python binary search with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/3611435/](https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal/solutions/3611435/)

---

# Intuition
The problem is easy to understand and solve if you notice one seemingly straight forward observation.

**The amount of water stays the same**. The amount of water you remove from buckets should be equal to the amount of water you poured into buckets and was lost due to our loss.

Lets assume that water we want to achieve is `X`. 

 - how much we remove? From every bucket `A` which has more than `X` we remove `A - X`
 - how much do we add. In total we add to every bucket `A` which has less than `X`. But we are not adding all this water because we are losing some part of it. So we are adding `(X - A) * loss`

After that it is an easy binary search to find the solution which gives us difference between those 2 numbers as less than some very small number.

You can start binary search from `[0, avg]` interval

# Complexity

Let n be the size of buckets, and M the maximum number in a bucket.

- Time complexity: $O(n \\log M)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {

  fn water_diff(arr: &Vec<i32>, goal: f64, loss: i32) -> f64 {
    let (mut add, mut rem) = (0f64, 0f64);
    for v in arr {
      if (*v as f64) > goal {
        add += *v as f64 - goal;
      } else {
        rem += goal - *v as f64;
      }
    }

    return add * (100. - loss as f64) / 100. - rem;
  }

  pub fn equalize_water(arr: Vec<i32>, loss: i32) -> f64 {
    let mut s = 0;
    for i in 0 .. arr.len() {
      s += arr[i] as i64;
    }

    let mut lo: f64 = 0.;
    let mut hi: f64 = (s as f64) / (arr.len() as f64);

    while (hi - lo).abs() > 0.000001 {
      let mi = (lo + hi) / 2.;
      if Self::water_diff(&arr, mi, loss) > 0. {
        lo = mi;
      } else {
        hi = mi;
      }
    }

    return (lo + hi) / 2.;
  }
}
```
```python []
class Solution:

  def water_diff(self, arr, goal, loss):
    add_water, rem_water = 0, 0
    for v in arr:
      if v > goal:
        add_water += v - goal
      else:
        rem_water += goal - v
    
    return add_water * (100 - loss) / 100 - rem_water

  def equalizeWater(self, arr: List[int], loss: int) -> float:
    lo, hi = 0, sum(arr) / len(arr)
    while abs(hi - lo) > 0.000001:
      mi = (lo + hi) / 2
      diff = self.water_diff(arr, mi, loss)
      if diff > 0:
        lo = mi
      else:
        hi = mi

    return (lo + hi) / 2
```
