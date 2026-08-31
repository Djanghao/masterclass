# Ruby solution using DP

**Author:** divyad25
**Votes:** 2
**Link:** [https://leetcode.com/problems/ugly-number-ii/solutions/399462/](https://leetcode.com/problems/ugly-number-ii/solutions/399462/)

---

```
def nth_ugly_number(n)
  i2 = i3= i5 = 0
  ugly = [1]
  
  (1...n).each { |i|
    mul2, mul3, mul5 = ugly[i2]*2,  ugly[i3]*3, ugly[i5]*5
    ugly[i] = [mul2, mul3, mul5].min
    i2 += 1 if ugly[i] == mul2
    i3 += 1 if ugly[i] == mul3
    i5 += 1 if ugly[i] == mul5
  }
  ugly[n-1]
end
```