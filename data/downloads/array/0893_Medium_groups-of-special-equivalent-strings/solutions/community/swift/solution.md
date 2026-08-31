# [Swift] Character Counting

**Author:** alptekin35
**Votes:** 1
**Link:** [https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/541107/](https://leetcode.com/problems/groups-of-special-equivalent-strings/solutions/541107/)

---

```
class Solution {
    func numSpecialEquivGroups(_ A: [String]) -> Int {
        var set:Set<String> = Set()
        for item in A{
            let chars = Array(item)
            var arr:[Character] = Array(repeating: "0", count: 52)
            for i in 0..<chars.count{
                if i % 2 == 0{
                    let val = Int(String(arr[Int(chars[i].asciiValue!) - 97]))! + 1
                    arr[Int(chars[i].asciiValue!) - 97] = Character(val.description)
                }else{
                    let val = Int(String(arr[Int(chars[i].asciiValue!) - 97 + 26]))! + 1
                    arr[Int(chars[i].asciiValue!) - 97 + 26] = Character(val.description)                
                }
            }
            set.insert(String(arr))
        }
        return set.count
    }
}
```