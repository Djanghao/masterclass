# Swift DP solution

**Author:** pinieb
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-vacation-days/solutions/1660547/](https://leetcode.com/problems/maximum-vacation-days/solutions/1660547/)

---

```
class Solution {
    private var memo = [[Int]]()
    private var flights = [[Int]]()
    private var days = [[Int]]()
    
    private var cities: Int { flights.count }
    private var weeks: Int { days[0].count }
    
    func maxVacationDays(_ flights: [[Int]], _ days: [[Int]]) -> Int {
        self.flights = flights
        self.days = days
        
        self.memo = [[Int]](repeating: [Int](repeating: 0, count: cities), count: weeks)
        
        return dp()
    }
    
    private func dp(week: Int = 0, city: Int = 0) -> Int {
        guard week < weeks else { return 0 }
        
        if memo[week][city] > 0 {
            return memo[week][city]
        }
        
        // stay
        var maxVacation = dp(week: week + 1, city: city) + days[city][week]
        
        // fly
        for i in 0 ..< cities where flights[city][i] == 1 {
            maxVacation = max(maxVacation, dp(week: week + 1, city: i) + days[i][week])
        }
        
        memo[week][city] = maxVacation
        
        return maxVacation
    }
}
```