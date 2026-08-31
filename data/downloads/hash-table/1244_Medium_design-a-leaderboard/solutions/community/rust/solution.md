# [Rust] Heap and HashMap

**Author:** jumpman23
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-a-leaderboard/solutions/1307624/](https://leetcode.com/problems/design-a-leaderboard/solutions/1307624/)

---

```rust
use std::collections::HashMap;
use std::collections::BinaryHeap;

struct Leaderboard {
    scores: HashMap<i32, i32>
}

impl Leaderboard {

    fn new() -> Self {  
        Leaderboard {
            scores: HashMap::new(),
        }
    }
    
    fn add_score(&mut self, player_id: i32, score: i32) {
        if !self.scores.contains_key(&player_id) {
            self.scores.insert(player_id, score);
        } else {
            *self.scores.get_mut(&player_id).unwrap() += score;
        }
    }
    
    fn top(&self, k: i32) -> i32 {
        let mut heap = BinaryHeap::new();
        for score in self.scores.values() {
            if heap.len() < k as usize {
                heap.push(-score); // max heap, so add the negative
            } else {
                heap.push(-score);
                heap.pop();
            }
        }
        
        heap.iter().map(|s| -s).sum()
    }
    
    fn reset(&mut self, player_id: i32) {
        self.scores.remove(&player_id);
    }
}
```