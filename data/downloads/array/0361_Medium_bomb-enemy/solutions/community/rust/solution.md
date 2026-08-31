# Rust/Python easy to understand, detailed explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/bomb-enemy/solutions/3559678/](https://leetcode.com/problems/bomb-enemy/solutions/3559678/)

---

# Intuition

For any position of the bomb,

```
. . . x . 
x x x B x
. . . x .
. . . x .
. . . x .
```
we have to find how many enemies are on the right, left, up, down. We can do this by precalculating all of them. Here is an examples how will you do this for `Right` direction for one row:

Let the row

`. . . E . E W E . W E`
The precalculated right values will be:

`0 0 0 1 1 2 0 1 1 0 1`
Which is basically a prefix sum where if you see a wall, you reset it to zero.


If you do this for all the directions, you will get 4 matrices `m_R`, `m_L`, `m_U`, `m_D`. And to get the results, of any position (you need to check only empty positions), you just do `m_R[y][x] + m_L[y][x] + m_U[y][x] + m_D[y][x]`

# Complexity
- Time complexity: $O(n \\cdot m)$
- Space complexity: $O(n \\cdot m)$

# Code
```Rust []
impl Solution {
  pub fn max_killed_enemies(M: Vec<Vec<char>>) -> i32 {
    let (Y, X) = (M.len(), M[0].len());

    // Right
    let mut m_R = vec![vec![0; X]; Y];
    for y in 0 .. Y {
      let mut curr = 0;
      for x in 0 .. X {
        if M[y][x] == 'E' {
          curr += 1;
        } else if M[y][x] == 'W' {
          curr = 0;
        }
        m_R[y][x] = curr;
      }
    }

    // Left
    let mut m_L = vec![vec![0; X]; Y];
    for y in 0 .. Y {
      let mut curr = 0;
      for x in (0 .. X).rev() {
        if M[y][x] == 'E' {
          curr += 1;
        } else if M[y][x] == 'W' {
          curr = 0;
        }
        m_L[y][x] = curr;
      }
    }

    // Down
    let mut m_D = vec![vec![0; X]; Y];
    for x in 0 .. X {
      let mut curr = 0;
      for y in 0 .. Y {
        if M[y][x] == 'E' {
          curr += 1;
        } else if M[y][x] == 'W' {
          curr = 0;
        }
        m_D[y][x] = curr;
      }
    }

    // Up
    let mut m_U = vec![vec![0; X]; Y];
    for x in 0 .. X {
      let mut curr = 0;
      for y in (0 .. Y).rev() {
        if M[y][x] == 'E' {
          curr += 1;
        } else if M[y][x] == 'W' {
          curr = 0;
        }
        m_U[y][x] = curr;
      }
    }

    let mut res = 0;
    for y in 0 .. Y {
      for x in 0 .. X {
        if M[y][x] == '0' {
          res = res.max(m_R[y][x] + m_L[y][x] + m_U[y][x] + m_D[y][x]);
        }
      }
    }
    
    return res;
  }
}
```
```python []
class Solution:

  def maxKilledEnemies(self, M: List[List[str]]) -> int:
    Y, X = len(M), len(M[0])
    
    m_R = [[0] * X for _ in range(Y)]
    for y in range(Y):
      curr = 0
      for x in range(X):
        if M[y][x] == 'E':
          curr += 1
        elif M[y][x] == 'W':
          curr = 0
        m_R[y][x] = curr

    m_L = [[0] * X for _ in range(Y)]
    for y in range(Y):
      curr = 0
      for x in range(X - 1, -1, -1):
        if M[y][x] == 'E':
          curr += 1
        elif M[y][x] == 'W':
          curr = 0
        m_L[y][x] = curr
    
    m_D = [[0] * X for _ in range(Y)]
    for x in range(X):
      curr = 0
      for y in range(Y):
        if M[y][x] == 'E':
          curr += 1
        elif M[y][x] == 'W':
          curr = 0
        m_D[y][x] = curr

    m_U = [[0] * X for _ in range(Y)]
    for x in range(X):
      curr = 0
      for y in range(Y - 1, -1, -1):
        if M[y][x] == 'E':
          curr += 1
        elif M[y][x] == 'W':
          curr = 0
        m_U[y][x] = curr

    res = 0
    for y in range(Y):
      for x in range(X):
        if M[y][x] == '0':
          res = max(res, m_R[y][x] + m_L[y][x] + m_D[y][x] + m_U[y][x])
    return res
```


