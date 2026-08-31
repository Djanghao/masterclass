# 💯Faster✅💯 Lesser✅4 Methods🔥HashMap🔥Using Combination🔥Two-Pointers Approach🔥Simple Math

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 55
**Link:** [https://leetcode.com/problems/number-of-good-pairs/solutions/4122294/](https://leetcode.com/problems/number-of-good-pairs/solutions/4122294/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 4 ways to solve this question with detailed explanation of each approach:

# Problem Explaination: 

The "Number of Good Pairs" problem is a common coding problem in which we are given an array of integers, and we need to find the number of pairs of indices (i, j) such that the elements at those indices are equal (i.e., nums[i] == nums[j]) and i < j. In simpler terms, you're looking for pairs of numbers in the array that have the same value and where the first number appears before the second number in the array.

# \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering four different methods to solve this problem:
1. Brute Force
2. Using a Hash Map
3. Using an Array to Store Frequencies
4. Using Combinations

# 1. Brute Force: 
- Initialize a variable count to 0.
- Use two nested loops to iterate through all possible pairs of indices (i, j) where i < j.
- If nums[i] is equal to nums[j], increment the count by 1.
- After both loops finish, return the count.
# Complexity
- \u23F1\uFE0F Time Complexity: O(n^2) - because of the nested loops.

- \uD83D\uDE80 Space Complexity: O(1) - no additional data structures are used.

# Code
```Python []
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count = 0
        n = len(nums)
        for i in range(n):
            for j in range(i + 1, n):
                if nums[i] == nums[j]:
                    count += 1
        return count
```
```Java []
class Solution {
    public int numIdenticalPairs(int[] nums) {
        int count = 0;
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] == nums[j]) {
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
    int numIdenticalPairs(vector<int>& nums) {
        int count = 0;
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] == nums[j]) {
                    count++;
                }
            }
        }
        return count;
    }
};

```
```C []
int numIdenticalPairs(int* nums, int numsSize) {
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] == nums[j]) {
                count++;
            }
        }
    }
    return count;
}
```
# 2. Using a Hash Map:
- Initialize an empty hash map num_count.
Initialize a variable count to 0.
- Iterate through the array nums from left to right.
- For each element num, check if it exists in the num_count hash map.
- If it exists, increment count by the value associated with num in the hash map, and increment the value by 1.
- If it doesn't exist, add num to the hash map with a value of 1.
- After iterating through the array, return count.
# Complexity
- \u23F1\uFE0F Time Complexity: O(n) - because we iterate through the array once.

- \uD83D\uDE80 Space Complexity: O(n) - in the worst case, we may store all distinct elements in the hash map.

# Code
```Python []
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        num_count = {}
        count = 0
        for num in nums:
            if num in num_count:
                count += num_count[num]
                num_count[num] += 1
            else:
                num_count[num] = 1
        return count
```
```Java []
class Solution {
    public int numIdenticalPairs(int[] nums) {
        HashMap<Integer, Integer> numCount = new HashMap<>();
        int count = 0;
        for (int num : nums) {
            if (numCount.containsKey(num)) {
                count += numCount.get(num);
                numCount.put(num, numCount.get(num) + 1);
            } else {
                numCount.put(num, 1);
            }
        }
        return count;
    }
}
```
```C++ []
class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) {
        unordered_map<int, int> num_count;
        int count = 0;
        for (int num : nums) {
            if (num_count.find(num) != num_count.end()) {
                count += num_count[num];
                num_count[num]++;
            } else {
                num_count[num] = 1;
            }
        }
        return count;
    }
};
```
```C []
int numIdenticalPairs(int* nums, int numsSize) {
    int count = 0;
    int num_count[numsSize];
    memset(num_count, 0, sizeof(num_count));
    
    for (int i = 0; i < numsSize; i++) {
        if (num_count[nums[i]]) {
            count += num_count[nums[i]];
            num_count[nums[i]]++;
        } else {
            num_count[nums[i]] = 1;
        }
    }
    return count;
}
```
# 3. Using an Array to Store Frequencies:
   - Initialize an array freq of size 101 (assuming the range of elements in nums is between 1 and 100) and initialize all elements to 0.
   - Initialize a variable count to 0.
   - Iterate through the array nums.
   - For each element num, increment count by the value at index num in the freq array, and then increment the value at index num by 1.
   - After iterating through the array, return count. 
# Complexity
- \u23F1\uFE0F Time Complexity:  O(n) - because we iterate through the array once.

- \uD83D\uDE80 Space Complexity: O(1) - the size of the freq array is fixed at 101.

# Code
```Python []
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        freq = [0] * 101  
        count = 0
        for num in nums:
            count += freq[num]
            freq[num] += 1
        return count
```
```Java []
class Solution {
    public int numIdenticalPairs(int[] nums) {
        int[] freq = new int[101];
        int count = 0;
        for (int num : nums) {
            count += freq[num];
            freq[num]++;
        }
        return count;
    }
}

```
```C++ []
class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) {
        vector<int> freq(101, 0);  
        int count = 0;
        for (int num : nums) {
            count += freq[num];
            freq[num]++;
        }
        return count;
    }
};

```
```C []
int numIdenticalPairs(int* nums, int numsSize) {
    int freq[101] = {0};
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        count += freq[nums[i]];
        freq[nums[i]]++;
    }
    return count;
}

```
# 4. Using Combinations:
   - Initialize a variable count to 0.
   - Iterate through the array nums and for each unique element num, calculate its frequency freq.
   - Calculate the number of pairs that can be formed from freq elements using the formula (freq * (freq - 1)) / 2 (since each pair contributes to the count).
   - Add the result from step 3 to the count.
   - After iterating through the array, return count.
# Complexity
- \u23F1\uFE0F Time Complexity:  O(n) - because we iterate through the array once to calculate frequencies.

- \uD83D\uDE80 Space Complexity: O(1) - no additional data structures are used.


# Code
```Python []
class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        count = 0
        num_freq = collections.Counter(nums)
        for freq in num_freq.values():
            count += (freq * (freq - 1)) // 2
        return count

```
```Java []
class Solution {
    public int numIdenticalPairs(int[] nums) {
        int count = 0;
        Map<Integer, Integer> numFreq = new HashMap<>();
        for (int num : nums) {
            numFreq.put(num, numFreq.getOrDefault(num, 0) + 1);
        }
        for (int freq : numFreq.values()) {
            count += (freq * (freq - 1)) / 2;
        }
        return count;
    }
}
```
```C++ []
class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) {
        int count = 0;
        unordered_map<int, int> num_freq;
        for (int num : nums) {
            num_freq[num]++;
        }
        for (const auto& entry : num_freq) {
            int freq = entry.second;
            count += (freq * (freq - 1)) / 2;
        }
        return count;
    }
};

```
```C []
int numIdenticalPairs(int* nums, int numsSize) {
    int count = 0;
    int max_num = 0; // Variable to store the maximum element in nums
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] > max_num) {
            max_num = nums[i];
        }
    }
    
    int num_freq[max_num + 1]; // Corrected size based on the maximum element
    memset(num_freq, 0, sizeof(num_freq));
    for (int i = 0; i < numsSize; i++) {
        num_freq[nums[i]]++;
    }

    for (int i = 0; i <= max_num; i++) {
        if (num_freq[i] > 1) {
            count += (num_freq[i] * (num_freq[i] - 1)) / 2;
        }
    }
    return count;
}

```
# \uD83C\uDFC6Conclusion: 
Method 3, which uses an array to store frequencies, is the most efficient in terms of both time and space complexity for this problem. Method 2 is also efficient and is particularly useful when the range of elements in nums is large, as it doesn't assume a fixed range.

# \uD83D\uDCA1 I invite you to check out my profile for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA