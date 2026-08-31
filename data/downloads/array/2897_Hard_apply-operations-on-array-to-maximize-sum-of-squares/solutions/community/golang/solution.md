# Go/Golang

**Author:** cakuang1
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/5853287/](https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/5853287/)

---

# Intuition
Redistribute bits to create the k biggest numbers greedily.

# Code
```golang []
func maxSum(nums []int, k int) int {


    bitcount := [32]int{}
    
    mod := 1_000_000_007
    for _,v  := range(nums) {
        for i := 0 ; i < len(bitcount) ; i ++ {       
            if v & 1 == 1 {
                bitcount[i] ++ 
            }
            v >>= 1 
        }
    }
    res := 0
    for i := 0 ; i < k ; i ++ {
        curr := 0
        for b := 31 ; b >= 0 ; b -- {
            if bitcount[b] > 0 {
                curr ^= 1 << b 
                bitcount[b] -- 
            }
        }
        res += (curr * curr) % mod 
    }

    return res % mod 
}
```