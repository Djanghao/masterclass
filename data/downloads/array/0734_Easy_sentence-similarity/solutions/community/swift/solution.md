# [Swift] HastMap Solution

**Author:** alptekin35
**Votes:** 1
**Link:** [https://leetcode.com/problems/sentence-similarity/solutions/557530/](https://leetcode.com/problems/sentence-similarity/solutions/557530/)

---

```
class Solution {
    func areSentencesSimilar(_ words1: [String], _ words2: [String], _ pairs: [[String]]) -> Bool {
        if words1.count != words2.count { return false }
        let n = words1.count
        var map:[String:Set<String>] = [:]
        for pair in pairs{
            let item1 = pair[0]
            let item2 = pair[1]
            if map[item1] == nil{
                map[item1] = Set([item2])
            }else{
                map[item1]!.insert(item2)
            }
            if map[item2] == nil{
                map[item2] = Set([item1])
            }else{
                map[item2]!.insert(item1)
            }
        }
        for i in 0..<n{
            let item1 = words1[i]
            let item2 = words2[i]
            if item1 != item2 {
                if (map[item1] != nil && map[item1]!.contains(item2)) || (map[item2] != nil && map[item2]!.contains(item1)){
                    continue
                }else{
                    return false
                }
            }
        }
        return true
    }
}
```