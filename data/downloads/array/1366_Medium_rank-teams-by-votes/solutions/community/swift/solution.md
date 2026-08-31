# Short & Easy Swift

**Author:** artemvor1997
**Votes:** 1
**Link:** [https://leetcode.com/problems/rank-teams-by-votes/solutions/3224877/](https://leetcode.com/problems/rank-teams-by-votes/solutions/3224877/)

---


# Code
```
class Solution {
    func rankTeams(_ votes: [String]) -> String {
        let n = votes[0].count
        let A = Array(repeating: 0, count: n)
        var counter = [Character: [Int]]()
        votes.forEach { str in 
            str.enumerated().forEach{ counter[$0.1, default: A][$0.0] += 1 }
        }
        return counter.sorted { 
            for i in 0..<n {
                if $0.value[i] != $1.value[i] {
                    return $0.value[i] > $1.value[i]
                }
            }
            return $0.key < $1.key
        }
        .map{String($0.key)}.joined()
    }
}
```