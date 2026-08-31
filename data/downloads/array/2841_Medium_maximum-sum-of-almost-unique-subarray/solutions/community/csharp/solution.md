# Fully Explained || Beginner Friendly || Maximizing Subarray Sum: Sliding Window with HashMap

**Author:** LakshayBrejwal_1_0
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/3993676/](https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/3993676/)

---

# Maximizing Subarray Sum

## Approach: Sliding Window with Hash Map

### Explanation

In this solution, we aim to find the maximum possible sum of a subarray of length `k` that appears at least `m` times within the given array `nums`. To achieve this, we employ a sliding window technique along with a hash map to efficiently track element frequencies within the window.

Here's how our approach works step by step:

1. We initialize two variables, `maxSum` and `currentSum`, to keep track of the maximum sum found and the current sum, respectively.

2. Additionally, we create an unordered map called `elementFrequency` to store the frequency of elements within the current window.

3. We use two pointers, `left` and `right`, to iterate through the array `nums`. The `left` pointer denotes the left boundary of the window, and the `right` pointer denotes the right boundary.

4. For each element `nums[right]` added to the window, we update its frequency in the `elementFrequency` map and add its value to the `currentSum`.

5. If the length of the current window (i.e., `right - left + 1`) exceeds `k`, we need to shrink the window from the left side. We remove the element at index `left` from the `elementFrequency` map and subtract its value from the `currentSum`. We increment `left` to continue shrinking the window.

6. We check if the size of the `elementFrequency` map (i.e., the number of distinct elements in the current window) is greater than or equal to `m`. If it is, we update `maxSum` with the maximum of `maxSum` and `currentSum`.

7. We continue this process until the `right` pointer reaches the end of the array.

8. Finally, we return the value of `maxSum`, which represents the maximum sum of a subarray of length `k` that appears at least `m` times within the array.

### Dry Run

Let's dry run an example to illustrate how the approach works:

Input:
- `nums = [1, 2, 1, 2, 3]`
- `k = 2`
- `m = 2`

Step 1: Initialization
- `maxSum = 0`
- `currentSum = 0`
- `elementFrequency = {}`

Step 2: Sliding Window Iteration

- Initially, `left = 0` and `right = 0`.

Step 3: Expanding the Window (right pointer moves)
- Add `nums[0]` (value 1) to the window:
  - Update `elementFrequency`: `{1: 1}`
  - Update `currentSum`: `currentSum = 1`

Step 4: Expanding the Window (right pointer moves)
- Add `nums[1]` (value 2) to the window:
  - Update `elementFrequency`: `{1: 1, 2: 1}`
  - Update `currentSum`: `currentSum = 3`

Step 5: Expanding the Window (right pointer moves)
- Add `nums[2]` (value 1) to the window:
  - Update `elementFrequency`: `{1: 2, 2: 1}`
  - Update `currentSum`: `currentSum = 4`

Step 6: Shrinking the Window (left pointer moves)
- The window size exceeds `k`, so we remove `nums[0]` (value 1) from the window:
  - Update `elementFrequency`: `{1: 1, 2: 1}`
  - Update `currentSum`: `currentSum = 3`
  - Increment `left` to 1.

Step 7: Expanding the Window (right pointer moves)
- Add `nums[3]` (value 2) to the window:
  - Update `elementFrequency`: `{1: 1, 2: 2}`
  - Update `currentSum`: `currentSum = 5`

Step 8: Expanding the Window (right pointer moves)
- Add `nums[4]` (value 3) to the window:
  - Update `elementFrequency`: `{1: 1, 2: 2, 3: 1}`
  - Update `currentSum`: `currentSum = 8`

Step 9: Shrinking the Window (left pointer moves)
- The window size exceeds `k`, so we remove `nums[1]` (value 2) from the window:
  - Update `elementFrequency`: `{1: 1, 2: 1, 3: 1}`
  - Update `currentSum`: `currentSum = 6`
  - Increment `left` to 2.

Step 10: Shrinking the Window (left pointer moves)
- The window size exceeds `k`, so we remove `nums[2]` (value 1) from the window:
  - Update `elementFrequency`: `{2: 1, 3: 1}`
  - Update `currentSum`: `currentSum = 5`
  - Increment `left` to 3.

Step 11: Shrinking the Window (left pointer moves)
- The window size exceeds `k`, so we remove `nums[3]` (value 2) from the window:
  - Update `elementFrequency`: `{3: 1}`
  - Update `currentSum`: `currentSum = 3`
  - Increment `left` to 4.

Step 12: Shrinking the Window (left pointer moves)
- The window size exceeds `k`, so we remove `nums[4]` (value 3) from the window:
  - Update `elementFrequency`: `{}`
  - Update `currentSum`: `currentSum = 0`
  - Increment `left` to 5.

Step 13: Continue Iteration
- The right pointer reaches the end of the array.

Step 14: Return the Result
- `maxSum = 8` (maximum sum of a subarray of length `k=2` that appears at least `m=2` times).

Result: The maximum possible sum of a subarray of length 2 that appears at least 2 times within `[1, 2, 1, 2, 3]` is 8.

### Edge Cases

- **Edge Case 1:** When `m` is greater than the number of unique elements in `nums`, it's impossible to find a

 subarray of length `k` that appears at least `m` times, so the function should return 0. The approach handles this case by checking the size of `elementFrequency`.

- **Edge Case 2:** When `k` is greater than the length of `nums`, it's not possible to have a subarray of length `k`, so the function should return 0. The approach implicitly handles this case as it never allows the window size to exceed `k`.

### Complexity Analysis

- Time Complexity: O(n), where `n` is the length of the input array `nums`. We perform a single pass through the array.

- Space Complexity: O(k), where `k` is the size of the `elementFrequency` map, which represents the maximum number of unique elements within a subarray of length `k`.

### C++ Code

```cpp []
class Solution {
public:
    long long maxSum(vector<int>& nums, int m, int k) {
        long long maxSum = 0;
        long long currentSum = 0;
        unordered_map<int, int> elementFrequency;
        int left = 0;

        for (int right = 0; right < nums.size(); right++) {
            int currentElement = nums[right];

            // Update frequency and sum
            elementFrequency[currentElement]++;
            currentSum += currentElement;

            // Shrink the window if it exceeds k elements
            while (right - left + 1 > k) {
                int leftElement = nums[left];

                // Update frequency and sum
                elementFrequency[leftElement]--;
                if (elementFrequency[leftElement] == 0) {
                    elementFrequency.erase(leftElement);
                }
                currentSum -= leftElement;

                // Move the left pointer to shrink the window
                left++;
            }

            // Check if the subarray has at least m distinct elements
            if (elementFrequency.size() >= m) {
                maxSum = max(maxSum, currentSum);
            }
        }

        return maxSum;
    }
};
```


```java []
public class Solution {
    public long maxSum(List<Integer> nums, int m, int k) {
        long maxSum = 0;
        long currentSum = 0;
        Map<Integer, Integer> elementFrequency = new HashMap<>();
        int left = 0;

        for (int right = 0; right < nums.size(); right++) {
            int currentElement = nums.get(right);

            // Update frequency and sum
            elementFrequency.put(currentElement, elementFrequency.getOrDefault(currentElement, 0) + 1);
            currentSum += currentElement;

            // Shrink the window if it exceeds k elements
            while (right - left + 1 > k) {
                int leftElement = nums.get(left);

                // Update frequency and sum
                elementFrequency.put(leftElement, elementFrequency.get(leftElement) - 1);
                if (elementFrequency.get(leftElement) == 0) {
                    elementFrequency.remove(leftElement);
                }
                currentSum -= leftElement;

                // Move the left pointer to shrink the window
                left++;
            }

            // Check if the subarray has at least m distinct elements
            if (elementFrequency.size() >= m) {
                maxSum = Math.max(maxSum, currentSum);
            }
        }

        return maxSum;
    }
}

```


```python []
class Solution:
    def maxSum(self, nums: List[int], m: int, k: int) -> int:
        maxSum = 0
        currentSum = 0
        elementFrequency = {}
        left = 0

        for right in range(len(nums)):
            currentElement = nums[right]

            # Update frequency and sum
            elementFrequency[currentElement] = elementFrequency.get(currentElement, 0) + 1
            currentSum += currentElement

            # Shrink the window if it exceeds k elements
            while right - left + 1 > k:
                leftElement = nums[left]

                # Update frequency and sum
                elementFrequency[leftElement] -= 1
                if elementFrequency[leftElement] == 0:
                    del elementFrequency[leftElement]
                currentSum -= leftElement

                # Move the left pointer to shrink the window
                left += 1

            # Check if the subarray has at least m distinct elements
            if len(elementFrequency) >= m:
                maxSum = max(maxSum, currentSum)

        return maxSum
```



```javascript []
var maxSum = function(nums, m, k) {
    let maxSum = 0;
    let currentSum = 0;
    const elementFrequency = new Map();
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        const currentElement = nums[right];

        // Update frequency and sum
        elementFrequency.set(currentElement, (elementFrequency.get(currentElement) || 0) + 1);
        currentSum += currentElement;

        // Shrink the window if it exceeds k elements
        while (right - left + 1 > k) {
            const leftElement = nums[left];

            // Update frequency and sum
            elementFrequency.set(leftElement, elementFrequency.get(leftElement) - 1);
            if (elementFrequency.get(leftElement) === 0) {
                elementFrequency.delete(leftElement);
            }
            currentSum -= leftElement;

            // Move the left pointer to shrink the window
            left++;
        }

        // Check if the subarray has at least m distinct elements
        if

 (elementFrequency.size >= m) {
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
};
```
---
| Language | Runtime | Memory |
|----------|---------|--------|
| C++      | 120 ms  | 163 MB |
| Java     | 23 ms  | 49 MB |
| Python   | 414 ms  | 20 MB |
| JavaScript | 113 ms | 56 MB |

---

# Consider UPVOTING\u2B06\uFE0F

![image.png](./images/0.png)

# DROP YOUR SUGGESTIONS IN THE COMMENT

## Keep Coding\uD83E\uDDD1\u200D\uD83D\uDCBB

 -- *MR.ROBOT SIGNING OFF*