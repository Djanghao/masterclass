# Clean C# solution

**Author:** Sindbad9
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number-ii/solutions/3497862/](https://leetcode.com/problems/strobogrammatic-number-ii/solutions/3497862/)

---

# Intuition
Classic recursion problem.
Just keep track of characters you need to fill up 1 or 2 spots


# Code
```
public class Solution {
    // Use this if you need to add 1 character to your string
    private HashSet<char> ones = new() {
        '0',
        '1',
        '8'
    };

    // Use this if you need to add 2 or more character to your string
    private Dictionary<char, char> twos = new() {
        ['0'] = '0',
        ['1'] = '1',
        ['6'] = '9',
        ['8'] = '8',
        ['9'] = '6',
    };

    public IList<string> FindStrobogrammatic(int n) {
        List<string> res = new();
        char[] curr = new char[n];

        Recur(curr, 0, n-1, res);
        return res;
    }

    private void Recur(char[] curr, int st, int end, List<string> res)
    {
        if(st > end)
        {
            res.Add(new string(curr));
        }
        else if(st == end)
        {
            foreach(var ch in ones)
            {
                curr[st] = ch;
                res.Add(new string(curr));
            }
        }
        else
        {
            foreach(var kv in twos)
            {
                // Need to avoid leading zeros in numbers
                if(kv.Key == '0' && st == 0)
                {
                    continue;
                }
                curr[st] = kv.Key;
                curr[end] = kv.Value;
                Recur(curr, st+1, end-1, res);
            }
        }
    }
}
```