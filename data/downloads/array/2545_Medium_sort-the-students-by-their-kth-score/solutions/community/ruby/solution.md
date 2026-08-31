# Ruby solution

**Author:** RajalakshmiMadavan
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/5350052/](https://leetcode.com/problems/sort-the-students-by-their-kth-score/solutions/5350052/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Take the k indexed elements and sort it in non decreasing order. Based on sorted elements, refer to the input arr and construct the solution.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[][]} score
# @param {Integer} k
# @return {Integer[][]}
def sort_the_students(score, k)
   res = []
   ans = []
    score.each do |a|
     res << a[k]
    end 
    reversed = res.sort.reverse
    reversed.each do |r|
      ans << score[res.index(r)]
    end
    ans
end
```