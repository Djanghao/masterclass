# 💯Faster✅💯Less Mem✅🧠Detailed Approach🎯Prefix Sum🔥Python🐍Java☕C++😎

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 124
**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5281639/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5281639/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share solution to this question with detailed explanation:

# \uD83C\uDFAFProblem Explaination: 
Given an array of integers `nums` and an integer `k`, your task is to count the number of subarrays whose sum is divisible by `k`.

### \uD83D\uDCE5Input:

- `nums`: A list of integers.
- `k`: An integer.

### \uD83D\uDCE4Output:
- An integer representing the number of subarrays in `nums` whose sum is divisible by `k`.

# 1\uFE0F\u20E3Brute Force Approach(TLE\u274C):
The brute force approach involves checking all possible subarrays and counting those whose sums are divisible by \\( k \\).
# \u269B\uFE0FImplementation Steps: 
- Start from every index in the array.
- For each starting index, look at every possible ending index.
- Calculate the sum of the subarray from the starting index to the ending index.
- Check if that sum is divisible by \uD835\uDC58.
# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBBCode(TLE\u274C):
```Python []
class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        count = 0
        n = len(nums)
        
        for i in range(n):
            curr_sum = 0
            for j in range(i, n):
                curr_sum += nums[j]
                if curr_sum % k == 0:
                    count += 1
        
        return count
```
```Java []
public class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        int count = 0;
        
        // Iterate through all possible subarrays
        for (int i = 0; i < nums.length; i++) {
            int sum = 0;
            for (int j = i; j < nums.length; j++) {
                sum += nums[j];
                // Check if the sum is divisible by k
                if (sum % k == 0) {
                    count++;
                }
            }
        }
        
        return count;
    }
}
```
```C++ []
class Solution {
public:
    int subarraysDivByK(std::vector<int>& nums, int k) {
        int count = 0;
        
        // Iterate through all possible subarrays
        for (int i = 0; i < nums.size(); i++) {
            int sum = 0;
            for (int j = i; j < nums.size(); j++) {
                sum += nums[j];
                // Check if the sum is divisible by k
                if (sum % k == 0) {
                    count++;
                }
            }
        }
        
        return count;
    }
};

```
# 2\uFE0F\u20E3 Prefix Sum with Hash Map: 
In the brute force method, we check every possible subarray in an array to see if their sums are divisible by \uD835\uDC58. This means for every starting point in the array, you calculate the sum of subarrays that start there, one by one. This leads to a lot of repeated work because you keep summing up the same numbers multiple times. The prefix sum approach helps you avoid this repeated work. Here's how:

-  By keeping a running total of the numbers as you go through the array. 
- Using this running total we can avoid calculating the sum of subarrays from scratch each time.

# \u269B\uFE0FImplementation Steps:
1. Start with an initial prefix sum of 0.
2. As you go through each number in the array, update the prefix sum by adding the current number.
3. Calculate the remainder of this prefix sum when divided by \\( k \\).
4. Use the hash map to check if this remainder has been seen before:
   - If it has, it means there are subarrays that sum to a multiple of \\( k \\), and you increase your count by how many times this remainder has been seen.
   - Update the hash map to include this new remainder.
# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBBCode:
   
```Python []
class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        count = 0
        prefix_sum = 0
        prefix_map = {0: 1}  
        
        for num in nums:
            prefix_sum += num
            mod = prefix_sum % k
            if mod < 0:  
                mod += k
            if mod in prefix_map:
                count += prefix_map[mod]
                prefix_map[mod] += 1
            else:
                prefix_map[mod] = 1
        
        return count
```
```Java []
public class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        // Initialize count of subarrays, prefix sum, and hash map for remainders
        int count = 0;
        int prefixSum = 0;
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, 1); // To handle subarrays that start from the beginning

        for (int num : nums) {
            // Update prefix sum
            prefixSum += num;
            
            // Calculate the remainder of the prefix sum divided by k
            int mod = prefixSum % k;
            
            // Adjust negative remainders to be positive
            if (mod < 0) {
                mod += k;
            }
            
            // If this remainder has been seen before, it means there are subarrays ending here that are divisible by k
            if (prefixMap.containsKey(mod)) {
                count += prefixMap.get(mod);
                prefixMap.put(mod, prefixMap.get(mod) + 1);
            } else {
                prefixMap.put(mod, 1);
            }
        }
        
        return count; // Total number of subarrays divisible by k
    }
}

```
```C++ []
class Solution {
public:
    int subarraysDivByK(std::vector<int>& nums, int k) {
        // Initialize count of subarrays, prefix sum, and hash map for remainders
        int count = 0;
        int prefixSum = 0;
        std::unordered_map<int, int> prefixMap;
        prefixMap[0] = 1; // To handle subarrays that start from the beginning

        for (int num : nums) {
            // Update prefix sum
            prefixSum += num;
            
            // Calculate the remainder of the prefix sum divided by k
            int mod = prefixSum % k;
            
            // Adjust negative remainders to be positive
            if (mod < 0) {
                mod += k;
            }
            
            // If this remainder has been seen before, it means there are subarrays ending here that are divisible by k
            if (prefixMap.find(mod) != prefixMap.end()) {
                count += prefixMap[mod];
                prefixMap[mod] += 1;
            } else {
                prefixMap[mod] = 1;
            }
        }
        
        return count; // Total number of subarrays divisible by k
    }
};

```
# \uD83D\uDCDANote:
- When to use the prefix sum approach:

    1. **Cumulative Sum Queries**:
        - When the problem involves querying the sum of elements between various ranges multiple times.
        - Example: Finding the sum of elements in subarrays or ranges efficiently.

    2. **Subarray Sum Conditions**:
        - When you need to determine subarrays that meet a specific sum condition, such as being equal to a given value or divisible by a number.
        - Example: Counting subarrays whose sum is divisible by \\(k\\).

# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA