# Golang | O(n)

**Author:** Rajashree1
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/4271099/](https://leetcode.com/problems/next-palindrome-using-same-digits/solutions/4271099/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func nextPalindrome(num string) string {
    base:=[]byte(num[:len(num)/2])
    desc:=true
    for i:=1;i<len(base);i++{
        if base[i-1]<base[i]{
            desc=false
            break
        }
    }
    if desc{return ""}

    i:=len(base)-1
    for ;i>0;i--{
        if base[i-1]<base[i]{
            break
        }
    }

    replacement:=i
    for j:=i;j<len(base);j++{
        if base[j]>base[i-1] && base[j]<base[replacement]{
            replacement=j
        }
    }

    base[i-1],base[replacement]=base[replacement],base[i-1]

    sort.Slice(base[i:], func(x,y int)bool{
        return base[i+x]<base[i+y]
    })
    res:=string(base)
    if len(num)%2!=0{
        res+=string(num[len(num)/2])        
    }
    for j:=0;j<len(base);j++{
        res+=string(base[len(base)-1-j])
    }
    return res
}

```