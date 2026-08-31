# Share my 0ms C++ solution with proof and explanation

**Author:** KJer
**Votes:** 82
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/83056/](https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/83056/)

---

Q: Given a **non-negative** integer n, count all numbers with **unique digits**, x, where 0 \u2264 x < 10^n

A: Here I choose a math solution based on **permutation**:

 - **P(n, r) = n * (n - 1) * (n - 2) * ... * (n - r + 1)**

----------
## Just take a try

 1. When **n = 0**, ***0 \u2264 x < 1*** with **unique digits** is 0, ***A(0) = 1***

 2. When **n = 1**, ***0 \u2264 x < 10*** can be divided into 

      - ***0 \u2264 x < 1*** (calculated in 1): ***A(0) = 1***

      - ***1 \u2264 x < 10*** (all numbers with **ONLY 1** digit)

      As they are **all unique**: ***A(1) = P(10,1) - 1***

 3. When **n = 2**, ***0 \u2264 x < 100*** with **unique digits** can be divided into

      - ***0 \u2264 x < 1*** (calculated in 1): ***A(0) = 1***

      - ***1 \u2264 x < 10*** (all numbers with **ONLY 1** digit): ***A(1) = P(10,1) - 1***

      - ***10 \u2264 x < 100*** (all numbers with **ONLY 2** digits)

      As the numbers have **ONLY 2** digits, if they are with **unique digits**:

      We need to choose **2 different digits** from **{1,2,3,4,5,6,7,8,9,0}**: ***P(10,2)***

      And we must **filter out** the permutations **started by 0**: ***P(9,1)***

     ***A(2) = P(10,2) - P(9,1)***

----------
## Think about A(n)

 1. When **n > 10**, ***10^(n-1) \u2264 x < 10^n*** **MUST** have **MORE THAN 10** digits.

  As the [Pigeonhole principle][1] says, there **MUST** be **AT LEAST N - 9** repeating numbers.

  All numbers should be ignored, which means ***A(n) = 0 (n  > 10)***.

 2. When **n \u2264 10**, ***10^(n-1) \u2264 x < 10^n*** (all numbers with **ONLY n** digits) have **unique digits** :

 - **Choose n different digits** from **{1,2,3,4,5,6,7,8,9,0}**: ***P(10,n)***

 - **Filter out** the permutations **started by 0**: ***P(9,n-1)***

 - Get **A(n) = P(10,n) - P(9,n-1) = 9 * P(9,n-1)**

----------
## Combine all Intervals

 - As

    - ***A(n) = 1 (n = 0)***

    - ***A(n) = 9 * P(9,n-1) (0 < n \u2264 10)***

    -  ***A(n) = 0 (n > 10)***

 - Since we need to count all **x (0 \u2264 x < 10^n)** with **unique digits** , we can just combine all Intervals:

    - ***S(n) = A(0) + A(1) + A(2) + .....+ A(n)***

 - S(n) is the final answer.

----------
## Code

    class Solution {
    public:
        int permutation(int n, int r)
        {
            if(r == 0)
            {
                return 1;
            }else{
                return n * permutation(n - 1, r - 1);
            }
        }
        int countNumbersWithUniqueDigits(int n) {
            int sum = 1;
            if(n > 0)
            {
               int end = (n > 10)? 10 : n;
               for(int i = 0; i < end; i++)
               {
                   sum += 9 * permutation(9, i);
               }
            }
            return sum;
        }
    };

----------
  [1]: https://en.wikipedia.org/wiki/Pigeonhole_principle