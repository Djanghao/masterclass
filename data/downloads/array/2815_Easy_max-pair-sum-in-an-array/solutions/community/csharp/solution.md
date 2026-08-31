# Easy to Understand with Dictionary | C#

**Author:** propanther
**Votes:** 2
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3959810/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3959810/)

---

# Approach
1. Build Dictionary with max digit of a number as key and max number with same max digit as value
2. Iterate over an entire list of numbers and perform following operations
    2.1 Get Max Digit for current number
    2.2 Lookup in the Dictionary with Max Digit of current number as key to find last biggest number found with same MaxDigit as current number
    2.3 If record exist, recalculate ans by adding current number with last biggest number sharing MaxDigit and update ans if sum is larger than the running sum
    2.4 If no record exist, create new record in Dictionary
3. Return ans

# Complexity
**Time Complexity:**
- The loop iterates through each element of the input array nums, which has n elements.
- Inside the loop, the getMaxDigit function is called, which takes O(log num) time, where num is the value of an element in the nums array. In the worst case, this is O(log M), where M is the maximum value in the input array.
- Inside the loop, dictionary operations such as ContainsKey, this[], and TryAdd are performed. Dictionary operations typically take O(1) time on average, assuming a good hash distribution. 
- However, in the worst case, they can take O(n) time if there are hash collisions.
Putting it all together, the overall time complexity of the solution can be approximated as:

    $$O(n) * (O(log M) + O(1)) = O(n log M)$$ 

**Space complexity:**
- The primary data structure is the Dictionary<int, int> map, which stores information about the maximum sum for each unique maximum digit encountered. 
- The space used by the dictionary is proportional to the number of unique maximum digits. In the worst case, there can be up to 9 unique maximum digits (0 to 9).
- The int ans variable and the loop counter int i consume constant space.
- The int maxDigit variable inside the getMaxDigit function consumes constant space as well.
    
    $$O(10)$$

# Code
```
public class Solution {
    public int MaxSum(int[] nums) {
        int ans = -1;
        Dictionary<int, int> map = new();
        for(int i = 0; i < nums.Length; i++){
            int maxDigit = getMaxDigit(nums[i]);
            if(map.ContainsKey(maxDigit)){
                ans = Math.Max(ans, map[maxDigit] + nums[i]);
                map[maxDigit] = Math.Max(map[maxDigit], nums[i]);
            }else{
                map.TryAdd(maxDigit, 0);
                map[maxDigit] = nums[i];
            }
        }

        return ans;
    }

    private int getMaxDigit(int num){
        int maxDigit = 0;
        while(num != 0){
            maxDigit = Math.Max(maxDigit, num%10);
            num /= 10; 
        }
        return maxDigit;
    }
}
```