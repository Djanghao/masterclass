# ✨Easy Explanation 🔥 Time O(n) Space O(1)

**Author:** uncomplicated08
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/5193009/](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/5193009/)

---

# Intuition
The problem requires finding the length of the longest subarray with a positive product in a given list of integers. A subarray product is positive if it contains an even number of negative numbers or no negative numbers. We need to handle zeros separately as they reset the product.

\uD83D\uDD25 We don't need to calculate the actual product, as it's never used. We just need to know if it's +ve or -ve

# Approach
1. Initialize variables to keep track of the product, lengths, and indices of important positions (like zeros and first negative numbers).
2. Iterate through the list of integers.
   - If the current element is zero, reset the product and indices.
   - If the current element is negative, flip the sign of the product.
   - Calculate the maximum length of the subarray with a positive product based on the current state of the product and indices.
3. Return the maximum length found.

# Complexity
- Time complexity: 
$$O(n)$$ where \\(n\\) is the number of elements in the input list. This is because we traverse the list once.
- Space complexity: 
$$O(1)$$ since we only use a fixed amount of extra space regardless of the input size.

# Code
Variable names in the code snippet were modified and comments added to enhance readability and user-friendliness.
```python []
class Solution:
    def getMaxLen(self, nums: List[int]) -> int:
        # Initialize variables
        product = 1
        length = len(nums)
        last_zero_index = -1
        first_negative_index = -1
        max_length = 0
        start_index = 0
        
        # Iterate through the list
        for i in range(length):
            # Reset product and start index if encounter 0
            if nums[i] == 0:
                product = 1
                start_index = i + 1
                last_zero_index = i
                first_negative_index = -1
            else:
                # Update product and check for negative numbers
                if nums[i] < 0:
                    product = -product
                
                # Calculate max length
                if product > 0:
                    max_length = max(max_length, i - start_index + 1)
                else:
                    if first_negative_index != -1:
                        max_length = max(max_length, i - first_negative_index)
                    else:
                        first_negative_index = i
        
        return max_length
```

```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
        // Initialize variables
        let product = 1;
        const length = nums.length;
        let lastZeroIndex = -1;
        let firstNegativeIndex = -1;
        let maxLength = 0;
        let startIndex = 0;
        
        // Iterate through the list
        for (let i = 0; i < length; i++) {
            // Reset product and start index if encounter 0
            if (nums[i] === 0) {
                product = 1;
                startIndex = i + 1;
                lastZeroIndex = i;
                firstNegativeIndex = -1;
            } else {
                // Update product and check for negative numbers
                if (nums[i] < 0) {
                    product = -product;
                }
                
                // Calculate max length
                if (product > 0) {
                    maxLength = Math.max(maxLength, i - startIndex + 1);
                } else {
                    if (firstNegativeIndex !== -1) {
                        maxLength = Math.max(maxLength, i - firstNegativeIndex);
                    } else {
                        firstNegativeIndex = i;
                    }
                }
            }
        }
        
        return maxLength;
    }
```

```java []
public class Solution {
    public int getMaxLen(int[] nums) {
        // Initialize variables
        int product = 1;
        int length = nums.length;
        int lastZeroIndex = -1;
        int firstNegativeIndex = -1;
        int maxLength = 0;
        int startIndex = 0;
        
        // Iterate through the list
        for (int i = 0; i < length; i++) {
            // Reset product and start index if encounter 0
            if (nums[i] == 0) {
                product = 1;
                startIndex = i + 1;
                lastZeroIndex = i;
                firstNegativeIndex = -1;
            } else {
                // Update product and check for negative numbers
                if (nums[i] < 0) {
                    product = -product;
                }
                
                // Calculate max length
                if (product > 0) {
                    maxLength = Math.max(maxLength, i - startIndex + 1);
                } else {
                    if (firstNegativeIndex != -1) {
                        maxLength = Math.max(maxLength, i - firstNegativeIndex);
                    } else {
                        firstNegativeIndex = i;
                    }
                }
            }
        }
        
        return maxLength;
    }
}
```

```c++ []
class Solution {
public:
    int getMaxLen(vector<int>& nums) {
        // Initialize variables
        int product = 1;
        int length = nums.size();
        int lastZeroIndex = -1;
        int firstNegativeIndex = -1;
        int maxLength = 0;
        int startIndex = 0;
        
        // Iterate through the list
        for (int i = 0; i < length; i++) {
            // Reset product and start index if encounter 0
            if (nums[i] == 0) {
                product = 1;
                startIndex = i + 1;
                lastZeroIndex = i;
                firstNegativeIndex = -1;
            } else {
                // Update product and check for negative numbers
                if (nums[i] < 0) {
                    product = -product;
                }
                
                // Calculate max length
                if (product > 0) {
                    maxLength = max(maxLength, i - startIndex + 1);
                } else {
                    if (firstNegativeIndex != -1) {
                        maxLength = max(maxLength, i - firstNegativeIndex);
                    } else {
                        firstNegativeIndex = i;
                    }
                }
            }
        }
        
        return maxLength;
    }
};
```

```c []
int getMaxLen(int* nums, int numsSize) {
    // Initialize variables
    int product = 1;
    int lastZeroIndex = -1;
    int firstNegativeIndex = -1;
    int maxLength = 0;
    int startIndex = 0;
    
    // Iterate through the list
    for (int i = 0; i < numsSize; i++) {
        // Reset product and start index if encounter 0
        if (nums[i] == 0) {
            product = 1;
            startIndex = i + 1;
            lastZeroIndex = i;
            firstNegativeIndex = -1;
        } else {
            // Update product and check for negative numbers
            if (nums[i] < 0) {
                product = -product;
            }
            
            // Calculate max length
            if (product > 0) {
                maxLength = fmax(maxLength, i - startIndex + 1);
            } else {
                if (firstNegativeIndex != -1) {
                    maxLength = fmax(maxLength, i - firstNegativeIndex);
                } else {
                    firstNegativeIndex = i;
                }
            }
        }
    }
    
    return maxLength;
}
```

```csharp []
public class Solution {
    public int GetMaxLen(int[] nums) {
        // Initialize variables
        int product = 1;
        int length = nums.Length;
        int lastZeroIndex = -1;
        int firstNegativeIndex = -1;
        int maxLength = 0;
        int startIndex = 0;
        
        // Iterate through the list
        for (int i = 0; i < length; i++) {
            // Reset product and start index if encounter 0
            if (nums[i] == 0) {
                product = 1;
                startIndex = i + 1;
                lastZeroIndex = i;
                firstNegativeIndex = -1;
            } else {
                // Update product and check for negative numbers
                if (nums[i] < 0) {
                    product = -product;
                }
                
                // Calculate max length
                if (product > 0) {
                    maxLength = Math.Max(maxLength, i - startIndex + 1);
                } else {
                    if (firstNegativeIndex != -1) {
                        maxLength = Math.Max(maxLength, i - firstNegativeIndex);
                    } else {
                        firstNegativeIndex = i;
                    }
                }
            }
        }
        
        return maxLength;
    }
}
```

```kotlin []
class Solution {
    fun getMaxLen(nums: IntArray): Int {
        // Initialize variables
        var product = 1
        val length = nums.size
        var lastZeroIndex = -1
        var firstNegativeIndex = -1
        var maxLength = 0
        var startIndex = 0
        
        // Iterate through the list
        for (i in 0 until length) {
            // Reset product and start index if encounter 0
            if (nums[i] == 0) {
                product = 1
                startIndex = i + 1
                lastZeroIndex = i
                firstNegativeIndex = -1
            } else {
                // Update product and check for negative numbers
                if (nums[i] < 0) {
                    product = -product
                }
                
                // Calculate max length
                if (product > 0) {
                    maxLength = maxOf(maxLength, i - startIndex + 1)
                } else {
                    if (firstNegativeIndex != -1) {
                        maxLength = maxOf(maxLength, i - firstNegativeIndex)
                    } else {
                        firstNegativeIndex = i
                    }
                }
            }
        }
        
        return maxLength
    }
}
```