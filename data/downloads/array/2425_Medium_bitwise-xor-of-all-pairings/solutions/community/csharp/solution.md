# C# 100% Solution

**Author:** starwind064
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/5917910/](https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/5917910/)

---

# Intuition
*XOR of even times of a number is zero (0)*
*XOR of odd times of a number is number itself*

# Approach
**Case 1:** Both arrays are even length so return 0
**Case 2:** Both arrays are odd length so xor each element in each array
**Case 3:** First array is even length and second array is odd length so xor each element in first array
**Case 4:** First array is odd length and second array is even length so xor each element in second array

# Complexity
- Time complexity: O(n + m)

- Space complexity: O(1)

# Code
```csharp []
public class Solution {
    public int XorAllNums(int[] nums1, int[] nums2)
    {
        int result = 0;

        /*
        XOR of even times of a number is zero (0)
        Both arrays are even so result is 0
        */
        if((nums1.Length % 2 == 0) && (nums2.Length % 2 == 0))
            return result;
        
        /*
        XOR of odd times of a number is number itself
        Both arrays are odd so return xor of each element in both arrays
        No need to calculate pairs
        */
        if((nums1.Length % 2 != 0) && (nums2.Length % 2 != 0))
        {
            for(int i = 0; i < nums1.Length; i++)
            {
                result = result ^ nums1[i];
            }

            for(int i = 0; i < nums2.Length; i++)
            {
                result = result ^ nums2[i];
            }
        }

        /*
        nums1 array length is even so each element in nums2 
        would calculate xor an even number of times resulting in 0
        nums2 array is odd so each element in nums1 would
        calculate xor an odd number of times resulting in itself
        Only need to calculate xor of each element in nums1
        */
        if((nums1.Length % 2 == 0) && (nums2.Length % 2 != 0))
        {
                for(int i = 0; i < nums1.Length; i++)
            {
                result = result ^ nums1[i];
            }
        }

        /*
        nums1 array length is odd so each element in nums2 
        would calculate xor an odd number of times resulting in itself
        nums2 array is even so each element in nums1 would
        calculate xor an even number of times resulting in 0
        Only need to calculate xor of each element in nums2
        */
        if((nums1.Length % 2 != 0) && (nums2.Length % 2 == 0))
        {
                for(int i = 0; i < nums2.Length; i++)
            {
                result = result ^ nums2[i];
            }
        }

        return result;
    }
}
```