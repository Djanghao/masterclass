# Swift🫧Clean

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-missing-observations/solutions/5738754/](https://leetcode.com/problems/find-missing-observations/solutions/5738754/)

---

**Good Interview Answer (accepted answer)**
```
class Solution {
    func missingRolls(_ rolls: [Int], _ mean: Int, _ n: Int) -> [Int] {
        let m = rolls.count
        let totalSum = mean * (n+m)
        let observedSum = rolls.reduce(0,+)
        var unobservedSum = totalSum - observedSum
        
        // fail if we'll under/overflow by returning all 1's or all 6's 
        guard n...n*6 ~= unobservedSum else { return [] }
		        
        return (1...n).map{ _ in
            // reserve enough to fill arrays with 1's
            let reserve = n
                           
            // greedily grab up to 5 extra points, if available
            let amountOverOne = min(5, unobservedSum - reserve)
            unobservedSum -= amountOverOne
                           
            // return 1...6
            return 1 + amountOverOne 
        }
    }
}
```