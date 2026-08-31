# C# Simple Binary Search

**Author:** unagiHuman
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/5672383/](https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/5672383/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
/**
 * // This is ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * class ArrayReader {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y] 
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     public int CompareSub(int l, int r, int x, int y) {}
 *
 *     // Returns the length of the array
 *     public int Length() {}
 * }
 */

class Solution {
    public int GetIndex(ArrayReader reader) {
        var N = reader.Length();
        var left = 0;
        var right = N-1;
        while(left < right)
        {
            var mid = left + (right - left)/2;
            var result = 0;
            if((right - left +1)%2==0)
            {
                result = reader.CompareSub(left,mid, mid+1,right);
            }
            else
            {
                result = reader.CompareSub(left,mid, mid,right);
            }
            if(result == 0)
            {
                return mid;
            }
            else if(result > 0)
            {
                right = mid;
            }
            else
            {
                left = mid + 1;
            }
        }
        return left;
    }
}
```