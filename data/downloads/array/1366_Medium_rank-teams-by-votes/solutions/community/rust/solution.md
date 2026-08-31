# Rank Teams by Votes in Rust

**Author:** troymcilvena
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-teams-by-votes/solutions/5199673/](https://leetcode.com/problems/rank-teams-by-votes/solutions/5199673/)

---

# Code
```
use std::collections::HashMap;

impl Solution {
    fn initalise_state(votes: &Vec<String>) -> HashMap<char, Vec<u16>> {
        let default_string = "".to_string(); // Guard aginst empty votes without error handling
        let vote = votes.get(0).unwrap_or(&default_string); // Doesn't matter witch vote

        let mut state: HashMap<char, Vec<u16>> = HashMap::new();

        for (i, _) in vote.chars().enumerate() {
            state.insert(vote.chars().nth(i).unwrap(), vec![0; vote.len()]);
        }
        state
    }

    fn count_votes(votes: &Vec<String>, state: &mut HashMap<char, Vec<u16>>) {
        for vote in votes {
            for (i, key) in vote.chars().enumerate() {
                let count = state.get_mut(&key).unwrap();
                count[i] += 1;
            }
        }
    }

    fn rank_teams(votes: Vec<String>) -> String {
        let mut state: HashMap<char, Vec<u16>> = Solution::initalise_state(&votes);

        Solution::count_votes(&votes, &mut state);

        let mut results: Vec<(char, Vec<u16>)> = state.into_iter().collect();
        results.sort_by(|a, b| match b.1.iter().cmp(a.1.iter()) {
            std::cmp::Ordering::Equal => a.0.cmp(&b.0),
            order => order,
        });

        results.into_iter().map(|i| i.0).collect::<String>()
    }
}
```