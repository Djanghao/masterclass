# Beats 100.00% of users with Swift

**Author:** Victor-SMK
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/5270823/](https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/5270823/)

---


```
class Solution {
    func circularGameLosers(_ n: Int, _ k: Int) -> [Int] {
        var set_friends : Set<Int> = []
        var player = 0
        var count = 0
        var ans = [Int]()

        while !set_friends.contains(player){
            set_friends.insert(player)
            count += 1
            player = (player + count*k) % n
        }

        for i in 0..<n {
            if !set_friends.contains(i){
                ans.append(i + 1)
            }
        }

        return ans
    }
}
```