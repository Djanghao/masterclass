# Ruby

**Author:** iamgokulps
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindromic-substrings/solutions/2062314/](https://leetcode.com/problems/palindromic-substrings/solutions/2062314/)

---

```
def count_substrings(s)
    res = s.length
    
    for i in (0...s.length)
        for j in (i+1...s.length)
            temp = s[i..j]
            res += 1 if temp == temp.reverse
        end
    end
    
    res
end
```