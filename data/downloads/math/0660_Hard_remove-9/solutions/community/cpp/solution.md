# Share my O(logn) C++ solution with thinking process and explanation

**Author:** KJer
**Votes:** 22
**Link:** [https://leetcode.com/problems/remove-9/solutions/106578/](https://leetcode.com/problems/remove-9/solutions/106578/)

---

---
## 1. Problem

---
Start from integer 1, remove any integer that contains 9 such as 9, 19, 29...

So now, you will have a new integer sequence: 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, ...

Given a positive integer n, you need to return the n-th integer after removing. Note that 1 will be the first integer.

**Example 1:**
```
Input: 9
Output: 10
```

**Hint:** n will not exceed ```9 x 10^8```. 

---
## 2. Thinking process

---
#### 2.1 Find the rule

---
We can write some numbers **(including 0, as the 0th number)** in the sequence as follows:

---
> #### 0, 1, 2, 3, 4, 5, 6, 7, 8 **(9 removed, 0th ~ 8th)**
> #### 10, 11, 12, 13, 14, 15, 16, 17, 18 **(19 removed, 9th ~ 17th)**
> #### ....................
> #### 80, 81, 82, 83, 84, 85, 86, 87, 88 **(89 removed, 72nd ~ 80th)**
> #### **(90~99 removed)**
> #### 100, 101, 102, 103, 104, 105, 106, 107, 108 **(109 removed, 81st ~ 89th)**
> #### ............................................

---

Have you found some rules?

- the **next number of '8' is '10'**.
- the **next number of '18' is '20'**.
- ..................
- the **next number of '88' is '100'**.

---

After **removing 9 from the sequence of natural numbers**,

> #### The sequence becomes an ***novenary sequence***.

which means

>#### The ***n-th number in the novenary sequence*** is a **decimal base integer**.
>#### **The decimal base integer has the *same format* as *n's novenary format***.

---
Since the result should be returned as an decimal-based integer, we need to solve the problem in 2 steps:

>#### **Step 1: translate n to its novenary format n'**.

>#### **Step 2: treat n' as a decimal-based integer and output**.

---
For example:

If I want to get the **81st number in the sequence**,

- First, **change the decimal number 81 to it's novenary format  "100". (81 = 9^2)**.

- Second, **treat novenary format number "100" as a decimal-based integer 100**.

- **Output 100**.

---
#### 2.2 Algorithm design

---

By dividing n by 9 and getting the remainder,  n's novenary format can be obtained digit by digit.

At the same time, the final result can also be obtained digit-by-digit.

---
## 3. Complexity analysis

---
#### 3.1 Time complexity

---
Since n's novenary format and the final result are generated digit by digit,

> #### **The time complexity is O(log9(n)) = O(logn).**

---
#### 3.2 Space complexity

---

Since only constant space is used, 

> #### **The space complexity is O(1).**

---
## 4. Code

---

```
class Solution {
public:    
    int newInteger(int n) {
        int ans = 0;
        int base = 1;
        while(n != 0)
        {
            ans = ans + (n % 9) * base;
            n /= 9;
            base *= 10;
        }
        return ans;
    }
};
```