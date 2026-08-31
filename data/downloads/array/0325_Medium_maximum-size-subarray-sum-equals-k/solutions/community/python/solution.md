# O(n) clean short Java/Python solution with HashMap (with code comments)

**Author:** deleted_user
**Votes:** 395
**Link:** [https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/77784/](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/77784/)

---

**Java:**
```
    public int maxSubArrayLen(int[] nums, int k) {
        int currSum = 0, maxLen = 0; // set initial values for cumulative sum and max length sum to k
        HashMap<Integer, Integer> sumToIndexMap = new HashMap<Integer, Integer>(); // key: cumulative sum until index i, value: i
        for (int i = 0; i < nums.length; i++) {
            currSum = currSum + nums[i]; // update cumulative sum
            
            // two cases where we can update maxLen
            if (currSum == k) maxLen = i + 1; // case 1: cumulative sum is k, update maxLen for sure
            else if (sumToIndexMap.containsKey(currSum - k)) maxLen = Math.max(maxLen, i - sumToIndexMap.get(currSum - k)); // case 2: cumulative sum is more than k, but we can truncate a prefix of the array
            
            // store cumulative sum in map, only if it is not seen
            // because only the earlier (thus shorter) subarray is valuable, when we want to get the maxLen after truncation
            if (!sumToIndexMap.containsKey(currSum)) sumToIndexMap.put(currSum, i);
        }
        return maxLen;
    }
```

The HashMap stores the sum of all elements from the beginning until index i as key, and i as value. For each i, check not only the current sum but also (currentSum - previousSum) to see if there is any that equals k, and update max length.

PS: An "else" is added. Thanks to beckychiu1988 for comment.

**Same approach in Python:**

    def maxSubArrayLen(self, nums: List[int], k: int) -> int:
        sum_to_index_mapping = {} # key: cumulative sum until index i, value: i
        curr_sum = max_len = 0 # set initial values for cumulative sum and max length sum to k
        for i in range(len(nums)):
            curr_sum += nums[i] # update cumulative sum
            
            # two cases where we can update max_len
            if curr_sum == k:
                max_len = max(max_len, i + 1) # case 1: cumulative sum is k, update max_len for sure
            elif curr_sum - k in sum_to_index_mapping:
                max_len = max(max_len, i - sum_to_index_mapping[curr_sum - k]) # case 2: cumulative sum is different from k, but we can truncate a prefix of the array
                
            # store cumulative sum in dictionary, only if it is not seen
            # because only the earlier (thus shorter) subarray is valuable, when we want to get the max_len after truncation
            if curr_sum not in sum_to_index_mapping:
                sum_to_index_mapping[curr_sum] = i
        return max_len
		


		
