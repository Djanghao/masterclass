# GO | Beats 96% | prefix sum

**Author:** xtreding
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/2356566/](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/2356566/)

---

Calculate number of unique chars from left to right and from right to left.
Write a cycle from 0 to n-2 and compare `left[i] == right[i+1]`. If **true** => `result++`
```
string: "aacaba"
left:   [112233]
right:  [333221]
```

Code:
```
func numSplits(s string) int {
    n := len(s)
	
	//prefix sum from the left
    leftps := make([]int, n)
    
	//dict is used to track unique characters
    dict := [26]bool{}
	//prefix sum of unique characters
    ps := 0
    for i:=range s {
        if !dict[s[i]-'a']{
            dict[s[i]-'a']=true
            ps++
        }
        
        leftps[i]=ps
    }
    
	//prefix sum from the right
    rightps := make([]int, n)
    
    dict = [26]bool{}
    ps = 0
    for i:=n-1;i>=0;i--{
        if !dict[s[i]-'a']{
            dict[s[i]-'a']=true
            ps++
        }
        
        rightps[i]=ps
    }
    
    result := 0
    for i:=0;i<n-1;i++{
        if leftps[i] == rightps[i+1]{
            result++
        }
    }
    return result
}
```