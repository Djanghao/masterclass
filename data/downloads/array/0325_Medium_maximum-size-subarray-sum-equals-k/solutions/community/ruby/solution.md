# prefix sum

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/4074101/](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/4074101/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
  [1,-1,5,-2,3]
    prefix sum => [1, (-1+1=0), (5+0=5), (5+-2=3), (3+3=6)] => [1,0,5,3,6]
    value of the current index + sum till last index
    Once we have the prefix sum it can be used to find the subarray
    for [0,1,2,3,4,5,6,7] => [0,1,3,6,10,15,21,28]
    So 21-3 = 18 => index(6)-index(2) => sum of subarray(3..6) (3+4+5+6)
    Using this concept , we can get maximum subarray using a concept similar to 2 sum. 
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def max_sub_array_len(nums, k)
    # [1,-1,5,-2,3]
    # prefix sum => [1, (-1+1=0), (5+0=5), (5+-2=3), (3+3=6)] => [1,0,5,3,6]
    # value of the current index + sum till last index
    # Once we have the prefix sum it can be used to find the subarray
    # for [0,1,2,3,4,5,6,7] => [0,1,3,6,10,15,21,28]
    # So 21-3 = 18 => index(6)-index(2) => sum of subarray(3..6) (3+4+5+6)
    # Using this concept , we can get maximum subarray using a concept similar to 2 sum. 
    
    max = 0 
    i = 0 
    j = 0 
    prefix_sum = []
    sum = 0 

    for num in nums do 
        sum +=num
        prefix_sum << sum 
    end 

    j = prefix_sum.length-1 

    while(j >=0) do 
        if prefix_sum[j] == k
            max = [max,j+1].max 
        end 
        j -= 1
    end 

    hash = Hash.new 

   prefix_sum.each_with_index do |num, i|
        if hash.has_key?(num)
            max = [max, i-(hash[num])].max
        else
            if hash.has_key?(num+k)
                hash[num+k] = [i, hash[num+k]].min
            else
                hash[num+k] = i
            end             
        end 
   end 

   max 
end
```