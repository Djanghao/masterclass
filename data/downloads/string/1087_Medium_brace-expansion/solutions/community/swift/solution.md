# [Swift] DFS Solution

**Author:** alptekin35
**Votes:** 1
**Link:** [https://leetcode.com/problems/brace-expansion/solutions/505010/](https://leetcode.com/problems/brace-expansion/solutions/505010/)

---

```
class Solution {
    func expand(_ S: String) -> [String] {
        var list:[String] = []
        var temp:[Character] = []
        helper(Array(S), 0, &list, &temp)
        return list
    }
    
    func helper(_ arr:[Character],_ index:Int,_ list:inout[String],_ temp:inout[Character]){
        if index == arr.count{
            list.append(String(temp))
            return
        }
        if arr[index] == "{" {
            var items:[Character] = []
            var i = index+1
            while arr[i] != "}" {
                if arr[i] != ","{
                    items.append(arr[i])
                }
                i+=1
            }
            items.sort()
            for item in items{
                temp.append(item)
                helper(arr, i+1, &list, &temp)
                temp.removeLast()
            }
        }else{
            temp.append(arr[index])
            helper(arr, index+1, &list, &temp)
            temp.removeLast()
        }
    }
}
```