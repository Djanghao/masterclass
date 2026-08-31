# Clean and fast with the union operator

**Author:** johnedmundrose
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/solutions/3808302/](https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/solutions/3808302/)

---

# Intuition
Initially, I created a histogram to count the occurences of each numbers. If a number occurs `arrays.length` times, then we know it's part of the longest common subsequence.

# Approach
The histogram approach described above works, but a little experimentation shows that using Ruby's built-in `Array#&` (union) operator is faster. This is because, like much of Ruby's standard library, this operator is implemented in C which we can verify by looking in `array.c`. We use this operator to find the union of all the `arrays`.

# Code
```
# @param {Integer[][]} arrays
# @return {Integer[]}
def longest_common_subsequence(arrays)
    result = nil
    arrays.each_with_index do |array, index|
      result = index.zero? ? array : (result & array)

      # optimization - return early if possible
      return result if result.none?
    end
    result
end
```