# C++ - Easy - Using Binary Search

**Author:** nipunrathore
**Votes:** 26
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/3240775/](https://leetcode.com/problems/first-bad-version/solutions/3240775/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:$$O(log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        long long int start = 0 ; 
        long long int end = n ; 
        long long int minBadVersion ;
         
        while (start <= end)
        {
            long long int mid = (start + end) / 2 ; 

            if (isBadVersion(mid) == 1)
            {
                minBadVersion = mid ; 
                end = mid - 1 ; 
            }
            else
            {
                start = mid + 1 ; 
            }
        }
        return minBadVersion ;
    }
};
```
![815a317f-9cdf-46e2-a397-af8869dafa2e_1673498197.3721023.png](./images/0.png)
