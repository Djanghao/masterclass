# Duplicate Zeros Solution in C++

**Author:** The_Kunal_Singh
**Votes:** 20
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/3462758/](https://leetcode.com/problems/duplicate-zeros/solutions/3462758/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n*n/2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution {
public:
    void duplicateZeros(vector<int>& arr) {
        int i=0, n=arr.size();
        while(i<n)
        {
            if(arr[i]==0)
            {
                arr.insert(arr.begin()+i, 0);
                i += 2;
            }
            else
            {
                i++;
            }
        }
        arr.resize(n);
    }
};
```
![upvote new.jpg](./images/0.jpeg)
