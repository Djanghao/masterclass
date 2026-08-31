# ✅✅ Beats 100% || RUBY || Easy to understand || 🔥🔥 || 698. Partition to K Equal Sum Subsets

**Author:** poojalmokariya
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/3908575/](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/3908575/)

---

# Approach
- Recursion & Backtracking

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Boolean}
def can_partition_k_subsets(nums, k)
    n = nums.length
    alreadyPiked = Array.new(n, 0)
    sum = 0
    for i in 0...n
        sum += nums[i]
    end
    return false if sum%k != 0
    reqSum=sum/k
    i = 0
    bucketNum = 1
    buckerSum = 0
    
    help(i,bucketNum,buckerSum,reqSum,k,nums,alreadyPiked)
end
def help(i, bucketNum, buckerSum, reqSum, k, nums, alreadyPiked)
    if buckerSum == reqSum
        i = 0
        bucketNum += 1
        buckerSum = 0
        return help(i, bucketNum, buckerSum, reqSum, k, nums, alreadyPiked)
    end
    return false if (buckerSum > reqSum)
    return false if (i >= nums.length)
    return true if (bucketNum == k+1)
    if (alreadyPiked[i] == 1)
        help(i+1, bucketNum, buckerSum, reqSum, k, nums, alreadyPiked)
    else
        # pick
        buckerSum += nums[i]
        alreadyPiked[i] = 1
        op1 = help(i+1, bucketNum, buckerSum, reqSum, k, nums, alreadyPiked)

        # skip
        buckerSum -= nums[i]
        alreadyPiked[i] = 0
        op2 = help(i+1, bucketNum, buckerSum, reqSum, k, nums, alreadyPiked)

        return op1 | op2
    end
end
```