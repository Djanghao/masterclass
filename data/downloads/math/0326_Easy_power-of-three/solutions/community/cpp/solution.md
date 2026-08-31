# ✅☑️ Best C++ 3 Solution || Math || Recursion || One Stop Solution.

**Author:** its_vishal_7575
**Votes:** 151
**Link:** [https://leetcode.com/problems/power-of-three/solutions/3230079/](https://leetcode.com/problems/power-of-three/solutions/3230079/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can solve this question using Multiple Approaches. (Here I have explained all the possible solutions of this problem).

1. Solved using Recursive Approach.
2. Solved using Iterative Approach.
3. Solved using Math.

# Approach
<!-- Describe your approach to solving the problem. -->
We can easily understand the all the approaches by seeing the code which is easy to understand with comments.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Time complexity is given in code comment.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Space complexity is given in code comment.

# Code
```
/*

    Time Complexity : O(logN).

    Space Complexity : O(logN).
    
    Solved using Recursive Approach.

*/


/***************************************** Approach 1 *****************************************/

class Solution {
public:
    bool isPowerOfThree(int n) {
        if(n==0){
            return false;
        }
        else if(n==1){
            return true;
        }
        return n%3==0 && isPowerOfThree(n/3);  
    }
};






/*

    Time Complexity : O(logN).

    Space Complexity : O(1).
    
    Solved using Iterative Approach.

*/


/***************************************** Approach 2 *****************************************/

class Solution {
public:
    bool isPowerOfThree(int n) {
        if(n==0){
            return false;
        }
        while(n%3 == 0){
            n /= 3;
        }
        return n==1;  
    }
};






/*

    Time complexity : O(1). We are only doing one operation.

    Space complexity : O(1). We are not using any additional memory.

    Solved using Math.

*/

class Solution {
public:
    bool isPowerOfThree(int n) {
        return n > 0 && 1162261467 % n == 0;
    }
};

```

***IF YOU LIKE THE SOLUTION THEN PLEASE UPVOTE MY SOLUTION BECAUSE IT GIVES ME MOTIVATION TO REGULARLY POST THE SOLUTION.***

![WhatsApp Image 2023-02-10 at 19.01.02.jpeg](./images/0.jpeg)