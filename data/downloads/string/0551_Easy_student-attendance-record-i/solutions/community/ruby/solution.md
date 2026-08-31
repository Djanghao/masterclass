# Ruby built in methods

**Author:** keithgardner
**Votes:** 1
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/427526/](https://leetcode.com/problems/student-attendance-record-i/solutions/427526/)

---

```
# @param {String} s
# @return {Boolean}
def check_record(s)
    s.count('A') < 2 && !s.index('LLL')
end
```