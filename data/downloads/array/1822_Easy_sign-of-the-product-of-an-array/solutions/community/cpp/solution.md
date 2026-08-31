# C++ 🔥 Easy approach 🔥 Explained 🔥

**Author:** ribhav_32
**Votes:** 74
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3476080/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/3476080/)

---

# **PLEASE UPVOTE \uD83D\uDC4D**
# Approach
- ##### The problem asks us to determine the sign of the product of all the numbers in the given array. To solve this problem, we need to consider the following cases:
    1. ##### If the product of all the numbers is positive, the sign is 1.
    1. ##### If the product of all the numbers is negative, the sign is -1.
    1. ##### If the product of all the numbers is zero, the sign is 0.
- ##### To compute the product of all the numbers in the array, we can iterate over the array and count the total negative numbers. We can initialize the cnt as 0 and then update it at each step of the iteration.
- ##### At any index, if number is 0, simply return 0.
- ##### Once we have computed the product, we can determine the sign of the product using an if-else statement. If the cnt is odd, the sign is -1. If the cnt is even, the sign is 1.

- ##### Therefore, we can write a function that takes an array as input, computes the count of negative numbers in the array, and returns the sign of the product.

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# **PLEASE UPVOTE \uD83D\uDC4D**
# Code
```
class Solution {
public:
    int arraySign(vector<int>& a) {
        int cnt = 0;
        for(int i = 0; i < a.size(); i++) 
        {
            if(a[i] == 0) return 0;
            if(a[i] < 0) cnt++;
        }
        return cnt%2 ? -1 : 1;
    }
};
```

![e2515d84-99cf-4499-80fb-fe458e1bbae2_1678932606.8004954.png](./images/0.png)
