# Bruteforce approach in Java

**Author:** thegr8khan
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/3166398/](https://leetcode.com/problems/find-anagram-mappings/solutions/3166398/)

---

# Intuition
Java Programmer

# Approach
instantiate an array int[] mapping and set its length to the length of num1 array. Loop throught num1 and loop once again through num2. if ith value in num1 is equal to jth value in num2, then set the ith value of mapping array to the index of num2. Return the mapping array after done looping. 

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n^2)

# Code
```
class Solution {
    public int[] anagramMappings(int[] nums1, int[] nums2) {
        int[] mapping = new int[nums1.length];
    
        // Nested loop interating through num1 and num2
        for (int i = 0; i < nums1.length; i++) {
            for (int j = 0; j < nums2.length; j++) {
                // set ith value of mapping if num1[i] == num2[j]
                if(nums1[i] == nums2[j]) {
                    mapping[i] = j;  
                }
            }
        }
        return mapping;
    }
}
```