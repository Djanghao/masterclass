# Golang sliding-window solution O(n*26)

**Author:** ronaldlin
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-complete-substrings/solutions/4356221/](https://leetcode.com/problems/count-complete-substrings/solutions/4356221/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. I try sliding window first. But the result is TLE and I get stuck.
2. Find the tricky part of this question: the len of substring can only be `k*times`, in which `times<=26` 
3. So the final thought is:
 - Check substring with length k, 2*k, 3*k ...... 26*k
 - In each check, move the window forward by 1 step. At the same time, keep track of the count of the character in a map. 
 - For the distance condition, pre-calculate it. 

# Complexity
- Time complexity:O(n*26)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
func countCompleteSubstrings(word string, k int) int {
    badIndex:=make(map[int]bool,0)
    for i:=0;i<len(word);i++{
        if i>=1&&math.Abs(float64(word[i-1])-float64(word[i]))>2{
            badIndex[i]=true
        }
    }
    sum:=0
    times:=1
    m:=make(map[byte]int,0)
    for {
        if times>26{
            break
        }
        start:=0
        end:=start+k*times-1
        m=make(map[byte]int,0)

        if end>=len(word){
            break
        }
        for ii:=start;ii<=end;ii++{
            m[word[ii]]+=1
        }
        for {
            if checkM(m,k)&&!isBad(start,end,badIndex){
                sum+=1
            }
            end++
            if end>=len(word){
                break
            }
            m[word[end]]++
            m[word[start]]--
            start++
        }
        times++
    }
    
    return sum
}
func checkM(m map[byte]int,k int)bool{
    for key:=range m{
        if m[key]==0{continue}
        if m[key]!=k{
            return false
        }
    }
    return true
}
func isBad(i,j int, bad map[int]bool)bool{
    for k:=range bad{
        if i<k&&k<=j{
            return true
        }
    }
    return false
}
```