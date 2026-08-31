# 100%fasrter & 0Space || c++ 2 Line code

**Author:** yash___sharma_
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/3218237/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/3218237/)

---

```
class Solution {
public:
    vector<long long> sumOfThree(long long num) {
        if(num%3)return {};
        return {num/3-1,num/3,num/3+1};
    }
};
```