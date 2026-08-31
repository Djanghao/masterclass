# [Java/Python 3] Simple O(n) codes.

**Author:** rock
**Votes:** 38
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/2141006/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/2141006/)

---

```java
    public double calculateTax(int[][] brackets, int income) {
        double tax = 0;
        int prev = 0;
        for (int[] bracket : brackets) {
            int upper = bracket[0], percent = bracket[1];
            if (income >= upper) {
                tax += (upper - prev) * percent / 100d;
                prev = upper;
            }else {
                tax += (income - prev) * percent / 100d;
                return tax;
            } 
        }
        return tax;
    }
```
```python
    def calculateTax(self, brackets: List[List[int]], income: int) -> float:
        tax = prev = 0
        for upper, p in brackets:
            if income >= upper:
                tax += (upper - prev) * p / 100
                prev = upper
            else:
                tax += (income - prev) * p / 100
                return tax
        return tax    
```