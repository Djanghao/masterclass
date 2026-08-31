# Simple Swift Solution

**Author:** jayantsogikar
**Votes:** 15
**Link:** [https://leetcode.com/problems/running-sum-of-1d-array/solutions/686302/](https://leetcode.com/problems/running-sum-of-1d-array/solutions/686302/)

---

```
func runningSum(_ nums: [Int]) -> [Int] {
    var arr : [Int] = []
    var sum = 0
    for n in nums{
        sum += n
        arr.append(sum)
    }
    return arr
}
```