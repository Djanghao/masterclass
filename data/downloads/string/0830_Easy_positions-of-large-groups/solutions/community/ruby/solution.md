# Ruby solution. Method chaining, using map.with_index and Enumerable#chunk_while.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/positions-of-large-groups/solutions/672067/](https://leetcode.com/problems/positions-of-large-groups/solutions/672067/)

---

#### Leetcode: 830. Positions of Large Groups.


Convert string to array of chars, map this array into array of value-index paris. Use Ruby chunk_while method to get array of **consecutive** same symbols (consecutive queue of particular symbol). Select from these arrays ones that have at least 3 elements size. Map this arrays into pairs extracting indices of first and last elements. 

Ruby code:
```Ruby
# Leetcode: 830. Positions of Large Groups.
# https://leetcode.com/problems/positions-of-large-groups/
# Runtime: 48 ms, faster than 14.29% of Ruby online submissions for Positions of Large Groups.
# Memory Usage: 9.4 MB, less than 7.14% of Ruby online submissions for Positions of Large Groups.
# @param {String} s
# @return {Integer[][]}
def large_group_positions(s)
    s.chars.map.with_index{|x,i| [x,i] }
    .chunk_while{|a,b| a[0] == b[0]}
    .select{|x| x.size > 2}
    .map{|x| [x.first[1],x.last[1]]}
end
```