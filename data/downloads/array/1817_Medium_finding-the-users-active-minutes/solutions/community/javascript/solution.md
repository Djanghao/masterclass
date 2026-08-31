# JavaScript Solution - Map and Set

**Author:** Deadication
**Votes:** 9
**Link:** [https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1188550/](https://leetcode.com/problems/finding-the-users-active-minutes/solutions/1188550/)

---

```
var findingUsersActiveMinutes = function(logs, k) {
    const map = new Map();
    
    for (const [userID, minute] of logs) {
        if (!map.has(userID)) map.set(userID, new Set());
        map.get(userID).add(minute);
    }
    
    const count = new Array(k).fill(0);
    
    for (const actions of map.values()) {
        count[actions.size - 1]++;
    }
    
    return count;
};
```