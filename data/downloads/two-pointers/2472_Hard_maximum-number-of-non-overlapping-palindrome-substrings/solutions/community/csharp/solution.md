# eazy "o(n)" solution , Beats 60.00%

**Author:** Ed_SNOWDEN_Eliot
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/5799737/](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/5799737/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: o(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int MaxPalindromes(string s, int k) {
        if(k==1) {return s.Length; }

        string other = s;
        char[] ss = other.ToCharArray();
        int counter = 0;
        string word1 = "";
        string word2 = "";
        int start = 0;
        int index = 1;

        while(other.Length != 0 && index < other.Length)
        {
            if(word1 == "" && word2 == "")
            {
                if(ss[index] == ss[index-1])
                {
                    start = index;
                    word2 = ss[index-1].ToString() + ss[index].ToString(); }

                if(index+1 < other.Length && ss[index+1] == ss[index-1])
                {
                    word1 = ss[index].ToString();
                    start = index; }
            }
            else
            {
                if(word1 != "" && start-(index-start) >= 0 && ss[start-(index-start)] == ss[index])
                { word1 = ss[start-(index-start)].ToString() + word1 + ss[index].ToString(); }
                else { word1 = ""; }

                if(word2 != "" && (start-1)-(index-start) >= 0 && ss[(start-1)-(index-start)] == ss[index])
                { word2 = ss[(start-1)-(index-start)].ToString() + word2 + ss[index].ToString(); }
                else { word2 = ""; }

                if(word1 == "" && word2 == "") { index = start; }
            }
            if(word2.Length >= k && (word2.Length <= word1.Length || word1=="" || word1.Length < k))
            {
                counter++;
                other = other.Substring(index+1);
                ss = other.ToCharArray();
                index = 0;
                word1 = "";
                word2 = "";
            }
            else if(word1.Length >= k && (word1.Length <= word2.Length || word2=="" || word2.Length < k))
            {
                counter++;
                other = other.Substring(index+1);
                ss = other.ToCharArray();
                index = 0;
                word1 = "";
                word2 = "";
            }
            index++;
        }
        return counter;
    }
}
```