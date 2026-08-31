# concise solution using filter

**Author:** hasan-4
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/3540192/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/3540192/)

---

# Code
```
function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  return startTime.filter((v, k)=> queryTime>=v && queryTime<=endTime[k] ).length;
};
```