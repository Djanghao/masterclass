# Simple and fast solution in Go

**Author:** bbaktyke
**Votes:** 1
**Link:** [https://leetcode.com/problems/three-divisors/solutions/2938511/](https://leetcode.com/problems/three-divisors/solutions/2938511/)

---

# Intuition
First of all, we will send given int to func div which will return slice of int which module of int


# Approach
Use loop to count int

# Complexity
- Time complexity:
0 ms

- Space complexity:
1.9 mb

# Code
```
func isThree(n int) bool {

    if len(div(n))==3{
        return true
    }
    return false
    
}


func div(n int)[]int{
    var res []int

    for i:=1;i<=n;i++{
        if n%i==0{
            res=append(res,i)

        }
    }
    return res
}
```