# [Swift] HashMap Solution

**Author:** alptekin35
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-absolute-file-path/solutions/552257/](https://leetcode.com/problems/longest-absolute-file-path/solutions/552257/)

---

```
class Solution {
    func lengthLongestPath(_ input: String) -> Int {
        let lines = input.components(separatedBy: "\
")
        var maxLen = 0
        var map:[Int:Int] = [0:0]
        for line in lines{
            let path = line.components(separatedBy: "\	").last!
            let depth = line.count - path.count
            if path.contains("."){
                maxLen = max(maxLen, map[depth]! + path.count)
            }else{
                map[depth+1] = map[depth]! + path.count + 1
            }
        }
        return maxLen
    }
}
```