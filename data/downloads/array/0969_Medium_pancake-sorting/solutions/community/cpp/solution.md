# Easy C++ Code, beats 80% time

**Author:** Kyouma45
**Votes:** 4
**Link:** [https://leetcode.com/problems/pancake-sorting/solutions/3550995/](https://leetcode.com/problems/pancake-sorting/solutions/3550995/)

---


<!-- Describe your first thoughts on how to solve this problem. -->


# Approach
<!-- Describe your approach to solving the problem. -->
First I search for the greatest element, then try to place the greatest element to the rightmost side.
Continue this process for all the elements in the decreasring order.
!!!This does not result in min output but works just fine.

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<int> pancakeSort(vector<int>& arr) {
        int n=arr.size(),max;
        vector<int>res;
        std::vector<int>::iterator itr=arr.begin();
        while(n>0)
        {
            max=0;
            for(int i=0;i<n;i++)
            {
                if(arr[i]>arr[max])
                    max=i;
            }
            int target=arr[max],pos=max;
            while(arr[n-1]!=target)
            {
                res.push_back(pos+1);
                reverse(itr,itr+pos+1);
                pos=0;
                res.push_back(n);
                reverse(itr,itr+n);
            }
            n--;
        }
        return res;
    }
};
```