# Easy C# solution

**Author:** DosU
**Votes:** 7
**Link:** [https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3047934/](https://leetcode.com/problems/lexicographically-smallest-equivalent-string/solutions/3047934/)

---

# Approach
Find smallest equal char for every char;

# Complexity
- Time complexity:$$O(n*26+m) = O(n+m)$$
<!-- Add your time complexity here, e.g.  -->

- Space complexity:$$O(26) = O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution
{
    public string SmallestEquivalentString(string s1, string s2, string baseStr)
    {
        char[] arr = new char[26];
        for (ushort i = 0; i < 26; i++) arr[i] = (char)('a' + i);
        for(int i=0; i<s1.Length; i++)
        {
            char min = arr[s1[i]-'a'];
            char max = arr[s2[i]-'a'];
            if(max < min) (max, min) = (min, max);
            for (int j = 0; j < arr.Length; j++)
                if (arr[j] == max) arr[j] = min;
        }
        return new string(baseStr.Select(x => arr[x - 'a']).ToArray());
    }
}
```