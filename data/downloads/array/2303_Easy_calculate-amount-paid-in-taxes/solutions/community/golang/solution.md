# go solution

**Author:** hjoru
**Votes:** 1
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/2141995/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/2141995/)

---

```
func calculateTax(brackets [][]int, income int) float64 {
    result := float64(0)
    lastTax := 0
    remain := income
    for _, bracket := range brackets {
        if bracket[0] < income {
            result += float64(bracket[0] - lastTax) * float64(bracket[1]) / float64(100)
            lastTax = bracket[0]
            remain = income - bracket[0]
            continue
        }
        if income > lastTax {
            result += float64(remain) * float64(bracket[1]) / float64(100)
            lastTax = bracket[0]
        } else {
            break
        }
    }
    return result
}