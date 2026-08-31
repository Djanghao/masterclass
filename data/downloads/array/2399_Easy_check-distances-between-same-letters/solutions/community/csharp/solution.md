# Simple Dictionary C# Solution and Self Explanatory

**Author:** hbti_ankit1994
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/3835503/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/3835503/)

---


# Code
```
public class Solution {
    public bool CheckDistances(string s, int[] distance) {
        Dictionary<char, int> dc = new Dictionary<char, int>();
        for(int i = 0 ; i < s.Length ; i++)
        {
            if(!dc.ContainsKey(s[i]))
                dc.Add(s[i], i);
            else
                dc[s[i]] = i - dc[s[i]] - 1;
        }

        for(int i = 0; i < 26 ; i++)
        {
            if(s.Contains((char)(i + 'a')))
            {
                if(dc[(char)(i + 'a')] != distance[i])
                    return false;
            }
        }
        return true;
    }
}
```