# [Javascript] Prefix sum | Eat maximal and minimal | Easy understand

**Author:** zachzwy
**Votes:** 1
**Link:** [https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/1042982/](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/1042982/)

---

```
var canEat = function (A, Q) {
  const pre = [...A];
  for (let i = 1; i < A.length; i++) pre[i] += pre[i - 1];
  const res = Array(Q.length).fill(true);
  
  for (let i = 0; i < Q.length; i++) {
    const [type, day, cap] = Q[i];
	// Eat 1 per day, day is 0-indexed
    if (day + 1 > pre[type]) res[i] = false;

    // Eat cap per day
    const maxCanEat = (day + 1) * cap;
    const needToEat = pre[type - 1];
    if (maxCanEat <= needToEat) res[i] = false;
  }

  return res;
};
```