# Ruby: N-2 loop's iterations.

**Author:** user9697N
**Votes:** 4
**Link:** [https://leetcode.com/problems/n-th-tribonacci-number/solutions/1483567/](https://leetcode.com/problems/n-th-tribonacci-number/solutions/1483567/)

---

## Leetcode: 1137. N-th Tribonacci Number.

**Ruby: N-2 loop's iterations.**

Create a loop were on each iteration calculated new Tribonacci number, first three elements would be returned by hardcoded return.
 
Ruby code:
```Ruby
# Leetcode: 1137. N-th Tribonacci Number.
# https://leetcode.com/problems/n-th-tribonacci-number/
# = = = = = = =
# Accepted.
# Thanks God!
# = = = = = = =
# https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/639/week-4-september-22nd-september-28th/3986/
# @param {Integer} n
# @return {Integer}
def tribonacci(n)
  a,b,c = 0,1,1
  return a if 0 == n
  return b if 1 == n
  return c if 2 == n
  (n-2).times do 
    a,b,c = b,c,a+b+c
  end
  return c
end
```
