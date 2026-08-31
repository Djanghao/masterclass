# 100% submission using maths in O(1) time and space complexity c++ code

**Author:** kiyomaru_28
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/3539956/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/3539956/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can see that the answer is only possible for multiple of 3.

# Approach
<!-- Describe your approach to solving the problem. -->
the 3 number should be x-1,x,x+1 and is a multiple of 3.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(1)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1+1+1)==O(1);

# Code
```
class Solution {
public:
    vector<long long> ans;
    vector<long long> sumOfThree(long long num) {
        if(num%3!=0)    return ans;
        else{
            ans.push_back(num/3-1);
            ans.push_back(num/3);
            ans.push_back(num/3+1);
        }
        return ans;
    }
};
```