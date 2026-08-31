# Using Disjoint Set

**Author:** robin1302
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-similarity-ii/solutions/5665489/](https://leetcode.com/problems/sentence-similarity-ii/solutions/5665489/)

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
public class Solution {
    public bool AreSentencesSimilarTwo(string[] sentence1, string[] sentence2, IList<IList<string>> similarPairs) {
        if (sentence1.Length != sentence2.Length)
        {
            return false;
        }
        Dictionary<string, int> d = new ();
        int index = 0;
        foreach(IList<string> l in similarPairs)
        {
            string a = l[0];
            string b = l[1];
            if (!d.ContainsKey(a))
            {
                d[a] = index;
                index++;
            }
            if (!d.ContainsKey(b))
            {
                d[b] = index;
                index++;
            }
        }
        Union un = new Union(index);
        foreach(IList<string> l in similarPairs)
        {
            string a = l[0];
            string b = l[1];
            int i1 = d[a];
            int i2 = d[b];
            un.Connect(i1, i2);
        }
        for(int i=0; i<sentence1.Length; i++)
        {
            string x = sentence1[i];
            string y = sentence2[i];
            if (x == y)
            {
                continue;
            }
            if (!d.ContainsKey(x) || !d.ContainsKey(y))
            {
                return false;
            }
            int x1 = d[x];
            int y1 = d[y];
            if (un.Find(x1) != un.Find(y1))
            {
                return false;
            }
        }
        return true;
    }
}

public class Union 
{
    int[] root = null;
    int[] connected = null;
    public Union(int n)
    {
        root = new int[n];
        connected = new int[n];
        for(int i=0; i<n; i++)
        {
            root[i] = i;
        }
    }

    public int Find(int x)
    {
        if (root[x] == x)
        {
            return x;
        }
        return Find(root[x]);
    }

    public void Connect(int x, int y)
    {
        int a = Find(x);
        int b = Find(y);
        if (a == b)
        {
            return;
        }
        if (connected[a] > connected[b])
        {
            root[b] = a;
            connected[a]++;
        } else {
            root[a] = b;
            connected[b]++;
        }
    }
}
```