# Simple Solution | Explained

**Author:** codeme0720
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4781228/](https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4781228/)

---

# Intuition


We can redistribute all the letters freely among the words.

Calculate the frequency of each letter and total the number of matching letter pairs that can be formed from the letters, i.e., total = sum(freq[ch] / 2) for all 'a' <= ch <= 'z'.

We can greedily try making palindromes from words[i] with the smallest length to words[i] with the longest length.

For the current index, i, we try to make words[i] a palindrome. We need len(words[i]) / 2 matching character pairs, and the letter in the middle (if it exists) can be freely chosen afterward.

We can check if we have enough pairs for index i; if we do, we increase the number of palindromes we can make and decrease the number of pairs we have. Otherwise, we end the loop at this index.

The answer is the number of palindromes we were able to make in the end.


# Complexity
- Time complexity: O(m*n) ; m = words.Length, n = words[i].Length
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MaxPalindromesAfterOperations(string[] words)
    {
        int ans = 0;
        int pairs = 0;
        int[] c = new int[26];
        List<string> ls = new List<string>();
        
        foreach(var s in words)
        {
            ls.Add(s);
            foreach(var x in s)
                c[x-'a']++;
        }
        
        for(int i=0;i<26;i++)
            pairs += c[i]/2;

        ls.Sort((a,b)=>a.Length.CompareTo(b.Length));

        for(int i=0;i<ls.Count();i++)
        {
            if(pairs>=ls[i].Length/2)
            {
                pairs -= ls[i].Length/2;
                ans++;
            }
        }

        return ans;
    }
}
```