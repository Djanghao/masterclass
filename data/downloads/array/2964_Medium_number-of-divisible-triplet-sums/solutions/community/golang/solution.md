# Golang, concise, straightforward

**Author:** gvnpl
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-divisible-triplet-sums/solutions/4401873/](https://leetcode.com/problems/number-of-divisible-triplet-sums/solutions/4401873/)

---

```
func divisibleTripletCount(nums []int, d int) int {
    ans := 0
    for i, v := range nums {
        h := map[int]int{}
        for j := i + 1; j < len(nums); j++ {
            if j > i + 1 {
                dd := nums[j] % d
                ans += h[(d - dd) % d]
            }
            h[(v + nums[j]) % d] += 1
        }
    } 
    return ans
}
```