# Dict, set,  Beats 90.91% of users with Swift

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/rings-and-rods/solutions/5165033/](https://leetcode.com/problems/rings-and-rods/solutions/5165033/)

---


```
class Solution {
    func countPoints(_ rings: String) -> Int {
        var ans = 0
        var dict_n = [Character : Set<Character>]()
        
        var i = rings.startIndex
        
        while i < rings.endIndex{
            let color = rings[i]
            i = rings.index(after: i)
            let n = rings[i]
            i = rings.index(after: i)

            if dict_n.keys.contains(n){
                dict_n[n]?.insert(color)
            } else{
                dict_n[n] = [color]    
            }
        }
        
        for d in dict_n{
            if d.value.count == 3{ ans += 1}
        }
        
        return ans
    }
}
```