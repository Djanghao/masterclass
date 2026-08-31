# Sorted List

**Author:** aeoluseros
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-increasing-quadruplets/solutions/3850875/](https://leetcode.com/problems/count-increasing-quadruplets/solutions/3850875/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
C# version of this sorted list solution:
https://leetcode.com/problems/count-increasing-quadruplets/solutions/3111696/python3-sortedlist-bisect-insort-solution-clean-concise/

# Approach
<!-- Describe your approach to solving the problem. -->
Explanations are added inline. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^{2}logn)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
    public long CountQuadruplets(int[] nums) {
        long ans = 0;
        List<int> sl = new List<int>(){ nums[0] };

        // For each current element nums[j] (maintained using a for loop from left to right), 
        // we loop through the possible value of nums[k] from right to left, and count
        // (1) how many element on the left of j that satisfies nums[k] > nums[i], this 
        //     can be achieved using a binary search;
        // (2) how many element on the right of k has the value nums[l] > nums[j], this 
        //     can be achieved by comparing the value of nums[k] with nums[j] each time;
        // and add the product from (1) and (2) to the final ans.
        for(int j = 1; j < nums.Length; j++){
            var idx = sl.BinarySearch(nums[j]);
            if(idx < 0) idx = ~idx;
            sl.Insert(idx, nums[j]);

            // The variable cnt is being used to keep track of how many elements that appear 
            // after nums[j] in the array are greater than nums[j]
            int cnt = nums[j] < nums[^1] ? 1 : 0; 
            // loop backwards is first do cnt++, then do idx * cnt
            // loop forwards is first do idx * cnt, then do cnt++
            // when looping backward, cnt accumulates counts of numbers greater than nums[j] 
            // that we've already encountered, and applies that count to the calculation for 
            // smaller nums[k]'s.
            // When looping forward, cnt is incremented after the calculation for each nums[k], 
            // so it doesn't apply to that nums[k]'s calculation but will apply to the next 
            // larger nums[k]'s calculation.
            for (int k = nums.Length - 2; k > j; k--){
                // The check nums[j] < nums[k] is there to increment cnt each time we 
                // encounter an element that's greater than nums[j] while iterating over the array.
                // if all elements after j are larger than nums[j], ans will be 0.
                if(nums[j] < nums[k]) {   // this k is actually l. 
                    cnt++;
                    continue;
                }
                // after we find an appropriate number k, we use binary search to
                // check how many number is smaller than k. 
                idx = sl.BinarySearch(nums[k]);  
                if(idx < 0) idx = ~idx;
                ans += idx * cnt;     // when j is at current position, how many ans do we have.
            }
        }

        return ans;
    }
}
```