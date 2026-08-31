# 2 Easy Interview Approaches ✅ || PrefixSum🔥 || Sliding Window💯 || HashMap✅ || All language 💯🔥

**Author:** naman_malik
**Votes:** 12
**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solutions/5278451/](https://leetcode.com/problems/continuous-subarray-sum/solutions/5278451/)

---

![image.png](./images/0.png)

# Approach - 1 
<!-- Describe your approach to solving the problem. -->
PrefixSum + Sliding Window Technique

# Complexity
- Time complexity: O(N*N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    bool checkSubarraySum(vector<int>& nums, int k) {

        int Sum = nums[0];
        
        for (int i = 1; i < nums.size(); i++) {

             // Edge Case , consecutive zeros always give true answer
            if (nums[i - 1] == 0 && nums[i] == 0) {
                return true;      
            }
            
            Sum += nums[i];
            
            if (Sum % k == 0)      // Check if the cumulative sum is divisible by k
                return true;
            
            int j = 0;
            int tempSum = Sum;
            
            while ((i - j) > 1 && tempSum >= k) {
                tempSum -= nums[j];
                j++;
                  
                if (tempSum % k == 0) { // Check if temporary sum is divisible by k
                    return true;
                }
            }
        }
        // If no valid subarray is found, return false
        return false;
    }
};
```
```java []
class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        int sum = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            // Edge Case , consecutive zeros always give true answer
            if (nums[i - 1] == 0 && nums[i] == 0) {
                return true;
            }
            
            sum += nums[i];
            
            if (sum % k == 0) { // Check if the cumulative sum is divisible by k
                return true;
            }
            
            int j = 0;
            int tempSum = sum;
            
            while ((i - j) > 1 && tempSum >= k) {
                tempSum -= nums[j];
                j++;
                
                if (tempSum % k == 0) { // Check if temporary sum is divisible by k
                    return true;
                }
            }
        }
        // If no valid subarray is found, return false
        return false;
    }
}

```
```python []
class Solution(object):
    def checkSubarraySum(self, nums, k):
        sum = nums[0]
        
        for i in range(1, len(nums)):
            # Edge Case , consecutive zeros always give true answer
            if nums[i - 1] == 0 and nums[i] == 0:
                return True
            
            sum += nums[i]
            
            if sum % k == 0:  # Check if the cumulative sum is divisible by k
                return True
            
            j = 0
            temp_sum = sum
            
            while (i - j) > 1 and temp_sum >= k:
                temp_sum -= nums[j]
                j += 1
                
                if temp_sum % k == 0:  # Check if temporary sum is divisible by k
                    return True
        
        # If no valid subarray is found, return False
        return False

```

# Approach -2 
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    bool checkSubarraySum(vector<int>& nums, int k) {
    
        unordered_map<int, int> mp;
        int Sum = 0;
        mp[0] = -1;
        
        for (int i = 0; i < nums.size(); i++) {
            Sum += nums[i];
            if (k != 0) Sum %= k;
            
            // Check if the remainder has been seen before
            if (mp.find(Sum) != mp.end()) {
                if (i - mp[Sum] > 1)   // If subarray length is greater than 1, return true
                return true;
            } 
            else {            // Store the index of the first occurrence of the remainder
                mp[Sum] = i;
            }
        }
        // If no valid subarray is found, return false
        return false;
    }
};

```
```java []
class Solution {
    public boolean checkSubarraySum(int[] nums, int k) {
        Map<Integer, Integer> remainderIndexMap = new HashMap<>();
        int sum = 0;
        remainderIndexMap.put(0, -1);
        
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (k != 0) sum %= k;
            
            // Check if the remainder has been seen before
            if (remainderIndexMap.containsKey(sum)) {
                if (i - remainderIndexMap.get(sum) > 1) // If subarray length is greater than 1, return true
                    return true;
            } else { // Store the index of the first occurrence of the remainder
                remainderIndexMap.put(sum, i);
            }
        }
        // If no valid subarray is found, return false
        return false;
    }
}

```
```python []
class Solution(object):
    def checkSubarraySum(self, nums, k):
        remainder_index_map = {0: -1}
        sum = 0
        
        for i in range(len(nums)):
            sum += nums[i]
            if k != 0:
                sum %= k
            
            # Check if the remainder has been seen before
            if sum in remainder_index_map:
                if i - remainder_index_map[sum] > 1:  # If subarray length is greater than 1, return true
                    return True
            else:  # Store the index of the first occurrence of the remainder
                remainder_index_map[sum] = i
        
        # If no valid subarray is found, return False
        return False

```
![upvote cat3.png](./images/1.png)


