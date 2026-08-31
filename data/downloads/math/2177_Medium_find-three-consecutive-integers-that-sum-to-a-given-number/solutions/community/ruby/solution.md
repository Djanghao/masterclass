# Ruby Solution

**Author:** opopopop
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/2687090/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/2687090/)

---

```
def sum_of_three(num)
    num % 3 != 0 ? [] : [(num/3)-1, (num/3), (num/3)+1] 
end
```