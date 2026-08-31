# Rust/Python Dijkstra with explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/digit-operations-to-make-two-integers-equal/solutions/6128310/](https://leetcode.com/problems/digit-operations-to-make-two-integers-equal/solutions/6128310/)

---

# Intuition

You can realize that the problem asks you to find a path from one number to another. The things which are changed are:

 1. How to modify cost
 2. How to find next nodes
 
First task is obvious. For the second task you need to create stop nodes. For this you can use `eratosthenes_sieve` which runs in $O(n \\log \\log n)$ and I store them in `is_bad` binary array. Later I mark the visited values there as well.

Now you implement `get_next` function which returns next nodes, where you operate on digits. Once this is done, just put those functions in Dijkstra.

# Complexity

Dijkstra runs in $O((E + V) \\log V)$. The number of vertices is $n$ and the number of edges is $O(n \\cdot \\log n)$. 

- Time complexity: $O(n \\cdot \\log^2 n)$
- Space complexity: $O(n)$

# Code
```python3 []
class Solution:

  def eratosthenes_sieve(self, n: int) -> List[int]:
    prime, sqrt_n = [True] * n, (int(n ** .5) + 1) | 1 
    for p in range(3, sqrt_n, 2):
      if prime[p]:
        prime[p * p::2 * p] = [False] * ((n - p * p - 1) // (2 * p) + 1)

    prime[1] = False
    for i in range(4, n, 2):
      prime[i] = False
    
    return prime

  def get_next(self, val, l):
    next_vals, val_tmp = [], val
    digits = [1, 10, 100, 1000]
    for i in range(l):
      digit = val_tmp % 10
      val_tmp //= 10

      if digit == 0:
        next_vals.append(val + digits[i])
      elif digit == 9:
        next_vals.append(val - digits[i])
      else:
        next_vals.append(val + digits[i])
        next_vals.append(val - digits[i])
    return next_vals

  def minOperations(self, n: int, m: int) -> int:
    tmp, l = n, 0
    while tmp:
      tmp //= 10
      l += 1
    min_val = 10**(l - 1)

    is_bad = self.eratosthenes_sieve(10**l)
    if is_bad[n] or is_bad[m]:
      return -1

    frontier = [(n, n)]
    is_bad[n] = True
    while frontier:
      cost, value = heappop(frontier)
      if value == m:
        return cost

      for val_next in self.get_next(value, l):
        if val_next >= min_val and not is_bad[val_next]:
          is_bad[val_next] = True
          heappush(frontier, (cost + val_next, val_next))

    return -1
```
```rust []
use std::collections::BinaryHeap;

impl Solution {

  pub fn eratosthenes_sieve(n: usize) -> Vec<bool> {
    let mut prime = vec![true; n];
    let sqrt_n = ((n as f64).sqrt() as usize + 1) | 1;
    
    for p in (3..sqrt_n).step_by(2) {
      if prime[p] {
        let mut i = p * p;
        while i < n {
          prime[i] = false;
          i += 2 * p;
        }
      }
    }
    
    prime[1] = false;
    for i in (4..n).step_by(2) {
      prime[i] = false;
    }
    
    prime
  }
  
  pub fn get_next(val: usize, len: usize) -> Vec<usize> {
    let mut next_vals = Vec::new();
    let mut digits = vec![1, 10, 100, 1000];
    digits.truncate(len);
    
    let mut val_tmp = val;
    for i in 0..len {
      let digit = val_tmp % 10;
      val_tmp /= 10;
      
      if digit == 0 {
        next_vals.push(val + digits[i]);
      } else if digit == 9 {
        next_vals.push(val - digits[i]);
      } else {
        next_vals.push(val + digits[i]);
        next_vals.push(val - digits[i]);
      }
    }
    next_vals
  }
  
  pub fn min_operations(n: i32, m: i32) -> i32 {
    let n = n as usize;
    let m = m as usize;
    let mut tmp = n;
    let mut len = 0;
    while tmp > 0 {
      tmp /= 10;
      len += 1;
    }
    let min_val = 10_usize.pow((len - 1) as u32);
    
    let is_bad = Self::eratosthenes_sieve(10_usize.pow(len as u32));
    if is_bad[n] || is_bad[m] {
      return -1;
    }
    
    let mut frontier = BinaryHeap::new();
    frontier.push((-(n as i32), n));
    let mut visited = is_bad.clone();
    visited[n] = true;
    
    while let Some((cost, value)) = frontier.pop() {
      let cost = -cost; // Convert back to positive cost
      if value == m {
        return cost as i32;
      }
      
      for &next_val in &Self::get_next(value, len) {
        if next_val >= min_val && !visited[next_val] {
          visited[next_val] = true;
          frontier.push((-(cost as i32 + next_val as i32), next_val));
        }
      }
    }
    
    -1
  }
}
```