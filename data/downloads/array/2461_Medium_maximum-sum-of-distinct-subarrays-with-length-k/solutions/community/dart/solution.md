# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/6062770/](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/6062770/)

---

![image.png](./images/0.png)


---

### Intuition
The problem is to find the maximum sum of a subarray of size `k` where all elements are distinct. A sliding window approach ensures that we can efficiently process the array while maintaining the distinctness of elements.

---

### Approach
1. Use the **sliding window technique** with a **hash set** to track distinct elements.
2. Expand the window by adding the current element and its value to the running sum.
3. If a duplicate is encountered or the window size exceeds `k`, shrink the window from the left.
4. Update the maximum sum whenever the window size reaches exactly `k`.

---

### Complexity
- **Time Complexity**: \\(O(n)\\)  
   Each element is added and removed from the hash set at most once, making this linear in terms of the number of elements in the array.
  
- **Space Complexity**: \\(O(k)\\)  
   The hash set stores at most `k` elements.

---


```dart []
class Solution {
  int maximumSubarraySum(List<int> nums, int k) {
    int n = nums.length;
    if (k > n) return 0;

    int maxSum = 0, currentSum = 0, start = 0;
    Set<int> seen = {};

    for (int end = 0; end < n; end++) {
      while (seen.contains(nums[end]) || seen.length >= k) {
        currentSum -= nums[start];
        seen.remove(nums[start]);
        start++;
      }

      seen.add(nums[end]);
      currentSum += nums[end];

      if (seen.length == k) {
        maxSum = maxSum > currentSum ? maxSum : currentSum;
      }
    }
    return maxSum;
  }
}
```


```java []
import java.util.HashSet;

class Solution {
    public int maximumSubarraySum(int[] nums, int k) {
        int n = nums.length;
        if (k > n) return 0;

        int maxSum = 0, currentSum = 0, start = 0;
        HashSet<Integer> seen = new HashSet<>();

        for (int end = 0; end < n; end++) {
            while (seen.contains(nums[end]) || seen.size() >= k) {
                currentSum -= nums[start];
                seen.remove(nums[start]);
                start++;
            }

            seen.add(nums[end]);
            currentSum += nums[end];

            if (seen.size() == k) {
                maxSum = Math.max(maxSum, currentSum);
            }
        }
        return maxSum;
    }
}
```


```javascript []
var maximumSubarraySum = function(nums, k) {
    let n = nums.length;
    if (k > n) return 0;

    let maxSum = 0, currentSum = 0, start = 0;
    let seen = new Set();

    for (let end = 0; end < n; end++) {
        while (seen.has(nums[end]) || seen.size >= k) {
            currentSum -= nums[start];
            seen.delete(nums[start]);
            start++;
        }

        seen.add(nums[end]);
        currentSum += nums[end];

        if (seen.size === k) {
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
};
```


```python []
def maximumSubarraySum(nums, k):
    n = len(nums)
    if k > n:
        return 0

    max_sum = 0
    current_sum = 0
    seen = set()
    start = 0

    for end in range(n):
        while nums[end] in seen or len(seen) >= k:
            current_sum -= nums[start]
            seen.remove(nums[start])
            start += 1

        seen.add(nums[end])
        current_sum += nums[end]

        if len(seen) == k:
            max_sum = max(max_sum, current_sum)

    return max_sum
```


```cpp []
#include <vector>
#include <unordered_set>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maximumSubarraySum(vector<int>& nums, int k) {
        int n = nums.size();
        if (k > n) return 0;

        int maxSum = 0, currentSum = 0, start = 0;
        unordered_set<int> seen;

        for (int end = 0; end < n; end++) {
            while (seen.count(nums[end]) || seen.size() >= k) {
                currentSum -= nums[start];
                seen.erase(nums[start]);
                start++;
            }

            seen.insert(nums[end]);
            currentSum += nums[end];

            if (seen.size() == k) {
                maxSum = max(maxSum, currentSum);
            }
        }
        return maxSum;
    }
};
```


```go []
func maximumSubarraySum(nums []int, k int) int {
    n := len(nums)
    if k > n {
        return 0
    }

    maxSum, currentSum, start := 0, 0, 0
    seen := make(map[int]bool)

    for end := 0; end < n; end++ {
        for seen[nums[end]] || len(seen) >= k {
            currentSum -= nums[start]
            delete(seen, nums[start])
            start++
        }

        seen[nums[end]] = true
        currentSum += nums[end]

        if len(seen) == k {
            if currentSum > maxSum {
                maxSum = currentSum
            }
        }
    }
    return maxSum
}
```

---

![image.png](./images/1.png) {:style='width:250px'}