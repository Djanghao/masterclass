# Simple Golang solution using DFS with explanation

**Author:** rtom09
**Votes:** 2
**Link:** [https://leetcode.com/problems/matchsticks-to-square/solutions/95765/](https://leetcode.com/problems/matchsticks-to-square/solutions/95765/)

---

Based off of solution from pooja_kanchan@hotmail.com, I translated this to Golang. Basic DFS where we start with each side at 0. Then we iterate through the nums array and try to see if they can add up to s1. If its less than or adds up perfectly to the side length, then we add that side and go into another recursion to check the next index of the array. We try s1 again... if it doesnt fit, we go on next to s2, s3, and s4. If it doesnt fit at all, we return false, which will go all the way back to the original makesquare function as false.

```
func makesquare(nums []int) bool {
    if len(nums) < 4 { return false }
    sum:= 0
    for i:=0; i < len(nums); i++ {
        sum+=nums[i]
    }
    if(sum%4 != 0) {return false}
    return findCombo(sum, 0, 0, 0, 0, 0, nums)
}

func findCombo(sum int, s1 int, s2 int, s3 int, s4 int, ind int, nums []int) bool {
    if ind == len(nums) {
        if s1 == s2 && s2 == s3 && s3 == s4 {return true}
        return false
    }    
    if nums[ind] + s1 <= sum/4 {
        if findCombo(sum, s1+nums[ind], s2, s3, s4, ind+1, nums) == true {
            return true
        }
    }
    if nums[ind] + s2 <= sum/4 {
        if findCombo(sum, s1, s2 + nums[ind], s3, s4, ind+1, nums) == true {
            return true
        }
    }
    if nums[ind] + s3 <= sum/4 {
        if findCombo(sum, s1, s2, s3 + nums[ind], s4, ind+1, nums) == true {
            return true
        }
    }
    if nums[ind] + s4 <= sum/4 {
        if findCombo(sum, s1, s2, s3, s4+nums[ind], ind+1, nums) == true {
            return true
        }
    }
    return false
    
}
```