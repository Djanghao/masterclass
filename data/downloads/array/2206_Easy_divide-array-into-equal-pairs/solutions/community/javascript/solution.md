# [Javascript] Clean and easy to understand

**Author:** ChaseDho
**Votes:** 19
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/1894695/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/1894695/)

---

Let me know if you have any doubts. I try to answer/help.

Please upvote if you liked the solution.

```
var divideArray = function(nums) {
  const numMap = new Map();
  for (const num of nums) {
    numMap.has(num) ? numMap.delete(num) : numMap.set(num, true);
  }
  return numMap.size === 0;
};
```