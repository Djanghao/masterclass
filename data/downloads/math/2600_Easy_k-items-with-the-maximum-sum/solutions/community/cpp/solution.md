# Conditions || Very simple & Easy to Understand Solution

**Author:** kreakEmp
**Votes:** 14
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3342008/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3342008/)

---



# Code
```
class Solution {
public:
    int kItemsWithMaximumSum(int numOnes, int numZeros, int numNegOnes, int k) {
        if(k <= numOnes) return k;
        if(k <= numOnes + numZeros) return numOnes;
        return numOnes - (k - numOnes - numZeros);
    }
};
```