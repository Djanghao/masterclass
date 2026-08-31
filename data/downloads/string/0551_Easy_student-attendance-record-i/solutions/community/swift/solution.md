# Swift Simple 3 liner solution

**Author:** jayantsogikar
**Votes:** 1
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/582532/](https://leetcode.com/problems/student-attendance-record-i/solutions/582532/)

---

```
func checkRecord(_ s: String) -> Bool {
    let a = s.filter{$0 == "A"}.count
    let LBool = s.contains("LLL")
    return (a <= 1) && !LBool
}
```