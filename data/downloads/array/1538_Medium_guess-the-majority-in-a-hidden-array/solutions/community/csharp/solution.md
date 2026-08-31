# C# solution beats 100% with self-explaination

**Author:** need_what
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/solutions/3468657/](https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/solutions/3468657/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * class ArrayReader {
 *   public:
 *     // Compares 4 different elements in the array
 *     // return 4 if the values of the 4 elements are the same (0 or 1).
 *     // return 2 if three\xA0elements have a value\xA0equal to 0\xA0and one\xA0element has value equal to 1\xA0or vice versa.
 *     // return 0 :\xA0if two element have a value equal to 0 and two elements have a value equal to 1.
 *     public int Query(int a, int b, int c, int d) {}
 *
 *     // Returns the length of the array
 *     public int Length() {}
 * };
 */

class Solution {
    public int GuessMajority(ArrayReader reader) {
            int sameAs0 = 1, diffAs0 = 0, IdxDiffAs0 = -1;
            Action<int, int, int> update = 
            (int q1, int q2, int idx) =>
            {
                if (q1 == q2)
                {
                    sameAs0++;
                }
                else
                {
                    diffAs0++;
                    IdxDiffAs0 = idx;
                }
            };
            int n = reader.Length();
            int val1234 = reader.Query(1, 2, 3, 4);
            
            // i = 1;
            int val0234 = reader.Query(0, 2, 3, 4);
            update(val1234, val0234, 1);

            // i = 2;
            int val0134 = reader.Query(0, 1, 3, 4);
            update(val1234, val0134, 2);

            // i = 3;
            int val0124 = reader.Query(0, 1, 2, 4);
            update(val1234, val0124, 3);

            int val0123 = reader.Query(0, 1, 2, 3);
            // i >= 4;
            for(int i = 4; i < n; i++)
            {
                int val = reader.Query(1, 2, 3, i);
                update(val0123, val, i);
            }

            if (sameAs0 == diffAs0) return -1;
            else if(sameAs0 < diffAs0) return IdxDiffAs0;
            else return 0;        
    }
}
```