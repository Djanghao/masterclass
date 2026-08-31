# Ruby solution

**Author:** Volodymyr_Ch
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/6108257/](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/6108257/)

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
```ruby []
# @param {Integer[][]} mat
# @param {Integer[][]} target
# @return {Boolean}
def find_rotation(mat, target)
  4.times do 
    mat = mat.transpose.map{|x| x.reverse}
    return true if mat == target
  end

  false
end
```