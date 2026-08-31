# Simple Binary Search with Sliding Window approach

**Author:** AdarshAcharya
**Votes:** 2
**Link:** [https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/3696477/](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/3696477/)

---

# Intuition
Sliding window binary search

# Approach
Simple binary search but the end pointer position is doubled if target is greater than the end element. Start pointer is moved to end whenever end is doubled. The sliding window grows in size

# Complexity
- Time complexity:
$$O(logn)$$

- Space complexity:
$$O(1)$$

# Code
```
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * class ArrayReader {
 *   public:
 *     int get(int index);
 * };
 */

class Solution {
public:
    int search(const ArrayReader& reader, int target) {
        if(reader.get(0)==target) return 0;
        if(reader.get(1)==target) return 1;
        int start=0,end=1;
        while(start<=end)
        {
            if(target > reader.get(end)) 
            {
                start = end;
                end *= 2;
            }
            else if(target <= reader.get(end))
            {
                int mid = start + (end - start)/2;
                if(reader.get(mid)==target) return mid;
                else if(target < reader.get(mid)) end = mid - 1;
                else start = mid + 1;
            }
        }
        return -1;
        
    }
};
```