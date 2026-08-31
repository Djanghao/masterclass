# Binary Search in C++, Java & Python

**Author:** cpcs
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-equal-numbers-blocks/solutions/4292382/](https://leetcode.com/problems/number-of-equal-numbers-blocks/solutions/4292382/)

---

# Intuition
For each index i, find the first (smallest) index x that nums[x] != nums[i].
[x, x - 1] is a block.

Then set i = x and continue.


# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(1)

# Code
C++
```
/**
 * Definition for BigArray.
 * class BigArray {
 * public:
 *     BigArray(vector<int> elements);
 *     int at(long long index);
 *     long long size();
 * };
 */
class Solution {
public:
    int countBlocks(BigArray* nums) {
        const long long n = nums->size();
        int r = 0;
        for (long long i = 0; i < n; ++i, ++r) {
            long long left = i, right = n - 1;
            while (left <= right) {
                const long long mid = (left + right) >> 1;
                if (nums->at(mid) == nums->at(i)) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            i = right;
        }
        return r;
        
    }
};
```

Java
```
/**
 * Definition for BigArray.
 * class BigArray {
 *     public BigArray(int[] elements);
 *     public int at(long index);
 *     public long size();
 * }
 */
class Solution {
    public int countBlocks(BigArray nums) {
        long n = nums.size();
        int r = 0;
        for (long i = 0; i < n; ++i, ++r) {
            long left = i, right = n - 1;
            while (left <= right) {
                long mid = (left + right) >>> 1;
                if (nums.at(mid) == nums.at(i)) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            i = right;
        }
        return r;
    }
}
```
Python
```
# Definition for BigArray.
# class BigArray:
#     def at(self, index: long) -> int:
#         pass
#     def size(self) -> long:
#         pass``
class Solution(object):
    def countBlocks(self, nums: Optional['BigArray']) -> int:
        n = nums.size()
        r = 0
        i = 0
        while i < n:
            left, right = i, n - 1
            while left <= right:
                mid = (left + right) // 2
                if nums.at(mid) == nums.at(i):
                    left = mid + 1
                else:
                    right = mid - 1
            i = right + 1
            r += 1
        return r
`