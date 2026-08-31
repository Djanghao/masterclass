# Easy JS/TS one-liner

**Author:** jamauss
**Votes:** 1
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/5266695/](https://leetcode.com/problems/student-attendance-record-i/solutions/5266695/)

---

It's tempting to loop through the string one char at a time and do some counting and add some logic to return false but this is pretty straightforward:

# Code
```
const checkRecord = (s: string): boolean => {
    
    return s.split('').filter((x) => x === 'A').length < 2 && !s.includes('LLL');

};
```
See more `TypeScript`/`JavaScript` (and other language) LeetCode solutions at https://github.com/jasonmauss/LeetCode