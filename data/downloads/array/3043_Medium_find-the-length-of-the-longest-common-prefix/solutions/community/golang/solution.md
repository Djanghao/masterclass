# 🌟 Step-by-Step Guide to Cracking the Longest Common Prefix 💯🔥

**Author:** withaarzoo
**Votes:** 106
**Link:** [https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5825830/](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5825830/)

---

![Screenshot 2024-07-02 113653.png](./images/0.png)

Explore a collection of solutions to LeetCode problems in multiple programming languages. Each solution includes a detailed explanation and step-by-step approach to solving the problem efficiently. Whether you're a beginner looking to learn or an experienced coder seeking optimized solutions, this repository aims to provide clear and insightful approaches to tackling challenging LeetCode problems.

### **Access daily LeetCode Solutions Repo :** [click here](https://github.com/withaarzoo/LeetCode-Solutions)

---

![image.png](./images/1.png)

---

# Intuition
The task requires finding the longest common prefix between elements of two arrays. We can treat each number as a string and extract common prefixes from these strings. We then compare the common prefixes of all pairs to determine the maximum length.

# Approach
1. **Convert each integer to a string**: This allows us to compare the prefixes of numbers character by character.
2. **Track prefixes using a hashmap**: We'll store each prefix found in the first array along with its frequency in a hashmap. This helps in quick lookup for common prefixes.
3. **Check for common prefixes in the second array**: For each number in the second array, convert it to a string and compare its prefixes with those stored in the hashmap.
4. **Maximize the length of common prefixes**: As we find matching prefixes, we keep track of the maximum length.

# Complexity
- **Time complexity**:  
  The time complexity is $$O(n \\cdot k + m \\cdot k)$$ where \\(n\\) is the length of `arr1`, \\(m\\) is the length of `arr2`, and \\(k\\) is the average number of digits in the integers.
  
- **Space complexity**:  
  The space complexity is $$O(n \\cdot k)$$ due to storing prefixes in the hashmap.

---

# Code
```C++ []
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int longestCommonPrefix(vector<int>& arr1, vector<int>& arr2) {
        unordered_map<string, int> prefixMap;
        
        // Step 1: Build the prefix map for arr1
        for (int num : arr1) {
            string strNum = to_string(num);
            string prefix = "";
            for (char ch : strNum) {
                prefix += ch;
                prefixMap[prefix]++;
            }
        }
        
        int maxLength = 0;
        
        // Step 2: Check for common prefixes in arr2
        for (int num : arr2) {
            string strNum = to_string(num);
            string prefix = "";
            for (char ch : strNum) {
                prefix += ch;
                if (prefixMap.find(prefix) != prefixMap.end()) {
                    maxLength = max(maxLength, static_cast<int>(prefix.length()));
                }
            }
        }
        
        return maxLength;
    }
};

```
```Java []
import java.util.HashMap;

class Solution {
    public int longestCommonPrefix(int[] arr1, int[] arr2) {
        HashMap<String, Integer> prefixMap = new HashMap<>();
        
        // Step 1: Build the prefix map for arr1
        for (int num : arr1) {
            String strNum = Integer.toString(num);
            String prefix = "";
            for (char ch : strNum.toCharArray()) {
                prefix += ch;
                prefixMap.put(prefix, prefixMap.getOrDefault(prefix, 0) + 1);
            }
        }
        
        int maxLength = 0;
        
        // Step 2: Check for common prefixes in arr2
        for (int num : arr2) {
            String strNum = Integer.toString(num);
            String prefix = "";
            for (char ch : strNum.toCharArray()) {
                prefix += ch;
                if (prefixMap.containsKey(prefix)) {
                    maxLength = Math.max(maxLength, prefix.length());
                }
            }
        }
        
        return maxLength;
    }
}

```
```JavaScript []
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    const prefixMap = new Map();
    
    // Step 1: Build the prefix map for arr1
    for (let num of arr1) {
        let strNum = num.toString();
        let prefix = "";
        for (let ch of strNum) {
            prefix += ch;
            prefixMap.set(prefix, (prefixMap.get(prefix) || 0) + 1);
        }
    }
    
    let maxLength = 0;
    
    // Step 2: Check for common prefixes in arr2
    for (let num of arr2) {
        let strNum = num.toString();
        let prefix = "";
        for (let ch of strNum) {
            prefix += ch;
            if (prefixMap.has(prefix)) {
                maxLength = Math.max(maxLength, prefix.length);
            }
        }
    }
    
    return maxLength;
};

```
```Python []
class Solution:
    def longestCommonPrefix(self, arr1: List[int], arr2: List[int]) -> int:
        prefix_map = {}
        
        # Step 1: Build the prefix map for arr1
        for num in arr1:
            str_num = str(num)
            prefix = ""
            for ch in str_num:
                prefix += ch
                prefix_map[prefix] = prefix_map.get(prefix, 0) + 1
        
        max_length = 0
        
        # Step 2: Check for common prefixes in arr2
        for num in arr2:
            str_num = str(num)
            prefix = ""
            for ch in str_num:
                prefix += ch
                if prefix in prefix_map:
                    max_length = max(max_length, len(prefix))
        
        return max_length

```
```Go []
package main

import (
    "strconv"
)

func longestCommonPrefix(arr1 []int, arr2 []int) int {
    prefixMap := make(map[string]int)
    
    // Step 1: Build the prefix map for arr1
    for _, num := range arr1 {
        strNum := strconv.Itoa(num)
        prefix := ""
        for _, ch := range strNum {
            prefix += string(ch)
            prefixMap[prefix]++
        }
    }
    
    maxLength := 0
    
    // Step 2: Check for common prefixes in arr2
    for _, num := range arr2 {
        strNum := strconv.Itoa(num)
        prefix := ""
        for _, ch := range strNum {
            prefix += string(ch)
            if _, found := prefixMap[prefix]; found {
                if len(prefix) > maxLength {
                    maxLength = len(prefix)
                }
            }
        }
    }
    
    return maxLength
}

```

---

# Step-by-Step Detailed Explanation

1. **Step 1**: 
   - For each number in `arr1`, we convert it to a string and build all possible prefixes.
   - These prefixes are stored in a hashmap (or dictionary) for quick lookup.
   
2. **Step 2**:
   - For each number in `arr2`, we also convert it to a string.
   - We then build prefixes for this number and check if the prefix exists in our hashmap.
   
3. **Step 3**:
   - We compare the lengths of the matching prefixes and keep track of the longest one.
   
---

![upvote cat.png](./images/2.png)
