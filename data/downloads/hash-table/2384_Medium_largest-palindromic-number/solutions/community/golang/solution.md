# Golang | HashMap | 100% Faster

**Author:** ansuraj
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-palindromic-number/solutions/2457628/](https://leetcode.com/problems/largest-palindromic-number/solutions/2457628/)

---

This below is my own solution.

For a short and beautiful solution, check Lee's explanation:
https://leetcode.com/problems/largest-palindromic-number/discuss/2456655/Python-HashMap-Solution-with-Explanation

```
func largestPalindromic(num string) string {
    
    set := make(map[rune]int, 0)
    
    for i:=0; i<len(num); i++ {
        set[rune(num[i])] += 1
    }
    
    max := -1
    var odd rune
    evenArr := make([]int, 0)
    
    for k,v := range set {
        if v%2 == 1 {
            if int(k - '0') > max {
                odd = k    
                max = int(k - '0')
            }
            set[k] = v-1
            evenArr = append(evenArr, int(k-'0'))
        } else {
            evenArr = append(evenArr, int(k-'0'))
        }
    }
    
    sort.Slice(evenArr, func(a,b int) bool {return evenArr[a] > evenArr[b]})
    
    res := ""
    if len(evenArr) == 1 {
        
        res = strings.Trim(num, "0")
        if res == "" {
            res = "0"
        }
        
        return res
    }
    
    if max != -1 {
        if set[rune(max + '0')] == 0 && len(evenArr) == 2 {
            for i:=0; i<=set[rune(evenArr[0]+'0')]; i++ {
                res += string(evenArr[0]+'0')
            }
            
            return res
        }
    }
    
    for i:=0; i<len(evenArr); i++ {
        
        ch := evenArr[i] + '0'
        set[rune(ch)] = set[rune(ch)]/2

        for j:=0; j<set[rune(ch)]; j++ {
            res += string(evenArr[i] + '0')    
        } 
    }
    
    if max != -1 {
        res += string(odd)
    }
    
    for i:=len(evenArr)-1; i>=0; i-- {
        
        ch := evenArr[i] + '0'

        for j:=0; j<set[rune(ch)]; j++ {
            res += string(evenArr[i] + '0')    
        }
    }
    
    res = strings.Trim(res, "0")
    
    if res == "" {
        return "0"
    }
    
    return res
}