# COCAINE COMPARE LEXI

**Author:** phoenix_sr
**Votes:** 11
**Link:** [https://leetcode.com/problems/largest-number/solutions/5802117/](https://leetcode.com/problems/largest-number/solutions/5802117/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we need to find out what combination of the numbers in form of strings will give the highest number 
for that we need to sort the nums array by the lexilogical weight of the combinations 
lets see how 
# Approach
<!-- Describe your approach to solving the problem. -->
we will first transform the nums into strings
then we will sort the nums by checking for which combination has the higher lexilogical value 
which inturn means more numerical value 
we will just return the array joined into one string 
we will handle the edge case of 0 by returning 0
# Complexity
- Time complexity:O(N log N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![wallhaven-l8x1pr.jpg](./images/0.jpeg)

# Code
```javascript []
var largestNumber = function(nums) {
    nums = nums.map(String)
    nums.sort((a,b)=>{
        if(a+b>b+a)return -1
        else if(a+b<b+a)return 1
        else return 0
    })
    if(nums[0]=='0')return '0'
    return nums.join('')
};
```
```python []
from functools import cmp_to_key

def largestNumber(nums):
    # Convert integers to strings
    nums = list(map(str, nums))
    
    # Define custom comparator
    def compare(a, b):
        if a + b > b + a:
            return -1
        elif a + b < b + a:
            return 1
        else:
            return 0
    
    # Sort using the custom comparator
    nums.sort(key=cmp_to_key(compare))
    
    # Handle the edge case where the largest number is "0"
    if nums[0] == '0':
        return '0'
    
    # Join the sorted list into a single string
    return ''.join(nums)

# Example usage
nums = [3, 30, 34, 5, 9]
print(largestNumber(nums))  # Output: "9534330"

```
```java []
import java.util.Arrays;

public class LargestNumber {
    public static String largestNumber(int[] nums) {
        // Convert integers to strings
        String[] numStrs = Arrays.stream(nums)
                                 .mapToObj(String::valueOf)
                                 .toArray(String[]::new);

        // Sort the array with a custom comparator
        Arrays.sort(numStrs, (a, b) -> (b + a).compareTo(a + b));

        // Handle the edge case where the largest number is "0"
        if (numStrs[0].equals("0")) {
            return "0";
        }

        // Join the sorted array into a single string
        return String.join("", numStrs);
    }

    public static void main(String[] args) {
        int[] nums = {3, 30, 34, 5, 9};
        System.out.println(largestNumber(nums));  // Output: "9534330"
    }
}

```
```c []
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Custom comparator for sorting strings
int compare(const void* a, const void* b) {
    char* str1 = *(char**)a;
    char* str2 = *(char**)b;
    
    // Concatenate both possible combinations
    char combo1[200], combo2[200];
    strcpy(combo1, str1);
    strcat(combo1, str2);
    
    strcpy(combo2, str2);
    strcat(combo2, str1);
    
    // Compare the two concatenated results
    return strcmp(combo2, combo1);  // Reverse order
}

char* largestNumber(int* nums, int numsSize) {
    // Allocate memory for string representation of numbers
    char** numStrs = (char**)malloc(numsSize * sizeof(char*));
    for (int i = 0; i < numsSize; i++) {
        numStrs[i] = (char*)malloc(12 * sizeof(char));  // Enough for int as string
        sprintf(numStrs[i], "%d", nums[i]);
    }
    
    // Sort the string array using qsort and the custom comparator
    qsort(numStrs, numsSize, sizeof(char*), compare);
    
    // Handle edge case where the largest number is "0"
    if (strcmp(numStrs[0], "0") == 0) {
        free(numStrs);
        return "0";
    }
    
    // Concatenate sorted numbers into the result string
    char* result = (char*)malloc(numsSize * 12 * sizeof(char));
    result[0] = '\\0';  // Initialize empty string
    for (int i = 0; i < numsSize; i++) {
        strcat(result, numStrs[i]);
        free(numStrs[i]);  // Free individual strings after concatenation
    }
    free(numStrs);
    
    return result;
}

int main() {
    int nums[] = {3, 30, 34, 5, 9};
    int numsSize = sizeof(nums) / sizeof(nums[0]);
    char* result = largestNumber(nums, numsSize);
    printf("%s\
", result);  // Output: "9534330"
    free(result);  // Free the result string after use
    return 0;
}
```