# simple Javascript solution

**Author:** armageddon2033
**Votes:** 18
**Link:** [https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/987542/](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/solutions/987542/)

---

```
var countStudents = function(students, sandwiches) {
while (students.length>0 && students.indexOf(sandwiches[0])!=-1) {
    if (students[0] == sandwiches[0]) {
        students.shift();
        sandwiches.shift();
    }
    else students.push(students.shift());
}
return students.length
};
```