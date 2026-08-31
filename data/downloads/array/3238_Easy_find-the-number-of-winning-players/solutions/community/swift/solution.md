# Simple solution

**Author:** venkatasaipulipati_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-winning-players/solutions/6009081/](https://leetcode.com/problems/find-the-number-of-winning-players/solutions/6009081/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func winningPlayerCount(_ n: Int, _ pick: [[Int]]) -> Int {
        var d1:[Int:[Int]] = [:]
        var ans = 0
        for item in pick{
            let key = item[0]
            var arr:[Int] = []
            for value in pick{
                if(value[0] == key){
                    arr.append(value[1])
                }
            }
            d1[key] = arr
        }
        //print(d1)
        for (player,value) in d1{
            var d:[Int:Int] = [:]
            for i in value{
                d[i] = (d[i] ?? 0) + 1
            }
            if(d.values.max()! > player){
                ans += 1
            }
        }
        return ans
    }
}
```