# Ruby Solution, Easy to Read

**Author:** ryp0313
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/1947742/](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/1947742/)

---

```
# @param {String} s
# @return {Boolean}
def is_decomposable(s)
    arr = []
    count = 1
    for i in (1...s.length)
         if s[i] == s[i-1]
             count += 1
         else
             arr.push(count)
             count = 1
         end
    end
    arr.push(count)
    l2 = false
    arr.each do |num|
        if num % 3 == 1
            return false
        elsif num % 3 == 2
            if !l2
                l2 = true
            else
                return false
            end
        end
    end
    return l2
end

```