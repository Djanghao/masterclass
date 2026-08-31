# Simple Swift solution, 16 ms

**Author:** yugantar
**Votes:** 1
**Link:** [https://leetcode.com/problems/long-pressed-name/solutions/845252/](https://leetcode.com/problems/long-pressed-name/solutions/845252/)

---

```
class Solution {
    func isLongPressedName(_ name: String, _ typed: String) -> Bool {
        var k = 0
        let name = Array(name)
        let typed = Array(typed)
        for i in 0 ..< name.count {
            if k >= typed.count || name[i] != typed[k] {
                return false
            }
            if i+1 < name.count && name[i+1] == name[i] {
                k += 1
                continue
            }
            while k < typed.count && typed[k] == name[i] {
                k += 1
            }
        }
        if k < typed.count { return false }
        return true
    }
}
```