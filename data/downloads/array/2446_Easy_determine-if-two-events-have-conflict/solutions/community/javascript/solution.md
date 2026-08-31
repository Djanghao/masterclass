# JavaScript ✅ TC O(1) | SC O(1)

**Author:** ThakurBallary
**Votes:** 7
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/2734160/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/2734160/)

---

```
/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    return (event1[0] <= event2[0] && event2[0] <= event1[1])
        || (event1[0] <= event2[1] && event2[1] <= event1[1])
        || (event2[0] <= event1[0] && event1[0] <= event2[1])
        || (event2[0] <= event1[1] && event1[1] <= event2[1]);
};
```