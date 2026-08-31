# Rust/Python use one finger or another. With explanation

**Author:** SalvadorDali
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/5338936/](https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/solutions/5338936/)

---

# Intuition
Let $n$ be the length of the string and $a$ be the size of alphabet. In our case `a = 26`.

**Solution 1** is pretty straightforward and because it passes the timer, I do not know why the problem is hard as seems like a medium.

You create a function which calculates the cost of moving from one character to another one. In Py I do this on the fly. In rust I originally thought that I will precalculate it and save some time, but then realised that it will be used at most 300 times and 26 * 26 is more than it and it is better to do it on the fly. This cost function should also handle a starting situation where you have not pressed anything, so cost is 0.

Now you have a dp function which remembers position of each finger `p1` and `p2` and the position in the string you are currently is. 

Now because at each step you can either press a button either with a one finger or another one, the dp relationship is:
```
min(
  cost(p1, p_nxt) + dp(p_nxt, p2, pos + 1),
  cost(p2, p_nxt) + dp(p1, p_nxt, pos + 1),
)
```

Of course you store everything in a cache. This gives an easy solution.



```Python []
class Solution:

  def cost(self, p1: int, p2: int) -> int:
    if p1 == 26:
      return 0

    y1, x1 = p1 // 6, p1 % 6
    y2, x2 = p2 // 6, p2 % 6
    return abs(y1 - y2) + abs(x1 - x2)

  def dp(self, p1: int, p2: int, pos: int, word: str, cache):
    if pos == len(word):
      return 0

    if cache[p1][p2][pos] != -1:
      return cache[p1][p2][pos]

    p_nxt = ord(word[pos]) - 65

    res = min(
      self.cost(p1, p_nxt) + self.dp(p_nxt, p2, pos + 1, word, cache),
      self.cost(p2, p_nxt) + self.dp(p1, p_nxt, pos + 1, word, cache),
    )
    cache[p1][p2][pos] = res
    return res

  def minimumDistance(self, word: str) -> int:
    cache = [[[-1 for _ in range(len(word))] for _ in range(27)] for _ in range(27)]
    return self.dp(26, 26, 0, word, cache)
```
```Rust []
impl Solution {

  fn cost_matrix() -> [[i32; 26]; 26] {
    let mut cost = [[0i32; 26]; 26];
    for i in 0i32 .. 26 {
      let (y1, x1) = (i / 6, i % 6);
      for j in 0i32 .. 26 {
        cost[i as usize][j as usize] = (y1 - j / 6).abs() + (x1 - j % 6).abs();
      }
    }
    return cost;
  }

  fn get_cost(p1: usize, p2: usize, cost: &[[i32; 26]; 26]) -> i32 {
    if p1 == 26 {
      return 0;
    }
    return cost[p1][p2];
  }

  fn dp(p1: usize, p2: usize, pos: usize, word: &[u8], cache: &mut Vec<Vec<Vec<i32>>>, cost: &[[i32; 26]; 26]) -> i32 {
    if pos == word.len() {
      return 0;
    }

    if cache[p1][p2][pos] != -1 {
      return cache[p1][p2][pos];
    }

    let p_nxt = word[pos] as usize - 65;
    let v1 = Self::get_cost(p1, p_nxt, cost) + Self::dp(p_nxt, p2, pos + 1, word, cache, cost);
    let v2 = Self::get_cost(p2, p_nxt, cost) + Self::dp(p1, p_nxt, pos + 1, word, cache, cost); 
    let res = v1.min(v2);
    cache[p1][p2][pos] = res;
    return res;
  }


  pub fn minimum_distance(word: String) -> i32 {
    let mut cache = vec![vec![vec![-1; word.len()]; 27]; 27];
    let cost = Self::cost_matrix();
    return Self::dp(26, 26, 0, word.as_bytes(), &mut cache, &cost);
  }
}
```

- Time and space complexity: $O(a^2 \\cdot m)$

**Solution 2** this one is harder to guess and not straight forward. You might see that you do not need the state of 2 finghers. So instead of having a 3d space, `p1, p2, pos` you might save only `p1, pos`. 

You can do it while understanding that your second finger is on your previous character. So `pos` inadvertently has the information about `p2`. To not have any edge cases you start from `pos = 1` (as one finger is already on character 0).

```Python []
class Solution:

  def cost(self, p1: int, p2: int) -> int:
    if p1 == 26:
      return 0

    y1, x1 = p1 // 6, p1 % 6
    y2, x2 = p2 // 6, p2 % 6
    return abs(y1 - y2) + abs(x1 - x2)

  def dp(self, p1: int, pos: int, word: str, cache):
    if pos == len(word):
      return 0

    if cache[p1][pos] != -1:
      return cache[p1][pos]

    p_nxt = ord(word[pos]) - 65
    p2 = ord(word[pos - 1]) - 65
    res = min(
      self.cost(p1, p_nxt) + self.dp(p2, pos + 1, word, cache),
      self.cost(p2, p_nxt) + self.dp(p1, pos + 1, word, cache),
    )
    cache[p1][pos] = res
    return res

  def minimumDistance(self, word: str) -> int:
    cache = [[-1 for _ in range(len(word))] for _ in range(27)]
    return self.dp(26, 1, word, cache)
```
```Rust []
impl Solution {

  fn cost_matrix() -> [[i32; 26]; 26] {
    let mut cost = [[0i32; 26]; 26];
    for i in 0i32 .. 26 {
      let (y1, x1) = (i / 6, i % 6);
      for j in 0i32 .. 26 {
        cost[i as usize][j as usize] = (y1 - j / 6).abs() + (x1 - j % 6).abs();
      }
    }
    return cost;
  }

  fn get_cost(p1: usize, p2: usize, cost: &[[i32; 26]; 26]) -> i32 {
    if p1 == 26 {
      return 0;
    }
    return cost[p1][p2];
  }

  fn dp(p1: usize, pos: usize, word: &[u8], cache: &mut Vec<Vec<i32>>, cost: &[[i32; 26]; 26]) -> i32 {
    if pos == word.len() {
      return 0;
    }

    if cache[p1][pos] != -1 {
      return cache[p1][pos];
    }

    let p_nxt = word[pos    ] as usize - 65;
    let p2    = word[pos - 1] as usize - 65;

    let v1 = Self::get_cost(p1, p_nxt, cost) + Self::dp(p2, pos + 1, word, cache, cost);
    let v2 = Self::get_cost(p2, p_nxt, cost) + Self::dp(p1, pos + 1, word, cache, cost); 
    let res = v1.min(v2);
    cache[p1][pos] = res;
    return res;
  }


  pub fn minimum_distance(word: String) -> i32 {
    let mut cache = vec![vec![-1; word.len()]; 27];
    let cost = Self::cost_matrix();
    return Self::dp(26, 1, word.as_bytes(), &mut cache, &cost);
  }
}
```

- Time and space complexity: $O(a \\cdot m)$

Realistically speaking I am not sure whether this gives significant time savings (ignoring cache initializaion which you can do via dictionary). Mostly because `pos` and `p1` have 1-1 mapping. My guess is that it should give 2x time decrease as you do not store transposition `p1, p2` and `p2, p1` 
