# 0ms C++ Solution with Detail-Explanation

**Author:** Mad_air
**Votes:** 194
**Link:** [https://leetcode.com/problems/nth-digit/solutions/88369/](https://leetcode.com/problems/nth-digit/solutions/88369/)

---

To make the problem much much more easier, I divide the problem into 3 parts:
1. calculate how many digits the number has.
2. calculate what the number is.
3. find out which digit in the number is we wanted.

You can find the relative code part in the **code** section.
Here is an example to help you to understand my code:

**Example:**
- Input: 250

- After step 1, you will find that the 250th digit must belong to a 3-digit number, since 1~9 can only provide 9 digits and 10~99 can only provide 180 digits. Here, `n` = 250 - 9 - 90 * 2 = 61, and `digits` = 3.

- In step 2, we will find the target number, which named as `number` in my code. From step 1, the `n` becomes to 61, which means "the 61st digit in 3-digit number is the digit we are looking for ." Easily, we know the 61st digit in 3-digit number belongs to `number` = 100 + 61 / 3 = 100 + 20 = 120. `index` is the index of the target digit in `number`. If `index` equals to 0, it means the target digit is the last digit of `number`.

- Step 3, from step 2, we know `index` = `n` % `digits` = 61 % 3 = 1, which means the target digit is the 1st digit in `number`. Then, return `1`.

**Code:**   
```c++
class Solution 
{
    // date: 2016-09-18     location: Vista Del Lago III Apartments
public:
    int findNthDigit(int n) 
    {
        // step 1. calculate how many digits the number has.
        long base = 9, digits = 1;
        while (n - base * digits > 0)
        {
            n -= base * digits;
            base *= 10;
            digits ++;
        }

        // step 2. calculate what the number is.
        int index = n % digits;
        if (index == 0)
            index = digits;
        long num = 1;
        for (int i = 1; i < digits; i ++)
            num *= 10;
        num += (index == digits) ? n / digits - 1 : n / digits;;

        // step 3. find out which digit in the number is we wanted.
        for (int i = index; i < digits; i ++)
            num /= 10;
        return num % 10;
    }
};
```