# Beats 100% : Java Line sweep with easy to understand variable names

**Author:** codingninja007
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/3868147/](https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/3868147/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using Line sweep algorithm - keep in mind the intervals are inclusive

# Approach
<!-- Describe your approach to solving the problem. -->
key point is to decrement the next integer of the rightbound of the interval

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
class Solution {
    public int meetRequirement(int n, int[][] lights, int[] requirement) {
        
        int[] counter = new int[n];
        for(int[] l :lights)
        {
            int p = l[0];
            int r = l[1];
            int leftBound = Math.max(0,p-r);
            int rightBound = Math.min(n-1,p+r);
            counter[leftBound]++;
            if(rightBound<n-1)
                counter[rightBound+1]--;
        }

        int prefixSum=0;
        int count=0;
        for(int i =0;i<n;i++)
        {
            prefixSum = prefixSum + counter[i];
            if(prefixSum >=requirement[i])
                count++;
        }

        return count;
    }
}
```