# Ruby

**Author:** leekriston
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/2666284/](https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/2666284/)

---

```
# @param {Integer[]} n1
# @param {Integer[]} n2
# @return {Integer}
def xor_all_nums(n1, n2)
    return 0 if n1.length.even? && n2.length.even?
    b1, b2 = 0, 0
    n1.each {|n| b1 = b1 ^ n}
    n2.each {|n| b2 = b2 ^ n}
    return b1 if n1.length.even? && n2.length.odd?
    return b2 if n2.length.even? && n1.length.odd?
    b1 ^ b2
end

# Time O(n)
# Space O(1)
```