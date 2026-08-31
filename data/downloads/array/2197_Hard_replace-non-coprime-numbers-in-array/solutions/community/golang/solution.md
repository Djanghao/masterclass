# [Golang] stack

**Author:** lz-nsc
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/1967084/](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/1967084/)

---

```
func replaceNonCoprimes(nums []int) []int {
    stack :=[]int{}
    count:=0
    for _,num := range nums{
        stack=append(stack,num)
        count++
        for count>1 && GCD(stack[count-2],stack[count-1])!=1{
            stack= append(stack[:count-2],LCM(stack[count-2],stack[count-1]))
            count--
        }
    }
    return stack
}

func LCM(i,j int) int {
    return i*j/(GCD(i,j))
}

func GCD(i,j int) int{
    if i<j{
        i,j=j,i
    }
    
    for i%j!=0{
        i,j = j,i%j
    }
    return j
}
```