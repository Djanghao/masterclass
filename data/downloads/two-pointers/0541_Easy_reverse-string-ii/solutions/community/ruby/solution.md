# Ruby solution.

**Author:** user9697N
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/537377/](https://leetcode.com/problems/reverse-string-ii/solutions/537377/)

---

![displaing what reverse in leetcode: 541. Split on 2 * k elements, and reverse each first k in a chank](./images/0.png)

```Ruby
# 541. Reverse String II
# https://leetcode.com/problems/reverse-string-ii/submissions/
# @param {String} s
# @param {Integer} k
# @return {String}
def reverse_str(s, k)
    arr = s.chars
    arr.each_slice(2*k)
    .map{|x|
        if x.size == 2*k
            x[0...k].reverse + x[k..-1]
        elsif x.size >= k
            x[0...k].reverse + x[k..-1]
        else
            x.reverse
        end
    }.flatten.join
    
end
```