# [JavaScript] 2169. Count Operations to Obtain Zero

**Author:** pgmreddy
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/1767023/](https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/1767023/)

---


---

- **Weekly Contest 280 answers**
  - **Q1** answer
    - https://leetcode.com/problems/count-operations-to-obtain-zero/discuss/1767023/JavaScript-2169.-Count-Operations-to-Obtain-Zero
    - **below**
  - **Q2** answer
    - https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/discuss/1767232/JavaScript-2170.-Minimum-Operations-to-Make-the-Array-Alternating
  - **Q3** answer
    - https://leetcode.com/problems/removing-minimum-number-of-magic-beans/discuss/1768069/JavaScript-2171.-Removing-Minimum-Number-of-Magic-Beans

---

- Similar to `Euclidean GCD`

---

Hope it is simple to understand.

---

```
var countOperations = function (num1, num2) {
    if (num2 === 0) return 0;                       // done
    if (num1 < num2) countOperations(num2, num1);   // reverse if num1 is small
    return (
        Math.trunc(num1 / num2) +                   // quotient (equals repeated subtraction amount)
        countOperations(num2, num1 % num2)          // call smaller, remainder
    );
};
```

---

![image](./images/0.png)

---

Q & A

---

**Q: Can you elaborate your solution**
**A**

Sure

---

**Case 1 - best case:**

Assume, num1 = 5 and num2 = 1

let's do the

    num1 = num1 - num2

so

    num1 - num2 = 5-1 = 4, and total reductions is 1

that is

    num1 - num2  = num1 will become
    5    -   1   = 4   ----- total = 1 time

lets repeat subtract num2 from num1, it becomes:

    num1 - num2  = num1 will become
    5    -   1   = 4   ----- total = 1 time
    4    -   1   = 3   ----- total = 2 time
    3    -   1   = 2   ----- total = 3 time
    2    -   1   = 1   ----- total = 4 time
    1    -   1   = 0   ----- total = 5 time, num1 becomes 0

so total 5 times we reduced num2, from num1, and num1 became 0, we stop here

the same thing can be achieved by division

    num2 / num1
    = 5 / 1
    = 5  --- this 5 is total, num1 becomes 0

ans is total which is 5

---

**Case 2 - not best case:**

Assume, num1 = 5 and num2 = 2

let's do the

    num1 = num1 - num2

similar to above

    num1 - num2  = num1 will become
    5    -   2   = 3   ----- total = 1 times
    3    -   2   = 1   ----- total = 2 times

now num1 is 1, and num2 is 2

the same thing can be achieved by division

    num1 / num2
    = 5 / 2
    = 2.5  --- we have to take Math.trunc(2.5) = 2 (remove decimals), this 2 is `total`

and `num1` is reminder

    num1 % num2
    = 5 % 2
    = 1

since num1 is 1, and num2 is 2
but we need one of them to 0, we need to continue
the only we can continue is by doing reverse

instead of reducing num2 from num1, that is num1-num2 (1 - 2)
now we should reduce num1, from num2, that is num2-num1  (2 - 1)
Or,
this can also be done by exchange the values of num1 & num2, when num1 is smaller than num2 (num1 < num2)
if so, we can just do the same operation as above

let's do this

after exchange
now num1 is 2, and num2 is 1

    num1 - num2  = num1 will become
    2    -   1   = 1   ----- total = 3 times
    1    -   1   = 0   ----- total = 4 times

ans is total which is 4

---

hope that helps

---
