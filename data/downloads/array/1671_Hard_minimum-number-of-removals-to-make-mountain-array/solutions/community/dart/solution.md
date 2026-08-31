# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solutions/5986491/](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solutions/5986491/)

---

![image.png](./images/0.png)

---


### Intuition
A mountain array has a peak element that\u2019s larger than the elements on either side, with strictly increasing elements on the left and strictly decreasing elements on the right. Therefore, for each position in the array, we can calculate the Longest Increasing Subsequence (LIS) from the left and the Longest Decreasing Subsequence (LDS) from the right. The goal is to maximize the length of the mountain array and then subtract it from the total number of elements to find the minimum removals needed.

---

### Approach
1. Compute the LIS for each index moving from left to right.
2. Compute the LDS for each index moving from right to left.
3. Find the maximum possible mountain array length by summing the LIS and LDS for each valid peak (where both LIS and LDS are greater than 1).
4. The answer is the total number of elements minus the maximum mountain array length.

---

### Complexity
- **Time Complexity:** \\(O(n^2)\\), as each element requires comparisons with previous elements in both LIS and LDS calculations.
- **Space Complexity:** \\(O(n)\\), for the LIS and LDS arrays.

---

### Code


```dart []
class Solution {
  int minimumMountainRemovals(List<int> nums) {
    int n = nums.length;
    List<int> lis = List.filled(n, 1);
    List<int> lds = List.filled(n, 1);

    for (int i = 1; i < n; i++) {
      for (int j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          lis[i] = max(lis[i], lis[j] + 1);
        }
      }
    }

    for (int i = n - 2; i >= 0; i--) {
      for (int j = n - 1; j > i; j--) {
        if (nums[i] > nums[j]) {
          lds[i] = max(lds[i], lds[j] + 1);
        }
      }
    }

    int maxLength = 0;
    for (int i = 1; i < n - 1; i++) {
      if (lis[i] > 1 && lds[i] > 1) {
        maxLength = max(maxLength, lis[i] + lds[i] - 1);
      }
    }

    return n - maxLength;
  }

  int max(int a, int b) => a > b ? a : b;
}
```


```javascript []
var minimumMountainRemovals = function(nums) {
    const n = nums.length;
    const lis = Array(n).fill(1);
    const lds = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                lis[i] = Math.max(lis[i], lis[j] + 1);
            }
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = n - 1; j > i; j--) {
            if (nums[i] > nums[j]) {
                lds[i] = Math.max(lds[i], lds[j] + 1);
            }
        }
    }

    let maxLength = 0;
    for (let i = 1; i < n - 1; i++) {
        if (lis[i] > 1 && lds[i] > 1) {
            maxLength = Math.max(maxLength, lis[i] + lds[i] - 1);
        }
    }

    return n - maxLength;
};
```


```python []
class Solution:
    def minimumMountainRemovals(self, nums):
        n = len(nums)
        lis = [1] * n
        lds = [1] * n

        for i in range(1, n):
            for j in range(i):
                if nums[i] > nums[j]:
                    lis[i] = max(lis[i], lis[j] + 1)

        for i in range(n - 2, -1, -1):
            for j in range(n - 1, i, -1):
                if nums[i] > nums[j]:
                    lds[i] = max(lds[i], lds[j] + 1)

        max_length = 0
        for i in range(1, n - 1):
            if lis[i] > 1 and lds[i] > 1:
                max_length = max(max_length, lis[i] + lds[i] - 1)

        return n - max_length
```


```java []
class Solution {
    public int minimumMountainRemovals(int[] nums) {
        int n = nums.length;
        int[] lis = new int[n];
        int[] lds = new int[n];
        Arrays.fill(lis, 1);
        Arrays.fill(lds, 1);

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    lis[i] = Math.max(lis[i], lis[j] + 1);
                }
            }
        }

        for (int i = n - 2; i >= 0; i--) {
            for (int j = n - 1; j > i; j--) {
                if (nums[i] > nums[j]) {
                    lds[i] = Math.max(lds[i], lds[j] + 1);
                }
            }
        }

        int maxLength = 0;
        for (int i = 1; i < n - 1; i++) {
            if (lis[i] > 1 && lds[i] > 1) {
                maxLength = Math.max(maxLength, lis[i] + lds[i] - 1);
            }
        }

        return n - maxLength;
    }
}
```


```go []
func minimumMountainRemovals(nums []int) int {
    n := len(nums)
    lis := make([]int, n)
    lds := make([]int, n)
    for i := range lis {
        lis[i] = 1
        lds[i] = 1
    }

    for i := 1; i < n; i++ {
        for j := 0; j < i; j++ {
            if nums[i] > nums[j] {
                lis[i] = max(lis[i], lis[j]+1)
            }
        }
    }

    for i := n - 2; i >= 0; i-- {
        for j := n - 1; j > i; j-- {
            if nums[i] > nums[j] {
                lds[i] = max(lds[i], lds[j]+1)
            }
        }
    }

    maxLength := 0
    for i := 1; i < n-1; i++ {
        if lis[i] > 1 && lds[i] > 1 {
            maxLength = max(maxLength, lis[i]+lds[i]-1)
        }
    }

    return n - maxLength
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```

``` C++ []
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minimumMountainRemovals(vector<int>& nums) {
        int n = nums.size();
        vector<int> lis(n, 1); // Longest Increasing Subsequence lengths
        vector<int> lds(n, 1); // Longest Decreasing Subsequence lengths

        // Compute LIS for each element from the left
        for (int i = 1; i < n; ++i) {
            for (int j = 0; j < i; ++j) {
                if (nums[i] > nums[j]) {
                    lis[i] = max(lis[i], lis[j] + 1);
                }
            }
        }

        // Compute LDS for each element from the right
        for (int i = n - 2; i >= 0; --i) {
            for (int j = n - 1; j > i; --j) {
                if (nums[i] > nums[j]) {
                    lds[i] = max(lds[i], lds[j] + 1);
                }
            }
        }

        int maxLength = 0;
        // Calculate the maximum length of a mountain array
        for (int i = 1; i < n - 1; ++i) {
            if (lis[i] > 1 && lds[i] > 1) { // Valid peak
                maxLength = max(maxLength, lis[i] + lds[i] - 1);
            }
        }

        // Minimum elements to remove
        return n - maxLength;
    }
};


---


![image.png](./images/1.png) {:style='width:250px'}