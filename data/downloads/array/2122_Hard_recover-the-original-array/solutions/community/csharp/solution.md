# Beats 100% on runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-the-original-array/solutions/6004915/](https://leetcode.com/problems/recover-the-original-array/solutions/6004915/)

---

# Intuition
Understanding how the original array can be derived from the modified arrays, where each element has been adjusted by a positive integer k. Since we know how the modified values relate to the original ones, we can reverse-engineer the original values.

# Approach
Sort the given array, iterate through possible values of k by checking the difference between elements, and use a frequency map to match elements back to the original array while ensuring all pairs are valid.

# Complexity
- Time complexity:
The overall time complexity is O(n log \u2061n) due to sorting the array, where \uD835\uDC5B is the length of the input array. Each subsequent operation with the frequency map takes linear time.

- Space complexity:
The space complexity is O(n) for storing the frequency map and the recovered array, as we may need to hold up to n/2 elements.

# Code
```csharp []
public class Solution {
    public int[] RecoverArray(int[] nums) {
        Array.Sort(nums);
        int n = nums.Length;

        for (int i = 1; i < n; i++) {
            // Calculate potential k
            int k = (nums[i] - nums[0]) % 2 == 1 ? -1 : (nums[i] - nums[0]) / 2;
            if (k <= 0) continue;

            var freqMap = new Dictionary<int, int>();
            var recoveredArray = new List<int>();

            foreach (var num in nums) {
                if (freqMap.TryGetValue(num, out int count) && count > 0) {
                    recoveredArray.Add(num - k);
                    freqMap[num]--;
                    if (freqMap[num] == 0) {
                        freqMap.Remove(num);
                    }
                } else {
                    freqMap[num + 2 * k] = freqMap.GetValueOrDefault(num + 2 * k, 0) + 1;
                }
            }

            if (recoveredArray.Count == n / 2 && freqMap.Count == 0) {
                return recoveredArray.ToArray();
            }
        }

        return Array.Empty<int>(); // Return an empty array if no valid solution is found
    }
}

```