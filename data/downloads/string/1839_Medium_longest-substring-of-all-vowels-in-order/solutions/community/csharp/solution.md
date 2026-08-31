# Very simple sliding window solution in C#

**Author:** gmartucci
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/5342481/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/5342481/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I just thought about going with a sliding window approach to traverse the string only once.

# Approach
<!-- Describe your approach to solving the problem. -->
The idea is:
1. finding the first "a"
2. iterate from there while the char is equal to "a"
3. when it breaks, if the letter is an "e", start over from 1 with letter "e".
4. an so on with the rest of the vowels.

That would be the happy where we always find the vowels ordered, and we keep moving right until the "u" breaks. At that point we save the lenght and start over.

What happend when it breaks and the next vowel does not correspond with the expected one? We just find the next "a" and start over 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
public class Solution {
   public int LongestBeautifulSubstring(string word)
    {
        int res = 0;
        char[] vowels = { 'a', 'e', 'i', 'o', 'u' };

        int left = 0;
        int right = 0;
        int vowel = 0;

        right = word.IndexOf(vowels[vowel], right);
        left = right;

        while (right > -1 && right < word.Length )
        {
          
            while (right < word.Length && word[right] == vowels[vowel]) 
            {
                right++;
            }

            if (vowel == 4)
            {
                if (right - left > res)
                    res = right - left;

                right = word.IndexOf(vowels[vowel], right - 1);
                left = right;

                vowel = 0;
            }
            else if (right < word.Length && word[right] == vowels[vowel + 1])
            {
                vowel++;
            }
            else
            {
                vowel = 0;
                right = word.IndexOf(vowels[vowel], right);
                left = right;
                
            }
                
        }

        return res;
    }
}
```