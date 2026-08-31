# Ruby – fast one liner

**Author:** alanparmenter
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/3925803/](https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/3925803/)

---

# Intuition
`sort_by`, conversion to binary string; `count`, of the '1' character 

# Approach
`sort_by` gets us as far as dealing with different counts. For the same counts, pre-sort with `sort` gives less sorting for `sort_by` to do, and a relatively fast solution, within the usual O(nlogn) of Ruby's quicksort

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n)

# Code
```
# @param {Integer[]} arr
# @return {Integer[]}
def sort_by_bits(arr)
  arr.sort.sort_by{|a| a.to_s(2).count('1')}
end
```