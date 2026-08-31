# Easiest Solution in JAVA / Python / C++ with Explanation

**Author:** hashcoderz
**Votes:** 6
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/3449980/](https://leetcode.com/problems/sum-multiples/solutions/3449980/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
The function works by iterating through all the numbers from 1 to n, checking if each number is a multiple of **3, 5, or 7** using the **modulo operator (%)**, and adding the number to a variable mul if it is a multiple. Finally, the function returns the value of mul, which is the sum of all the multiples.

**For example:** 
>If n is 20, the function will iterate through the numbers 1 to 20 and add up all the multiples of 3, 5, or 7, which are:

>3 + 5 + 6 + 7 + 9 + 10 + 12 + 14 + 15 + 18 + 20 = 119

>So the function will return 119 as the sum of all the multiples of 3, 5, or 7 up to 20.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```Java []
    public int sumOfMultiples(int n) {
        int mul = 0;
        for(int i=1; i<=n; i++){
            if(i%3==0 || i%5==0 || i%7==0){
                mul+=i;
            }
        }
        return mul;
    }
```
```python []
def sumOfMultiples(n):
    mul = 0
    for i in range(1, n+1):
        if i%3==0 or i%5==0 or i%7==0:
            mul+=i
    return mul
```
```C++ []
int sumOfMultiples(int n) {
    int mul = 0;
    for(int i=1; i<=n; i++){
        if(i%3==0 || i%5==0 || i%7==0){
            mul+=i;
        }
    }
    return mul;
}

```

# Support me by Upvoting me............


