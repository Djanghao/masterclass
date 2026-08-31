# [Go] GCD

**Author:** harotobira
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/928490/](https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/928490/)

---

Runtime: 36 ms, faster than 100.00% of Go online submissions for Check If It Is a Good Array.
Memory Usage: 8.8 MB, less than 100.00% of Go online submissions for Check If It Is a Good Array.

```
func isGoodArray(nums []int) bool {
    t := nums[0]
    
    for _, num := range nums{
        t = gcd(num, t)
        if t == 1{
            return true
        }
    }
    
    return false
}

func gcd (a,b int) int{
    if a < b{
        return gcd(b,a)
    }
    
    if a % b == 0{
        return b
    }
    
    return gcd(b, a%b)
}