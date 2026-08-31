# [Java/Python3] || Explanation + Code || Brute Force & Optimized Approach || Bukcet Sort🔥

**Author:** Anirban_Pramanik10
**Votes:** 15
**Link:** [https://leetcode.com/problems/maximum-gap/solutions/3908856/](https://leetcode.com/problems/maximum-gap/solutions/3908856/)

---

# Brute Force
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Just sort the array and check the pair of two adjacent elements having the maximum gap in the array.
# Approach
<!-- Describe your approach to solving the problem. -->
Step 1: Sort the array
Step 2: Traverse the loop in the reverse order and compare the difference between the last and its previous element.
Step 3: Replace the value max if value exceeds.
Step 4: Return the max difference.
# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code


```Java []
class Solution {
    public int maximumGap(int[] nums) {
        if(nums.length < 2)return 0;
        Arrays.sort(nums);
        int maxDiff = 0;
        for(int i=0;i<nums.length-1;i++){
            maxDiff = Math.max(maxDiff, nums[i+1] - nums[i]);
        }
        return maxDiff;
    }
}
```
```python3 []
class Solution:
    def maximumGap(self, nums):
        if len(nums) < 2:
            return 0
    
        nums.sort()
        maxDiff = 0

        for i in range(1, len(nums)):
            maxDiff = max(maxDiff, nums[i] - nums[i - 1])
    
        return maxDiff
```

---
# Optimized Approach

# Approach
<!-- Describe your approach to solving the problem. -->
For finding maximum gap we are making bucket for putting middle n-2 elements and bucket size will be n-1 means (smallest and largest elements are to be avoided) means there will be one bucket that will be empty so that previous max and next mix elements of bucket will give the max difference. For doing so we make the bucket of `size n-1` for both storing max and min element in the bucket and bucket will contain and bucket will store `(max-min)/n-1` range of elements . Now we start putting elements in bucket so for checking in which index we have to put that element we find `(x-min)/avg` and avg is `(max-min)/n-1` so we get the index and we fill max and min buckets with this elements . Now we simply take difference between max of one bucket and min of next bucket. 
# Complexity
- Time complexity:` O(n)`, where n is the length of the input array.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(n)`, because we are using an array to store the buckets. However, we can reduce the space complexity to `O(1) `by using a linked list instead of an array to store the buckets.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code


```Java []
class Solution {
    public int maximumGap(int[] nums) {
        if(nums.length < 2)
            return 0;
        int n = nums.length;
        int max = nums[0], min= nums[0];
        for(int i  : nums) {
            max = Math.max(max, i);
            min = Math.min(min, i);
        }
        int bucketSize = (max - min)/(n - 1);
        if(bucketSize == 0)
            bucketSize++;
        int totalBuckets = ((max - min)/bucketSize) + 1;
        int[] minBucket = new int[totalBuckets];
        int[] maxBucket = new int[totalBuckets];
        Arrays.fill(minBucket, Integer.MAX_VALUE);
        for(int i = 0 ; i < n ; i++) {
            int index = (nums[i] - min)/bucketSize;
            minBucket[index] = Math.min(minBucket[index], nums[i]);
            maxBucket[index] = Math.max(maxBucket[index], nums[i]);
        }
        int prevMax = maxBucket[0], result = 0;
        for(int i = 1; i < totalBuckets; i++) {
            if(minBucket[i] == Integer.MAX_VALUE)
                continue;
            result = Math.max(result, minBucket[i] - prevMax);
            prevMax = maxBucket[i];
        }
        return result;
    }
}
```
```python3 []
class Solution:
    def maximumGap(self, nums: List[int]) -> int:
        n = len(nums)
        if n < 2:
            return 0
        
        # compute the maximum and minimum values
        max_value, min_value = max(nums), min(nums)
        
        # compute the size of each bucket
        bucket_size = max(1, (max_value - min_value) // (n - 1))
        
        # compute the number of buckets
        num_buckets = (max_value - min_value) // bucket_size + 1
        
        # initialize the buckets with maximum and minimum values
        buckets = [[float('inf'), float('-inf')] for _ in range(num_buckets)]
        for num in nums:
            bucket_index = (num - min_value) // bucket_size
            buckets[bucket_index][0] = min(buckets[bucket_index][0], num)
            buckets[bucket_index][1] = max(buckets[bucket_index][1], num)
        
        # compute the maximum difference
        max_diff = 0
        prev_max = buckets[0][1]
        for i in range(1, num_buckets):
            if buckets[i][0] == float('inf'):
                continue
            max_diff = max(max_diff, buckets[i][0] - prev_max)
            prev_max = buckets[i][1]
        
        return max_diff
```


