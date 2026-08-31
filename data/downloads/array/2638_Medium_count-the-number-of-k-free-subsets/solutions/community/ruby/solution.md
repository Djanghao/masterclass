# Sort, Fibonacci

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/4583924/](https://leetcode.com/problems/count-the-number-of-k-free-subsets/solutions/4583924/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
    consider the example [2,3,5,8], k = 5
    it can be written as 
    [2] -> [], [2] -> 2 sets
    3 -> 8 -> [3], [], [8] -> 3 sets not [3, 8]    
    5 -> [], [5] =>  2 sets
    Now that means for each 1 element group answer is 2 
    for 2 element answer is 3
    Another example [4,5,6], k-> 1
    4 -> 5 -> 6
    #[4], [5], [6], [], [4, 6] -> 5
    When we have 0 elements then answer is 1 []
    so dp[0] => 1, dp[1] => 2, dp[2] => 3, dp[3] => 5
    dp[2] = dp[1]+dp[0]
    dp[3] = dp[2]+dp[1]
    for each element we need size and grouping 
    dp[i] = d[i-1]+dp[i-2] fibonacci

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
def count_the_num_of_k_free_subsets(nums, k)
    # consider the example [2,3,5,8], k = 5
    # it can be written as 
    # [2] -> [], [2] -> 2 sets
    # 3 -> 8 -> [3], [], [8] -> 3 sets not [3, 8]    
    # 5 -> [], [5] =>  2 sets
    # Now that means for each 1 element group answer is 2 
    # for 2 element answer is 3
    # Another example [4,5,6], k-> 1
    # 4 -> 5 -> 6
    # #[4], [5], [6], [], [4, 6] -> 5
    # When we have 0 elements then answer is 1 []
    # so dp[0] => 1, dp[1] => 2, dp[2] => 3, dp[3] => 5
    # dp[2] = dp[1]+dp[0]
    # dp[3] = dp[2]+dp[1]
    # for each element we need size and grouping 
    # dp[i] = d[i-1]+dp[i-2] fibonacci
    nums.sort! 
    nums_hash = Hash.new(0)

    nums.each do |num|
        if nums_hash.has_key?(num-k)
            size = nums_hash[num-k]
            nums_hash.delete(num-k)
        else
            size = 0 
        end 
        nums_hash[num] = size+1
    end 

    res = 1 
    nums_hash.values.each do |val|
        res *= (fibo(val+2))
    end 
    
    res 
end

def fibo(n)
    return 0 if n == 0
    return 1 if n <= 2

    memo = Hash.new 
    memo[0] = 0 
    memo[1] = 1
    memo[2] = 1 
    for i in (3..n) do 
        memo[i] = memo[i-1]+memo[i-2]
    end 

    memo[n]
end 
```