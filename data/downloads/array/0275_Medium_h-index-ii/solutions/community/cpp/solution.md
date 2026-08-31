# Solution in  C++

**Author:** ashish_madhup
**Votes:** 6
**Link:** [https://leetcode.com/problems/h-index-ii/solutions/3420753/](https://leetcode.com/problems/h-index-ii/solutions/3420753/)

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
```
class Solution {
public:
    int hIndex(vector<int>& citations) 
    {
        int n = citations.size();
        int min = 0, max = n - 1;
        int mid;
        while (min <= max)
         {
            mid = (min + max) / 2;
            if (citations[mid] < n - mid) 
            {
                min = mid + 1;
            } 
            else 
            {
                max = mid - 1;
            }
        }
        return n - min;
    }
};
```