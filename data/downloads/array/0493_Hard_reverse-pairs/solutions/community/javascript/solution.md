# ✅☑[C++/Java/Python/JavaScript] || Merge Sort || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 5
**Link:** [https://leetcode.com/problems/reverse-pairs/solutions/4125907/](https://leetcode.com/problems/reverse-pairs/solutions/4125907/)

---


# *PLEASE UPVOTE IF IT HELPED*

---


# Approach
***(Also explained in the code)***

1. **Merge Function (merge):**

   - This function is responsible for merging two sorted subarrays within the `nums` array.
   - It uses a temporary vector `temp` to store the merged result.
   - It maintains two pointers, `left` and `right`, to traverse the left and right subarrays.
   - It compares elements from both subarrays and appends the smaller element to the `temp` vector.
   - After both subarrays are exhausted, any remaining elements from the left and right subarrays are copied to `temp`.
   - Finally, it copies the merged result from `temp` back to the original `nums` array.

1. **Merge Sort Function (mergeSort):**

    - This function performs merge sort on the `nums` array to sort it.
    - It takes the `low` and `high` indices, which represent the range of the array to be sorted.
    - The base case is when `low` is greater than or equal to `high`, indicating a subarray with one or zero elements, in which case it returns 0.
    - It calculates the mid index as the midpoint between `low` and `high`.
    - Recursively, it sorts and counts reverse pairs in the left and right subarrays, calling itself on those subarrays.
    - It counts reverse pairs between the left and right subarrays using the `countPairs` function.
    - Finally, it merges the sorted subarrays using the `merge` function and returns the total count of reverse pairs.

1. **Count Pairs Function (countPairs):**

    - This function counts the number of reverse pairs between two halves of the array.
    - It uses two pointers, `i` and `right`, to traverse the left and right subarrays.
    - For each element in the left subarray, it finds the rightmost element in the right subarray that is greater than twice the value of the current element in the left subarray.
    - It calculates the count of such elements in the right subarray and adds it to the `count` variable.
    - The function returns the count of reverse pairs.

1. **Main Function (reversePairs):**

    - This is the entry point of the algorithm.
    - It calls the `mergeSort` function to sort the entire `nums` array and count reverse pairs.
    - The result of the sorting and counting is returned as the final answer.

---


# Complexity
- **Time complexity:**
$$O(nlogn)$$

- **Space complexity:**
$$O(n)$$

---


# Code
```C++ []
class Solution {
public:
    
    // Merge function to merge two sorted halves of the array
    void merge(vector<int> &nums, int low, int mid, int high){
        vector<int> temp; // Temporary vector to store the merged result
        int left = low;   // Pointer for the left subarray
        int right = mid + 1; // Pointer for the right subarray

        // Compare elements from both subarrays and merge them into temp
        while (left <= mid && right <= high) {
            if (nums[left] <= nums[right]) {
                temp.push_back(nums[left]);
                left++;
            } else {
                temp.push_back(nums[right]);
                right++;
            }
        }

        // Copy remaining elements from the left subarray, if any
        while (left <= mid) {
            temp.push_back(nums[left]);
            left++;
        }

        // Copy remaining elements from the right subarray, if any
        while (right <= high) {
            temp.push_back(nums[right]);
            right++;
        }

        // Copy the merged result back to the original array nums
        for (int i = low; i <= high; i++) {
            nums[i] = temp[i - low];
        }
    }

    // Merge Sort function to sort and count reverse pairs
    int mergeSort(vector<int> &nums, int low, int high){
        int count = 0; // Counter for reverse pairs

        // Base case: if the subarray has one or zero elements, return 0
        if (low >= high) return count;

        int mid = low + (high - low) / 2; // Calculate the midpoint

        // Recursively sort and count reverse pairs in left and right subarrays
        count += mergeSort(nums, low, mid);
        count += mergeSort(nums, mid + 1, high);

        // Count reverse pairs between the left and right subarrays
        count += countPairs(nums, low, mid, high);

        // Merge the sorted subarrays
        merge(nums, low, mid, high);

        return count; // Return the total count of reverse pairs
    }

    // Function to count reverse pairs between two halves
    int countPairs(vector<int> &nums, int low, int mid, int high){
        int right = mid + 1; // Pointer for the right subarray
        int count = 0;       // Counter for reverse pairs

        // Iterate through the left subarray
        for (int i = low; i <= mid; i++) {
            // Find the rightmost element in the right subarray
            // that is greater than twice the value of the current element
            while (right <= high && nums[i] > 2LL * nums[right]) {
                right++;
            }
            // Count the number of elements in the right subarray
            // that are less than or equal to half the value of the current element
            count += (right - (mid + 1));
        }
        return count; // Return the count of reverse pairs
    }

    // Main function to find and count reverse pairs in the array
    int reversePairs(vector<int>& nums) {
        return mergeSort(nums, 0, nums.size() - 1); // Call mergeSort with the entire array
    }
};



```

```java []
import java.util.Arrays;

class Solution {
    public int reversePairs(int[] nums) {
        int[] copy = Arrays.copyOf(nums, nums.length);
        return mergeSort(nums, copy, 0, nums.length - 1);
    }

    private int mergeSort(int[] nums, int[] copy, int low, int high) {
        if (low >= high) return 0;

        int mid = low + (high - low) / 2;
        int count = mergeSort(nums, copy, low, mid) + mergeSort(nums, copy, mid + 1, high);
        count += merge(nums, copy, low, mid, high);
        return count;
    }

    private int merge(int[] nums, int[] copy, int low, int mid, int high) {
        int count = 0;
        int left = low;
        int right = mid + 1;
        int index = low;

        while (left <= mid && right <= high) {
            if ((long) nums[left] <= 2L * nums[right]) {
                left++;
            } else {
                count += mid - left + 1;
                right++;
            }
        }

        left = low;
        right = mid + 1;

        while (left <= mid && right <= high) {
            if (nums[left] <= nums[right]) {
                copy[index++] = nums[left++];
            } else {
                copy[index++] = nums[right++];
            }
        }

        while (left <= mid) {
            copy[index++] = nums[left++];
        }

        while (right <= high) {
            copy[index++] = nums[right++];
        }

        System.arraycopy(copy, low, nums, low, high - low + 1);

        return count;
    }
}



```
```python []
class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        self.count = 0

        def merge_sort(nums, low, high):
            if low < high:
                mid = (low + high) // 2
                merge_sort(nums, low, mid)
                merge_sort(nums, mid + 1, high)
                merge(nums, low, mid, high)

        def merge(nums, low, mid, high):
            i, j = low, mid + 1
            while i <= mid and j <= high:
                if nums[i] <= 2 * nums[j]:
                    i += 1
                else:
                    self.count += mid - i + 1
                    j += 1

            temp = []
            i, j = low, mid + 1
            while i <= mid and j <= high:
                if nums[i] <= nums[j]:
                    temp.append(nums[i])
                    i += 1
                else:
                    temp.append(nums[j])
                    j += 1

            while i <= mid:
                temp.append(nums[i])
                i += 1

            while j <= high:
                temp.append(nums[j])
                j += 1

            for k in range(len(temp)):
                nums[low + k] = temp[k]

        merge_sort(nums, 0, len(nums) - 1)
        return self.count

```

```JavaScript []
var reversePairs = function(nums) {
    let count = 0;
    
    const mergeSort = (nums, low, high) => {
        if (low < high) {
            const mid = Math.floor((low + high) / 2);
            mergeSort(nums, low, mid);
            mergeSort(nums, mid + 1, high);
            count += merge(nums, low, mid, high);
        }
    };
    
    const merge = (nums, low, mid, high) => {
        let count = 0;
        const temp = [];
        let i = low;
        let j = mid + 1;
        
        while (i <= mid && j <= high) {
            if (nums[i] <= 2 * nums[j]) {
                i++;
            } else {
                count += mid - i + 1;
                j++;
            }
        }
        
        i = low;
        j = mid + 1;
        
        while (i <= mid && j <= high) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i]);
                i++;
            } else {
                temp.push(nums[j]);
                j++;
            }
        }
        
        while (i <= mid) {
            temp.push(nums[i]);
            i++;
        }
        
        while (j <= high) {
            temp.push(nums[j]);
            j++;
        }
        
        for (let k = 0; k < temp.length; k++) {
            nums[low + k] = temp[k];
        }
        
        return count;
    };
    
    mergeSort(nums, 0, nums.length - 1);
    return count;
};



```

# *PLEASE UPVOTE IF IT HELPED*

---

---

