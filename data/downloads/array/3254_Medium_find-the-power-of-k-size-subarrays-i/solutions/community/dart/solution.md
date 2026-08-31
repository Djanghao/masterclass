# 🔥SIMPILL 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/solutions/6089485/](https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/solutions/6089485/)

---


---

## Intuition
The task is to process a sliding window of size \\(k\\) across the array and determine whether each window contains consecutive integers. If the condition is satisfied, return the last integer of the window; otherwise, return `-1`.

---

## Approach
1. Use a sliding window of size \\(k\\).
2. For each window:
   - Check if all elements in the window are consecutive.
   - If they are consecutive, add the last element of the window to the result.
   - Otherwise, append `-1` to the result.
3. Return the resulting array.

To check for consecutiveness in each window, iterate through the window and verify if \\(nums[i] + 1 == nums[i+1]\\) for all \\(i\\) in the range.

---

## Complexity
- **Time Complexity**:  
   \\(O(n \\cdot k)\\), where \\(n\\) is the length of the array, and \\(k\\) is the window size, since each window checks up to \\(k-1\\) pairs for consecutiveness.
- **Space Complexity**:  
   \\(O(n-k+1)\\), the size of the output array.

---


```dart []
class Solution {
  List<int> resultsArray(List<int> nums, int k) {
    if (nums == null || nums.length < k) {
      return [];
    }

    List<int> result = List.filled(nums.length - k + 1, 0);
    int i = 0;
    int j = k - 1;
    int a = 0;

    while (j < nums.length) {
      if (_isConsecutive(nums, i, j)) {
        result[a] = nums[j];
      } else {
        result[a] = -1;
      }
      i++;
      j++;
      a++;
    }

    return result;
  }

  bool _isConsecutive(List<int> nums, int start, int end) {
    for (int i = start; i < end; i++) {
      if (nums[i] + 1 != nums[i + 1]) {
        return false;
      }
    }
    return true;
  }
}
```


```java []
class Solution {
    public int[] resultsArray(int[] nums, int k) {
        if (nums == null || nums.length < k) return new int[0];

        int n = nums.length;
        int[] result = new int[n - k + 1];
        int a = 0;

        for (int i = 0, j = k - 1; j < n; i++, j++) {
            if (isConsecutive(nums, i, j)) {
                result[a++] = nums[j];
            } else {
                result[a++] = -1;
            }
        }

        return result;
    }

    private boolean isConsecutive(int[] nums, int start, int end) {
        for (int i = start; i < end; i++) {
            if (nums[i] + 1 != nums[i + 1]) {
                return false;
            }
        }
        return true;
    }
}
```


```javascript []
function resultsArray(nums, k) {
    if (!nums || nums.length < k) return [];

    const result = [];
    for (let i = 0, j = k - 1; j < nums.length; i++, j++) {
        if (isConsecutive(nums, i, j)) {
            result.push(nums[j]);
        } else {
            result.push(-1);
        }
    }

    return result;
}

function isConsecutive(nums, start, end) {
    for (let i = start; i < end; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            return false;
        }
    }
    return true;
}
```


```python []
class Solution:
    def resultsArray(self, nums, k):
        if not nums or len(nums) < k:
            return []

        result = []
        for i in range(len(nums) - k + 1):
            if self.is_consecutive(nums, i, i + k - 1):
                result.append(nums[i + k - 1])
            else:
                result.append(-1)
        return result

    def is_consecutive(self, nums, start, end):
        for i in range(start, end):
            if nums[i] + 1 != nums[i + 1]:
                return False
        return True
```


```cpp []
class Solution {
public:
    vector<int> resultsArray(vector<int>& nums, int k) {
        if (nums.empty() || nums.size() < k) return {};

        vector<int> result(nums.size() - k + 1, 0);
        int a = 0;

        for (int i = 0, j = k - 1; j < nums.size(); i++, j++) {
            if (isConsecutive(nums, i, j)) {
                result[a++] = nums[j];
            } else {
                result[a++] = -1;
            }
        }

        return result;
    }

private:
    bool isConsecutive(vector<int>& nums, int start, int end) {
        for (int i = start; i < end; i++) {
            if (nums[i] + 1 != nums[i + 1]) {
                return false;
            }
        }
        return true;
    }
};
```


```go []
func resultsArray(nums []int, k int) []int {
    if len(nums) < k {
        return []int{}
    }

    result := make([]int, len(nums)-k+1)
    a := 0

    for i, j := 0, k-1; j < len(nums); i, j = i+1, j+1 {
        if isConsecutive(nums, i, j) {
            result[a] = nums[j]
        } else {
            result[a] = -1
        }
        a++
    }

    return result
}

func isConsecutive(nums []int, start, end int) bool {
    for i := start; i < end; i++ {
        if nums[i]+1 != nums[i+1] {
            return false
        }
    }
    return true
}
```

---

![image.png](./images/0.png) {:style='width:250px'}