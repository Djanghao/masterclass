# 💯Faster✅💯 Lesser✅4 Methods🔥Binary Search🔥Two Pointers🔥Modified Binary Search🔥Linear Search

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 156
**Link:** [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/4147904/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/4147904/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 4 ways to solve this question with detailed explanation of each approach:

# Problem Explaination: 
Consider a long list of numbers that are listed from smallest to largest, in that order. We refer to this list as an array. Additionally, we are looking for a particular number on this list.

we now need to know not only if that number is in the list but also when and where it first and last appears.

**Here's an example:**

Array: [1, 2, 2, 4, 4, 4, 7, 9, 10]

Number we are looking for: 4

We want to find:

The first position where the number 4 appears, which is the index 3 in this case.
The last position where the number 4 appears, which is the index 5 in this case.

# \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering four different methods to solve this problem:
1.  Linear Search (Brute Force)
2. Binary Search (Two Binary Searches)
3. Modified Binary Search (Optimized)
4. Two-Pointer Approach

# 1.  Linear Search (Brute Force): 

- Initialize two variables, first and last, to -1.
- Iterate through the sorted array from left to right.
- When you encounter the target element for the first time, set first to the current index.
- Continue iterating to find the last occurrence of the target element and update last whenever you encounter it.
- Return first and last
# Complexity
- \u23F1\uFE0F Time Complexity: O(n) - In the worst case, you may have to traverse the entire array.

- \uD83D\uDE80 Space Complexity: O(1) - Constant extra space is used.

# Code
```Python []
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        first, last = -1, -1
        for i in range(len(nums)):
            if nums[i] == target:
                if first == -1:
                    first = i
                last = i
        return [first, last]

```
```Java []
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int first = -1, last = -1;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                if (first == -1) {
                    first = i;
                }
                last = i;
            }
        }
        return new int[]{first, last};
    }
}

```
```C++ []
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int first = -1, last = -1;
        for (int i = 0; i < nums.size(); ++i) {
            if (nums[i] == target) {
                if (first == -1) {
                    first = i;
                }
                last = i;
            }
        }
        return {first, last};
    }
};

```
```C []
int* searchRange(int* nums, int numsSize, int target, int* returnSize) {
    int first = -1, last = -1;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == target) {
            if (first == -1) {
                first = i;
            }
            last = i;
        }
    }

    int* result = (int*)malloc(2 * sizeof(int));
    result[0] = first;
    result[1] = last;
    *returnSize = 2;
    return result;
}

```
# 2. Binary Search (Two Binary Searches):
- Perform a binary search to find the first occurrence of the target element.
- Perform another binary search to find the last occurrence of the target element.
- Return the results from the two binary searches.
# Complexity
- \u23F1\uFE0F Time Complexity: O(n) - Two binary searches are performed.

- \uD83D\uDE80 Space Complexity: O(1) - Constant extra space is used.

# Code
```Python []
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        def findFirst(nums, target):
            left, right = 0, len(nums) - 1
            while left <= right:
                mid = left + (right - left) // 2
                if nums[mid] == target:
                    if mid == 0 or nums[mid - 1] != target:
                        return mid
                    else:
                        right = mid - 1
                elif nums[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1
            return -1
        
        def findLast(nums, target):
            left, right = 0, len(nums) - 1
            while left <= right:
                mid = left + (right - left) // 2
                if nums[mid] == target:
                    if mid == len(nums) - 1 or nums[mid + 1] != target:
                        return mid
                    else:
                        left = mid + 1
                elif nums[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1
            return -1
        
        first = findFirst(nums, target)
        last = findLast(nums, target)
        return [first, last]

```
```Java []
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int first = findFirst(nums, target);
        int last = findLast(nums, target);
        return new int[]{first, last};
    }

    private int findFirst(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        int first = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                if (mid == 0 || nums[mid - 1] != target) {
                    first = mid;
                    break;
                } else {
                    right = mid - 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return first;
    }

    private int findLast(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        int last = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                if (mid == nums.length - 1 || nums[mid + 1] != target) {
                    last = mid;
                    break;
                } else {
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return last;
    }
}

```
```C++ []
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int first = findFirst(nums, target);
        int last = findLast(nums, target);
        return {first, last};
    }

private:
    int findFirst(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        int first = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                if (mid == 0 || nums[mid - 1] != target) {
                    first = mid;
                    break;
                }
                else {
                    right = mid - 1;
                }
            }
            else if (nums[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return first;
    }

    int findLast(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        int last = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                if (mid == nums.size() - 1 || nums[mid + 1] != target) {
                    last = mid;
                    break;
                }
                else {
                    left = mid + 1;
                }
            }
            else if (nums[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return last;
    }
};

```
```C []
int* searchRange(int* nums, int numsSize, int target, int* returnSize) {
    int first = findFirst(nums, numsSize, target);
    int last = findLast(nums, numsSize, target);

    int* result = (int*)malloc(2 * sizeof(int));
    result[0] = first;
    result[1] = last;
    *returnSize = 2;
    return result;
}

int findFirst(int* nums, int numsSize, int target) {
    int left = 0, right = numsSize - 1;
    int first = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            if (mid == 0 || nums[mid - 1] != target) {
                first = mid;
                break;
            } else {
                right = mid - 1;
            }
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return first;
}

int findLast(int* nums, int numsSize, int target) {
    int left = 0, right = numsSize - 1;
    int last = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            if (mid == numsSize - 1 || nums[mid + 1] != target) {
                last = mid;
                break;
            } else {
                left = mid + 1;
            }
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return last;
}

```
# 3. Modified Binary Search (Optimized):
   - Initialize two variables, first and last, to -1.
- Perform a binary search to find the target element.
- When you find the target element, update first to the current index and continue searching for the first occurrence in the left subarray.
- Similarly, update last to the current index and continue searching for the last occurrence in the right subarray.
- Continue until the binary search terminates.
- Return first and last.
# Complexity
- \u23F1\uFE0F Time Complexity: O(n) - One binary search with constant additional work.

- \uD83D\uDE80 Space Complexity: O(1) - Constant extra space is used.

# Code
```Python []
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        def findFirst(nums, target):
            left, right = 0, len(nums) - 1
            first = -1
            while left <= right:
                mid = left + (right - left) // 2
                if nums[mid] == target:
                    first = mid
                    right = mid - 1
                elif nums[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1
            return first
        
        def findLast(nums, target):
            left, right = 0, len(nums) - 1
            last = -1
            while left <= right:
                mid = left + (right - left) // 2
                if nums[mid] == target:
                    last = mid
                    left = mid + 1
                elif nums[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1
            return last
        
        first = findFirst(nums, target)
        last = findLast(nums, target)
        return [first, last]

```
```Java []
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int first = findFirst(nums, target);
        int last = findLast(nums, target);
        return new int[]{first, last};
    }

    private int findFirst(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        int first = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                first = mid;
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return first;
    }

    private int findLast(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        int last = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                last = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return last;
    }
}

```
```C++ []
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int first = findFirst(nums, target);
        int last = findLast(nums, target);
        return {first, last};
    }

private:
    int findFirst(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        int first = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                first = mid;
                right = mid - 1;
            }
            else if (nums[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return first;
    }

    int findLast(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        int last = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                last = mid;
                left = mid + 1;
            }
            else if (nums[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        return last;
    }
};

```
```C []
int* searchRange(int* nums, int numsSize, int target, int* returnSize) {
    int first = findFirst(nums, numsSize, target);
    int last = findLast(nums, numsSize, target);

    int* result = (int*)malloc(2 * sizeof(int));
    result[0] = first;
    result[1] = last;
    *returnSize = 2;
    return result;
}

int findFirst(int* nums, int numsSize, int target) {
    int left = 0, right = numsSize - 1;
    int first = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            first = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return first;
}

int findLast(int* nums, int numsSize, int target) {
    int left = 0, right = numsSize - 1;
    int last = -1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            last = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return last;
}

```
# 4.  Two-Pointer Approach:
   - Initialize two pointers, left and right, to the beginning and end of the array, respectively.
- Initialize two variables, first and last, to -1.
- Use a while loop with the condition left <= right.
- Calculate the middle index as (left + right) / 2.
- If the middle element is equal to the target, update first and last accordingly and adjust the pointers.
- If the middle element is less than the target, update left.
- If the middle element is greater than the target, update right.
- Continue the loop until left is less than or equal to right.
- Return first and last.
# Complexity
- \u23F1\uFE0F Time Complexity: O(n) - One pass through the array using two pointers.

- \uD83D\uDE80 Space Complexity: O(1) - Constant extra space is used.

# Code
```Python []
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        left, right = 0, len(nums) - 1
        first, last = -1, -1
        
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                first = mid
                last = mid
                while first > 0 and nums[first - 1] == target:
                    first -= 1
                while last < len(nums) - 1 and nums[last + 1] == target:
                    last += 1
                return [first, last]
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        
        return [first, last]

```
```Java []
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        int first = -1, last = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                first = mid;
                last = mid;
                while (first > 0 && nums[first - 1] == target) {
                    first--;
                }
                while (last < nums.length - 1 && nums[last + 1] == target) {
                    last++;
                }
                break;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return new int[]{first, last};
    }
}

```
```C++ []
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        int first = -1, last = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                first = mid;
                last = mid;
                while (first > 0 && nums[first - 1] == target) {
                    first--;
                }
                while (last < nums.size() - 1 && nums[last + 1] == target) {
                    last++;
                }
                break;
            }
            else if (nums[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        
        return {first, last};
    }
};

```
```C []
int* searchRange(int* nums, int numsSize, int target, int* returnSize) {
    int left = 0, right = numsSize - 1;
    int first = -1, last = -1;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            first = mid;
            last = mid;
            while (first > 0 && nums[first - 1] == target) {
                first--;
            }
            while (last < numsSize - 1 && nums[last + 1] == target) {
                last++;
            }
            break;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    int* result = (int*)malloc(2 * sizeof(int));
    result[0] = first;
    result[1] = last;
    *returnSize = 2;
    return result;
}

```
# \uD83C\uDFC6Conclusion: 
The most effective methods are Methods 3 and 4, which have constant space complexity and an O(n) time complexity. 


# \uD83D\uDCA1 I invite you to check out my profile for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA