# Solution in C# - Why am I so stupid ?

**Author:** yeuhoahuuco
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/5653187/](https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k/solutions/5653187/)

---

# Code
```
public class Solution {
    public string LargestPalindrome(int n, int k) {
        if(k == 2)
        {
            if(n == 1) return "8";     
            return "8" + new string('9', n - 2) + "8";
        }else if(k == 3)
        {
            return new string('9', n);
        }else if(k == 4)
        {
            if(n <= 3)
            {
                return new string('8', n);
            }else {
                return "88" + new string('9', n - 4) + "88";
            }
        }else if(k == 5)
        {
            if(n == 1) return "5";
            return "5" + new string('9', n - 2) + "5";
        }else if(k == 6)
        {
            if(n == 1)
            {
                return "6";
            }else if(n == 2)
            {
                return "66";
            }else if(n == 3)
            {
                return "888";
            }else {
                if(n % 2 == 0)
                {
                    return "8" + new string('9', n/2 - 2) + "77" + new string('9', n/2 - 2) + "8";
                }else{
                    return "8" + new string('9', (n - 1) / 2 - 1) + "8" + new string('9', (n - 1) / 2 - 1) + "8";
                }
            }
        }else if(k == 7)
        {
            if(n <= 2)
            {
                return new string('7', n);
            }else 
            {
                string h = new string('9', (n + 1) / 2);
                while (true) 
                {
                    string palind = GeneratePalind(h, n % 2 == 1);

                    if ((BigInteger.Parse(palind) % k) == 0) 
                    {
                        return palind;
                    }

                    BigInteger x = BigInteger.Parse(h) - 1;
                    if (x == 0) 
                    {
                        break;
                    }
                    
                    h = x.ToString();
                }

                return ""; 
            }
        }else if(k == 8)
        {
            if(n <= 5)
            {
                return new string('8', n);
            }else {
                return "888" + new string('9', n - 6) + "888";
            }
        }else{
            return new string('9', n);
        }

    }
    
    public string GeneratePalind(string h, bool check) 
    {
        StringBuilder ans = new StringBuilder(2*h.Length - (check ? 1 : 0));
        ans.Append(h);

        for (int i = h.Length - (check ? 2 : 1); i >= 0; i--) 
        {
            ans.Append(h[i]);
        }

        return ans.ToString();
    }

}
```