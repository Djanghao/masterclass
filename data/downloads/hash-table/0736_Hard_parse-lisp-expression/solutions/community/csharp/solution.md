# BackTracking

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/parse-lisp-expression/solutions/5922625/](https://leetcode.com/problems/parse-lisp-expression/solutions/5922625/)

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
  	private List<string> ParseToken(string s)
	{
		List<string> tokens = new();
		int start = 0, cnt = 0;
		for (int i = 0; i < s.Length; i++)
		{
			char c = s[i];
			if (c == ' ')
			{
				if (cnt > 0)
					tokens.Add(s.Substring(start, cnt));

				start = i + 1;
				cnt = 0;
			}
			else if (c == '(')
			{
				if (cnt > 0)
					tokens.Add(s.Substring(start, cnt));

				int j = i + 1, balance = 1;
				while (balance != 0 && j < s.Length)
				{
					if (s[j] == '(')
						balance++;
					else if (s[j] == ')')
						balance--;

					j++;
				}

				tokens.Add(s.Substring(i, j - i));
				i = j - 1;
				start = i + 1;
				cnt = 0;
			}
			else
			{
				cnt++;
			}
		}

		if (cnt > 0)
			tokens.Add(s.Substring(start, cnt));

		return tokens;
	}

		private int BackTracking(string exp, Dictionary<string, int> dict)
		{ 
			int len = exp.Length;
			if (len == 0)
				return 0;

			if (exp[0] != '(')
			{
				if (exp[0] == '-' || Char.IsDigit(exp[0])) // case number
					return int.Parse(exp);

				return dict[exp]; // case cached value
			}

			string s = exp.Substring(1, len-2); // peel ()
			List<string> tokens = ParseToken(s);
			string type = tokens[0];
			if (type == "let")
			{
				var newDit = new Dictionary<string, int>(dict);
				for (int i = 1; i < tokens.Count - 1; i += 2)
				{
					newDit[tokens[i]] = BackTracking(tokens[i + 1], newDit);
				}

				return BackTracking(tokens[tokens.Count - 1], newDit);
			}
			else if (type == "add")
			{
				return BackTracking(tokens[1], new Dictionary<string, int>(dict)) + BackTracking(tokens[2], new Dictionary<string, int>(dict));
			}
			else if (type == "mult")
			{
				return BackTracking(tokens[1], new Dictionary<string, int>(dict)) * BackTracking(tokens[2], new Dictionary<string, int>(dict));
			}

			throw new Exception("Invalid expression.");
		}

    public int Evaluate(string expression) {
       Dictionary<string, int> evalDict = new Dictionary<string, int>();
        return BackTracking(expression, evalDict);
    }
}
```