# Java | 6ms O(n) Time + Space | Arrays Only

**Author:** Spacefroyo
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/3066942/](https://leetcode.com/problems/maximum-segment-sum-after-removals/solutions/3066942/)

---

# Intuition 
<!-- Describe your first thoughts on how to solve this problem. --> Instead of removing elements one by one from the complete set, iterate backwards through removeQueries and start building the segments element by element. 
 
# Approach 
For each element that is either the start or end of a segment, record two things:
 - The other end of the segment ```other[]```
 - The sum of the segment ```sums[]```

Whenever a new element is added, it will create a new segment:
- If the recorded sum of the element on the left is nonzero, the left end of our new segment will be ```other[left]```
- Otherwise, the left end will be the added element
- Use the same method to find the right end of the new segment
- The sum of the new segment will be ```sums[left] + sums[right] + (the value of the added element)```
- Compare that sum with a running max to keep track of the sum of the largest segment

# Complexity 
- Time complexity: $$O(n)$$  
- Space complexity: $$O(n)$$

# Code
```
class Solution {
    public long[] maximumSegmentSum(int[] nums, int[] removeQueries) {
        long[] sums = new long[nums.length+2];
        int[] other = new int[nums.length+2];

        long max = 0;
        long[] ans = new long[removeQueries.length];
        for (int i = removeQueries.length-1; i > -1; --i) {
            int now = removeQueries[i];
            int left = sums[now] == 0 ? now+1 : other[now];
            int right = sums[now+2] == 0 ? now+1 : other[now+2];
            other[left] = right;
            other[right] = left;

            long sum = sums[left]+sums[right]+nums[now];
            sums[left] = sums[right] = sum;

            ans[i] = max;
            max = Math.max(max, sum);
        }
        return ans;
    }
}
```