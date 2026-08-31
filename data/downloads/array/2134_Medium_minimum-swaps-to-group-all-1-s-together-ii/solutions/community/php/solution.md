# Sliding Window Approach || Almost 90% beats in every language 🔥

**Author:** PrinceHiremath
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solutions/5572060/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/solutions/5572060/)

---

# Approach
The sliding window approach effectively minimizes the number of swaps by ensuring that the largest possible group of 1's is found within a contiguous segment of the array.
<!-- Describe your approach to solving the problem. -->
`Count Total Ones`: The total number of 1's in the array is counted first.

`Edge Cases` : If there are no 1's or all elements are 1's, no swaps are needed, so the function returns 0.

`Initial Window Setup` : A window of size 'totalOnes' is created. The initial count of 1's in this window is calculated.

`Sliding Window ` : The window is then slid across the array. For each slide:
\u2022 If the element that is left behind (i.e., nums[i-1]) is 1, it is subtracted from 'currentOnesInWindow'.
\u2022 The new element entering the window (i.e., nums[(i + totalOnes - 1) % n]) is added to 'currentOnesInWindow' if it is 1.
\u2022 maxOnesInWindow is updated to be the maximum of itself and 'currentOnesInWindow'.

`Result Calculation`:The minimum number of swaps required is 'totalOnes - maxOnesInWindow', which is the difference between the total number of 1's and the maximum number of 1's found in any window of size totalOnes.

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int minSwaps(vector<int>& nums) {
        int n = nums.size();
        int totalOnes = 0;

        for (int num : nums) {
            if (num == 1) {
                totalOnes++;
            }
        }

        if (totalOnes == 0 || totalOnes == n) {
            return 0;
        }

        int maxOnesInWindow = 0;
        int currentOnesInWindow = 0;

        for (int i = 0; i < totalOnes; i++) {
            if (nums[i] == 1) {
                currentOnesInWindow++;
            }
        }

        maxOnesInWindow = currentOnesInWindow;

        for (int i = 1; i < n; i++) {
            if (nums[i - 1] == 1) {
                currentOnesInWindow--;
            }
            if (nums[(i + totalOnes - 1) % n] == 1) {
                currentOnesInWindow++;
            }
            maxOnesInWindow = std::max(maxOnesInWindow, currentOnesInWindow);
        }

        return totalOnes - maxOnesInWindow;
    }
};
```
```java []
class Solution {
    public int minSwaps(int[] nums) {
        int n = nums.length;
        int totalOnes = 0;

        for (int num : nums) {
            if (num == 1) {
                totalOnes++;
            }
        }

        if (totalOnes == 0 || totalOnes == n) {
            return 0;
        }

        int maxOnesInWindow = 0;
        int currentOnesInWindow = 0;

        for (int i = 0; i < totalOnes; i++) {
            if (nums[i] == 1) {
                currentOnesInWindow++;
            }
        }

        maxOnesInWindow = currentOnesInWindow;

        for (int i = 1; i < n; i++) {
            if (nums[i - 1] == 1) {
                currentOnesInWindow--;
            }
            if (nums[(i + totalOnes - 1) % n] == 1) {
                currentOnesInWindow++;
            }
            maxOnesInWindow = Math.max(maxOnesInWindow, currentOnesInWindow);
        }

        return totalOnes - maxOnesInWindow;
    }
}

```
```python3 []
class Solution:
    def minSwaps(self, nums: List[int]) -> int:
        n  = len(nums)
        totalOnes = 0

        for num in nums:
            if num == 1:
                totalOnes += 1

        if totalOnes == 0 or totalOnes == n:
            return 0

        maxOnesInWindow = 0
        currentOnesInWindow = 0

        for i in range(totalOnes):
            if nums[i] == 1:
                currentOnesInWindow += 1
            
        maxOnesInWindow = currentOnesInWindow

        for i in range(1, n):
            if nums[i - 1] == 1:
                currentOnesInWindow -= 1
            if  nums[(i + totalOnes - 1)% n] == 1:
                currentOnesInWindow += 1
            maxOnesInWindow = max(maxOnesInWindow, currentOnesInWindow)
        return totalOnes - maxOnesInWindow

```
```c []
int minSwaps(int* nums, int numsSize) {
    int totalOnes = 0;

    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == 1) {
            totalOnes++;
        }
    }

    if (totalOnes == 0 || totalOnes == numsSize) {
        return 0;
    }

    int maxOnesInWindow = 0;
    int currentOnesInWindow = 0;

    for (int i = 0; i < totalOnes; i++) {
        if (nums[i] == 1) {
            currentOnesInWindow++;
        }
    }

    maxOnesInWindow = currentOnesInWindow;

    for (int i = 1; i < numsSize; i++) {
        if (nums[i - 1] == 1) {
            currentOnesInWindow--;
        }
        if (nums[(i + totalOnes - 1) % numsSize] == 1) {
            currentOnesInWindow++;
        }
        maxOnesInWindow = max(maxOnesInWindow, currentOnesInWindow);
    }

    return totalOnes - maxOnesInWindow;
}
int max(int a, int b) {
    return (a > b) ? a : b;
}
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let n = nums.length;
    let totalOnes = 0;

    for (let num of nums) {
        if (num === 1) {
            totalOnes++;
        }
    }

    if (totalOnes === 0 || totalOnes === n) {
        return 0;
    }

    let maxOnesInWindow = 0;
    let currentOnesInWindow = 0;

    for (let i = 0; i < totalOnes; i++) {
        if (nums[i] === 1) {
            currentOnesInWindow++;
        }
    }

    maxOnesInWindow = currentOnesInWindow;

    for (let i = 1; i < n; i++) {
        if (nums[i - 1] === 1) {
            currentOnesInWindow--;
        }
        if (nums[(i + totalOnes - 1) % n] === 1) {
            currentOnesInWindow++;
        }
        maxOnesInWindow = Math.max(maxOnesInWindow, currentOnesInWindow);
    }

    return totalOnes - maxOnesInWindow;
};
```
```typescript []
function minSwaps(nums: number[]): number {
    let n = nums.length;
    let totalOnes = 0;

    for (let num of nums) {
        if (num === 1) {
            totalOnes++;
        }
    }

    if (totalOnes === 0 || totalOnes === n) {
        return 0;
    }

    let maxOnesInWindow = 0;
    let currentOnesInWindow = 0;

    for (let i = 0; i < totalOnes; i++) {
        if (nums[i] === 1) {
            currentOnesInWindow++;
        }
    }

    maxOnesInWindow = currentOnesInWindow;

    for (let i = 1; i < n; i++) {
        if (nums[i - 1] === 1) {
            currentOnesInWindow--;
        }
        if (nums[(i + totalOnes - 1) % n] === 1) {
            currentOnesInWindow++;
        }
        maxOnesInWindow = Math.max(maxOnesInWindow, currentOnesInWindow);
    }

    return totalOnes - maxOnesInWindow;
};
```
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minSwaps($nums) {
        $n = count($nums);
    $totalOnes = 0;

    foreach ($nums as $num) {
        if ($num === 1) {
            $totalOnes++;
        }
    }

    if ($totalOnes === 0 || $totalOnes === $n) {
        return 0;
    }

    $maxOnesInWindow = 0;
    $currentOnesInWindow = 0;

    for ($i = 0; $i < $totalOnes; $i++) {
        if ($nums[$i] === 1) {
            $currentOnesInWindow++;
        }
    }

    $maxOnesInWindow = $currentOnesInWindow;

    for ($i = 1; $i < $n; $i++) {
        if ($nums[$i - 1] === 1) {
            $currentOnesInWindow--;
        }
        if ($nums[($i + $totalOnes - 1) % $n] === 1) {
            $currentOnesInWindow++;
        }
        $maxOnesInWindow = max($maxOnesInWindow, $currentOnesInWindow);
    }

    return $totalOnes - $maxOnesInWindow;
    }
}
```
