# ✅☑️ Best C++ 2 Solution || Floyd's Cycle-Finding Algorithm || Hash Table || One Stop Solution.

**Author:** its_vishal_7575
**Votes:** 278
**Link:** [https://leetcode.com/problems/happy-number/solutions/3236759/](https://leetcode.com/problems/happy-number/solutions/3236759/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can solve this question using Multiple Approaches. (Here I have explained all the possible solutions of this problem).

1. Solved using Math + Hash Table..
2. Solved using Floyd's Cycle-Finding Algorithm.

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

    Time Complexity : O(logN) where N is the number.

    Space Complexity : O(logN), Hash Table(unordered_set(set)) space.

    Solved using Math + Hash Table.

*/


/***************************************** Approach 1 *****************************************/

class Solution {
private:
    int nextNumber(int n){
        int newNumber = 0;
        while(n!=0){
            int num = n%10;
            newNumber += num*num;
            n = n/10;
        }
        return newNumber;
    }
public:
    bool isHappy(int n) {
        unordered_set<int> set;
        while(n!=1 && !set.count(n)){
            set.insert(n);
            n = nextNumber(n);
        }
        return n==1;
    }
};






/*

    Time Complexity : O(logN) where N is the number.

    Space Complexity : O(1), Constant space.

    Solved using Floyd's Cycle-Finding Algorithm.

*/


/***************************************** Approach 2 *****************************************/

class Solution {
private:
    int nextNumber(int n){
        int newNumber = 0;
        while(n!=0){
            int num = n%10;
            newNumber += num*num;
            n = n/10;
        }
        return newNumber;
    }
public:
    bool isHappy(int n) {
        int slowPointer = n;
        int fastPointer = nextNumber(n);
        while(fastPointer != 1 && fastPointer != slowPointer){
            slowPointer = nextNumber(slowPointer);
            fastPointer = nextNumber(nextNumber(fastPointer));
        }
        return fastPointer==1;
    }
};

```

***IF YOU LIKE THE SOLUTION THEN PLEASE UPVOTE MY SOLUTION BECAUSE IT GIVES ME MOTIVATION TO REGULARLY POST THE SOLUTION.***

![WhatsApp Image 2023-02-10 at 19.01.02.jpeg](./images/0.jpeg)