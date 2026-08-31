# Rust/Python O(n log n) and constant space. With detailed explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/movement-of-robots/solutions/3729223/](https://leetcode.com/problems/movement-of-robots/solutions/3729223/)

---

# Intuition
The key observation in this problem is how to find the final position of the robots. Lets assume that we have two robots going towards each other. Lets assume their positions are `[6, 24]`. At timestep 9 they will meet (at position 15) and change directions. At time 11, position of robot 1 will be at position of 13 and position of robot 2 will be at position 17.

But we do not need to know the position of every specific robot. I will be enough for us to find a position of all robots (without specifying which robot is where). And this is exactly what happens if the robots are behaving as ghosts and going over each other. As you see the positions at t=11 will be `[17, 13]` (same as we calculated previously).

So we can easily caclulate all of them in $O(n)$ `[p + d if direction == 'R' else p - d for p, direction in zip(nums, s)]`.

----

Now that we know all the positions, how can we find the total pairwise distance between all points. It is easy to find it in $O(n^2)$, but we need something better.

Lets assume our points are `[1, 5, 6, 9]`. What is the distance towards `9`? It is `(9 - 6) + (9 - 5) + (9 - 1)`, which can be rewritten to `9 * 3 - (1 + 5 + 6)`

Similar to distance towards 6. It will be `6 * 2 - (1 + 5)` (we do not calculate distance between 6 and 9 as we already calculated it previously). So as you see it can be calculated in linear time by calculating prefix sum. But to do this we need to sort an array


# Complexity
- Time complexity: $O(n \\log n)$
- Space complexity: $O(1)$

Constant time complexity assumes that we are overwriting array of nums (do not do this in Python, only in Rust). Also this assumes that sorting is in place

# Code

```Python []
class Solution:
  def sumDistance(self, nums: List[int], s: str, d: int) -> int:
    positions = sorted([p + d if direction == 'R' else p - d for p, direction in zip(nums, s)], reverse=True)
    res, curr_sum, curr_cnt, mod = 0, 0, 0, 10**9 + 7
    for v in positions:
      res = (res + curr_sum - curr_cnt * v) % mod
      curr_sum += v
      curr_cnt += 1
    return res
```
```Rust []
impl Solution {
  pub fn sum_distance(mut nums: Vec<i32>, s: String, d: i32) -> i32 {
    let n = nums.len();
    let s = s.into_bytes();

    for i in 0 .. n {
      if s[i] == 76 {
        nums[i] -= d;
      } else {
        nums[i] += d;
      }
    }
    nums.sort_unstable();

    let (mut res, mut curr_sum, mut curr_cnt) = (0i64, 0i64, 0i64);
    const m: i64 = 1000000007;
    for i in (0 .. n).rev() {
      res = (res + curr_sum - curr_cnt * (nums[i] as i64)) % m;
      curr_sum = (curr_sum + nums[i] as i64) % m;
      curr_cnt += 1;
    }

    return ((m + res) % m) as i32;
  }
}
```
