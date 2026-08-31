# C# Simple Binary Search. 1.Search Boundary 2.Search Target

**Author:** unagiHuman
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/5672253/](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/5672253/)

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
 *     public int Get(int index) {}
 * }
 */

class Solution {
    public int Search(ArrayReader reader, int target) {
        var last = SearchlastIndex();
        var index = SearchTarget(last);
        if(index < 0) return -1;
        var val = reader.get(index);
        if(val != target) return -1;
        return index;

        int SearchTarget(int end)
        {
            var left = 0;
            var right = end;
            while(left < right)
            {
                var mid = left + (right - left)/2;
                var val = reader.get(mid);
                if(val >= target)
                {
                    right = mid;
                }
                else
                {
                    left = mid+1;
                }
            }
            return left;
        }

        int SearchlastIndex()
        {
            var left = 0;
            var right = 10000;
            while(left < right)
            {
                var mid = left + (right - left)/2;
                if(reader.get(mid) == int.MaxValue)
                {
                    right = mid;
                }
                else
                {
                    left = mid+1;
                }
            }
            return left;
        }
    }
}
```