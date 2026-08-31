# Priority Queue

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/4542417/](https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/4542417/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def k_big_indices(nums, k)
    pq1 = Array.new  
    n = nums.length 
    indexes_arr = Array.new(n, false)     

    for i in (0...nums.length) do 
        indexes_arr[i] = true if pq1.size >= k and nums[i] > pq1.last 
        index = pq1.bsearch_index{|x| x > nums[i]} || pq1.size 
        pq1.insert(index, nums[i])        
        pq1.pop if pq1.size > k 
    end 
    
    pq2 = Array.new
    count = 0 

    for i in ((n-1).downto(0)) do 
        count += 1 if pq2.size >= k  and nums[i] > pq2.last  and indexes_arr[i] 
        index = pq2.bsearch_index{|x| x > nums[i]} || pq2.size 
        pq2.insert(index, nums[i])        
        pq2.pop if pq2.size > k 
    end 

    count 
end
```