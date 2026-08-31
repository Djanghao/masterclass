# Golang / Go solution

**Author:** TH0OO
**Votes:** 28
**Link:** [https://leetcode.com/problems/plus-one/solutions/24294/](https://leetcode.com/problems/plus-one/solutions/24294/)

---

    func plusOne(digits []int) []int {
        var n int = len(digits)
        for i:= n-1; i>=0; i--{
            if digits[i] < 9 {
                digits[i]+=1
                return digits
            } else {
                digits[i] = 0
            }
        }
        var a = make([]int,n+1)
        a[0] = 1
        return a
    
    }