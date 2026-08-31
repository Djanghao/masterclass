# DP & Binary Search Explained | 100 | Split Array Comparison

**Author:** harpreetsaini19
**Votes:** 2
**Link:** [https://leetcode.com/problems/divide-chocolate/solutions/756501/](https://leetcode.com/problems/divide-chocolate/solutions/756501/)

---

This problem can be related closely with 
https://leetcode.com/problems/split-array-largest-sum/

But there is one key difference between the 2, which is slightly changing the approach
* In `Split Array` we are **Minimizing the Maximum**, but here we are **Maximizing the Minimum**.
* For better understanding go to comment in `is_valid`  function.
```
#         In Split array, we want a partition size should be max possible as guessed
#         But here we want a partition size to be minimum possible as guessed, so can be just surpassed.

#         For example, [1,2,3,4,5,6,7,8,9] and guess = 8, then when sum = 1+2+3 = 6 if you add 4, 
#         you get sum = 10, now if you reset sum = 4 then previous bucket will get 6 sweetness. 
#         But your goal was to get minimum of 8 sweetness. so you add 4 to current bucket and then start a new bucket.
```

**Binary Search approach (NLogN)**

```
def maximize_sweetness(sweetness, k)
#     In total there are K + 1 partition
    k = k + 1
    min = 1 << 31
    max = 0
	# Get possible range [min, max]
    sweetness.each do|num|
        max += num
        min = [min, num].min
    end
	# applying binary search
    while min <= max
        guess_min_total_sweetness = (min + max)/2
        if is_valid(sweetness, k, guess_min_total_sweetness)
            max = guess_min_total_sweetness - 1
        else
            min = guess_min_total_sweetness + 1
        end
    end
    return max
end

def is_valid(sweetness, k, guess)
    curr_min = 0
#   At minimum, there is 1 partition 
    min_k = 1
    sweetness.each do|num|
#         TRICK to understand (difference from split Array)
#         In Split array, we want a partition size should be max possible as guessed
#         But here we want a partition size to be minimum possible as guessed, so can be just surpassed.

#         For example, [1,2,3,4,5,6,7,8,9] and guess = 8, then when sum = 1+2+3 = 6 if you add 4, 
#         you get sum = 10, now if you reset sum = 4 then previous bucket will get 6 sweetness. 
#         But your goal was to get minimum of 8 sweetness. so you add 4 to current bucket and then start a new bucket.
        if curr_min + num >= guess
            min_k += 1
            curr_min = 0
            return false if min_k > k
        else
            curr_min += num
        end
    end
    return true 
end


```

**DP Approach (N*K) (TLE)**

```
def maximize_sweetness(sweetness, k)
    cumulative_sum_arr = Array.new(0)
    cumulative_sum_arr[0] = sweetness[0]
    i = 1
    while i < sweetness.length
       cumulative_sum_arr[i] = sweetness[i] + cumulative_sum_arr[i - 1]
        i += 1
    end
   
    dp = Array.new(sweetness.length, 0)
	# subarray of size k + 2 is required bcs at max there are k + 1 partitions
    dp.each_with_index{|ele, idx| dp[idx] = Array.new(k + 2, 0)}
    
    return maximize_sweetness_helper(sweetness, k + 1, sweetness.length - 1, cumulative_sim_arr, dp)
end

def maximize_sweetness_helper(sweetness, k, n, cumulative_sum, dp) 
    if n == 0 && k > 1
        return -1
    elsif k == 1 || n == 0
        return cumulative_sum[n]
    end
    
    return dp[n][k] if dp[n][k] != 0
    
    best = 0
    for i in 0..(n-1) do
        best = [best,
                [maximize_sweetness_helper(sweetness, k - 1, i, cumulative_sum, dp), 
                (cumulative_sum[n] - cumulative_sum[i])].min].max
    end
    
    dp[n][k] = best
    return best
end
```