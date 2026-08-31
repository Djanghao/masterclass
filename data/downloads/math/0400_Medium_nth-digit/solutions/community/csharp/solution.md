# C# solution based on observed Math formula

**Author:** Await_Twelfth
**Votes:** 0
**Link:** [https://leetcode.com/problems/nth-digit/solutions/4909384/](https://leetcode.com/problems/nth-digit/solutions/4909384/)

---

# Intuition
Use pen and paper (or iPad) and observe how single digits grow as natural numbers grow. Observe how the natural number can be fetched given 'n'.

# Approach

Algorithm is based on observing which number in natural number sequence will have the digit we are looking for. For that, observe, there are 9 digits in range [1-9], then since there are 90 double digit numbers, there are 2*90 = 180 single digits in range [10-99]. Then, there are 900 triple digit numbers from [100-999], so 3*90 single digits in between them,.. and so on. Simply by trying out few examples, it turned out formula to get actual number containing nth digit can be calculated as follows -> 
Assume we know that nth digit will be in range [100-999], then, firstNumberInThisRange = 100, FirstSingleDigitCount = 190 (9 + 2*90 + 1), and these numbers are 3 digit numbers. Formula came out to be actual number = firstNumberInThisRange + (n - FirstSingleDigitCount)/3. Then, to find which digit of this number has nth digit = (n - FirstSingleDigitCount) % 3.
So, now the only question remains how to find which range has this nth digit. For this, I kept on increasing count of single digit numbers until it stays smaller than n. Rest of the numbers are calculated based on it.
P.S. It is not easy to come up with this formula within minutes. It took me an hour to get the pattern on paper.

# Complexity
- Time complexity:
$$O(1)$$, there will be as many as 10 iterations as constraint state the maximum value of n is Int.MaxValue.

- Space complexity:
$$O(1)$$

# Code
```
public class Solution {
    public int FindNthDigit(int n) {
        /*
        Algorithm:  Algorithm is based on observing which number in natural number sequence will have the digit we are looking for. For that, observe, there are 9 digits in range [1-9], then since there are 90 double digit numbers, there are 2*90 = 180 single digits in range [10-99]. Then, there are 900 triple digit numbers from [100-999], so 3*90 single digits in between them,.. and so on. Simply by trying out few examples, it turned out formula to get actual number containing nth digit can be calculated as follows -> 
Assume we know that nth digit will be in range [100-999], then, firstNumberInThisRange = 100, FirstSingleDigitCount = 190 (9 + 2*90 + 1), and these numbers are 3 digit numbers. Formula came out to be actual number = firstNumberInThisRange + (n - FirstSingleDigitCount)/3. Then, to find which digit of this number has nth digit = (n - FirstSingleDigitCount) % 3.
So, now the only question remains how to find which range has this nth digit. For this, I kept on increasing count of single digit numbers until it stays smaller than n. Rest of the numbers are calculated based on it.
P.S. It is not easy to come up with this formula within minutes. It took me an hour to get the pattern on paper.
        */

        // Base case
        if (n <= 9)
        {
            return n;
        }

        long singleDigitCount = 9;

        // For two digit numbers, this is 10, for 3 digit it is 100, so on.
        long mult = 10;

        // 2-digit numbers, 3-digit numbers,, so on.
        long numDigit = 2;

        // To keep hold of first singleDigitCount in given range
        long firstSingleDigitCountInGivenRange = 0;

        while (singleDigitCount < n)
        {
            firstSingleDigitCountInGivenRange = singleDigitCount + 1;
            singleDigitCount = singleDigitCount + (9 * mult * numDigit);
            mult = mult * 10;
            numDigit++;
        }

        // nullifying effect of last iteration where singleDigitCount would have become greater than n
        mult = mult / 10;
        numDigit--;

        long actualNumberHavingNthDigit = mult + (n - firstSingleDigitCountInGivenRange)/numDigit;

        string actualNumberHavingNthDigitString = actualNumberHavingNthDigit.ToString();

        int indexOfDigit = (int)((n - firstSingleDigitCountInGivenRange) % numDigit);

        return actualNumberHavingNthDigitString[indexOfDigit] - '0';
    }
}
```