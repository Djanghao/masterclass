# Java | Sliding Window | 2 TreeSets

**Author:** recepkucek
**Votes:** 18
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/4600055/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-ii/solutions/4600055/)

---

# Intuition
- Index zero has to be in the solution
- So we need k - 1 lowest nums in the window
- Window size = dist + 1 
# Approach
- Use 2 TreeSet for the window
- One is for currently being used lowest k - 1 nums, another one is for waiting to be used
- Iterate 1 to (n - dist - 1) and update window sum
- Remove left most num(i) from used set or waiting set
- Add right most num(i + dist +1) into the window
# Complexity
- Time complexity:
$$O(nlogn)$$

- Space complexity:
$$O(n)$$

# Code
```
class Solution {
    public long minimumCost(int[] nums, int k, int dist) {
        
        long result = Long.MAX_VALUE, windowSum = 0l;
        int n = nums.length;
        TreeSet<Integer> using = new TreeSet<>((a, b) -> nums[a] == nums[b] ? a - b : nums[a] - nums[b]);
        TreeSet<Integer> waiting = new TreeSet<>((a, b) -> nums[a] == nums[b] ? a - b : nums[a] - nums[b]);
        
        // Add dist + 1 num into the using set
        for(int i = 1; i <= dist + 1; i++){
            using.add(i);
            windowSum += nums[i];
        }
        // We need only k - 1 nums, move others to waiting set because we might need them in the future
        while(using.size() > k - 1){
            int i = using.pollLast();
            windowSum -= nums[i];
            waiting.add(i);
        }
        // windowSum is the sum of k - 1 nums 
        result = Math.min(result, windowSum);
        for(int i = 1; i + dist + 1 < n; i++){
            
            // window slided so add new num to the waiting set
            waiting.add(i + dist + 1);
            
            // i is the left most num in the window, will be removed from window
                
            if(using.contains(i)){
                // i is one of the k - 1 num
                // remove and update windowSum
                // poll one num from waiting set and add
                windowSum -= nums[i];
                using.remove(i);
                int j = waiting.pollFirst();
                windowSum += nums[j];
                using.add(j);
            }else{
                // i is not one of the k - 1 num, it is in the waiting set
                // remove from waiting 
                // check minimum num of the waiting set is lower than maximum num of the using set
                // If so, add to the using set, remove from waiting set
                // update window accordingly
                waiting.remove(i);
                int j1 = waiting.first(), j2 = using.last();
                if(nums[j1] < nums[j2]){
                    windowSum -= nums[j2];
                    using.remove(j2);
                    waiting.add(j2);
                    
                    windowSum += nums[j1];
                    using.add(j1);
                    waiting.remove(j1);
                }
            }
            
            result = Math.min(result, windowSum);
        }
        return result + nums[0];
    }
}


```