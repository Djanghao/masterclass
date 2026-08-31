# Ruby solution: Array#count inside an Array#map block.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/800734/](https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/800734/)

---

#### Leetcode: 1170. Compare Strings by Frequency of the Smallest Character.

It this task need to map a queries array, and for each query calculate how many times f(query) less then f(word). In general solution is two loop where external iterate over queries, and internal iterates over words and counts when word is "less then" query. 

To implement function f, need to find smallest character and count amount of this character. It could not be found faster then O(n), and that's why this method could be described in concise coding way calling count. Because with count function requires 2 iterates over array, and with creating histogram 1 iteration over it, both of them are O(n).


Ruby code:
```Ruby
# Leetcode: 1170. Compare Strings by Frequency of the Smallest Character.
# https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/
# Runtime: 444 ms, faster than 70.00% of Ruby online submissions for Compare Strings by Frequency of the Smallest Character.
# Memory Usage: 9.8 MB, less than 80.00% of Ruby online submissions for Compare Strings by Frequency of the Smallest Character.
# @param {String[]} queries
# @param {String[]} words
# @return {Integer[]}
def num_smaller_by_frequency(queries, words)
    f = ->x{ x.count(x.chars.min)}
    words.map!(&f)
    queries.map{|x| query = f[x]; words.count{|word| query < word}}
end
```