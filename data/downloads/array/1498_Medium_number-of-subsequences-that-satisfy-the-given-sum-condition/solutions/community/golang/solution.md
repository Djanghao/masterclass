# GoLang Solution

**Author:** debadev
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3492437/](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3492437/)

---


# Code
```
import(
    "sort"
    "math"
    "fmt"
)

func numSubseq(nums []int, target int) int {
    n, mod :=len(nums), math.Pow(10,9) + 7
    sort.Ints(nums)

    var ans float64
    left, right := 0,n-1
    power:= make([]float64,n)
    power[0] = 1
    for i:=1;i<n;i++{
        power[i] = math.Mod((power[i-1] * 2),mod)
    }
    for left <= right{
        if nums[left] + nums[right] <=target{
            ans+=power[right-left]
            ans = math.Mod(ans,mod)
            left++
        }else{
            right--
        }
    }
    return int(ans)

}
```