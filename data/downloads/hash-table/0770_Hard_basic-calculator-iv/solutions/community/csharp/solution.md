# Track expression with new created structure

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/basic-calculator-iv/solutions/5928712/](https://leetcode.com/problems/basic-calculator-iv/solutions/5928712/)

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
    class MonoExp : IComparable<MonoExp>
    {
        public List<string> Factors;

        public int CompareTo(MonoExp other)
        {
            if(Factors.Count == other.Factors.Count)
            {
                for(int i = 0; i < Factors.Count; i++)
                {
                    int t = Factors[i].CompareTo(other.Factors[i]);
                    if(t != 0)
                        return t;
                }

                return 0;
            }
            else
                return Factors.Count < other.Factors.Count ? 1 : -1;
        }

        public MonoExp()
        {
            this.Factors = new List<string>();
        }

        public MonoExp(string key)
        {
            this.Factors = new List<string>(){key};
        }

        public MonoExp(MonoExp e1, MonoExp e2)
        {
            this.Factors = new List<string>(e1.Factors);
            this.Factors.AddRange(e2.Factors);
            this.Factors.Sort();
        }

        public string Serialize()
        {
            return string.Join("*", this.Factors);
        }
    }

    class MonoComparer : IEqualityComparer<MonoExp>
    {
        public bool Equals(MonoExp e1, MonoExp e2)
        {
            if(e1.Factors.Count != e2.Factors.Count)
                return false;
            else
            {
                for(int i = 0; i < e1.Factors.Count; i++)
                {
                    if(e1.Factors[i] != e2.Factors[i])
                        return false;
                }
            }
            
            return true;
        }

        public int GetHashCode(MonoExp obj)
        {
            int r = 0;
            foreach(string cur in obj.Factors)
            {
                r *= 19;
                r += cur.GetHashCode();
                r %= 1000000007;
            }

            return r;
        }
    }

    class Poly
    {
        public Dictionary<MonoExp, int> Terms = new Dictionary<MonoExp, int>(new MonoComparer());
        public void Update(MonoExp key, int val)
        {
            if(val == 0)
                return;

            if(Terms.TryGetValue(key, out int old))
            {
                int newVal = old+val;
                if(newVal == 0)
                    Terms.Remove(key);
                else
                    Terms[key] = newVal;
            }
            else
            {
                Terms.Add(key, val);
            }
        }

        public void Add(Poly other)
        {
            foreach(var kvp in other.Terms)
            {
                Update(kvp.Key, kvp.Value);
            }
        }

        public void Minus(Poly other)
        {
            foreach(var kvp in other.Terms)
            {
                Update(kvp.Key, -kvp.Value);
            }
        }

        public void Multiply(Poly other)
        {
            Poly p = new();
            foreach(var kvp1 in Terms)
            {
                foreach(var kvp2 in other.Terms)
                {
                    MonoExp keys = new MonoExp(kvp1.Key, kvp2.Key);
                    p.Update(keys, kvp1.Value * kvp2.Value);
                }
            }

            this.Terms = p.Terms;
        }

        public List<string> Serialize()
        {
            List<MonoExp> keys = new List<MonoExp>(Terms.Keys);
            keys.Sort();
            List<string> res = new();
            foreach(var key in keys)
            {
                string curStr = key.Serialize();
                if(curStr.Length > 0)
                    res.Add(Terms[key] + "*" + curStr);
                else
                    res.Add(Terms[key].ToString());
            }

            return res;
        }
    }

    private Poly Combine(Stack<Poly> stk, Stack<char> opts)
    {
        Poly p = new();
        while(opts.Count > 0)
        {
            if(opts.Pop() == '+')
                p.Add(stk.Pop());
            else
                p.Minus(stk.Pop());
        }

        p.Add(stk.Pop());
        return p;
    }
    private Poly Calculate(string s, ref int idx)
    {
        int num = 0;
        List<char> chs = new();
        Poly p = new();
        Stack<Poly> stk = new();
        Stack<char> opts = new();
        while(idx < s.Length)
        {
            char c = s[idx];
            if(c == '(')
            {
                idx++;
                p = Calculate(s, ref idx);
            }
            else if(Char.IsLetter(c))
            {
                chs.Add(c);
            }
            else if(Char.IsDigit(c))
            {
                num *= 10;
                num += (c-'0');
            }
            else if(c == '+' || c == '-' || c == '*' || c == ')')
            {
                if(chs.Count > 0)
                {
                    string key = string.Join("", chs.ToArray());
                    if(dict.TryGetValue(key, out int val))
                        p.Update(new MonoExp(), val);
                    else
                        p.Update(new MonoExp(key), 1);
                }
                else if(num > 0)
                {
                    p.Update(new MonoExp(), num);
                }

                if(opts.Count > 0 && opts.Peek() == '*')
                {
                    opts.Pop();
                    stk.Peek().Multiply(p);
                }
                else
                    stk.Push(p);

                num = 0;
                chs.Clear();
                p = new Poly();
                if(c == ')')
                    return Combine(stk, opts);

                opts.Push(c);
            }

            idx++;
        }

        return p;
    }
    private Dictionary<string, int> dict = new();
    public IList<string> BasicCalculatorIV(string expression, string[] evalvars, int[] evalints) {
        int idx = 0;
        for (var i = 0; i < evalvars.Length; i++)
        {
            dict.Add(evalvars[i], evalints[i]);
        }
        return Calculate('(' + expression + ')', ref idx).Serialize();
    }
}
```