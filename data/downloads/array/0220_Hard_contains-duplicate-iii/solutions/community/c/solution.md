# [C++] O(N) time complexity | Explained | Buckets | O(K) space complexity

**Author:** lllllll2
**Votes:** 418
**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solutions/824578/](https://leetcode.com/problems/contains-duplicate-iii/solutions/824578/)

---

**Explanation**

We use the concept of sliding window and buckets together to achieve an optimal solution with O(N) time complexity.

Sliding window ensures only those indices are considered whose the absolute difference is at most k. We only consider k indices at a time. This fulfills the second condition.

Buckets are used to ensure that the absolute difference between two numbers is at most t. Let's take a deeper look at them.
We (floor) divide each number by t+1 and put it in a bucket with key as the quotient.
For example,

```
[1,5,2,4,3,9,1,5,9], k = 2, t = 3

1 // (3+1) = 0
5 // (3+1) = 1
2 // (3+1) = 0
4 // (3+1) = 1
3 // (3+1) = 0
9 // (3+1) = 2

Here, Bucket[0] will contain numbers 0,1,2,3.
Bucket[1] will contain numbers 4,5,6,7.
Bucket[2] will contain numbers 8,9,10,11.

On observing carefully, we can see that the absolute difference
between any two numbers in any bucket is at most t, which is what we want.

Also, there can be a case where the neighbouring bucket has some number
whose absolute difference with a number in the current bucket is at most t.
For instance, 2 lies in Bucket[0] and 4 lies in Bucket[1] and 4 - 2 = 2 < 3 (=t).
This can only happen in neighbouring buckets. Therefore, we need to check for this too.
```

**Code**

```
class Solution {
public:
    bool containsNearbyAlmostDuplicate(vector<int>& nums, int k, int t) {
        int n = nums.size();
        
        if(n == 0 || k < 0  || t < 0) return false;
        
        unordered_map<int,int> buckets;
        
        for(int i=0; i<n; ++i) {
            int bucket = nums[i] / ((long)t + 1);
            
			// For negative numbers, we need to decrement bucket by 1
			// to ensure floor division.
			// For example, -1/2 = 0 but -1 should be put in Bucket[-1].
			// Therefore, decrement by 1.
            if(nums[i] < 0) --bucket;
            
            if(buckets.find(bucket) != buckets.end()) return true;
            else {
                buckets[bucket] = nums[i];
                if(buckets.find(bucket-1) != buckets.end() && (long) nums[i] - buckets[bucket-1] <= t) return true;
                if(buckets.find(bucket+1) != buckets.end() && (long) buckets[bucket+1] - nums[i] <= t) return true;
                
                if(buckets.size() > k) {
                    int key_to_remove = nums[i-k] / ((long)t + 1);
                    
                    if(nums[i-k] < 0) --key_to_remove;
                    
                    buckets.erase(key_to_remove);
                }
            }
        }
        
        return false;
    }
};
```

If you have any questions, feel free to ask. If you like the solution and explanation, please **Upvote** to help others!
Have a great day!
