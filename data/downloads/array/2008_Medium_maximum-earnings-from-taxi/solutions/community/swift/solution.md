# [Swift] DP solution

**Author:** Nyfa117
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/1487509/](https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/1487509/)

---

```
    func maxTaxiEarnings(_ n: Int, _ rides: [[Int]]) -> Int {
        var memo = Array(repeating: 0, count: n + 1)
        var ridesByEndpoint = [Int: [[Int]]]()
                    
        for ride in rides {
            ridesByEndpoint[ride[1], default: []].append(ride)
        }
        
        for distance in 1...n {
            memo[distance] = memo[distance - 1]
            
            guard let rides = ridesByEndpoint[distance] else { continue }
            
            for i in 0..<rides.count {
                let ride = rides[i]
                let money = ride[1] - ride[0] + ride[2]
            
                memo[distance] = max(memo[ride[0]] + money, memo[distance])
            }
        }
        
        return memo.last!
    }
```