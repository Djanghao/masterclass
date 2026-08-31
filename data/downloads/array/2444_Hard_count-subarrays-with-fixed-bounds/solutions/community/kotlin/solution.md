# Counting Fixed-Bound Subarrays with Two Pointers  ✅✅✅🔥🔥

**Author:** Hunter_0718
**Votes:** 21
**Link:** [https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/4949239/](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/4949239/)

---



**Intuition**

The problem asks us to efficiently count subarrays within an integer array `nums` that have a minimum value `minK` and a maximum value `maxK`. We can achieve this by keeping track of two crucial indices:

- `minKIndex`: This variable stores the index of the **most recent** occurrence of `minK` encountered so far. This helps us determine the potential starting point for a valid subarray.
- `maxKIndex`: This variable stores the index of the **last** occurrence of `maxK` encountered so far. This helps us identify the potential ending point for a valid subarray.

By iterating through the array, we can update these indices whenever we encounter `minK` or `maxK`. Additionally, we need to track the index (`culpritIndex`) of the first element that violates the subarray conditions (i.e., not `minK` or `maxK`).

**Approach**

We'll employ a two-pointer technique with an additional index to track invalid elements:

1. **Initialization:** Set `result` (number of valid subarrays) to 0, initialize `minKIndex`, `maxKIndex`, and `culpritIndex` to -1 (indicating no occurrence yet).
2. **Iterate through the Array:** For each element `nums[i]`:
   - If `nums[i]` is neither `minK` nor `maxK`, update `culpritIndex` to `i`. This element breaks the subarray condition.
   - If `nums[i]` is `minK`, update `minKIndex` to `i`.
   - If `nums[i]` is `maxK`, update `maxKIndex` to `i`.
3. **Calculate Potential Subarrays:**
   - Determine the smaller index between `minKIndex` and `maxKIndex` (`smaller`).
   - Calculate `temp = smaller - culpritIndex`. This represents the number of potential subarrays starting before the invalid element (`culpritIndex`).
   - If `temp` is greater than 0, add it to `result` as these are valid subarrays.
4. **Return Result:** Return the final count of fixed-bound subarrays (`result`).

**Time Complexity**

- In the worst case, we iterate through the entire array once, updating the indices along the way.
- Therefore, the time complexity is `O(n)`, where `n` is the length of the input array `nums`.

**Space Complexity**

- We use a constant amount of extra space to store `minKIndex`, `maxKIndex`, `culpritIndex`, and `result`.
- The space complexity is `O(1)`.

**Code :**

```C++ []
class Solution {
public:
    typedef long long ll;
    long long countSubarrays(vector<int>& nums, int minK, int maxK) {
        int n = nums.size();
        ll result = 0;
        int minKIndex = -1;  // Index of most recent minK
        int maxKIndex = -1;  // Index of last maxK
        int culpritIndex = -1; // Index of first element violating subarray conditions

        for (int i = 0; i < n; i++) {
            if (nums[i] < minK || nums[i] > maxK) {
                culpritIndex = i;  // Update culprit index if element violates conditions
            }

            if (nums[i] == minK) {
                minKIndex = i;     // Update minKIndex
            }

            if (nums[i] == maxK) {
                maxKIndex = i;     // Update maxKIndex
            }

            ll smaller = min(minKIndex, maxKIndex);  // Get smaller index
            ll temp = smaller - culpritIndex;        // Calculate potential subarrays

            result += temp <= 0 ? 0 : temp;          // Add valid subarrays to result
        }
        return result;
    }
};
```
```Java []
class Solution {
    public long countSubarrays(int[] nums, int minK, int maxK) {
        int n = nums.length;
        long result = 0;
        int minKIndex = -1;
        int maxKIndex = -1;
        int culpritIndex = -1;

        for (int i = 0; i < n; i++) {
            if (nums[i] < minK || nums[i] > maxK) {
                culpritIndex = i;
            }

            if (nums[i] == minK)
                minKIndex = i;

            if (nums[i] == maxK)
                maxKIndex = i;

            long smaller = Math.min(minKIndex, maxKIndex);
            long temp = smaller - culpritIndex;

            result += temp <= 0 ? 0 : temp;
        }
        return result;
    }
}

```
```Python3 []

class Solution:
    def countSubarrays(self, nums: List[int], minK: int, maxK: int) -> int:
        n = len(nums)
        result = 0
        minKIndex = -1
        maxKIndex = -1
        culpritIndex = -1

        for i in range(n):
            if nums[i] < minK or nums[i] > maxK:
                culpritIndex = i

            if nums[i] == minK:
                minKIndex = i

            if nums[i] == maxK:
                maxKIndex = i

            smaller = min(minKIndex, maxKIndex)
            temp = smaller - culpritIndex

            result += temp if temp > 0 else 0

        return result

```

```Kotlin []
class Solution {
    fun countSubarrays(nums: IntArray, minK: Int, maxK: Int): Long {
        val n = nums.size
        var result = 0L
        var minKIndex = -1
        var maxKIndex = -1
        var culpritIndex = -1

        for (i in 0 until n) {
            if (nums[i] < minK || nums[i] > maxK) {
                culpritIndex = i
            }

            if (nums[i] == minK)
                minKIndex = i

            if (nums[i] == maxK)
                maxKIndex = i

            val smaller = minOf(minKIndex, maxKIndex).toLong()
            val temp = smaller - culpritIndex.toLong()

            result += if (temp > 0) temp else 0
        }
        return result
    }
}

```
```Javascript []
/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
        const n = nums.length;
        let result = 0;
        let minKIndex = -1;
        let maxKIndex = -1;
        let culpritIndex = -1;

        for (let i = 0; i < n; i++) {
            if (nums[i] < minK || nums[i] > maxK) {
                culpritIndex = i;
            }

            if (nums[i] === minK)
                minKIndex = i;

            if (nums[i] === maxK)
                maxKIndex = i;

            const smaller = Math.min(minKIndex, maxKIndex);
            const temp = smaller - culpritIndex;

            result += temp <= 0 ? 0 : temp;
        }
        return result;
};

```



