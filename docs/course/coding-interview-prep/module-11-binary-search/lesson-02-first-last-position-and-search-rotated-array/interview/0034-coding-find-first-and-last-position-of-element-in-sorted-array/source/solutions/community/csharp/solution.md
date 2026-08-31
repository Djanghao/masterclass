# 😎Brute Force to Efficient Method 100% beats🤩 | Java | C++ | Python | JavaScript | C# | PHP

**Author:** Akhilesh21
**Votes:** 17
**Link:** [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/4147706/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/4147706/)

---

# 1st Method :- Brute force
The brute force approach involves iterating through the entire array and checking each element to see if it matches the target element. Here are the steps:

1. Initialize two variables, `first` and `last`, to -1. These variables will be used to store the `first` and last occurrence of the target element.
2. Iterate through the array using a for loop and check each element:
    - a. If the current element matches the target element and `first` is still -1, set `first` to the current index.
    - b. If the current element matches the target element, update `last` to the current index.
3. After the loop, return the values of `first` and `last`.
## Code
``` Java []
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int first = -1; // Initialize first occurrence to -1
        int last = -1;  // Initialize last occurrence to -1
        
        // Iterate through the array
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                if (first == -1) {
                    first = i; // Found the first occurrence
                }
                last = i; // Update last occurrence
            }
        }
        
        // Return the result as an array
        return new int[]{first, last};
    }
}

```
``` C++ []
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int first = -1; // Initialize first occurrence to -1
        int last = -1;  // Initialize last occurrence to -1
        
        // Iterate through the array
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == target) {
                if (first == -1) {
                    first = i; // Found the first occurrence
                }
                last = i; // Update last occurrence
            }
        }
        
        // Return the result as a vector
        return {first, last};
    }
};

```
``` Python []
class Solution:
    def searchRange(self, nums, target):
        first = -1  # Initialize first occurrence to -1
        last = -1   # Initialize last occurrence to -1
        
        # Iterate through the array
        for i in range(len(nums)):
            if nums[i] == target:
                if first == -1:
                    first = i  # Found the first occurrence
                last = i  # Update last occurrence
        
        # Return the result as a list
        return [first, last]
```

``` JavaScript []
var searchRange = function(nums, target) {
    let first = -1; // Initialize first occurrence to -1
    let last = -1;  // Initialize last occurrence to -1
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (first === -1) {
                first = i; // Found the first occurrence
            }
            last = i; // Update last occurrence
        }
    }
    
    // Return the result as an array
    return [first, last];
};
```
``` C# []
public int[] SearchRange(int[] nums, int target) {
    int first = -1; // Initialize first occurrence to -1
    int last = -1;  // Initialize last occurrence to -1
    
    // Iterate through the array
    for (int i = 0; i < nums.Length; i++) {
        if (nums[i] == target) {
            if (first == -1) {
                first = i; // Found the first occurrence
            }
            last = i; // Update last occurrence
        }
    }
    
    // Return the result as an array
    return new int[]{first, last};
}
```
``` PHP []
class Solution {
    function searchRange($nums, $target) {
        $first = -1; // Initialize first occurrence to -1
        $last = -1;  // Initialize last occurrence to -1
        
        $n = count($nums); // Get the length of the array
        
        // Iterate through the array
        for ($i = 0; $i < $n; $i++) {
            if ($nums[$i] == $target) {
                if ($first == -1) {
                    $first = $i; // Found the first occurrence
                }
                $last = $i; // Update last occurrence
            }
        }
        
        // Return the result as an array
        return [$first, $last];
    }
}
```


# Complexity
#### Time complexity: O(n);
- The code consists of a single loop that iterates through the entire array of length `n` where `n` is the length of the nums array.
- Within the loop, it performs constant time operations like comparisons and assignments.

Therefore, the overall time complexity of the code is O(n) because it iterates through the array once.
#### Space complexity: O(1);
- The code uses a constant amount of extra space for variables `first` and `last`, which do not depend on the input size.
- It creates a result array of size 2 to store the `first` and `last` occurrences, which is also constant space.

Hence, the space complexity of the code is O(1), indicating that it uses a constant amount of additional space regardless of the input size.

![upvote.png](./images/0.png)
### plz UpVote

# 2nd Method :- Efficient Method
Now, let's optimize the solution using a more efficient approach. We'll use a binary search to find the first and last occurrences of the target element. Here are the steps:

1. Initialize two variables, `first` and `last`, to -1. These variables will be used to store the first and last occurrence of the target element.
2. Perform a binary search to find the first occurrence:
    - a. Initialize `left` to 0 and `right` to the last index of the array.
    - b. While `left <= right`, calculate the middle index `mid`.
    - c. If `nums[mid]` is equal to the target, update `first` to `mid` and set `right` to `mid - 1` to search in the left half.
    - d. If `nums[mid]` is less than the target, set `left` to `mid + 1`.
    - e. If `nums[mid]` is greater than the target, set `right` to `mid - 1`.
3. Perform another binary search to find the last occurrence:
    - a. Initialize `left` to 0 and `right` to the last index of the array.
    - b. While `left <= right`, calculate the middle index `mid`.
    - c. If `nums[mid]` is equal to the target, update `last` to `mid` and set `left` to `mid + 1` to search in the right half.
    - d. If `nums[mid]` is less than the target, set `left` to `mid + 1`.
    - e. If `nums[mid]` is greater than the target, set `right` to `mid - 1`.
4. After both binary searches, return the values of `first` and `last`.

## Code
``` Java []
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int first = findFirst(nums, target);  // Find the first occurrence of the target.
        int last = findLast(nums, target);    // Find the last occurrence of the target.
        return new int[]{first, last};        // Return the result as an array.
    }
    
    // Helper function to find the first occurrence of the target.
    private int findFirst(int[] nums, int target) {
        int left = 0;              // Initialize the left pointer to the beginning of the array.
        int right = nums.length - 1; // Initialize the right pointer to the end of the array.
        int first = -1;            // Initialize the variable to store the first occurrence.

        while (left <= right) {
            int mid = left + (right - left) / 2;  // Calculate the middle index.

            if (nums[mid] == target) {
                first = mid;           // Update first occurrence.
                right = mid - 1;       // Move the right pointer to the left to search in the left half.
            } else if (nums[mid] < target) {
                left = mid + 1;        // If mid element is less than target, move the left pointer to the right.
            } else {
                right = mid - 1;       // If mid element is greater than target, move the right pointer to the left.
            }
        }
        
        return first;  // Return the index of the first occurrence.
    }
    
    // Helper function to find the last occurrence of the target.
    private int findLast(int[] nums, int target) {
        int left = 0;              // Initialize the left pointer to the beginning of the array.
        int right = nums.length - 1; // Initialize the right pointer to the end of the array.
        int last = -1;             // Initialize the variable to store the last occurrence.

        while (left <= right) {
            int mid = left + (right - left) / 2;  // Calculate the middle index.

            if (nums[mid] == target) {
                last = mid;            // Update last occurrence.
                left = mid + 1;        // Move the left pointer to the right to search in the right half.
            } else if (nums[mid] < target) {
                left = mid + 1;        // If mid element is less than target, move the left pointer to the right.
            } else {
                right = mid - 1;       // If mid element is greater than target, move the right pointer to the left.
            }
        }
        
        return last;  // Return the index of the last occurrence.
    }
}
```
``` C++ []
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int first = findFirst(nums, target); // Find the first occurrence of the target.
        int last = findLast(nums, target);   // Find the last occurrence of the target.
        return {first, last};                // Return the result as a vector.
    }
    
    // Helper function to find the first occurrence of the target.
    int findFirst(vector<int>& nums, int target) {
        int left = 0;                           // Initialize the left pointer to the beginning of the array.
        int right = nums.size() - 1;            // Initialize the right pointer to the end of the array.
        int first = -1;                         // Initialize the variable to store the first occurrence.

        while (left <= right) {
            int mid = left + (right - left) / 2;  // Calculate the middle index.

            if (nums[mid] == target) {
                first = mid;                    // Update first occurrence.
                right = mid - 1;               // Move the right pointer to the left to search in the left half.
            } else if (nums[mid] < target) {
                left = mid + 1;                // If mid element is less than target, move the left pointer to the right.
            } else {
                right = mid - 1;               // If mid element is greater than target, move the right pointer to the left.
            }
        }
        
        return first;                          // Return the index of the first occurrence.
    }
    
    // Helper function to find the last occurrence of the target.
    int findLast(vector<int>& nums, int target) {
        int left = 0;                           // Initialize the left pointer to the beginning of the array.
        int right = nums.size() - 1;            // Initialize the right pointer to the end of the array.
        int last = -1;                          // Initialize the variable to store the last occurrence.

        while (left <= right) {
            int mid = left + (right - left) / 2;  // Calculate the middle index.

            if (nums[mid] == target) {
                last = mid;                     // Update last occurrence.
                left = mid + 1;                // Move the left pointer to the right to search in the right half.
            } else if (nums[mid] < target) {
                left = mid + 1;                // If mid element is less than target, move the left pointer to the right.
            } else {
                right = mid - 1;               // If mid element is greater than target, move the right pointer to the left.
            }
        }
        
        return last;                           // Return the index of the last occurrence.
    }
};

```
``` Python []
class Solution:
    def searchRange(self, nums, target):
        # Helper function to find the first occurrence of the target.
        def findFirst(nums, target):
            left, right = 0, len(nums) - 1
            first = -1

            while left <= right:
                mid = left + (right - left) // 2  # Calculate the middle index.

                if nums[mid] == target:
                    first = mid  # Update first occurrence.
                    right = mid - 1  # Move the right pointer to the left to search in the left half.
                elif nums[mid] < target:
                    left = mid + 1  # If mid element is less than target, move the left pointer to the right.
                else:
                    right = mid - 1  # If mid element is greater than target, move the right pointer to the left.

            return first

        # Helper function to find the last occurrence of the target.
        def findLast(nums, target):
            left, right = 0, len(nums) - 1
            last = -1

            while left <= right:
                mid = left + (right - left) // 2  # Calculate the middle index.

                if nums[mid] == target:
                    last = mid  # Update last occurrence.
                    left = mid + 1  # Move the left pointer to the right to search in the right half.
                elif nums[mid] < target:
                    left = mid + 1  # If mid element is less than target, move the left pointer to the right.
                else:
                    right = mid - 1  # If mid element is greater than target, move the right pointer to the left.

            return last

        # Find the first and last occurrences of the target using the helper functions.
        first = findFirst(nums, target)
        last = findLast(nums, target)

        return [first, last]  # Return the result as a list.

```
``` JavaScript []
var searchRange = function(nums, target) {
    let first = findFirst(nums, target); // Find the first occurrence of the target.
    let last = findLast(nums, target);   // Find the last occurrence of the target.
    return [first, last];                // Return the result as an array.
};

// Helper function to find the first occurrence of the target.
function findFirst(nums, target) {
    let left = 0;                         // Initialize the left pointer to the beginning of the array.
    let right = nums.length - 1;          // Initialize the right pointer to the end of the array.
    let first = -1;                       // Initialize the variable to store the first occurrence.

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2); // Calculate the middle index.

        if (nums[mid] === target) {
            first = mid;                   // Update first occurrence.
            right = mid - 1;              // Move the right pointer to the left to search in the left half.
        } else if (nums[mid] < target) {
            left = mid + 1;               // If mid element is less than target, move the left pointer to the right.
        } else {
            right = mid - 1;              // If mid element is greater than target, move the right pointer to the left.
        }
    }
    
    return first;                         // Return the index of the first occurrence.
}

// Helper function to find the last occurrence of the target.
function findLast(nums, target) {
    let left = 0;                         // Initialize the left pointer to the beginning of the array.
    let right = nums.length - 1;          // Initialize the right pointer to the end of the array.
    let last = -1;                        // Initialize the variable to store the last occurrence.

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2); // Calculate the middle index.

        if (nums[mid] === target) {
            last = mid;                    // Update last occurrence.
            left = mid + 1;               // Move the left pointer to the right to search in the right half.
        } else if (nums[mid] < target) {
            left = mid + 1;               // If mid element is less than target, move the left pointer to the right.
        } else {
            right = mid - 1;              // If mid element is greater than target, move the right pointer to the left.
        }
    }
    
    return last;                          // Return the index of the last occurrence.
}

```
``` C# []
public int[] SearchRange(int[] nums, int target) {
    int first = FindFirst(nums, target); // Find the first occurrence of the target.
    int last = FindLast(nums, target);   // Find the last occurrence of the target.
    return new int[]{first, last};       // Return the result as an array.
}

// Helper function to find the first occurrence of the target.
private int FindFirst(int[] nums, int target) {
    int left = 0;                           // Initialize the left pointer to the beginning of the array.
    int right = nums.Length - 1;            // Initialize the right pointer to the end of the array.
    int first = -1;                         // Initialize the variable to store the first occurrence.

    while (left <= right) {
        int mid = left + (right - left) / 2; // Calculate the middle index.

        if (nums[mid] == target) {
            first = mid;                    // Update first occurrence.
            right = mid - 1;               // Move the right pointer to the left to search in the left half.
        } else if (nums[mid] < target) {
            left = mid + 1;                // If mid element is less than target, move the left pointer to the right.
        } else {
            right = mid - 1;               // If mid element is greater than target, move the right pointer to the left.
        }
    }
    
    return first;                          // Return the index of the first occurrence.
}

// Helper function to find the last occurrence of the target.
private int FindLast(int[] nums, int target) {
    int left = 0;                           // Initialize the left pointer to the beginning of the array.
    int right = nums.Length - 1;            // Initialize the right pointer to the end of the array.
    int last = -1;                          // Initialize the variable to store the last occurrence.

    while (left <= right) {
        int mid = left + (right - left) / 2; // Calculate the middle index.

        if (nums[mid] == target) {
            last = mid;                     // Update last occurrence.
            left = mid + 1;                // Move the left pointer to the right to search in the right half.
        } else if (nums[mid] < target) {
            left = mid + 1;                // If mid element is less than target, move the left pointer to the right.
        } else {
            right = mid - 1;               // If mid element is greater than target, move the right pointer to the left.
        }
    }
    
    return last;                           // Return the index of the last occurrence.
}

```
``` PHP []
class Solution {
    function searchRange($nums, $target) {
        $first = $this->findFirst($nums, $target); // Find the first occurrence of the target.
        $last = $this->findLast($nums, $target);   // Find the last occurrence of the target.
        return [$first, $last];                    // Return the result as an array.
    }
    
    // Helper function to find the first occurrence of the target.
    private function findFirst($nums, $target) {
        $left = 0;                             // Initialize the left pointer to the beginning of the array.
        $right = count($nums) - 1;             // Initialize the right pointer to the end of the array.
        $first = -1;                           // Initialize the variable to store the first occurrence.

        while ($left <= $right) {
            $mid = $left + floor(($right - $left) / 2);  // Calculate the middle index.

            if ($nums[$mid] == $target) {
                $first = $mid;                // Update first occurrence.
                $right = $mid - 1;           // Move the right pointer to the left to search in the left half.
            } elseif ($nums[$mid] < $target) {
                $left = $mid + 1;            // If mid element is less than target, move the left pointer to the right.
            } else {
                $right = $mid - 1;           // If mid element is greater than target, move the right pointer to the left.
            }
        }
        
        return $first;                        // Return the index of the first occurrence.
    }
    
    // Helper function to find the last occurrence of the target.
    private function findLast($nums, $target) {
        $left = 0;                             // Initialize the left pointer to the beginning of the array.
        $right = count($nums) - 1;             // Initialize the right pointer to the end of the array.
        $last = -1;                            // Initialize the variable to store the last occurrence.

        while ($left <= $right) {
            $mid = $left + floor(($right - $left) / 2);  // Calculate the middle index.

            if ($nums[$mid] == $target) {
                $last = $mid;                 // Update last occurrence.
                $left = $mid + 1;            // Move the left pointer to the right to search in the right half.
            } elseif ($nums[$mid] < $target) {
                $left = $mid + 1;            // If mid element is less than target, move the left pointer to the right.
            } else {
                $right = $mid - 1;           // If mid element is greater than target, move the right pointer to the left.
            }
        }
        
        return $last;                         // Return the index of the last occurrence.
    }
}
```

# Complexity
#### Time complexity: O(log n);
- The code consists of two binary search functions, findFirst and findLast.
- Each binary search operates on a sorted array of length n.
- Binary search has a time complexity of O(log n).
Since we are performing two separate binary searches, the overall time complexity of the searchRange function is O(log n) for each binary search, resulting in a total time complexity of O(log n) for the entire algorithm.

#### Space complexity: O(1);
- The space complexity of the code is primarily determined by the space used for variables and function call stack during recursion.
-  The primary variables used are `left`, `right`, `first`, `last`, and `mid`. These variables have a constant space requirement, so they do not contribute significantly to space complexity.
- There is no significant use of data structures that would consume additional space proportional to the input size.

Therefore, the space complexity of the given code is O(1), which means it uses a constant amount of extra space regardless of the input size.