# #Sorting #Hashmap

**Author:** pratik1707
**Votes:** 1
**Link:** [https://leetcode.com/problems/arithmetic-subarrays/solutions/4321452/](https://leetcode.com/problems/arithmetic-subarrays/solutions/4321452/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. --> 
To check if the arr range is arithmetic there are 2 ways :
sort and check (i+1)-(i) return false if not match
take the max and min , subtract them and divide by n-1
Now this will give the difference that should match if it is arithmetic.
If this diff is decimal then return false
else, add diff to min, if it is present for every num in hash then return true 
else return false. 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(m*n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @param {Integer[]} l
# @param {Integer[]} r
# @return {Boolean[]}
def check_arithmetic_subarrays(nums, l, r)
    m = l.length

    res = []

    for i in (0...m) do 
        # to check if the arr range is arithmetic there are 2 ways :
        # sort and check (i+1)-(i) return false if not match
        # take the max and min , subtract them and divide by n-1
        # Now this will give the difference that should match if it is arithmetic.
        # If this diff is decimal then return false
        # else, add diff to min, if it is present for every num in hash then return true 
        # else return false. 
        res << check_if_arithmetic(nums[l[i]..r[i]])
    end 

    res 
end

def check_if_arithmetic(arr)
    max = arr.max
    min = arr.min 

    diff = (max-min).to_f/(arr.length-1).to_f

    return false if diff%1 != 0 

    diff = diff.to_i

    hash = Hash.new

    for i in (0...arr.length) do 
        hash[arr[i]] = i
    end 

    curr = min+diff     

    while(curr < max) do 
        return false if !hash.has_key?(curr)
        curr = curr+diff
    end 

    return true 
    # arr.sort!

    # diff = arr[1]-arr[0]

    # for i in (1...arr.length-1) do 
    #     return false if (arr[i+1]-arr[i] != diff )
    # end 

    # return true 
end 
```