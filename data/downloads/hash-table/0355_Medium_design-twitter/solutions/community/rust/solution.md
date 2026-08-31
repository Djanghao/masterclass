# BinaryHeap for tweet publication time, 0 ms

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-twitter/solutions/6055217/](https://leetcode.com/problems/design-twitter/solutions/6055217/)

---

```rust []
use std::collections::{HashMap, BTreeSet, HashSet, BinaryHeap};

struct Twitter {
    k : u32,
    tweets: HashMap<i32, BTreeSet<(u32, i32)>>, 
    following: HashMap<i32, HashSet<i32>>
}

impl Twitter {

    fn new() -> Self {
        Self {k: 0, tweets: HashMap::new(), following: HashMap::new()}
    }
    
    fn post_tweet(&mut self, user_id: i32, tweet_id: i32) {
        self.following.entry(user_id).or_default().insert(user_id); // self following
        let k = self.k;
        self.k += 1;
        self.tweets.entry(user_id).or_default().insert((k, tweet_id));
    }
    
    fn get_news_feed(&self, user_id: i32) -> Vec<i32> {
        let mut r = BinaryHeap::new();
        
        if !self.following.contains_key(&user_id) {
            return vec![]
        }
        for t in self.following.get(&user_id).unwrap().iter() {
            if let Some(tweets) = self.tweets.get(t) {
                r.extend(tweets.iter().rev().take(10))
            }
        }
        let mut z = vec![];
        while let Some((_,t)) = r.pop() {
            z.push(t);
            if z.len() == 10 {break}
        }
        z
    }
    
    fn follow(&mut self, follower_id: i32, followee_id: i32) {
        self.following.entry(follower_id).or_default().insert(followee_id);
    }
    
    fn unfollow(&mut self, follower_id: i32, followee_id: i32) {
        self.following.get_mut(&follower_id).and_then(|x|Some(x.remove(&followee_id)));
    }
}
```