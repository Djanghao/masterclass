# Greedy O(n)

**Author:** hucancode
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-ix/solutions/3970739/](https://leetcode.com/problems/stone-game-ix/solutions/3970739/)

---

# Intuition
This take me very long trial and error to arrive at this conclusion:
- We can easily see that the actual value of the stones does not matter much, only it's value in modulo 3 is important. Let $group(i)$ be the number of stones that has value $i$ in modulo 3
- The game entirely depends on the first pick from Alice
    - Alice pick 1, the game would be 1,1,2,1,2,1,2 ...
    - Alice pick 2, the game would be 2,2,1,2,1,2,1,2 ...
    - The game end when 1 person fail to match the pick
    - Pick 0 will result in reverse play (making other person to match his own previous pick)
- If $group(0)$ is even, and $group(1) > 0, group(2) > 0$, Alice can always force a win by picking the group with less number. If $group(1) = 0$ or $group(2) = 0$, Alice will always end up running out of good number to pick and thus losing
- If $group(0)$ is odd, Alice need to pick a group has more than at least 2 number than the other group, otherwise she will always lose
# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```
use std::collections::HashMap;
impl Solution {
    pub fn stone_game_ix(stones: Vec<i32>) -> bool {
        let n = stones.len();
        let mut group = vec![0i32;3];
        for x in stones {
            group[(x%3) as usize] += 1;
        }
        if group[0]%2 == 0  {
            group[1] > 0 && group[2] > 0
        } else {
            (group[1] - group[2]).abs() > 2
        }
    }
}
```