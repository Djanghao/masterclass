# 2 Easy Interview Approaches ✅ || PrefixSum🔥 || HashMap💯 || without HashMap✅ || All Language 💯

**Author:** naman_malik
**Votes:** 8
**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5282257/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5282257/)

---

![Runtime complexity.png](./images/0.png)


# Approach - 1 
<!-- Describe your approach to solving the problem. -->
PrefixSum + HashMap

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` C++ []
class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        
    int sum=0;
    int count=0;
    map<int,int>mp;
    mp[0]++;                  // always one prefix sum that is initially 0

    
    for(int i=0;i<nums.size();i++)
    {
        sum+=nums[i];
        int rem=sum%k;        //Calculte the remainders of current sun
        
        if(rem<0)             // Handle negative remainders to ensure they are positive
        {
            rem=k+rem;
        }
        
        if(mp[rem]>0)          // If remainder has seen before, it means there are subarrays
            count+=mp[rem];    // which sum to multiple of k. Add the count of occurrences

        mp[rem]++;              // Increment the count for this remainder in the map
    }
    return count;
        
    }
};
```
```java []
class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        int sum = 0;
        int count = 0;
        Map<Integer, Integer> mp = new HashMap<>();
        mp.put(0, 1); // always one prefix sum that is initially 0

        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            int rem = sum % k; // Calculate the remainders of current sum

            if (rem < 0) { // Handle negative remainders to ensure they are positive
                rem = k + rem;
            }

            if (mp.containsKey(rem)) { // If remainder has seen before, it means there are subarrays
                count += mp.get(rem); // which sum to multiple of k. Add the count of occurrences
            }

            mp.put(rem, mp.getOrDefault(rem, 0) + 1); // Increment the count for this remainder in the map
        }
        return count;
    }
}

```
```python []
class Solution(object):
    def subarraysDivByK(self, nums, k):
        sum = 0
        count = 0
        mp = {}
        mp[0] = 1  # always one prefix sum that is initially 0

        for i in range(len(nums)):
            sum += nums[i]
            rem = sum % k  # Calculate the remainders of current sum

            if rem < 0:  # Handle negative remainders to ensure they are positive
                rem = k + rem

            if rem in mp:  # If remainder has seen before, it means there are subarrays
                count += mp[rem]  # which sum to multiple of k. Add the count of occurrences

            if rem in mp:
                mp[rem] += 1  # Increment the count for this remainder in the map
            else:
                mp[rem] = 1

        return count

```


# Approach - 2
<!-- Describe your approach to solving the problem. -->
Without HashMap

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` C++ []
class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        
        vector<int> sums(k, 0); // vector to keep track of the counts of prefix sums modulo k
        sums[0]++;      //one prefix sum always initially 0
       
        int cnt = 0;
        int currSum = 0;

        for(int i = 0; i < nums.size(); i++) {
        // Update current prefix sum with current element, handle negative values correctly
            currSum = (currSum + nums[i] % k + k) % k;  
            cnt += sums[currSum];    //Add curr prefix sum mod k has seen before to the count
            sums[currSum]++;         // Increment the count for this prefix sum modulo k
        }
        return cnt;
    }
};
```
```java []
import java.util.Arrays;

class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        int[] sums = new int[k]; // array to keep track of the counts of prefix sums modulo k
        sums[0]++; // one prefix sum always initially 0
        
        int cnt = 0;
        int currSum = 0;
        
        for (int i = 0; i < nums.length; i++) {
            // Update current prefix sum with current element, handle negative values correctly
            currSum = (currSum + nums[i] % k + k) % k;
            cnt += sums[currSum]; // Add current prefix sum mod k has seen before to the count
            sums[currSum]++; // Increment the count for this prefix sum modulo k
        }
        
        return cnt;
    }
}

```
```python []
class Solution(object):
    def subarraysDivByK(self, nums, k):
        sums = [0] * k # list to keep track of the counts of prefix sums modulo k
        sums[0] += 1 # one prefix sum always initially 0
        
        cnt = 0
        currSum = 0
        
        for i in range(len(nums)):
            # Update current prefix sum with current element, handle negative values correctly
            currSum = (currSum + nums[i] % k + k) % k
            cnt += sums[currSum] # Add current prefix sum mod k has seen before to the count
            sums[currSum] += 1 # Increment the count for this prefix sum modulo k
        
        return cnt

```
![upvote cat3.png](./images/1.png)
