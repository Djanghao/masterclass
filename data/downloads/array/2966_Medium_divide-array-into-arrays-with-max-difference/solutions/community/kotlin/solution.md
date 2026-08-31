# Easy to understand || Greedy || Kotlin 📱

**Author:** Thiennk
**Votes:** 4
**Link:** [https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/4425413/](https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/4425413/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
``Sorting`` and check the condition of problem ``any two elements in one array is less than or equal to k``

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(nlogn)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun divideArray(a: IntArray, k: Int): Array<IntArray> {
        if (a.size % 3 != 0) return Array(0,{IntArray(0)});
        var rs: Array<IntArray> = Array(a.size / 3, {IntArray(3)});
        a.sort();
        var j = 0;
        for (i in 0..(a.size/3)-1) {
            rs[i][0] = a[j++];
            rs[i][1] = a[j++];
            rs[i][2] = a[j++];
            if ( rs[i][2] - rs[i][0] > k)
                return Array(0,{IntArray(0)});
            
        }
        return rs;
        
        
    }
}
```