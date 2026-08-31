# Simple go solution

**Author:** ultim8_ninja
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/5775149/](https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/solutions/5775149/)

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
```golang []
func shortestBeautifulSubstring(s string, k int) string {
    l := len(s)
    count:=0
    ans:=""
    
    for i,j:=l-1,l-1;i>=0;i--{
        if s[i]=='1'{
            count++
        }
  
        for i<j&&(count>k || s[j]=='0'){
            if s[j]=='1'{
                count--
            }
            j--
        }

        if count ==k{
            ans = minValue(ans,s[i:j+1])
        }

    }
   
    return ans
}

func minValue(s1,s2 string)string{
    if s1==""{
        return s2
    }
    if len(s1)<len(s2){
        return s1
    }else if len(s1)>len(s2){
        return s2
    }

    for i:=0;i<len(s1);i++{
        if s1[i]-'0'< s2[i]-'0' {
            return s1
        }else if s1[i]-'0'> s2[i]-'0'{
            return s2
        }
    }

    return s1
}
```