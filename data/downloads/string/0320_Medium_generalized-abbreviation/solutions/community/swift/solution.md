# [Swift] Backtracking Solution

**Author:** alptekin35
**Votes:** 2
**Link:** [https://leetcode.com/problems/generalized-abbreviation/solutions/502158/](https://leetcode.com/problems/generalized-abbreviation/solutions/502158/)

---

```
class Solution {
    func generateAbbreviations(_ word: String) -> [String] {
        var list:[String] = []
        helper(&list, word, 0, "", 0)
        return list
    }
    
    func helper(_ list: inout [String],_ word:String,_ pos:Int,_ cur:String,_ count:Int){
        var current = cur
        if pos == word.count{
            if count > 0{
                current += count.description
            }
            list.append(current)
        }else{
            helper(&list, word, pos+1, current, count+1)
            helper(&list, word, pos+1, current + (count>0 ? count.description : "") + String(Array(word)[pos]), 0)
        }
    }
}
```