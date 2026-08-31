# Swift💯1liner

**Author:** OrchidHunter
**Votes:** 7
**Link:** [https://leetcode.com/problems/house-robber/solutions/2909272/](https://leetcode.com/problems/house-robber/solutions/2909272/)

---

**One-Liner, terse (accepted answer)**
```
class Solution {
  func rob(_ n: [Int]) -> Int {
    n.reduce((0,0)){($0.1,max($1+$0.0,$0.1))}.1
  }
}
```

---

**One-Liner, expanded and annotated (accepted answer)**
```
class Solution {
    func rob(_ nums: [Int]) -> Int {
        nums.reduce((twoHousesAgo:0, maxMoney:0)) { dp, house in 
            (
                twoHousesAgo: dp.maxMoney,
                maxMoney: max(house + dp.twoHousesAgo, dp.maxMoney)
            )
        }
        .maxMoney
    }
}
```