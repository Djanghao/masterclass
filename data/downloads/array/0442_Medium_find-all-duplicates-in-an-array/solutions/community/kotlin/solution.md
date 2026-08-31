# Easy Solution | | Time O (n), Space O (1) | | C++ | | Java | | Python3 | | Kotlin | |✅✅✅🔥🔥🔥

**Author:** Hunter_0718
**Votes:** 59
**Link:** [https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/4921192/](https://leetcode.com/problems/find-all-duplicates-in-an-array/solutions/4921192/)

---



**Intuition**

The key observation is that each element in the input array `nums` has a corresponding index within the range `[1, n]`. We can leverage this by using the array elements themselves as indices to mark their occurrences. In essence, we'll "flip the sign" at the index corresponding to each element.

**Approach**

1. **Iterate** through the `nums` array:
   - For each element `nums[i]`, calculate its absolute value (`abs(nums[i])`) to handle negative values.
   - Use this value as the index (`idx`) to access the element at that position.

2. **Mark occurrences** by negating the value at the `idx`-th index:
   - If the value at `nums[idx - 1]` is already negative, it indicates a duplicate element encountered earlier (since it was previously negated). In this case, add the current element (`idx`) to the `result` vector.
   - Otherwise, negate the value at `nums[idx - 1]`. This essentially marks the first occurrence of the element at `idx`.

3. **Return the result**:
   - After iterating through the entire array, the `result` vector will contain all the elements that appeared twice (identified by their negated indices).

**Time Complexity**

- **O(n)**: The loop iterates through the array once, visiting each element only once.

**Space Complexity**

- **O(1)**: Constant extra space is used for the `result` vector and temporary variables like `i` and `idx`.
# Code : 
```C++ []
class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        vector<int>result;
        int n = nums.size();
        for(int i=0; i<n; i++){
            int num =abs(nums[i]);
            int idx = num - 1;
            if(nums[idx] < 0)
                result.push_back(num);
            
            nums[idx] *= -1;
        }
        return result;
    }
};
```
```Java []
class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        List<Integer> result = new ArrayList<>();
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            int num = Math.abs(nums[i]);
            int idx = num - 1;
            if (nums[idx] < 0)
                result.add(num);
            nums[idx] *= -1;
        }
        return result;
    }
}

```
```Python3 []
class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        result = []
        n = len(nums)
        for i in range(n):
            num = abs(nums[i])
            idx = num - 1
            if nums[idx] < 0:
                result.append(num)
            nums[idx] *= -1
        return result

```
```Kotlin []
class Solution {
    fun findDuplicates(nums: IntArray): List<Int> {
        val result = mutableListOf<Int>()
        val n = nums.size
        for (i in 0 until n) {
            val num = Math.abs(nums[i])
            val idx = num - 1
            if (nums[idx] < 0)
                result.add(num)
            nums[idx] *= -1
        }
        return result
    }
}

```
```javascript []
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
        const result = [];
        const n = nums.length;
        for (let i = 0; i < n; i++) {
            const num = Math.abs(nums[i]);
            const idx = num - 1;
            if (nums[idx] < 0)
                result.push(num);
            nums[idx] *= -1;
        }
        return result;
};
```





**Dry Run (Test Case 1: nums = [4,3,2,7,8,2,3,1])**

| Iteration | i | nums[i] | abs(nums[i]) | idx (nums[i] - 1) | nums[idx] | Action (if nums[idx] < 0) |
|---|---|---|---|---|---|---|
| 1         | 0 | 4        | 4             | 3        | 3          | -         | Mark first occurrence of 4 (nums[3] becomes -3)
| 2         | 1 | 3        | 3             | 2        | -3         | -         | Already marked duplicate (3)
| 3         | 2 | 2        | 2             | 1        | 3          | -         | Mark first occurrence of 2 (nums[1] becomes -3)
| 4         | 3 | 7        | 7             | 6        | 8          | -         | No duplicate
| 5         | 4 | 8        | 8             | 7        | 7          | -         | No duplicate
| 6         | 5 | 2        | 2             | 1        | -3         | **Add 2 to result** (Duplicate)
| 7         | 6 | 3        | 3             | 2        | -3         | **Add 3 to result** (Duplicate)
| 8         | 7 | 1        | 1             | 0        | 4          | -         | Mark first occurrence of 1 (nums[0] becomes -4)

**Explanation:**

- The loop iterates eight times, visiting each element in the array.
- Elements 4, 7, and 8 appear only once, so their corresponding indices in `nums` are not negated again.
- Elements 2 and 3 appear twice. When they are encountered at indices 2 and 6 (respectively), `nums[1]` and `nums[2]` (which were previously negated) indicate duplicates, so they are added to the `result` vector.
- After the loop completes, `result` contains `[2, 3]`, which are the duplicate elements in the original array.

