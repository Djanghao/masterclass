# Sliding Window

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/4410006/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/4410006/)

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
# @param {Integer[]} data
# @return {Integer}
def min_swaps(data)
    
    n = data.length
    ones = data.sum 
    i = 0 
    j = 0 
    count_1 = 0 
    count_0 = Float::INFINITY
    min = Float::INFINITY
    while(j < n) do 
        count_1 += 1 if data[j] == 1            
         
        if (j-i)+1 == ones
            count_0 = ones-count_1
            min = [count_0, min].min 
            #p min 
            count_1 -= 1 if data[i] == 1
            i += 1
        end 
        
        j += 1
    end 

    min == Float::INFINITY  ? 0 : min 
end


#{1 => [0,2,4], 0 => [1, 3] }
```