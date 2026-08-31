# c# solution with explanation

**Author:** AndrewZJL
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-palindrome-product/solutions/114770/](https://leetcode.com/problems/largest-palindrome-product/solutions/114770/)

---

For the question, I don't find a better way but only the stupid ergodic. 
Firstly, find the first palindrome by the max n-digit numbers. Assume the two factors are MaxIntX, MinIntY.
Secondly, find the other palindromes between MaxIntX, MinIntY. If there is another palindrome found, we update the minIntY to the small one. If the palindrome is bigger than current, update the current palindrome.
Tips: Since palindrome should start at 9, so we can skip all the even integer as factor.
```
        int LargestPalindrome(int n)
        {
            var largestPalindrome = GetMaxPalindrome(n);
            long result = largestPalindrome % 1337;
            return (int)result;
        }

        private static long GetMaxPalindrome(int n)
        {
            long maxInteger = GetMaxInt(n);
            long minInteger = 1;
            long currentPalindrome = maxInteger;
            for (var i = maxInteger; (i >= minInteger); i-=2)
            {
                for (var j = i; (j >= minInteger); j-=2)
                {
                    long result  = i * j;
                    if (result <= currentPalindrome)
                    {
                        break;
                    }
                    if (IsPalindrome(result))
                    {
                        if ((result > currentPalindrome))
                        {
                            currentPalindrome = result;
                        }
                        minInteger = j;
                    }
                }
            }
            return currentPalindrome;
        }

        private static long GetMaxInt(int length)
        {
            long result = 9;
            while (length > 1)
            {
                result = result * 10 + 9;
                length--;
            }
            return result;
        }

        private static bool IsPalindrome(long value)
        {
            var str = value.ToString();
            int j = str.Length - 1;
            for (int i = 0; i < j; i++, j--)
            {
                if (str[i] != str[j])
                {
                    return false;
                }
            }
            return true;
        }
```