# Backtracking

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/4872106/](https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/solutions/4872106/)

---


# Code
```
# @param {Integer} n
# @param {Integer} k
# @return {String}
def get_happy_string(n, k)
    @chars = ["a", "b", "c"]
    if n == 1
        if k < 4
            return @chars[k-1]
        else
            return ""
        end
    end
    @ans = []
    @n = n
    backtrack 

    if @ans[k-1]
        return @ans[k-1]   
    else
        ""
    end    
end

def backtrack s = [], i = 0
    if s.size == @n
        @ans << s.join
        return
    end

    while i < @chars.size
        if s.size == 0 || (s.size > 0 and s[-1] != @chars[i])
            # do
            s << @chars[i]
            
            backtrack s

            # undo
            s.pop
        end


        i += 1
    end



end

```