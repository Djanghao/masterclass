# Manacher O(n) solution. Beat 100%. Explained

**Author:** narfuls
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iv/solutions/6060201/](https://leetcode.com/problems/palindrome-partitioning-iv/solutions/6060201/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For every prefix palindrome determine in O(1) time if suffix can be split on two palindromes.
Thanks to palindrome property:
> Suppose S has some palindromic decomposition. Let the longest palindromic prefix of S be a, S\u2009=\u2009ax, longest palindromic suffix of S be b, S\u2009=\u2009yb. At least one of x and y is palindromic 

[Proof - "1081H - Palindromic Magic" -> solution -> Lemma 3, Lemma 4](https://codeforces.com/blog/entry/63888) 
We can precalculate all necessary in O(n) time.
# Approach
<!-- Describe your approach to solving the problem. -->

Based on Manacher's array:
1) Make function "IsPalindrome" to check any substring in O(1) time.
2) Precalculate in o(n):
- All possible suffixes
- For every index *i* longest palindrome that starts from *i* 

For every prefix palindrome **i** find longest suffix **q** such that **s == i + m + q** where **m != ""**  and determine if **m** is palindrome.
Or for longest palindrome **p** such that **m + q= p + k** where **k != ""** determine if **k** is palindrome.
# Complexity
- Time complexity: O(n)
 Manacher O(n) + precalculate O(n) + get answer O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public bool CheckPartitioning(string s) {
        int positionCount = 2 * s.Length + 1;
        int[] manacher = new int[positionCount];
        manacher[0] = 0;
        manacher[1] = 1;
        int center = 1; 
        int centerRight = 2; 
        int currentRight = 0; 
        int currentLeft; 
        int diff = -1;
        var palindromeLength = Enumerable.Repeat(1, s.Length).ToArray();
        int lastPos = positionCount - 1;
        for (currentRight = 2; currentRight < lastPos; currentRight++)
        {
            currentLeft = 2 * center - currentRight;
            manacher[currentRight] = 0;
            diff = centerRight - currentRight;
            if (diff > 0)
                manacher[currentRight] = Math.Min(manacher[currentLeft], diff);
            while (((currentRight + manacher[currentRight]) + 1 < positionCount && (currentRight - manacher[currentRight]) > 0) &&
                (((currentRight + manacher[currentRight] + 1) % 2 == 0) || 
                (s[(currentRight + manacher[currentRight] + 1) / 2] == s[(currentRight - manacher[currentRight] - 1) / 2])))
                manacher[currentRight]++;
            if (currentRight + manacher[currentRight] > centerRight)
            {
                center = currentRight;
                centerRight = currentRight + manacher[currentRight];
            }
//all above is just Manacher's alghorithm
            int start = (currentRight - 0 - manacher[currentRight]) / 2;
            palindromeLength[start] = Math.Max(palindromeLength[start], manacher[currentRight]);
        }
        if (palindromeLength[0] == s.Length)
            return true;
        var suffix = new Queue<int>();
        for(int i = 1; i < s.Length; i++)
        {
            palindromeLength[i] = Math.Max(palindromeLength[i], palindromeLength[i - 1] - 2);
            if(palindromeLength[i] + i == s.Length)
                suffix.Enqueue(i);
        }
        bool IsPalindrome(int start, int end) => manacher[start + end + 1] > end - start;
        int last = s.Length - 1;
        for (int i = 0; i < s.Length; i++)
        {
            if(IsPalindrome(0, i))
            {
                while (suffix.Count > 0 && suffix.Peek() < i + 2) 
                    suffix.Dequeue();
                if (i + palindromeLength[i + 1] < last && IsPalindrome(i + palindromeLength[i + 1] + 1, last) ||
                    suffix.Count > 0 && IsPalindrome(i + 1, suffix.Peek() - 1))
                    return true;
            }
        }
        return false;    
    }
}
```