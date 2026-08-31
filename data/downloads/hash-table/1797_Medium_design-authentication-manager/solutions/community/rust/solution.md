# BTreeMap

**Author:** tomijaga
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-authentication-manager/solutions/4176859/](https://leetcode.com/problems/design-authentication-manager/solutions/4176859/)

---


# Code
```
use std::collections::{BTreeMap};

struct AuthenticationManager {
    map: BTreeMap<String, i32>,
    time: BTreeMap<i32, String>,
    time_to_live: i32
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl AuthenticationManager {

    fn new(timeToLive: i32) -> Self {
        Self {
            map : BTreeMap::new(),
            time : BTreeMap::new(),
            time_to_live: timeToLive
        }
    }
    
    fn generate(&mut self, token_id: String, current_time: i32) {
        let expired_time = current_time + self.time_to_live;
        self.map.insert(token_id.clone(), expired_time);
        self.time.insert(expired_time, token_id);
    }
    
    fn renew(&mut self, token_id: String, current_time: i32) {
        if let Some(prev_expired_time) = self.map.get(&token_id){
            if *prev_expired_time <= current_time { return; };
            self.time.remove(prev_expired_time);
            self.generate(token_id, current_time)
        }
    }
    
    fn count_unexpired_tokens(&self, current_time: i32) -> i32 {
        self.time.range((current_time + 1)..).count() as i32
    }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * let obj = AuthenticationManager::new(timeToLive);
 * obj.generate(tokenId, currentTime);
 * obj.renew(tokenId, currentTime);
 * let ret_3: i32 = obj.count_unexpired_tokens(currentTime);
 */
```