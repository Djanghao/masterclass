# [C++] Detailed explanation and solution for binary search + prefix sum

**Author:** Rafae1
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-average-subarray-ii/solutions/832249/](https://leetcode.com/problems/maximum-average-subarray-ii/solutions/832249/)

---

This is a very great problem and I would share my path to solve this problem in details.
* It is said that the length of subarray can be greater or equal to k, so we can not use sliding window because the size of window is not fixed.
* I can imagine the way to use `O(n^2)` to enumerate all the interval which have length greater than k, and use prefix sum to calculate the average with `O(1)`. Well, this will cause to TLE.
* So if I try to reduce my time complexity to log level, it might be related to binary search. However, is it possible for me to search for average with binary search?

So, here I decide to binary search on our maximum average. In other words, we cannot find any other subarray longer than k and has bigger average. No matter what, our maximum average must greater than the smallest number and less than the largest number in our array. We can use this to squeeze the search space on our maximum average.

1. Initialize the left bound and right bound for our search space.
2. Be careful, this time we will search on number of double level, so the break condition on distance between will be `1e-5` instead of `1`.
3. How to squeeze the search space here? **If there is at least one subarray with size `>=` k having greater average than current average, then we will search for a larger average. If not, we will search for a less average**. My `isLarger()` will be used to check the fact.
4. Thanks to [@KakaHiguain](https://leetcode.com/problems/maximum-average-subarray-ii/discuss/105480/Java-solution-O(nlogM)-Binary-search-the-answer), his formula makes this step much easier and clear. We just need to minus the current average from each numbers, if **there is any subarrays sum up with `>=` 0, it means that subarray has average equal to at least current average**. It becomes a simple problem of prefix sum now :)
5. There are also some tricks in this helper function. The fact that the size of subarray can be greater than k makes the problem more complex. However, let's take a look at the formula of interval sum: `sum[i~j] = prefix_sum[j] - prefix_sum[i - 1]`. if I assume the `prefix_sum[i - 1]` to **be the smallest prefix sum in past. Then we can get the biggest interval sum for** `sum[i~j]`, isn't it? Great, so my second loop will move the right bound of subarray from index k to the end, and update the left prefix sum which is before the current subarray in meanwhile. Each time check whether our updated left prefix sum can be minimum left prefix sum. At the end, if we can not get greater average even with our **biggest interval sum**. We should turn to find less average!
```cpp
public:
    bool isLarger(vector<int>& nums, int k, double mid) {
        // assume cur idx: idx
        // Sum: sum differs from average
        // curPreSum: prefix_sum[idx]
        // leftSum: if window maintains k, leftSum is the prefix_sum[idx - k]
        // minLeftSum: the minimum one beyond leftSum
        double curPreSum = 0, leftSum = 0, minLeftSum = 0;
        
        for(int i = 0; i < k; i++)
            curPreSum += nums[i] - mid;
        if(curPreSum - minLeftSum >= 0) return true;
        
        for(int i = k; i < nums.size(); i++) {
            curPreSum += nums[i] - mid;
            leftSum += nums[i - k] - mid;
            minLeftSum = min(minLeftSum, leftSum);
            
            if(curPreSum - minLeftSum >= 0)
                return true;
        }
        
        return false;
    }
    
    double findMaxAverage(vector<int>& nums, int k) {
        double left, right, mid;
        left = right = double(nums[0]);
        for(int i = 0; i < nums.size(); i++) {
            left = min(left, double(nums[i]));
            right = max(right, double(nums[i]));
        }
        
        while(left + 1e-5 < right) {
            mid = left + (right - left) / 2;
            if(isLarger(nums, k, mid))
                left = mid;
            else
                right = mid;
        }
        
        return left;
    }
```
I have try my best to write down my whole story. Leave any comments if you want :)