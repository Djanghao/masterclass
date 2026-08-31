# rust solution

**Author:** TimaGhostov
**Votes:** 0
**Link:** [https://leetcode.com/problems/tweet-counts-per-frequency/solutions/4353692/](https://leetcode.com/problems/tweet-counts-per-frequency/solutions/4353692/)

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
use std::collections::{HashMap, BTreeMap};

struct TweetCounts {
    map: HashMap<String, BTreeMap<i32, i32>>
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl TweetCounts {

    fn new() -> Self {
        Self {
            map: HashMap::new(),
        }
    }
    
    fn record_tweet(&mut self, tweet_name: String, time: i32) {
        let mut map_times = self.map.entry(tweet_name).or_insert(BTreeMap::new());
        *map_times.entry(time).or_insert(0) += 1;
    }

    fn next_freq(freq: &str, start_time: i32, end_time: i32) -> Option<(i32, i32)> {
        if start_time > end_time {
            return None;
        }
        let interval = match freq {
            "minute" => 60,
            "hour" => 3600,
            "day" => 86400,
            _ => return None,
        };
        let end_time = end_time.min(start_time + interval - 1);
        Some((start_time, end_time))
    }
    
    fn get_tweet_counts_per_frequency(&self, freq: String, tweet_name: String, mut start_time: i32, end_time: i32) -> Vec<i32> {
        let mut result = vec![];
        match self.map.get(&tweet_name) {
            None => result,
            Some(map_times) => {
                while let Some((start, end)) = Self::next_freq(&freq, start_time, end_time) {
                    let mut res_count = 0;
                    for (time, count) in map_times {
                        if *time < start { continue; }
                        if *time > end { continue; }
                        res_count += *count;
                    }
                    result.push(res_count);
                    start_time = end + 1;
                }
                result
            }
        }
    }
}

/**
 * Your TweetCounts object will be instantiated and called as such:
 * let obj = TweetCounts::new();
 * obj.record_tweet(tweetName, time);
 * let ret_2: Vec<i32> = obj.get_tweet_counts_per_frequency(freq, tweetName, startTime, endTime);
 */
```