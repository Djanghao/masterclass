# [JavaScript] Easy to understand - 3 solutions - 1 line

**Author:** poppinlp
**Votes:** 27
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/638223/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/638223/)

---

## SOLUTION 1

Straight forward solution. We just traversal the `startTime` and `endTime` and check the `queryTime`.

```js
const busyStudent = (startTime, endTime, queryTime) => {
  let ret = 0;
  for (let i = 0; i < startTime.length; ++i) {
    startTime[i] <= queryTime && endTime[i] >= queryTime && ++ret;
  }
  return ret;
};
```

## SOLUTION 2

We could use the `filter` method on `Array.prototype` to do it.

```js
const busyStudent = (startTime, endTime, queryTime) => startTime.filter((t, i) => queryTime >= t && queryTime <= endTime[i]).length;
```

## SOLUTION 3

We could also use the `reduce` method on `Array.prototype` to do it.

```js
const busyStudent = (startTime, endTime, queryTime) => startTime.reduce((prev, t, i) => queryTime >= t && queryTime <= endTime[i] ? prev + 1 : prev, 0);
```