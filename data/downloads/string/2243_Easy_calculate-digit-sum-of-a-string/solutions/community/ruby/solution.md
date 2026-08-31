# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 1
**Link:** [https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/3065754/](https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/3065754/)

---

```
# @param {String} s
# @param {Integer} k
# @return {String}
def digit_sum(s, k)
    while s.size > k
        arr = []
        i = 0
        while i < s.size
            sum = 0
            s[i...(i + k)].each_char { |c| sum += c.to_i }
            arr.push(sum.to_s)
            i += k
        end
        s.replace(arr.join)
    end
    
    s
end
```