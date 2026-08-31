# C# SortedList O(n*lgn*lgn)

**Author:** lilongxue
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-index-of-permutation/solutions/5619625/](https://leetcode.com/problems/find-the-index-of-permutation/solutions/5619625/)

---

# Intuition
Use a sorted list `visited` to achieve lgn for both insertion and random access for the already visited array.
# Approach
Go from back to front of perm. Let the last element have an offset of 1, and the second last element have 2, and so on. Put the last element into visited.
When we encounter an element, do not add it to visited immediately. We first find how many elements in visited are less than it (let it be x). x can be got by binary search, considering the O(lgn) nature for reading and writing of SortedList, so for each element, the time cost is O(lgn * lgn).
 Then the outcome of this element = x * (itsOffset!). We add the outcome to the result, and add the element to visited.
When we have gone over the front of the array, the result is what we want.
# Complexity
- Time complexity:
O(n*lgn*lgn)
- Space complexity:
O(n)
# Code
```
public class Solution {
    public int GetPermutationIndex(int[] perm) {
        int len = perm.Length;
        long modMe = 1000000007;
        long result = 0;

        System.Collections.Generic.SortedList<int,int> visited =
            new System.Collections.Generic.SortedList<int,int>();
        int last = perm[len - 1];
        visited.Add(last, 0);


        long factorial = 1;
        for (int offset = 2, ub = 1 + len;
            offset < ub; factorial = (factorial * offset) % modMe, offset++) {
            int val = perm[len - offset];

            int low = 0, high = visited.Count - 1;
            // find earliest high where
            // visited[high] > val
            if ((int)(visited.GetKeyAtIndex(high)) < val) {
                high++;
            } else {
                while (low < high) {
                    int mid = (low + high) >> 1;
                    if ((int)(visited.GetKeyAtIndex(mid)) > val)    high = mid;
                    else    low = 1 + mid;
                }
            }

            result = (result + high * factorial) % modMe;
            visited.Add(val, 0);
        }

        
        return (int)result;
    }
}
```