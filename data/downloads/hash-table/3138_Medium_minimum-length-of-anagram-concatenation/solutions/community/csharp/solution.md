# Group by chars and filter by group idxs range with GCD

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5486613/](https://leetcode.com/problems/minimum-length-of-anagram-concatenation/solutions/5486613/)

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
```
public class Solution {
    private int GCD(int a, int b)
    {
         if(a == b)
            return a;
        else if(a > b)
            return GCD(a-b, b);
        else
            return GCD(a, b-a);
    }
    public int MinAnagramLength(string s) {
   		Dictionary<int, List<int>> dict = new Dictionary<int, List<int>>();
		int maxCnt = 1, len = s.Length;
		for (int i = 0; i < len; i++)
		{
			char c = s[i];
			if (!dict.ContainsKey(c))
				dict.Add(c, new List<int>());

			dict[c].Add(i);

			maxCnt = Math.Max(maxCnt, dict[c].Count);
		}

		int gcd = GCD(len, maxCnt);
		if (gcd == 1)
			return len;

		for (int rep = gcd; rep >= 2; rep--)
		{
			if (len % rep != 0)
				continue;

			int groupEnd = len / rep;
			bool findAnagram = true;
            int diff = groupEnd;
            foreach (var kvp in dict)
            {
                int subLen = kvp.Value.Count();
                if (subLen % rep != 0)
                {
                    findAnagram = false;
                    break;
                }
                int subGap = subLen / rep;
                int times = 1;
                while (times <= rep)
                {
                    if (kvp.Value[subGap * times - 1] >= times * diff)
                    { 
                        findAnagram = false;
                        break;
                    }

                    times++;
                }
            }
			if (findAnagram)
				return groupEnd;
		}

		return len;
    }
}
```