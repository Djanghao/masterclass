# C# Simple Solution 🔍

**Author:** KylerCondran
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/5249151/](https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/solutions/5249151/)

---

# Code
```
public class Solution {
    public int LongestSemiRepetitiveSubstring(string s) {
        int max = 0;
        int count = 0;
        int pos = 0;
        bool found = false;
        Queue<char> q = new Queue<char>();
        char lag = s[0];
        q.Enqueue(lag);
        count++;
        max = Math.Max(max, count);     
        for (int i = 1; i < s.Length; i++)
        {
            char val = s[i];
            if (val == lag)
            {
                if (found)
                {
                    for (int j = 0; j < pos; j++)
                    {
                        q.Dequeue();
                        count--;
                    }
                } else {
                    found = true;
                }
                pos = count;
            }
            count++;
            max = Math.Max(max, count);         
            q.Enqueue(val); 
            lag = val;                
        }
        return max;
    }
}
```