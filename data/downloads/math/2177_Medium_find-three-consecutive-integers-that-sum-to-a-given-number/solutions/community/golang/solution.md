# Super easy solution

**Author:** tuanbieber
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/2238971/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/2238971/)

---

```
func sumOfThree(num int64) []int64 {
    var res []int64
    
    if num % 3 != 0 {
        return res
    }
    
    res = append(res, num/3 - 1)
    res = append(res, num/3)
    res = append(res, num/3 + 1)
    
    return res
}

```