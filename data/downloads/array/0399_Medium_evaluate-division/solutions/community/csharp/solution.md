# Simple DFS Approach | C# | +89% efficient

**Author:** Baymax_
**Votes:** 10
**Link:** [https://leetcode.com/problems/evaluate-division/solutions/3543713/](https://leetcode.com/problems/evaluate-division/solutions/3543713/)

---

# Intuition & Approach
<!-- Describe your first thoughts on how to solve this problem. -->
Fiven a pair Ai, Bi, which evaluates to Ai/Bi = Vi, we'll use a dictionary to store (Ai,Bi) = Vi and (Bi,Ai) = 1/Vi.

Then, while evaluating each given query, we'll check if both numerator and denominator of the given query is encountered earlier and use DFS approach to find the available num/den combination and evaluate the query.

![Screenshot 2023-05-20 110519.png](./images/0.png)


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N^2) - as we apply DFS for each of the query

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N) - as we use dictionary to store the given expressions

## Please upvote if you like the approach

# Code
```
public class Solution {
    public double[] CalcEquation(IList<IList<string>> equations, double[] values, IList<IList<string>> queries) {
        
        HashSet<string> vis = new HashSet<string>();
        Dictionary<string, Dictionary<string, double>> d = new Dictionary<string, Dictionary<string, double>>();

        for (int i = 0; i < equations.Count; i++)
        {
            string numerator = equations[i][0];
            string denominator = equations[i][1];
            double resultValue = values[i];

            if (!d.ContainsKey(numerator))
                d[numerator] = new Dictionary<string, double>();
            
            if (!d.ContainsKey(denominator))
                d[denominator] = new Dictionary<string, double>();

            d[numerator][denominator] = resultValue;
            d[denominator][numerator]  = 1 / resultValue;
        }

        return queries.Select(q => EvaluateQuery(q[0], q[1], d, vis)).ToArray();
    }

    private double EvaluateQuery(string num, string den, Dictionary<string, Dictionary<string, double>> d, HashSet<string> vis)
    {
        if (!d.ContainsKey(num) || !d.ContainsKey(den))
            return -1;

        if (num == den)
            return 1;

        if (d.ContainsKey(num) && d[num].ContainsKey(den))
            return d[num][den];

        vis.Add(num);
        double cur = -1;
        foreach (var key in d[num].Keys)
        {
            if (!vis.Contains(key))
            {
                cur = EvaluateQuery(key, den, d, vis);
                if (cur != -1)
                {
                    cur = cur * d[num][key];
                    break;
                }
            }
        }

        vis.Remove(num);
        return cur;
    }
}
```

## Please upvote if you like the approach
![Upvote please - CAT.jpg](./images/1.jpeg)
