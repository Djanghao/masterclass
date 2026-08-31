# Rust/Python/Go linear time/space

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-people-aware-of-a-secret/solutions/4342136/](https://leetcode.com/problems/number-of-people-aware-of-a-secret/solutions/4342136/)

---

# Intuition

Let's store in array information about the number of people who learnt a secret at each position `data`. It is zero everywhere and one at the first position. Lets also have the number of people who will share a secret at current day (at the beginning it is zero) `num`.


Now Lets look what happens at each step `i`:
 - our number of people who knows secret is increased by `data[i - delay]` (of course if it exists)
 - but it is also decreased by `data[i - forget]`
 - now the value is of `data[i]` becomes this `num`

At the end we need to sum last `forget` numbers


# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code
```Go []
func peopleAwareOfSecret(n int, delay int, forget int) int {
  data, num, mod := make([]int, n), 0, 1000000007
  data[0] = 1
  for i := 1; i < n; i++ {
    if i >= delay {
      num += data[i - delay]
    }
    if i >= forget {
      num -= data[i - forget]
    }
    data[i] = num % mod
  }

  res := 0
  for i := n - forget; i < n; i++ {
    res = (res + data[i]) % mod
  }
  return res
}
```
```python []
class Solution:
  def peopleAwareOfSecret(self, n: int, delay: int, forget: int) -> int:
    data, num, mod = [0] * n, 0, 10**9 + 7
    data[0] = 1
    for i in range(1, n):
      num = (num + data[i - delay] - data[i - forget]) % mod
      data[i] = num
    
    return sum(data[-forget:]) % mod
```
```Rust []
impl Solution {
  pub fn people_aware_of_secret(n: i32, delay: i32, forget: i32) -> i32 {
    let (MOD, n, mut num, delay, forget) = (1000000007i64, n as usize, 0, delay as usize, forget as usize);
    let mut data = vec![0i64; n];
    data[0] = 1;

    for i in 1 .. n {
      let mut num_add = 0;
      if i >= delay {
        num_add = data[i - delay];
      }
      let mut num_remove = 0;
      if i >= forget {
        num_remove = data[i - forget];
      }
      num = (MOD + num + num_add - num_remove) % MOD;
      data[i] = num;
    }

    let mut res = 0;
    for i in n - forget .. n {
      res = (res + data[i]) % MOD;
    }
    return res as i32;
  }
}
```
