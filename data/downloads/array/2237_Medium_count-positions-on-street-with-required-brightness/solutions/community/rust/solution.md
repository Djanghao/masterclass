# Rust/Python linear solution with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/3610968/](https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/3610968/)

---

# Intuition
If the light is at position $p$ and range $r$, then it will cover range $[p - r, p + r]$ (you also need to take boundaries to an acount which is done with max/min).

If you need to add a value to a range instead of adding the value to each position at the range you add it to starting position and subtracting from end + 1 position. Then after accumulating all those changes you can recover it by looking at accumulated values 

```
curr = 0
for v in our_array:
   curr += v  # curr will be out accumulated restored value
```

And you just need to compare this value with a requirements to see if it satisfies it.

# Complexity

Let $l$ be the size of ligths array, then

- Time complexity: $O(n + l)$
- Space complexity: $O(n)$

# Code
```Rust []
impl Solution {
  pub fn meet_requirement(n: i32, lights: Vec<Vec<i32>>, requirement: Vec<i32>) -> i32 {
    let mut brightness = vec![0; (n + 1) as usize];
    for v in lights {
      let s1 = 0.max(v[0] - v[1]);
      let s2 = (n - 1).min(v[0] + v[1]) + 1;
      brightness[s1 as usize] += 1;
      brightness[s2 as usize] -= 1;
    }

    let (mut curr, mut res) = (0, 0);
    for i in 0 .. n as usize {
      curr += brightness[i];
      if curr >= requirement[i] {
        res += 1;
      }
    }

    return res;
  }
}
```
```python []
class Solution:
  def meetRequirement(self, n: int, lights: List[List[int]], requirement: List[int]) -> int:
    brightness = [0] * (n + 1)
    for p, r in lights:
      s1, s2 = max(0, p - r), min(n - 1, p + r) + 1
      brightness[s1] += 1
      brightness[s2] -= 1

    curr, res = 0, 0
    for i in range(n):
      curr += brightness[i]
      if curr >= requirement[i]:
        res += 1
    
    return res
```
