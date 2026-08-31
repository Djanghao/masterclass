# rust practice

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/5186734/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/5186734/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

impl Solution {
  pub fn sort_even_odd(nums: Vec<i32>) -> Vec<i32> {
    let mut odds: Vec<i32> = Vec::new();
    let mut evens: Vec<i32> = Vec::new();
    let mut sz = nums.clone().len();
    for i in 0..sz {
      let item = nums[i];
      if i % 2 == 0 {
        evens.push(item);
      } else {
        odds.push(item);
      }
    }
    let mut res: Vec<i32> = Vec::new();
    evens.sort();
    odds.sort_by(|a,b| { b.cmp(a) });
    sz = evens.clone().len();
    let oddsz = odds.clone().len();
    for i in 0..sz {
      res.push(evens[i]);
      if i < oddsz { res.push(odds[i]); }
    }
    res
  }
}
```