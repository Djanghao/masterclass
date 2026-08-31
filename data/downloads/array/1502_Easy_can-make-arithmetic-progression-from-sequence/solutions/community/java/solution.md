# Python🔥Java🔥C++🔥Simple Solution🔥Sorting / Without Sorting

**Author:** techwired8
**Votes:** 40
**Link:** [https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/3602439/](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/3602439/)

---

# !! BIG ANNOUNCEMENT !!
I am currently Giving away my premium content well-structured assignments and study materials to clear interviews at top companies related to computer science and data science to my current Subscribers. This is only for the first 10,000 Subscribers. **DON'T FORGET** to Subscribe. Please the check the community tab on the channel for more info

# Search \uD83D\uDC49 `Tech Wired Leetcode` to Subscribe


# or

# Click the Link in my Profile

# Sorting

# Approach:

- Sort the given array in ascending order.
- Calculate the common difference by subtracting the second element from the first element.
- Iterate through the remaining elements of the sorted array and check if the difference between the current element and the previous element is equal to the common difference. If not, return false.
- If we finish iterating through all the elements without finding any inconsistencies, return true.

# Intuition:
The approach for this problem relies on the fact that in an arithmetic progression, the difference between any two consecutive elements is constant. By sorting the array, we ensure that the elements are in ascending order, making it easier to check for a consistent difference. We calculate the common difference and then iterate through the sorted array to verify that the difference between each pair of consecutive elements matches the common difference. If at any point the difference does not match, we know that the array does not form an arithmetic progression. If we reach the end of the iteration without finding any inconsistencies, we conclude that the array forms an arithmetic progression.

```Python []
class Solution:
    def canMakeArithmeticProgression(self, arr):
        arr.sort()  
        diff = arr[1] - arr[0]

        
        for i in range(2, len(arr)):
            if arr[i] - arr[i-1] != diff:
                return False

        return True
```
```Java []
class Solution {
    public boolean canMakeArithmeticProgression(int[] arr) {
        Arrays.sort(arr);
        int diff = arr[1] - arr[0];

        for (int i = 2; i < arr.length; i++) {
            if (arr[i] - arr[i-1] != diff) {
                return false;
            }
        }

        return true;
    }
}

```
```C++ []

class Solution {
public:
    bool canMakeArithmeticProgression(std::vector<int>& arr) {
        std::sort(arr.begin(), arr.end());
        int diff = arr[1] - arr[0];

        for (int i = 2; i < arr.size(); i++) {
            if (arr[i] - arr[i-1] != diff) {
                return false;
            }
        }

        return true;
    }
};

```

# Without Sorting

# Approach:

- Initialize variables length, min_val, and max_val.
- Iterate through the array to find the minimum and maximum values.
- Calculate the common difference using the formula (max_val - min_val) / (length - 1).
- Iterate through the array and for each element, calculate the expected value based on the minimum value and the index multiplied by the common difference.
- Check if the expected value exists in the array. If not, return false.
- If all expected values are found, return true.
# Intuition:
The approach for this problem involves finding the minimum and maximum values in the array to determine the range. From the range, we calculate the common difference, assuming the array forms an arithmetic progression. Then, we iterate through the array and check if each element matches the expected value based on the minimum value and the index multiplied by the common difference. If any element deviates from the expected value, we can conclude that the array does not form an arithmetic progression. If all elements match the expected values, we conclude that the array forms an arithmetic progression.

```Python []
class Solution:
    def canMakeArithmeticProgression(self, arr):
        length = len(arr)
        min_val = min(arr)
        max_val = max(arr)

        diff = (max_val - min_val) / (length - 1)

        for i in range(length):
            expected = min_val + i * diff
            if expected not in arr:
                return False

        return True
```
```Java []
class Solution {
    public boolean canMakeArithmeticProgression(int[] arr) {
        int length = arr.length;
        int min_val = Integer.MAX_VALUE;
        int max_val = Integer.MIN_VALUE;

        for (int num : arr) {
            min_val = Math.min(min_val, num);
            max_val = Math.max(max_val, num);
        }

        double diff = (double) (max_val - min_val) / (length - 1);

        for (int i = 0; i < length; i++) {
            double expected = min_val + i * diff;
            boolean found = false;
            for (int num : arr) {
                if (Math.abs(num - expected) < 1e-9) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                return false;
            }
        }

        return true;
    }
}

```
```C++ []


class Solution {
public:
    bool canMakeArithmeticProgression(std::vector<int>& arr) {
        int length = arr.size();
        int min_val = INT_MAX;
        int max_val = INT_MIN;

        for (int num : arr) {
            min_val = std::min(min_val, num);
            max_val = std::max(max_val, num);
        }

        double diff = static_cast<double>(max_val - min_val) / (length - 1);

        for (int i = 0; i < length; i++) {
            double expected = min_val + i * diff;
            bool found = false;
            for (int num : arr) {
                if (std::abs(num - expected) < 1e-9) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                return false;
            }
        }

        return true;
    }
};

```

# An Upvote will be encouraging \uD83D\uDC4D
