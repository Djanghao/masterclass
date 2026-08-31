# FOUNDER'S SOLUTION 100% ✅✅69_BEATS_100%✅✅🔥Easy Solution🔥With Explanation🔥

**Author:** phoenix_sr
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5875940/](https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5875940/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we need to sort the binary strings in such a way that the final combined binary should have the greatest value 
for a given combination of binary strings inorder to get the maximum value we have to arrange them such that there are more 1's in the begining than the end 
let see how 
# Approach
<!-- Describe your approach to solving the problem. -->
first we will convert the numbers into binary 
we have to write our own sort function which is 1 line only 
we want the final string to have the greatest lexological order 
in the sort function when taken 2 strings a,b
we want to put them in such a way that a+b is greatest in lexilogical order 
so that is our sort functions logic 
check if a+b > b+a
and return it 
# Complexity
- Time complexity:O(NlogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![wallhaven-3lv8j6.jpg](./images/0.jpeg)

# Code
```javascript []
var maxGoodNumber = function(nums) {
    for(let i=0;i<nums.length;i++){
        nums[i]=nums[i].toString(2)
    }
    nums.sort((a,b)=>{
        if(a+b>b+a)return -1
        else return 1
    })
    nums=nums.join('')
    return parseInt(nums,2)
};
```
```python []
def max_good_number(nums):
    # Convert each number to binary string
    nums = [bin(x)[2:] for x in nums]
    
    # Sort using custom comparator
    nums.sort(key=lambda x: x*len(nums), reverse=True)
    
    # Join the sorted array into a single string
    result = ''.join(nums)
    
    # Convert the concatenated binary string back to integer
    return int(result, 2)

# Example usage
nums = [3, 30, 34, 5, 9]
print(max_good_number(nums))

```
```java []
import java.util.*;

public class Solution {
    public static int maxGoodNumber(int[] nums) {
        String[] binNums = new String[nums.length];
        
        // Convert each number to binary string
        for (int i = 0; i < nums.length; i++) {
            binNums[i] = Integer.toBinaryString(nums[i]);
        }
        
        // Sort using custom comparator
        Arrays.sort(binNums, (a, b) -> (b + a).compareTo(a + b));
        
        // Join the sorted array into a single string
        StringBuilder sb = new StringBuilder();
        for (String bin : binNums) {
            sb.append(bin);
        }
        
        // Convert the concatenated binary string back to integer
        return Integer.parseInt(sb.toString(), 2);
    }

    public static void main(String[] args) {
        int[] nums = {3, 30, 34, 5, 9};
        System.out.println(maxGoodNumber(nums)); // Example usage
    }
}

```
```c []
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int compare(const void *a, const void *b) {
    char ab[64], ba[64];
    sprintf(ab, "%s%s", *(char **)a, *(char **)b);
    sprintf(ba, "%s%s", *(char **)b, *(char **)a);
    return strcmp(ba, ab);  // Sort in descending order
}

int maxGoodNumber(int nums[], int size) {
    char *binNums[size];
    
    // Convert each number to binary string
    for (int i = 0; i < size; i++) {
        binNums[i] = malloc(33);  // Allocate memory for binary string
        itoa(nums[i], binNums[i], 2);  // Convert to binary
    }
    
    // Sort using custom comparator
    qsort(binNums, size, sizeof(char *), compare);
    
    // Join the sorted array into one large binary string
    char result[1000] = "";  // Large enough to hold the final result
    for (int i = 0; i < size; i++) {
        strcat(result, binNums[i]);
        free(binNums[i]);  // Free allocated memory
    }
    
    // Convert back to integer
    return strtol(result, NULL, 2);
}

int main() {
    int nums[] = {3, 30, 34, 5, 9};
    int size = sizeof(nums) / sizeof(nums[0]);
    printf("%d\
", maxGoodNumber(nums, size));
    return 0;
}
```
```c++ []
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

string toBinary(int n) {
    string res;
    while (n) {
        res = (n % 2 ? '1' : '0') + res;
        n /= 2;
    }
    return res.empty() ? "0" : res;
}

int maxGoodNumber(vector<int>& nums) {
    vector<string> binNums;
    
    // Convert each number to binary string
    for (int x : nums) {
        binNums.push_back(toBinary(x));
    }
    
    // Sort using custom comparator
    sort(binNums.begin(), binNums.end(), [](const string &a, const string &b) {
        return (b + a) < (a + b);  // Sort in descending order
    });
    
    // Join the sorted array into one large binary number
    string result;
    for (const string &s : binNums) {
        result += s;
    }
    
    // Convert back to integer
    return stoi(result, nullptr, 2);
}

int main() {
    vector<int> nums = {3, 30, 34, 5, 9};
    cout << maxGoodNumber(nums) << endl; // Example usage
    return 0;
}
```
