# Ruby - T: O(n) S: O(n) 100% 100%

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-arrangement-ii/solutions/2620230/](https://leetcode.com/problems/beautiful-arrangement-ii/solutions/2620230/)

---

```
# @param {Integer} n
# @param {Integer} k
# @return {Integer[]}
def construct_array(n, k)
  result = [1]
  plus = true
  current = 1
  k.downto(1) do |j|
    if plus
      current += j
    else
      current -= j
    end
    result << current    
    plus = !plus
  end

  (k + 2).upto(n) do |i|
    result << i
  end

  result
end