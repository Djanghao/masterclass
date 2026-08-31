# Ruby - T: O(m * n + maxprefix - minprefix), S: O(distinctprefix) 100% 100%

**Author:** hoangphanbk10
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/2608878/](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/solutions/2608878/)

---

```
# @param {Integer[][]} matrix
# @param {Integer} k
# @return {Integer}
def kth_largest_value(matrix, k)
  vals = {}
  m = matrix.size
  n = matrix[0].size

  0.upto(m - 1) do |i|
    pref = 0
  
    0.upto(n - 1) do |j|
      pref ^= matrix[i][j]
      matrix[i][j] = pref
    end
  end

  0.upto(n - 1) do |j|
    pref = 0

    0.upto(m - 1) do |i|
      pref ^= matrix[i][j]
      vals[pref] = vals[pref].to_i + 1
    end
  end

  min, max = vals.keys.minmax

  k -= 1

  max.downto(min) do |i|
    freq = vals[i].to_i
    if k < freq
      return i
    else
      k -= freq
    end
  end

  min
end