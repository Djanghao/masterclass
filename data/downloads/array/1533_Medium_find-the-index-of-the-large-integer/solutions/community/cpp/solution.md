# C++ 100% speed / 100 % memory - very easy O(log3(N)) ternary search solution

**Author:** dkosmakov
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/768843/](https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/768843/)

---

```
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * class ArrayReader {
 *   public:
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y] 
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     int compareSub(int l, int r, int x, int y);
 *
 *     // Returns the length of the array
 *     int length();
 * };
 */

class Solution {
public:
    int getIndex(ArrayReader &reader) {
        return getIdx(reader, 0, reader.length() - 1);
    }
    
    int getIdx(ArrayReader &reader, int start, int end)
    {
        if (start == end)
            return end;

        const auto dist_side = (end - start) / 3; 
        
        const auto end_left = start + dist_side;
        const auto start_right = end - dist_side;
/*

           |< MID >|
[?????????????????????????????] <<- array
 |        |         |        |
 |< LEFT >|         |< RIGHT>|
 |        |         |        |
 |     end_left     |        |
 |             start_right   |
start                       end

*/        
            
        const auto cmp = reader.compareSub(start, end_left, start_right, end);
        if (cmp == 1)
            return getIdx(reader, start, end_left);
        if (cmp == -1)
            return getIdx(reader, start_right, end);
        
        return getIdx(reader, end_left + 1, start_right - 1);
    }
};
```