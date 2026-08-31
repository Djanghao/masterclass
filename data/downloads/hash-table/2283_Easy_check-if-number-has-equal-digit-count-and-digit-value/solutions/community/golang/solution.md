# Golang Solution

**Author:** Prabhakar_Boggala
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/5103812/](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/5103812/)

---



# Code
```
func digitCount(num string) bool {   
    mp:=make(map[int]int)    
     for i:=len(num)-1;i>=0;i--{ 
        n,_:=strconv.Atoi(string(num[i]))       
        mp[n]++       
     }
     for i,v:=range num{
        nu,_:=strconv.Atoi(string(v))
        if nu!=mp[i]{
            return false
        }
     }
     return true

    
}
```