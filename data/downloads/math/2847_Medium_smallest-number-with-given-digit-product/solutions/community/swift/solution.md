# Swift | Greedy

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-number-with-given-digit-product/solutions/4032791/](https://leetcode.com/problems/smallest-number-with-given-digit-product/solutions/4032791/)

---

**Greedy (accepted answer)**
```
class Solution {
    func smallestNumber(_ n: Int) -> String {
        guard n > 9 else { return String(n) }
        var digit = 9, n = n
        var result = "" 
        
        while digit > 1 {
            if n % digit == 0 {
                n /= digit
                result = "\\(digit)" + result
            } else {
                digit -= 1
            }
        }
        
        return n == 1 ? result : "-1"
    }
}
```