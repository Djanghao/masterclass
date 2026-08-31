# CPP | BS | Lower bound | TIme log(n) | Space O(1)

**Author:** amirkpatna
**Votes:** 26
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/3017781/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/3017781/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
find total number of zeros and first index of any positive number
`totalNumberOfZeros = firstPosIndex - firstZeroIndex`
`totalNumberOfNegNums = firstPosIndex - totalNumberOfZeros`
`totalNumberOfPosNums = n - firstPosIndex`

# Approach
<!-- Describe your approach to solving the problem. -->
find `firstPosIndex` using binary search , `lower_bound` in cpp
find `firstZeroIndex` using binary search , `lower_bound` in cpp
and use above formula.

# Complexity
- Time complexity: `O(logn)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(1)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int maximumCount(vector<int>& v) {
        int n = v.size();
        int firstPos = lower_bound(v.begin(),v.end(),1) - v.begin();
        int firstZero = lower_bound(v.begin(),v.end(),0) - v.begin();
        int numberOfZeros = firstPos - firstZero;
        return max(n - firstPos,firstPos - numberOfZeros);
        
    }
};
```

Little update from the comments.

```
class Solution {
public:
    int maximumCount(vector<int>& v) {
        int n = v.size();
        int firstPos = lower_bound(v.begin(),v.end(),1) - v.begin();
        int firstZero = lower_bound(v.begin(),v.end(),0) - v.begin();
        return max(n - firstPos,firstZero);
        
    }
};
```