# Ruby

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/3617733/](https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/3617733/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} n
# @param {Integer[][]} queries
# @return {Integer}
def matrix_sum_queries(n, queries)  
  sum = 0  
  row_count = 0 
  col_count = 0 
  length = queries.length
  row_seen = Array.new(n)
  col_seen = Array.new(n)
  
  for i in ((length-1).downto(0)) do 
    query = queries[i]

    if query[0] == 0 and !row_seen[query[1]]
        row_count += 1
        sum += (n-col_count)*query[2]
        row_seen[query[1]] = true 
    elsif query[0] == 1 and !col_seen[query[1]]
        col_count += 1
        sum += (n-row_count)*query[2]
        col_seen[query[1]] = true 
    end 

  end 
  
  sum 
  
end 
```