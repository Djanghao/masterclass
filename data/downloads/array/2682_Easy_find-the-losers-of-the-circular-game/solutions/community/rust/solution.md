# Rust/Python. Linear. Track people who have been selected

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3521946/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/3521946/)

---

# Intuition
Store all positions of people who has already been selected. Then iterate over all jumps (there will be at most n of them) until you will see a selected person. 

Then return all people who has not been selected.


# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code



```Python []
class Solution:
  def circularGameLosers(self, n: int, k: int) -> List[int]:
    seen = [0] * n
    seen[0] = 1
    
    pos, jump = 0, k
    while True:
      pos = (pos + jump) % n
      if seen[pos]:
        break
      
      seen[pos] = 1
      jump += k
    
    return [i + 1 for i in range(n) if seen[i] == 0]
```
```Rust []
impl Solution {
  pub fn circular_game_losers(n: i32, k: i32) -> Vec<i32> {
    let mut seen = vec![false; n as usize];
    seen[0] = true;

    let (mut pos, mut jump) = (0, k);
    loop {
      pos = (pos + jump) % n;
      if seen[pos as usize] {
        break;
      }
      
      seen[pos as usize] = true;
      jump += k;
    }
    
    let mut res = vec![];
    for i in 0 .. n {
      if !seen[i as usize] {
        res.push(i + 1);
      }
    }
    
    return res;
  }
}
```
