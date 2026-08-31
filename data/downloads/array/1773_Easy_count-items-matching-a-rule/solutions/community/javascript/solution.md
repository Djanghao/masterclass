# JavaScript, single pass O(n), one-liner (almost...)

**Author:** user4125ZI
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/1086216/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/1086216/)

---

```javascript
const RULE_IDX = {
    'type': 0,
    'color': 1,
    'name': 2
};

var countMatches = function(items, ruleKey, ruleValue) {
    return items.reduce((ans, item) => item[RULE_IDX[ruleKey]] === ruleValue ? ans + 1 : ans, 0);
};
```