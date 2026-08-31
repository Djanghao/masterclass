# Rust sol. with HashMap/HashSet

**Author:** Cyclip
**Votes:** 0
**Link:** [https://leetcode.com/problems/finding-the-users-active-minutes/solutions/4483732/](https://leetcode.com/problems/finding-the-users-active-minutes/solutions/4483732/)

---

# Intuition
The problem can be solved by using a HashMap to store user IDs and corresponding sets of active minutes. The HashSet ensures that each active minute is unique for each user.

After populating the HashMap, we iterate through the values and update a result vector based on the size of each HashSet.

# Approach
1. Initialize a result vector $rv$ with zeros and a HashMap $hm$ to store user IDs and their corresponding active minutes in a HashSet.
2. Iterate through the input logs, and for each log entry, insert the user ID and active minute into the HashMap.
3. Iterate through the values of the HashMap, updating the result vector based on the size of each HashSet.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn finding_users_active_minutes(logs: Vec<Vec<i32>>, k: i32) -> Vec<i32> {
        let k = k as usize;
        let mut rv = vec![0; k];
        let mut hm: HashMap<i32, HashSet<i32>> = HashMap::with_capacity(logs.len());

        for entry in logs {
            hm.entry(entry[0]).or_insert_with(HashSet::new).insert(entry[1]);
        };

        for v_set in hm.values() {
            rv[v_set.len() - 1] += 1;
        };

        rv
    }
}
```