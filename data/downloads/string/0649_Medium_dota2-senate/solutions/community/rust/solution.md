# [Rust] Iterators, 0ms beats 100%

**Author:** tiedyedvortex
**Votes:** 6
**Link:** [https://leetcode.com/problems/dota2-senate/solutions/3483415/](https://leetcode.com/problems/dota2-senate/solutions/3483415/)

---

Hell yeah for zero-cost abstraction iterators.

# Code
```
use std::collections::VecDeque;
use std::iter::FromIterator;

impl Solution {
    pub fn predict_party_victory(senate: String) -> String {
        senate
        .chars()
        .collect::<DotaSenate>()
        .get_winner()
    }
}

// Default is an empty Senate.
#[derive(Default)]
struct DotaSenate {
    vote_queue: VecDeque<char>,
    ban_queue: VecDeque<char>,
    radiant: usize,
    dire: usize,
}

impl DotaSenate {
    // Adds one voter to the end of the vote queue.
    pub fn add(&mut self, voter: char) {
        match voter {
            'R' => {
                self.vote_queue.push_back('R');
                self.radiant += 1;
            }
            'D' => {
                self.vote_queue.push_back('D');
                self.dire += 1;
            }
            _ => {}
        }
    }

    // Runs the iterator until a winner is found.
    pub fn get_winner(&mut self) -> String {
        self.find_map(|maybe_winner| maybe_winner).unwrap()
    }
}

// Lets us use .collect<DotaSenate>, which is cleaner.
impl FromIterator<char> for DotaSenate {
    fn from_iter<T>(iter: T) -> Self
    where T: IntoIterator<Item = char> {
        let mut dota_senate = DotaSenate::default();
        iter.into_iter().for_each(|ch| dota_senate.add(ch));
        dota_senate
    }
}

// Each call to next() is a single voter taking an action.
// If the election is ongoing, will return Some(None).
impl Iterator for DotaSenate {
    type Item = Option<String>;

    fn next(&mut self) -> Option<Option<String>> {
        // If there are no voters, the iterator ends (returns None).
        let voter = self.vote_queue.pop_front()?;
        
        // Check if this voter has been banned
        if Some(&voter) == self.ban_queue.front() {
            // They have been banned, decrement voter records
            self.ban_queue.pop_front();
            match voter {
                'R' => {self.radiant -= 1;}
                'D' => {self.dire -= 1;}
                _ => {}
            }
            // Banned voter gets no turn, continue election
            return Some(None);
        }

        if voter == 'R' && self.dire == 0 {
            // Radiant victory!
            Some(Some("Radiant".to_owned()))
        } else if voter == 'D' && self.radiant == 0 {
            // Dire victory!
            Some(Some("Dire".to_owned()))
        } else {
            // No victory yet, voter exercises their ban right
            // Voter goes to the back of the queue
            // Queues a ban for someone of the other side            
            match voter {
                'R' => {
                    self.vote_queue.push_back('R');
                    self.ban_queue.push_back('D');
                }
                'D' => {
                    self.vote_queue.push_back('D');
                    self.ban_queue.push_back('R');
                }
                _ => {}
            }
            // Continue election
            Some(None)
        }
    }
}
```