# Beats 100% || Easy & Explained || [Java/C++/Python/JavaScript/C#/Rust]

**Author:** Shivansu_7
**Votes:** 51
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/4545020/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/4545020/)

---

# Intuition
1. In this problem, the crucial aspect to consider is the sorted nature of the input array. Because the array is sorted, duplicate elements are guaranteed to be adjacent to each other. This characteristic simplifies the process of eliminating duplicates.
2. We have to modify the array itself, and have to send the index at which non duplicate elemets are present.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Initialization:**
    - Initialize two pointers, i and j, where i represents the current element being considered in the array, and j represents the index where the next unique element should be placed.
2. **Iteration:**
    - Start a loop with `i` ranging from `1` to `nums.length - 1` (inclusive).
    - Compare the element at index `j` `(nums[j])` with the element at index `i` `(nums[i])`.
    - If nums[j] is not equal to nums[i], it means a new unique element is found.
        - Increment j by 1 to move to the next position where the unique element should be placed.
        - Update nums[j] to be the value of nums[i].
3. **Result:**
    - The length of the resulting array with duplicates removed is `j + 1` , where `j` is the index of the last unique element.
4. **Return:**
    - The method returns `j + 1`, representing the length of the modified array.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int removeDuplicates(int[] nums) {
        int j=0;
        for(int i=1; i<nums.length; i++) {
            if(nums[j]!=nums[i]) {
                nums[++j]=nums[i];
            }
        }
        return j+1;
    }
}
```
```C++ []
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty()) {
            return 0;
        }

        int j = 0;
        for (int i = 1; i < nums.size(); ++i) {
            if (nums[j] != nums[i]) {
                nums[++j] = nums[i];
            }
        }

        return j + 1;
    }
};
```
```Python3 []
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if not nums:
            return 0

        j = 0
        for i in range(1, len(nums)):
            if nums[j] != nums[i]:
                j += 1
                nums[j] = nums[i]

        return j + 1
```
```JavaScript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let j = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[j] !== nums[i]) {
            nums[++j] = nums[i];
        }
    }

    return j + 1;
};
```
```C# []
public class Solution {
    public int RemoveDuplicates(int[] nums) {
        if (nums.Length == 0) {
            return 0;
        }

        int j = 0;
        for (int i = 1; i < nums.Length; i++) {
            if (nums[j] != nums[i]) {
                nums[++j] = nums[i];
            }
        }

        return j + 1;
    }
}
```
```Rust []
impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        if nums.is_empty() {
            return 0;
        }

        let mut j = 0;
        for i in 1..nums.len() {
            if nums[j] != nums[i] {
                j += 1;
                nums[j] = nums[i];
            }
        }

        (j + 1) as i32
    }
}
```

---


---

![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)
