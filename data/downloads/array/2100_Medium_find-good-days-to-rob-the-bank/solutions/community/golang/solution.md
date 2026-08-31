# [GO] dp solution

**Author:** geminiwayne
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/1623504/](https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/1623504/)

---

We can use two dp array to store how many sequential nums larger or less than current num
dp1 for decreasing
dp2 for increasing 
For example:
[5,3,3,3,5,6,2]
dp1[0,1,2,3,0,0,1]
dp2[0,5,4,3,2,1,0]

If you have any improvement suggestion, please add comments. Thanks 

```
func goodDaysToRobBank(security []int, time int) []int {
    n := len(security)
    var ans []int
    
    if n < 2*time+1{
        return ans
    }
    
    dp1 := make([]int,n)
    dp2 := make([]int,n)
    
    for i:=1;i<n-time;i++{
        if security[i-1] >= security[i]{
            dp1[i] = dp1[i-1] + 1
        }else{
            dp1[i] = 0
        }
    }
    
    for j:=n-2;j>=time;j--{
        if security[j+1] >= security[j]{
            dp2[j] = dp2[j+1] + 1 
        }else{
            dp2[j] = 0
        }
    }
    
    for i:=time;i<n-time;i++{
        if dp1[i]>= time && dp2[i] >= time{
            ans = append(ans,i)
        }   
    }

    return ans
}
```