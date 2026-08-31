# ✅97.44%🔥Increasing & Decreasing🔥1 line code🔥

**Author:** MrAke
**Votes:** 98
**Link:** [https://leetcode.com/problems/monotonic-array/solutions/4102847/](https://leetcode.com/problems/monotonic-array/solutions/4102847/)

---

# Problem
#### The problem statement asks you to determine whether a given array nums is monotonic. An array is considered monotonic if it is either monotone increasing or monotone decreasing.

 **1.** **Monotone Increasing :**   An array is considered monotone increasing if for all indices i and j where i <= j, the element at index i is less than or equal to the element at index j. In other words, the values in the array are non-decreasing as you move from left to right.

**2.** **Monotone Decreasing :** An array is considered monotone decreasing if for all indices i and j where i <= j, the element at index i is greater than or equal to the element at index j. In other words, the values in the array are non-increasing as you move from left to right.

#### The task is to check if the given nums array satisfies either of these conditions. If it does, the function should return true, indicating that the array is monotonic. Otherwise, it should return false.
---
# Solution
#### 1. Initialize two boolean variables, increasing and decreasing, to true. These variables will be used to track whether the array is monotone increasing or monotone decreasing.

#### 2.Iterate through the array from the second element (i = 1) to the last element (i = nums.length - 1).

#### 3.For each pair of adjacent elements at indices i and i - 1, compare them:

- ***If nums[i] is greater than nums[i - 1], set decreasing to false. This means the array is not monotone decreasing.***

- ***If nums[i] is less than nums[i - 1], set increasing to false. This means the array is not monotone increasing.***

#### 4. During the iteration, if at any point both increasing and decreasing become false, you can immediately return false because the array is neither monotone increasing nor monotone decreasing.

#### 5.After the loop, if either increasing or decreasing is still true, it means the array is either monotone increasing or monotone decreasing, so you return true. Otherwise, you return false because the array is not monotonic.
---

```python []
class Solution:
    def isMonotonic(self, A: List[int]) -> bool:
        return all(A[i] <= A[i + 1] for i in range(len(A) - 1)) or all(A[i] >= A[i + 1] for i in range(len(A) - 1))

```
```C# []
public class Solution {
    public bool IsMonotonic(int[] nums) {
        bool increasing = true;
        bool decreasing = true;

        for (int i = 1; i < nums.Length; i++) {
            if (nums[i] > nums[i - 1]) {
                decreasing = false;
            } else if (nums[i] < nums[i - 1]) {
                increasing = false;
            }

            if (!increasing && !decreasing) {
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
    bool isMonotonic(vector<int>& nums) {
        bool increasing = true;
        bool decreasing = true;

        for (int i = 1; i < nums.size(); ++i) {
            if (nums[i] > nums[i - 1]) {
                decreasing = false;
            } else if (nums[i] < nums[i - 1]) {
                increasing = false;
            }

            if (!increasing && !decreasing) {
                return false;
            }
        }
        return true;
    }
};

```
```C []
bool isMonotonic(int* nums, int numsSize) {
    bool increasing = true;
    bool decreasing = true;

    for (int i = 1; i < numsSize; i++) {
        if (nums[i] > nums[i - 1]) {
            decreasing = false;
        } else if (nums[i] < nums[i - 1]) {
            increasing = false;
        }

        if (!increasing && !decreasing) {
            return false;
        }
    }

    return true; 
}

```
```Java []
class Solution {
    public boolean isMonotonic(int[] nums) {
        boolean increasing = true;
        boolean decreasing = true;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                decreasing = false;
            } else if (nums[i] < nums[i - 1]) {
                increasing = false;
            }

            if (!increasing && !decreasing) {
                return false;
            }
        }

        return true;
    }
}

```
```javascript []
var isMonotonic = function(nums) {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            decreasing = false;
        } else if (nums[i] < nums[i - 1]) {
            increasing = false;
        }

        if (!increasing && !decreasing) {
            return false;
        }
    }

    return true; 
};

```
```typescript []
function isMonotonic(nums: number[]): boolean {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            decreasing = false;
        } else if (nums[i] < nums[i - 1]) {
            increasing = false;
        }

        if (!increasing && !decreasing) {
            return false;
        }
    }

    return true;
}

```
```Go []
func isMonotonic(nums []int) bool {
    increasing := true
    decreasing := true
    for i := 1; i < len(nums); i++ {
        if nums[i] > nums[i-1] {
            decreasing = false
        } else if nums[i] < nums[i-1] {
            increasing = false
        }
        if !increasing && !decreasing {
            return false
        }
    }
    return true 
}
```
```rust []
impl Solution {
    pub fn is_monotonic(nums: Vec<i32>) -> bool {
        let mut increasing = true;
        let mut decreasing = true;

        for i in 1..nums.len() {
            if nums[i] > nums[i - 1] {
                decreasing = false;
            } else if nums[i] < nums[i - 1] {
                increasing = false;
            }
            if !increasing && !decreasing {
                return false;
            }
        }
        true 
    }
}
```
