# C# Solution that passed all test cases

**Author:** yaagmurss
**Votes:** 43
**Link:** [https://leetcode.com/problems/plus-one/solutions/2758992/](https://leetcode.com/problems/plus-one/solutions/2758992/)

---

C# Solution that passed all test cases

```
        public int[] PlusOne(int[] digits)
        {
            int n = digits.Length;
            for (int i = n - 1; i >= 0; i--)
            {
                if (digits[i] < 9)
                {
                    digits[i]++;
                    return digits;
                }
                digits[i] = 0;
            }
            int[] newNumber = new int[n + 1];
            newNumber[0] = 1;

            return newNumber;
        }
		
```