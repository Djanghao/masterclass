# Simple Explanation with Intuition || C++ || O(N) time ✅

**Author:** jitesh_gawas
**Votes:** 134
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4052092/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4052092/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We store the count of the element that occurs maximum number of times.

Notice that if the count of max occuring element is less than n/2 times, then the element can be cancelled by remaining elements (It is given that elements are sorted in non-decreasing order. Hence all remaining elements will be cancelled amongst themselves). In this case, if array size is even, then we say that ans is 0 and 1 incase the array size is odd. Because after cancelling all elements, 1 element is still remaining at the end.


If the element occurs more than n/2 times, so now it cannot cancel all elements. But it will still cancel all remaining elements.
How many elements are remaining? The elements remaining are (n - maxi). So elements left are maxi - (n - maxi) = 2*maxi - n;



<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int minLengthAfterRemovals(vector<int>& nums) {
        int n = nums.size();
        unordered_map<int, int> mp;
        for(int i : nums){
            mp[i]++;
        }
        int maxi = 0;
        for(auto it : mp){
            maxi = max(maxi, it.second);
        }
        if(maxi <= n/2){
            if(n%2){
                return 1;
            }
            else{
                return 0;
            }
        }
        return 2*maxi - n;
        
        
    }
};
```