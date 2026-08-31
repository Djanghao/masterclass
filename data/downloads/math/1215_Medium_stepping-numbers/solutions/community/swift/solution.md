# [Swift] DFS solutions

**Author:** alptekin35
**Votes:** 1
**Link:** [https://leetcode.com/problems/stepping-numbers/solutions/505799/](https://leetcode.com/problems/stepping-numbers/solutions/505799/)

---

```
class Solution {
    func countSteppingNumbers(_ low: Int, _ high: Int) -> [Int] {
        var list:[Int] = []
        for i in 0...9{
            helper(low, high, &list, i)
        }
        return list.sorted()
    }
    
    func helper(_ low: Int, _ high: Int,_ list:inout[Int],_ current:Int){
        if current >= low && current <= high{
            list.append(current)
        }
        if current == 0 ||\xA0current > high{
            return
        }
        let mod = current % 10
        let inc = current*10 + mod+1
        let dec = current*10 + mod-1

        if mod == 0{
            helper(low, high, &list, inc)
        }else if mod == 9{
            helper(low, high, &list, dec)
        }else{
            helper(low, high, &list, inc)
            helper(low, high, &list, dec)
        }
    }
}
```