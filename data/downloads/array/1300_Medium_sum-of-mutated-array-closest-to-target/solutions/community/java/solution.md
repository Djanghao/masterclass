# Java easy understand binary search (Beats 97%)

**Author:** tonysu2225
**Votes:** 10
**Link:** [https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/1028857/](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/1028857/)

---

```
class Solution {
    public int findBestValue(int[] arr, int target) {
        
        int max = 0;
        int sum = 0;
        
        // Find the max value and the upper bound of the seach range.
        for(int num : arr) {
            max = Math.max(max, num);
            sum += num;
        }
        
        // If the sum is smaller than the target the greatest number is the answer.
        if(sum <= target) {
            return max;
        }
        
        // Prepare the binary search
        int left = 0;
        int right = sum;
        int leftSum = getSum(arr, left);
        int rightSum = getSum(arr, right);
        
        
        // Eventually it will narrow down to 2 Consecutive numbers.
        // The smaller one's sum is smaller than the target while the greater one's is greater than the target.
        // Unless we locate a middle value's sum is equal to target.
        while(Math.abs(left - right) != 1) {
            
            int middle = left + (right - left) / 2;
            int midSum = getSum(arr, middle);
            
            if(midSum < target) {
                left = middle;
                leftSum = midSum;
            } else if(midSum > target) {
                right = middle;
                rightSum = midSum;
            } else {
                return middle;
            }
        }
        
        // Determine which one is closer to the target.
        if(Math.abs(leftSum - target) <= Math.abs(rightSum - target)) {
            return left;
        } else {
            return right;
        }
        
    }
    
    // Get the sum of the chosen number
    private int getSum(int[] arr, int number) {
        int sum = 0;
        
        for(int num : arr) {
            sum += Math.min(num, number);
        }
        
        return sum;
    }
}
```