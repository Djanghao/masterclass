# what about spares

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/5605105/](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/5605105/)

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
  pub fn is_winner(player1: Vec<i32>, player2: Vec<i32>) -> i32 {
      fn getscore(player:Vec<i32>) -> i32 {
        let mut pscore = player[0];
        let upper = player.len();
        for i in 1..upper {
          let mut framescore = player[i];
          let secondCond = if i == 1 { false } else { player[i-2] == 10 };
          if player[i-1] == 10 || secondCond {
            framescore *= 2;
          }
          pscore+=framescore;
        }
        pscore
      }

      let p1score = getscore(player1);
      let p2score = getscore(player2);


      if p1score > p2score {
          return 1
      } else if p2score > p1score {
          return 2
      } else {
          return 0
      }
      0
  }
}
```