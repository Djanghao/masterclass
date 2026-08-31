# easy go golang solution brute force 0 ms

**Author:** okarademirci
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/1934210/](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/1934210/)

---

```

func minimizeResult(expression string) string {
    m := map[int]string{}
    s := strings.Split(expression,"+")
    n1 := s[0]
    n2 := s[1]
    
    // get the normal sum 
    res,_ := strconv.Atoi(s[0])
    res2,_ := strconv.Atoi(s[1])
    res += res2 
    
    //map it with the expression
    m[res] = fmt.Sprintf("(%s)",expression)
    
    for i:=0; i<len(n1); i++{
        i1,err := strconv.Atoi(n1[:i])
        if err != nil{
            i1 = 1
        }
        i2,_ := strconv.Atoi(n1[i:])
        //fmt.Println("i",i1,i2)
        for j:=1; j <= len(n2); j++{
            j1,_ := strconv.Atoi(n2[:j])
            j2,err := strconv.Atoi(n2[j:])
            if err != nil{
                j2 = 1
            }
            //fmt.Println("j",j1,j2)
            
            // calculate
            curr := i1 * (i2 + j1) * j2
            m[curr] = fmt.Sprintf("%[1]s(%[2]s+%[3]s)%[4]s",n1[:i],n1[i:],n2[:j],n2[j:])
            if(curr < res){
                res = curr
            }
            
        }
    }
    
    
    return m[res]
}