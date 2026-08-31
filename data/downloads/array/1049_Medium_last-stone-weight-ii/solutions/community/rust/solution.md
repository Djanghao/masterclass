# Rust/Python: The final smashdown. How to understand that you need +- check

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-stone-weight-ii/solutions/4280939/](https://leetcode.com/problems/last-stone-weight-ii/solutions/4280939/)

---

# Intuition

The hardest thought jump in this question is to realize that you can boild down this problem to figuring out where to put + and - in front of numbers. And in this case people use old-good "it is easy to see that" to quickly copy paste someones code.

So lets figure our why we need to put + and -. Lets assume that we have done some smash on two stones `a, b` (here I always assume first value is bigger or equal). Result will be `a - b`. Now we smash `c` with this result. We will get `c - (a - b) = c - a + b`.

So whenever you do a smash, you take one stone (which is a combination of +/-) and subract from it another stone (which is also a +/-) so at the end you always will get a `+/-` combination.

Once this is resolved, we can implement the code where at each step we have all possible combinations and then add one specific value to each of them and do the same with removal. At the end we check for the minimum possible value which is > 0.


```Python []
class Solution:
  def lastStoneWeightII(self, stones: List[int]) -> int:
    possible = {stones[0], -stones[0]}
    for v in stones[1:]:
      tmp = set()
      for p in possible:
        tmp.add(p + v)
        tmp.add(p - v)
      possible = tmp
    
    res = float('inf')
    for v in possible:
      if v == 0:
        return 0
      if v > 0:
        res = min(res, v)
    return res
```
```Rust []
use std::collections::HashSet;

impl Solution {
  pub fn last_stone_weight_ii(arr: Vec<i32>) -> i32 {
    let mut data = HashSet::from([arr[0], -arr[0]]);

    for i in 1 .. arr.len() {
      let mut tmp = HashSet::new();
      for v in data {
        tmp.insert(v + arr[i]);
        tmp.insert(v - arr[i]);
      }
      data = tmp;
    }

    let mut res = i32::MAX;
    for v in data {
      if v == 0 {
        return 0;
      }
      if v > 0 && v < res {
        res = v;
      }
    }

    return res;
  }
}
```

In this example you can see that there are many negative values (half of them) which will be ignored at the end.

What you can notice that our resulting value will be sum of some stones minus sum of some other stones. So `res = some_stones - some_other_stones`. This is equal to `total_sum - 2 * some_stones`.

Here at each step we can also trim the values which produce negative values:

```Python []
class Solution:
  def lastStoneWeightII(self, stones: List[int]) -> int:
    possible, s = set([0]), sum(stones)
    for v in stones:
      possible |= {v + i for i in possible if 2 * (v + i) <= s}

    return s - 2 * max(possible)
```
```Rust []
use std::collections::HashSet;

impl Solution {
  pub fn last_stone_weight_ii(arr: Vec<i32>) -> i32 {
    let mut data = HashSet::from([0]);
    let s: i32 = arr.iter().sum();

    for v in arr {
      let mut tmp = HashSet::new();
      for el in data {
        tmp.insert(el);
        if 2 * (el + v) <= s {
          tmp.insert(el + v);
        }
      }
      data = tmp;
    }

    return s - 2 * data.iter().max().unwrap();
  }
}
```



