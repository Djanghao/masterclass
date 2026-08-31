# Share my O(n) C++ DP solution with thinking process and explanation

**Author:** KJer
**Votes:** 841
**Link:** [https://leetcode.com/problems/student-attendance-record-ii/solutions/101643/](https://leetcode.com/problems/student-attendance-record-ii/solutions/101643/)

---

---
## 1. Problem

---
Given a positive integer **n**, return the number of all possible attendance records with length n, which will be regarded as rewardable. The answer may be very large, return it after mod 10\u2079 + 7.

A student attendance record is a string that only contains the following three characters:

  1.  **'A'** : Absent.
  2.  **'L'** : Late.
  3.  **'P'** : Present.

A record is regarded as rewardable if it doesn't contain **more than one 'A' (absent)** or **more than two continuous 'L' (late)**.

---
## 2. Thinking process

---
#### 2.1 Divide the whole problem into sub-problems

---
Before introducing the way to calculate the number of all possible attendance records with length n, we divide the problem into **3 parts**.

---
As the attendance records is made by **3 characters ('P', 'L', 'A')**, the total number can be divided into

>#### **Total = ended with P + ended with L + ended with A**.

---
If we define following series

>#### **T(n) is the total number of all possible attendance records with length n.**

>#### **P(n) is the total number of all possible attendance records ended with 'P' with length n.**

>#### **L(n) is the total number of all possible attendance records ended with 'L' with length n.**

>#### **A(n) is the total number of all possible attendance records ended with 'A' with length n.**

---
It can be inferred that

>#### **T(n) = A(n) + P(n) + L(n), n \u2265 1.**

---
#### 2.2 Solve the sub-problems by dynamic programming

---
As I use dynamic programming, I need to find out the **recursive relation** in 3 sub-problems.

---
##### 2.2.1 Calculate P(n)

---
It can be inferred that

---
>#### If we **add a 'P' to an attendance records with length n - 1**, we will **get an attendance records ended with 'P' with length n**.

---
For an attendance record **with length n - 1**,

- #### If its (n - 1)th character is 'P' ---- **CAN** add 'P'. ("PP")

- #### If its (n - 1)th character is 'A' ---- **CAN** add 'P'. ("AP")

- #### If its (n - 1)th character is 'L' ---- **CAN** add 'P'. ("LP")

---
which means

>#### **P(n) = A(n - 1) + P(n - 1) + L(n - 1), n \u2265 2.**

---
and we have initial value for the recursive relation

>#### **A(1) = P(1) = L(1) = 1.**

---
##### 2.2.2 Calculate L(n)

---
Similarly,

>#### If we **add a 'L' to an attendance records with length n - 1**, we will **get an attendance records ended with 'L' with length n**.

But the resulting attendance records must be regarded as rewardable!

---
As the rule is that a record is regarded as rewardable if it doesn't contain

> ####  **more than two continuous 'L' (late)**.

---
We need to consider the situations when we can add 'L' to an attendance record **with length n - 1** and it's still regarded as rewardable.

---
For an attendance record **with length n - 1**,

- #### If its (n - 1)th character is 'P' ---- **CAN** add 'L'. ("PL")

- #### If its (n - 1)th character is 'A' ---- **CAN** add 'L'. ("AL")

---
- #### If its (n - 1)th character is 'L':

   - #### If its (n - 2)th character is 'A' ---- **CAN** add 'L'. ("ALL")
    
   - #### If its (n - 2)th character is 'P' ---- **CAN** add 'L'. ("PLL")

   - #### If its (n - 2)th character is 'L' ---- **CAN NOT** add 'L'. (**"LLL" breaks the rule**)

---
which means

>#### **L(n) = A(n - 1) + P(n - 1) + A(n - 2) + P(n - 2), n \u2265 3**

---
and we have initial value for the recursive relation

>#### **A(1) = P(1) = 1.**
>#### **A(2) = 2, P(2) = 3.**

and

>#### **L(1) = 1, L(2) = 3.**

---
##### 2.2.3 Calculate A(n)

---
Similarly,

>#### If we **add a 'A' to an attendance records with length n - 1**, we will **get an attendance records ended with 'A' with length n**.

But the resulting attendance records must be regarded as rewardable!

---
As the rule is that a record is regarded as rewardable if it doesn't contain

> ####  **more than one 'A' (absent)**.

---
We need to consider the situations when we can add 'A' to an attendance record **with length n - 1** and it's still regarded as rewardable.

---
For an attendance record **with length n - 1**,

- If its (n - 1)th character is 'A' ---- **CAN NOT** add 'A'. (**"AA" breaks the rule**)

- If its (n - 1)th character is 'P' **and has no 'A'** ---- **CAN** add 'A'.

- If its (n - 1)th character is 'L' **and has no 'A'** ---- **CAN** add 'A'.

---
If we define series

>#### **noA**P(n) is the total number of all possible attendance records ended with 'P' **with length n** and **with no 'A'**.

>#### **noA**L(n) is the total number of all possible attendance records ended with 'L' **with length n** and **with no 'A'**.

---
It can be inferred that

>#### **A(n) = noAP(n - 1) + noAL(n - 1), n \u2265 2.**

and we have initial value for the recursive relation

>#### **A(1) = 1.**
>#### **noAP(1) = noAL(1) = 1.**

---
##### 2.2.4 Calculate noAP(n) and noAL(n)

---
In **2.2.3**, 2 new series noAP(n) and noAL(n) is introduced. Now, we focus on the recursive relation in noAP(n) and noAL(n).

---
For **noAP(n)**, we need to consider the situations when we can add 'P' to an attendance record **with length n - 1 and no 'A'** and it's still regarded as rewardable.

---
Since noAP(n) has no 'A', we don't need to consider the situation when its (n - 1)th character is 'A'.

---
For an attendance record **with length n - 1**, we can get **only 2 situations**

- If its (n - 1)th character is 'P' **and has no 'A'** ---- **CAN** add 'P'.

- If its (n - 1)th character is 'L' **and has no 'A'** ---- **CAN** add 'P'.

---
which means

>#### **noAP(n) = noAP(n - 1) + noAL(n - 1), n \u2265 2.**

and we have initial value for the recursive relation

>#### **noAP(1) = noAL(1) = 1.**

---
For **noAL(n)**, we need to consider the situations when we can add 'L' to an attendance record **with length n - 1 and no 'A'** and it's still regarded as rewardable.

---
Since noAL(n) has no 'A', we don't need to consider the situation when its (n - 1)th character is 'A'.

---
For an attendance record **with length n - 1**, we can get

- If its (n - 1)th character is 'P' **and has no 'A'** ---- **CAN** add 'L'.("PL")

- If its (n - 1)th character is 'L' **and has no 'A'**.

    - If its (n - 2)th character is 'P' **and has no 'A'** ----  **CAN** add 'L'.("PLL")

    - If its (n - 2)th character is 'L' **and has no 'A'** ----  **CAN NOT** add 'L'.(**"LLL" breaks the rule.**)

---
which means

> #### **noAL(n) = noAP(n - 1) + noAP(n - 2), n \u2265 3.**

and we have initial value for the recursive relation

> #### **noAP(1) = noAL(1) = 1.**

and

> #### **noAL(2) = 2.**

---
#### 2.3 Recursive relationship summarization

---
The answer to the whole problem is T(n), and

>#### **T(n) = A(n) + P(n) + L(n), n \u2265 1.**

---
Recursive formula:

>#### **P(n) = A(n - 1) + P(n - 1) + L(n - 1), n \u2265 2.**
>#### **A(n) = noAP(n - 1) + noAL(n - 1), n \u2265 2.**
>#### **noAP(n) = noAP(n - 1) + noAL(n - 1), n \u2265 2.**
>#### **L(n) = A(n - 1) + P(n - 1) + A(n - 2) + P(n - 2), n \u2265 3.**
>#### **noAL(n) = noAP(n - 1) + noAP(n - 2), n \u2265 3.**

with Initial value

>#### **A(1) = P(1) = L(1) = 1.**
>#### **noAP(1) = noAL(1) = 1.**

>#### **L(2) = 3.**
>#### **noAL(2) = 2.**

---
#### 2.4 Simplifying

---
When **n \u2265 4**, the 3 formulas

>#### **A(n) = noAP(n - 1) + noAL(n - 1), n \u2265 2.**
>#### **noAP(n) = noAP(n - 1) + noAL(n - 1), n \u2265 2.**
>#### **noAL(n) = noAP(n - 1) + noAP(n - 2), n \u2265 3.**

can be simplified to

>#### **A(n) = A(n - 1) + A(n - 2) + A(n - 3), n \u2265 4.**

---
Finally, the recursive formula group becomes

>#### **P(n) = A(n - 1) + P(n - 1) + L(n - 1), n \u2265 2.**
>#### **L(n) = A(n - 1) + P(n - 1) + A(n - 2) + P(n - 2), n \u2265 3.**
>#### **A(n) = A(n - 1) + A(n - 2) + A(n - 3), n \u2265 4.**

Here, **noAP(n) and noAL(n) disappeared.**

---
with Initial value
> #### **P(1) = 1.**
> #### **L(1) = 1, L(2) = 3.**
> #### **A(1) = 1, A(2) = 2, A(3) = 4.**

---
#### 2.5 Do modulus

---
The result need to be returned after mod 10\u2079 + 7.

Since the result is generated by adding a lot of middle results together, in order to make sure that every middle result and the final result won't exceed INT_MAX, we need to do mod for **every middle result**, and for **every 2-middle-result-addition**.

---
## 3. Complexity analysis

---
#### 3.1 Time complexity

---
Since the algorithm is one-pass from 1 to n.

> #### **The time complexity is O(n)**.

---
#### 3.2 Space complexity

---
Since **3 arrays** are used to save P(n), L(n), A(n), the total size is **3n**.

> #### **The space complexity is O(n)**.

---
## 4. Code

---
```
class Solution {
public:
    int checkRecord(int n) {
        int m = 1000000007;
        int *A = new int [n];
        int *P = new int [n];
        int *L = new int [n];
        
        P[0] = 1;
        L[0] = 1;
        L[1] = 3;
        A[0] = 1;
        A[1] = 2;
        A[2] = 4;
        
        if(n == 1) return 3;
        
        for(int i = 1; i < n; i++)
        {
            A[i - 1] %= m;
            P[i - 1] %= m;
            L[i - 1] %= m;
            
            P[i] = ((A[i - 1] + P[i - 1]) % m + L[i - 1]) % m;
            
            if(i > 1) L[i] = ((A[i - 1] + P[i - 1]) % m + (A[i - 2] + P[i - 2]) % m) % m;
            
            if(i > 2) A[i] = ((A[i - 1] + A[i - 2]) % m + A[i - 3]) % m;
        }
        
        return ((A[n - 1] % m + P[n - 1] % m) % m + L[n - 1] % m) % m;
    }
};
```
---