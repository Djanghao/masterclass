# Go | Easy

**Author:** jaideep_ankur
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1289615/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1289615/)

---

Do upvote if it helps! :)
```
func sum(a int) int{
    ans:=0
    for a>0{
        n:=a%10
        a=a/10
        ans+=n
    }
    return ans
}

func countBalls(lowLimit int, highLimit int) int {
    m:=make(map[int] int)
    mex:=0
    for i:=lowLimit;i<=highLimit;i++{
        aux:=sum(i)
        m[aux]++
    }
    for _,elements:=range(m){
        if(elements>mex){
            mex=elements
        }
    }
    return mex
}
```