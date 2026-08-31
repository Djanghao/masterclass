# HashMap

**Author:** pratik1707
**Votes:** 1
**Link:** [https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4388324/](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4388324/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} arr
# @return {Integer}
def find_special_integer(arr)
    freq = Hash.new(0)

    length = arr.length 

    div  = length.to_f/4.to_f 

    for i in (0...arr.length) do 
        freq[arr[i]] += 1
        return arr[i] if freq[arr[i]] > div 
    end 

end
```