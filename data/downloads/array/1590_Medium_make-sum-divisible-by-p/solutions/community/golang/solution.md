# 🌟 Fastest Way to Make Sum Divisible by P in Multiple Languages 💯🔥

**Author:** withaarzoo
**Votes:** 144
**Link:** [https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5862793/](https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5862793/)

---

![Screenshot 2024-07-02 113653.png](./images/0.png)

Explore a collection of solutions to LeetCode problems in multiple programming languages. Each solution includes a detailed explanation and step-by-step approach to solving the problem efficiently. Whether you're a beginner looking to learn or an experienced coder seeking optimized solutions, this repository aims to provide clear and insightful approaches to tackling challenging LeetCode problems.

### **Access daily LeetCode Solutions Repo :** [click here](https://github.com/withaarzoo/LeetCode-Solutions)

---

![image.png](./images/1.png)

---

# Intuition
The problem asks us to remove the smallest subarray such that the sum of the remaining elements is divisible by a given integer `p`. Our key observation is that the total sum of the array determines how much we need to adjust. We want to remove a subarray whose sum has a specific remainder when divided by `p`.

If we can efficiently find a subarray whose sum mod `p` equals the needed remainder, we can solve the problem optimally.

---

# Approach
1. **Total Sum Calculation**: First, calculate the total sum of the array and its remainder when divided by `p`.
2. **Target Subarray**: We need to remove a subarray such that the sum of the remaining elements is divisible by `p`. The sum of the removed subarray should have the same remainder as the total sum mod `p`.
3. **Prefix Sums**: We utilize prefix sums to track the sum of subarrays. By keeping track of the prefix sums mod `p`, we can check if a subarray that satisfies the condition can be found.
4. **Optimization with Hashmap**: We use a hashmap to store the prefix sum modulo values, which helps in quickly finding a valid subarray by comparing remainders.

---

# Complexity

- **Time complexity**:  
  $$O(n)$$, where \\(n\\) is the number of elements in the `nums` array. We only need to traverse the array once, and each operation (including the hashmap lookup) takes constant time.

- **Space complexity**:  
  $$O(n)$$ because we store prefix sums in a hashmap, and in the worst case, we might store up to \\(n\\) entries.

---

# Code
```C++ []
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int minSubarray(vector<int>& nums, int p) {
        long totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }

        // Find the remainder when total sum is divided by p
        int rem = totalSum % p;
        if (rem == 0) return 0; // If the remainder is 0, no subarray needs to be removed

        unordered_map<int, int> prefixMod;
        prefixMod[0] = -1;  // Initialize for handling full prefix
        long prefixSum = 0;
        int minLength = nums.size();

        for (int i = 0; i < nums.size(); ++i) {
            prefixSum += nums[i];
            int currentMod = prefixSum % p;
            int targetMod = (currentMod - rem + p) % p;

            if (prefixMod.find(targetMod) != prefixMod.end()) {
                minLength = min(minLength, i - prefixMod[targetMod]);
            }

            prefixMod[currentMod] = i;
        }

        return minLength == nums.size() ? -1 : minLength;
    }
};

```
```Java []
import java.util.HashMap;

class Solution {
    public int minSubarray(int[] nums, int p) {
        long totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }

        // Find remainder when total sum is divided by p
        int rem = (int)(totalSum % p);
        if (rem == 0) return 0; // If remainder is 0, no subarray needs to be removed

        HashMap<Integer, Integer> prefixMod = new HashMap<>();
        prefixMod.put(0, -1);  // Initialize to handle full prefix
        long prefixSum = 0;
        int minLength = nums.length;

        for (int i = 0; i < nums.length; ++i) {
            prefixSum += nums[i];
            int currentMod = (int)(prefixSum % p);
            int targetMod = (currentMod - rem + p) % p;

            if (prefixMod.containsKey(targetMod)) {
                minLength = Math.min(minLength, i - prefixMod.get(targetMod));
            }

            prefixMod.put(currentMod, i);
        }

        return minLength == nums.length ? -1 : minLength;
    }
}

```
```JavaScript []
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    let totalSum = nums.reduce((a, b) => a + b, 0);

    // Find the remainder when total sum is divided by p
    let rem = totalSum % p;
    if (rem === 0) return 0;  // If the remainder is 0, no subarray needs to be removed

    let prefixMod = new Map();
    prefixMod.set(0, -1);  // Initialize to handle full prefix
    let prefixSum = 0;
    let minLength = nums.length;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        let currentMod = prefixSum % p;
        let targetMod = (currentMod - rem + p) % p;

        if (prefixMod.has(targetMod)) {
            minLength = Math.min(minLength, i - prefixMod.get(targetMod));
        }

        prefixMod.set(currentMod, i);
    }

    return minLength === nums.length ? -1 : minLength;
};

```
```Python []
class Solution:
    def minSubarray(self, nums: List[int], p: int) -> int:
        totalSum = sum(nums)
        rem = totalSum % p

        if rem == 0:
            return 0

        prefixMod = {0: -1}
        prefixSum = 0
        minLength = len(nums)

        for i, num in enumerate(nums):
            prefixSum += num
            currentMod = prefixSum % p
            targetMod = (currentMod - rem + p) % p

            if targetMod in prefixMod:
                minLength = min(minLength, i - prefixMod[targetMod])

            prefixMod[currentMod] = i

        return minLength if minLength < len(nums) else -1

```
```Go []
func minSubarray(nums []int, p int) int {
    totalSum := 0
    for _, num := range nums {
        totalSum += num
    }

    rem := totalSum % p
    if rem == 0 {
        return 0
    }

    prefixMod := make(map[int]int)
    prefixMod[0] = -1
    prefixSum, minLength := 0, len(nums)

    for i, num := range nums {
        prefixSum += num
        currentMod := prefixSum % p
        targetMod := (currentMod - rem + p) % p

        if idx, ok := prefixMod[targetMod]; ok {
            if i-idx < minLength {
                minLength = i - idx
            }
        }

        prefixMod[currentMod] = i
    }

    if minLength == len(nums) {
        return -1
    }
    return minLength
}

```

---

# Step-by-Step Detailed Explanation

1. **Total Sum Calculation**:
   - The total sum of the array is calculated to determine the remainder when divided by `p`.
   - Example: For `nums = [3, 1, 4, 2]`, the total sum is `10`, and `10 % 6 = 4`.

2. **Check if No Subarray is Needed**:
   - If the remainder is `0`, no subarray needs to be removed, and we return `0` immediately.

3. **Prefix Sum with Modulo**:
   - As we iterate over the array, we calculate the prefix sum modulo `p` for each index.
   - We store these modulo values in a hashmap for quick lookup. This helps us check if a previous prefix sum matches the required condition.

4. **Efficient Subarray Removal**:
   - For each element, we check if there exists a prefix sum modulo `p` that, when combined with the current prefix sum, would remove a subarray whose sum has the same remainder as `rem`.
   - The hashmap allows us to do this efficiently by storing the indices of the prefix sums.

5. **Return Result**:
   - After the loop, we return the minimum length of the subarray found, or `-1` if no valid subarray exists.

---

# Visualization

Let\u2019s take **Example 1**: 

```plaintext
nums = [3, 1, 4, 2], p = 6
```

1. **Total Sum Calculation**:  
   First, we calculate the sum of the entire array:

   ```
   3 + 1 + 4 + 2 = 10
   ```

2. **Remainder Check**:  
   Find the remainder when the total sum is divided by `p`:

   ```
   10 % 6 = 4
   ```

   Since the remainder is `4`, the total sum is not divisible by `6`. This means we need to remove a subarray that will adjust this remainder to `0`.

3. **Target Remainder for Subarray**:  
   We want to remove a subarray whose sum mod `6` equals `4`. This will leave a sum divisible by `6` for the remaining elements.

4. **Subarray Visualization**:  
   One possible subarray we can remove is `[4]`. Removing this gives us the remaining elements `[3, 1, 2]`:

   ```
   3 + 1 + 2 = 6
   ```

   Now, `6 % 6 = 0`, which satisfies the condition.

5. **Optimal Subarray**:  
   The subarray `[4]` is of length `1`, which is the smallest subarray we can remove.

Here\u2019s a visual representation of this approach:

```plaintext
Initial Array: [3, 1, 4, 2]
Total Sum: 10
Remainder (10 % 6): 4
Target Subarray Sum (mod 6 = 4): [4]
Remaining Elements after Removal: [3, 1, 2]
Remaining Sum: 6
Result: Length of Subarray to Remove = 1
```

---

![upvote cat.png](./images/2.png)
