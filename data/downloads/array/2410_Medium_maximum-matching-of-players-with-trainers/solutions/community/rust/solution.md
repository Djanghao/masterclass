# Rust Solution | Sort | Binary Search

**Author:** JammyJ0
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/4519361/](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/4519361/)

---

```
impl Solution {
    pub fn match_players_and_trainers(mut players: Vec<i32>, mut trainers: Vec<i32>) -> i32 {
        players.sort_unstable();
        trainers.sort_unstable();
        let (mut count, mut j, n) = (0, 0, trainers.len());

        for player in players {
            j += trainers[j..].partition_point(|&trainer| trainer < player) + 1;
            if j > n { break }
            count += 1;        
        }

        count
    }
}
```