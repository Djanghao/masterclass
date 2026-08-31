# Ruby solution in 8 lines for String to Integer(atoi)

**Author:** guoqiang2
**Votes:** 3
**Link:** [https://leetcode.com/problems/string-to-integer-atoi/solutions/4758/](https://leetcode.com/problems/string-to-integer-atoi/solutions/4758/)

---

Ruby solution in 8 lines:
```
# @param {String} str
# @return {Integer}
def my_atoi(str)
    arr = str.strip.split(/\\s+/)
    if arr[0] =~ /^([+-]?[0-9]+)/
        i = $1.to_i
        return i >= 0 ? [2147483647, i].min : [-2147483648, i].max
    end
   0
end
```