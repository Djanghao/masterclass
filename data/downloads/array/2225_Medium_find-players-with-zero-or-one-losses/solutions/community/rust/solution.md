# The worst possible solution. Allahu would be ashamed

**Author:** tdf56f756bg56r8iohgwexu
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/2859064/](https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/2859064/)

---

```rs
impl Solution {
    pub fn find_winners(matches: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut w_l: std::collections::HashMap<i32,u32> = std::collections::HashMap::new();
        
        for players in matches {

            w_l.entry(players[0]).or_insert(0);
            w_l.entry(players[1]).and_modify(|value| *value += 1 ).or_insert(1);

        }
        
        let mut winners:Vec<i32>= Vec::new();
        let mut losers:Vec<i32> = Vec::new();
        for (player,record) in w_l{
            if record == 0 { winners.push(player); continue; }
            if record == 1 { losers.push(player); }
        }
        
        winners.sort();
        losers.sort();
        
        vec![winners,losers]
    }
}
```