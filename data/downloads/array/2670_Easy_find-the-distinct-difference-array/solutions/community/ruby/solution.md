# O(n) postfix solution + brute force O(n^2) solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-distinct-difference-array/solutions/5141218/](https://leetcode.com/problems/find-the-distinct-difference-array/solutions/5141218/)

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
# @param {Integer[]} nums
# @return {Integer[]}
def distinct_difference_array(nums)
    
    answer = []
    
    dist2 = {}
    postfix = []
    j = nums.size - 1
    while j > -1
        dist2[nums[j]] = true
        postfix.unshift dist2.size

        j -= 1
    end
    postfix << 0

    dist1 = {}
    i = 0
    while i < nums.size
        dist1[nums[i]] = true
        j = i + 1
        

        answer << dist1.size - postfix[i + 1]
        i += 1
    end     
    
    answer
end

def brute_force_distinct_difference_array(nums)
    i = 0
    answer = []
    dist1 = {}
    while i < nums.size
        dist1[nums[i]] = true
        j = i + 1
        dist2 = {}
        while j < nums.size
            dist2[nums[j]] = true
            j += 1
        end 
        answer << dist1.size - dist2.size
        i += 1
    end     
    
    answer
end
```