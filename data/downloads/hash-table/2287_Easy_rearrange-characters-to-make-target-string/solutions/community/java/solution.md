# Java | Easy

**Author:** AaveshK
**Votes:** 47
**Link:** [https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/2085638/](https://leetcode.com/problems/rearrange-characters-to-make-target-string/solutions/2085638/)

---

```
class Solution
{
    public int rearrangeCharacters(String s, String target)
    {
        int[] freq = new int[26], freq2 = new int[26];
        for(char ch : s.toCharArray())
            freq[ch-'a']++;
        for(char ch : target.toCharArray())
            freq2[ch-'a']++;

        int min = Integer.MAX_VALUE;
        for(char ch : target.toCharArray())
            min = Math.min(min,freq[ch-'a']/freq2[ch-'a']);
        
        return min;
    }
}
```