# [JavaScript] 1604. Alert Using Same Key-Card Three or More Times in a One Hour Period

**Author:** pgmreddy
**Votes:** 7
**Link:** [https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/4324981/](https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/solutions/4324981/)

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

---

```
var alertNames = function (keyNames, keyTimes) {
  const nameTimesMap = {};
  keyTimes.forEach((timeHHMM, i) => {
    const [HH, MM] = timeHHMM.split(":");
    nameTimesMap[keyNames[i]] = nameTimesMap[keyNames[i]] || [];
    nameTimesMap[keyNames[i]].push(60 * HH + 1 * MM);
  });
  const uniqueAlertedNames = new Set();
  Object.entries(nameTimesMap).forEach(([name, times]) => {
    times.sort((a, b) => a - b);
    for (let i = 2; i < times.length; i++) {
      if (times[i] - times[i - 2] <= 60) {
        uniqueAlertedNames.add(name);
        break;
      }
    }
  });
  return [...uniqueAlertedNames].sort();
};
```

---
