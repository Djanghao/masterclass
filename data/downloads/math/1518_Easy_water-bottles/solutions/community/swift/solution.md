# Swift

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/water-bottles/solutions/5431039/](https://leetcode.com/problems/water-bottles/solutions/5431039/)

---

**Simulation (accepted answer)** \u2705 
```
class Solution {
    func numWaterBottles(_ numBottles: Int, _ numExchange: Int) -> Int {
        var (refills, remainder) = (numBottles, 0)
        var bottlesDrunk = 0
        
        while refills > 0 {
            bottlesDrunk += refills
            (refills, remainder) = (refills+remainder).quotientAndRemainder(dividingBy: numExchange)
        }
        return bottlesDrunk
    }
}
```

---

**BONUS: One-Liner, terse (accepted answer)** \uD83E\uDD13 
```
class Solution {
    func numWaterBottles(_ b: Int, _ x: Int) -> Int {
        (0...(b/x)+1).reduce((0,b,0)){t,_ in (t.0+t.1,(t.1+t.2)/x,(t.1+t.2)%x)}.0
    }
}
```

**BONUS: ALT One-Liner, terse (accepted answer)** \uD83D\uDE31 
```
class Solution {
    func numWaterBottles(_ a: Int, _ b: Int, _ c:Int = 0, _ d: Int = 0) -> Int {
        a>0 ? numWaterBottles((a+d)/b,b,c+a,(a+d)%b):c
    }
}
```