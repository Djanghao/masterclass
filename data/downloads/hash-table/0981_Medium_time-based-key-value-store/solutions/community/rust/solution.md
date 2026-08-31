# Easiest Rust Solution.

**Author:** tabuopop
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-based-key-value-store/solutions/3359410/](https://leetcode.com/problems/time-based-key-value-store/solutions/3359410/)

---



# Code
```
use std::collections::HashMap;

struct TimeMap 
{
    // [1] a regular HashMap with timestamp-supplied value
    //     in the form of a tuple will do the job...
    time_map : HashMap<String, Vec<(i32, String)>>
}

impl TimeMap 
{
    fn new() -> Self 
    {
        TimeMap { time_map : HashMap::new() }
    }
    
    fn set(&mut self, key: String, value: String, timestamp: i32) 
    {
        // [2] insert new key (if not present), then add timestamped value
        let mut entry = self.time_map.entry(key).or_insert(Vec::new());
        entry.push((timestamp, value));
    }
    
    fn get(&self, key: String, timestamp: i32) -> String 
    {
        // [3] there are several cases that we need to handle;
        //     Rust's binary_search is perfect for that;
        //     a special case for i == 0 is treated explicitly
        if let Some(tv) = self.time_map.get(&key)
        {
            return match tv.binary_search_by_key(&timestamp, |&(t, _)| t)
            {
                Ok(i)  => tv[i].1.clone(),
                Err(i) => if i > 0 { tv[i-1].1.clone() } else { String::from("") }
            }
        }
        String::from("")
    }
}
```