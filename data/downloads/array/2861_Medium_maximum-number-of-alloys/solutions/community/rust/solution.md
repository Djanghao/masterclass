# Python 12L / Rust 3x more. Binary search with detailed explantion

**Author:** SalvadorDali
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-alloys/solutions/4054218/](https://leetcode.com/problems/maximum-number-of-alloys/solutions/4054218/)

---

# Intuition
Again a very convoluted description, but in short we need to try each different composition, check how many alloys can we make from it and find the maximum number.

-----------

How can we find this number of alloys? We can notice that the function is monotone. So if we can get `X` alloys, we can get any number below `X`. Also if we can't get `Y` alloys, then any number above `Y` can't be build. 

This gives us a binary search solution where we try some number of alloys and then if we can create we put `lo = mi + 1` and otherwise `hi = mi - 1`.

-----------
The last question how can we check whether we can create `n` alloys? We just need to find the total price to create those alloys and compare with the budget. So we try every metal, check how much do we need them taking to accout our current stock. If we need positive amount, multiply by a price and add.

# Complexity

Let $c$ be the number of composisionts and $k$ be the lenght of the composition, then:

- Time complexity: $O(nk \\log 2^{32})$
- Space complexity: $O(1)$

# Code
```Rust []
impl Solution {

  fn can_create(num_alloys: i32, budget: i32, c: &Vec<i32>, stock: &Vec<i32>, cost: &Vec<i32>) -> bool {
    let mut price = 0;
    for i in 0 .. c.len() {
      let need = (c[i] as i64) * (num_alloys as i64) - (stock[i] as i64);
      if need > 0 {
        price += need * (cost[i] as i64);
      }
    }
    return price <= budget as i64;
  }

  fn find_num_alloys(budget: i32, c: &Vec<i32>, stock: &Vec<i32>, cost: &Vec<i32>) -> i32 {
    let (mut lo, mut hi) = (0, 1000000009);
    while lo <= hi {
      let mi = (lo + hi) / 2;
      if Self::can_create(mi, budget, c, stock, cost) {
        lo = mi + 1;
      } else {
        hi = mi - 1;
      }
    }
    return lo - 1;
  }

  pub fn max_number_of_alloys(n: i32, k: i32, budget: i32, composition: Vec<Vec<i32>>, stock: Vec<i32>, cost: Vec<i32>) -> i32 {
    let mut res = 0;
    for c in composition {
      res = res.max(Self::find_num_alloys(budget, &c, &stock, &cost));
    }

    return res;
  }
}
```
```python []
class Solution:

  def can_create(self, num_alloys: int, budget: int, comp: List[int], stock: List[int], cost: List[int]) -> bool:
    return sum([max(0, (comp[i] * num_alloys - stock[i])) * cost[i] for i in range(len(comp))]) <= budget

  def find_num_alloys(self, budget: int, comp: List[int], stock: List[int], cost: List[int]) -> int:
    lo, hi = 0, 10
    while lo <= hi:
      mi = (lo + hi) // 2
      if self.can_create(mi, budget, comp, stock, cost):
        lo = mi + 1
      else:
        hi = mi - 1

    return lo - 1

  def maxNumberOfAlloys(self, n, k, budget: int, composition: List[List[int]], stock: List[int], cost: List[int]) -> int:
    return max(self.find_num_alloys(budget, comp, stock, cost) for comp in composition)
```
