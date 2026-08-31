# Beats 100 %

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/mini-parser/solutions/5993926/](https://leetcode.com/problems/mini-parser/solutions/5993926/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * interface NestedInteger {
 *
 *     // Constructor initializes an empty nested list.
 *     public NestedInteger();
 *
 *     // Constructor initializes a single integer.
 *     public NestedInteger(int value);
 *
 *     // @return true if this NestedInteger holds a single integer, rather than a nested list.
 *     bool IsInteger();
 *
 *     // @return the single integer that this NestedInteger holds, if it holds a single integer
 *     // Return null if this NestedInteger holds a nested list
 *     int GetInteger();
 *
 *     // Set this NestedInteger to hold a single integer.
 *     public void SetInteger(int value);
 *
 *     // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 *     public void Add(NestedInteger ni);
 *
 *     // @return the nested list that this NestedInteger holds, if it holds a nested list
 *     // Return null if this NestedInteger holds a single integer
 *     IList<NestedInteger> GetList();
 * }
 */
public class Solution {
    public NestedInteger Deserialize(string s) {
        return Parse(s);
    }

    private NestedInteger Parse(string s)
    {
        if (s.Length == 0)
        {
            return null;
        }
       // Console.WriteLine(s);
        if (s[0] == '[')
        {
            NestedInteger ns = new NestedInteger();
            int j = 1;
            while(j < s.Length) {
                if (s[j] != ',' && s[j] != '[' && s[j] != ']')
                {
                    int start = j;
                    while(s[j] != ',' && s[j] != '[' && s[j] != ']')
                    {
                        j++;
                    }
                    j--;
                    int len = j-start+1;
                    string s1 = s.Substring(start, len);
                    ns.Add(new NestedInteger(int.Parse(s1)));
                    j++;
                    continue;
                }
                if (s[j] == '[')
                {
                    int c = 1;
                    int x = j+1;
                    while (c != 0)
                    {
                        if (s[x] == ']')
                        {
                            c -= 1;
                        }
                        if (s[x] == '[')
                        {
                            c += 1;
                        }
                        x++;
                    }
                    x--;
                    int len1 = x-j+1;
                    ns.Add(Parse(s.Substring(j, len1)));
                    j = x+1;
                    continue;
                }
                j++;
            }
            return ns;
        } else {
            int v = int.Parse(s);
            return new NestedInteger(v);
        }
    }
}
```