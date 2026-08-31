# [Java] ✅ ⬆️ | Binary Search | Intuition | Explanation | Easy | Step by Step

**Author:** sandeepk97
**Votes:** 39
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4778576/](https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4778576/)

---

**Binary Search for Earliest Second:** 
This solution starts by performing a binary search to find the earliest second (s) where it's possible to mark all indices in the given arrays.
**Delay Marking as Much as Possible:** The idea is to delay marking indices until the latest possible moment while ensuring we have enough decrement operations available.
**Latest Point to Mark an Index**: For each second up to s, we calculate the latest point where we can mark an index based on its last occurrence in the changeIndices array.
**Store Decrement Operations:** Before the latest point, we store up as many decrement operations as possible. These operations are then used to decrease the value of nums[changeIndices[i]] when marking an index.
**Check Decrement Operations:** When it's time to mark an index, we check whether we have enough decrement operations available to reduce the value of nums[changeIndices[i]]. If we don't have enough operations, it means it's not possible to mark all indices within s seconds, so we return false.
**Return Result:** If we successfully mark all indices within s seconds, we return true. Otherwise, we continue with the binary search to find the earliest possible second.

```
class Solution {
    public int earliestSecondToMarkIndices(int[] nums, int[] changeIndices) {
        int n = nums.length;
        int[] changeIndicesAdjusted = Arrays.stream(changeIndices).map(index -> index - 1).toArray();
        int low = 0, high = changeIndices.length - 1;
        while (low < high) {
            int mid = (low + high) / 2;
            if (isPossible(nums, changeIndicesAdjusted, mid)) high = mid;
            else low = mid + 1;
        }
		// Delay Marking as Much as Possible
        return isPossible(nums, changeIndicesAdjusted, low) ? low + 1 : -1;
    }

	// isPossible method is called to check if it's possible to mark all indices in s seconds while delaying marking as much as possible.
    private boolean isPossible(int[] nums, int[] changeIndices, int s) {
        int n = nums.length;
        int[] last = new int[n];
        Arrays.fill(last, -1);
        for (int i = 0; i <= s; i++) { // Latest Point to Mark an Index
            last[changeIndices[i]] = i;
        }
        int marked = 0, operations = 0;
        for (int i = 0; i <= s; i++) { // Store Decrement Operations
            if (i == last[changeIndices[i]]) {
                if (nums[changeIndices[i]] > operations) return false;
                operations -= nums[changeIndices[i]];
                marked++;
            } else {
                operations++;
            }
        }
        return marked == n;
    }
}
```

**Time and Space Complexity:** The time complexity of the solution is O((n + m) * log(m)), where n is the length of the nums array and m is the length of the changeIndices array. The space complexity is O(n + m), where n is the length of the nums array and m is the length of the changeIndices array.

![image](./images/0.png)

**Please Upvote**
