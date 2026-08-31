# Swift | fastest explained solution (beats 100%, 7ms)

**Author:** vologirov
**Votes:** 4
**Link:** [https://leetcode.com/problems/dota2-senate/solutions/3358201/](https://leetcode.com/problems/dota2-senate/solutions/3358201/)

---

# Swift | fastest explained solution
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Using hashMap `banned` to keep track of banned senates by their id. Once we have `countD` or `countR` (representing overall number of senates of each group accordingly per cycle) equal to 0 we have found the winner.

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func predictPartyVictory(_ senate: String) -> String {
        var bannedD = 0
        var bannedR = 0
        var countD = 0
        var countR = 0
        var senate = Array(senate)
        var banned = [Int: Bool]()

        repeat {
            countR = 0
            countD = 0
            
            for i in 0..<senate.endIndex {
                guard banned[i, default: false] == false else { continue }

                if senate[i] == "R" {
                    if bannedR == 0 {
                        bannedD += 1
                        countR += 1
                    } else {
                        banned[i] = true
                        bannedR -= 1
                    }
                } else {
                    if bannedD == 0 {
                        bannedR += 1
                        countD += 1
                    } else {
                        banned[i] = true
                        bannedD -= 1
                    }
                }
            }
        } while countR > 0 && countD > 0

        return countR > countD ? "Radiant" : "Dire"
    }
}
```

> ***Please upvote if you like it***