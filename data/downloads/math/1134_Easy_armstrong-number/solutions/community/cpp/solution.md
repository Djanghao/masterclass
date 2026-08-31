# beginner friendly c++ solution

**Author:** a1ashish1
**Votes:** 0
**Link:** [https://leetcode.com/problems/armstrong-number/solutions/5666708/](https://leetcode.com/problems/armstrong-number/solutions/5666708/)

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
```cpp []
class Solution {
public:

    int fun(int n){
        if(!n) return 0;
        return 1+fun(n/10);

        //return ans;
    }

    int sum(int n,int digits){
        int ans=0;
        while(n){
            ans+=pow(n%10,digits);
            n=n/10;
        }

        return ans;
    }

    bool isArmstrong(int n) {
        int digits = fun(n);
        return n == sum(n,digits);
    }
};
```