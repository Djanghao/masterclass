# Golang || Aditya Verma Approach || Top Down DP

**Author:** atul180698
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-common-supersequence/solutions/2378100/](https://leetcode.com/problems/shortest-common-supersequence/solutions/2378100/)

---

```
func shortestCommonSupersequence(str1 string, str2 string) string {
    m:=len(str1)
    n:=len(str2)
    
    t:=make([][]int, m+1)
    for i,_ := range t{
        t[i]=make([]int, n+1)
    }
    
    for i:=1; i<m+1;i++{
        for j:=1; j<n+1;j++{
            if str1[i-1]==str2[j-1]{
                t[i][j] = 1 + t[i-1][j-1]
            }else{
                t[i][j] = max(t[i-1][j], t[i][j-1])
            }
        }
    }
    
    res:=""
    i,j := m,n
    
    for i>0 && j>0{
        if str1[i-1]==str2[j-1]{
            res=res+string(str1[i-1])
            i--
            j--
        }else{
            if t[i][j-1]>t[i-1][j]{
                res+=string(str2[j-1])
                j--
            }else{
                res+=string(str1[i-1])
                i--
            }
        }
    }
    
    for i>0{
        res+=string(str1[i-1])
        i--
    }
    for j>0{
        res+=string(str2[j-1])
        j--
    }
    return reverse(res)
}

// max function
func max(a,b int) int{
    if a>b{
        return a
    }
    return b
}
// reverse function
func reverse(str string) string{
    temp:=""
    for i:=len(str)-1;i>=0;i--{
        temp+=string(str[i])
    }
    return temp
}
```