# Easy C++ solution || Beginner-friendly approach || Beats 90% !!

**Author:** prathams29
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/3703532/](https://leetcode.com/problems/maximum-of-absolute-value-expression/solutions/3703532/)

---

# Code
```
class Solution {
public:
    int maxAbsValExpr(vector<int>& arr1, vector<int>& arr2) {
        int temp1, temp2, temp3, temp4;
        int max1 = INT_MIN, max2 = INT_MIN, max3 = INT_MIN, max4 = INT_MIN;
        int min1 = INT_MAX, min2 = INT_MAX, min3 = INT_MAX, min4 = INT_MAX;
        for (int i = 0; i < arr1.size(); i++)
        {
            temp1 = arr1[i] + arr2[i] + i;
            temp2 = arr1[i] + arr2[i] - i;
            temp3 = arr1[i] - arr2[i] + i;
            temp4 = arr1[i] - arr2[i] - i;
            max1 = max(max1, temp1);
            min1 = min(min1, temp1);
            max2 = max(max2, temp2);
            min2 = min(min2, temp2);
            max3 = max(max3, temp3);
            min3 = min(min3, temp3);
            max4 = max(max4, temp4);
            min4 = min(min4, temp4);

        }
        return max(max((max1 - min1), (max2 - min2)), max((max3 - min3), (max4 - min4)));
    }
};
```