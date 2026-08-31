# Rust HashMap + Entry API

**Author:** hwurthel
**Votes:** 0
**Link:** [https://leetcode.com/problems/logger-rate-limiter/solutions/4087313/](https://leetcode.com/problems/logger-rate-limiter/solutions/4087313/)

---

# Code
```
use std::collections::HashMap;

struct Logger {
    history: HashMap<String, i32>,
}


impl Logger {
    fn new() -> Self {
        Self {
            history: HashMap::new()
        }
    }

    fn should_print_message(&mut self, timestamp: i32, message: String) -> bool {
        let mut should_be_printed = true;
        self.history
            .entry(message)
            .and_modify(|next_allowed| {
                if timestamp < *next_allowed {
                    should_be_printed = false
                } else {
                    *next_allowed = timestamp + 10;
                }
            })
            .or_insert(timestamp + 10);
        should_be_printed
    }
}
```