# Compare (Consider all cornor cases)

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-rational-numbers/solutions/5958815/](https://leetcode.com/problems/equal-rational-numbers/solutions/5958815/)

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
    private bool EqualNines(string s)
    {
        int len = s.Length;
        if (len == 0)
            return false;

        int idx = 0;
        while (idx < len)
        {
            if (s[idx] != '9')
                return false;
            idx++;
        }

        return true;
    }
    private bool EqualZero(string s)
    {
        int len = s.Length, idx = 0;
        while(idx < len && s[idx] == '0')
        {
            idx++;
        }

        return idx == len;
    }
    private string ParseDigit(string s, char[] chars)
    {
        int len = s.Length;
        int start = -1, end = -1;
        int idx = 0;
        while(idx < len)
        {
            if(s[idx] == chars[0])
            {
                start = idx;
            }
            else if(s[idx] == chars[1])
            {
                end = idx;
            }

            idx++;
        }

        if(start == -1)
            return "";

        idx = start+1;
        if(end == -1)
            end = len;

        return s.Substring(start+1, end-start-1);
    }

    private bool Comp(string noRep1, string rep1, string noRep2, string rep2)
    {
        string s1 = noRep1+rep1+rep1, s2 = noRep2+ rep2+rep2;
        if(s1.Length < s2.Length)
            s1 += rep1;
        else
            s2 += rep2;

        int minLen = Math.Min(s1.Length , s2.Length);
        int idx = 0;
        while(idx < minLen)
        {
            if(s1[idx] != s2[idx])
                return false;

            idx++;
        }

        return true;
    }

    public bool IsRationalEqual(string s, string t) {
        int lenS = s.Length, lenT = s.Length;
        if (lenS == 0 || lenT == 0)
            return lenS == lenT;
        int dotIdx = s.IndexOf('.');
        string ints1 = dotIdx == -1 ? s : s.Substring(0, dotIdx);
        dotIdx = t.IndexOf('.');
        string intt1 = dotIdx == -1 ? t : t.Substring(0, dotIdx);
        int intP1 = int.Parse(ints1), intP2 = int.Parse(intt1);
        if (Math.Abs(intP1 - intP2) > 1)
            return false;

        string noRep1 = ParseDigit(s, new char[] { '.', '(' }), noRep2 = ParseDigit(t, new char[] { '.', '(' });
        string rep1 = ParseDigit(s, new char[] { '(', ')' }), rep2 = ParseDigit(t, new char[] { '(', ')' });
        bool nines = EqualNines(rep1), ninet = EqualNines(rep2), zeros = EqualZero(rep1), zerot = EqualZero(rep2);
        int noRepPart1 = noRep1.Length == 0 ? -1 : int.Parse(noRep1), noRepPart2 = noRep2.Length == 0 ? -1 : int.Parse(noRep2);
        if (nines || ninet || zeros || zerot) // calculate repeat part if it exists
        {
            if (nines)
            {
                if (noRep1.Length == 0 || EqualNines(noRep1)) // no no-repeat part or no-repeat part is 999...
                {
                    intP1 += 1;
                    noRep1 = "";
                }
                else
                {
                    noRepPart1 = int.Parse(noRep1) + 1;
                }

                rep1 = "";
            }

            if (ninet)
            {
                if (noRep2.Length == 0 || EqualNines(noRep2))
                {
                    intP2 += 1;
                    noRep2 = "";
                }
                else
                {
                    noRepPart2 += 1;
                }


                rep2 = "";
            }

            if (zeros)
                rep1 = "";

            if (zerot)
                rep2 = "";
        }

        if (intP1 != intP2) // After calculate repeat part, integer part can compare
            return false;

        if (rep1 == "" || rep2 == "")
        {
            if (rep1 != rep2)
            {
                if (EqualZero(rep1))
                    rep1 = "";

                if (EqualZero(rep2))
                    rep2 = "";

                if (rep1 != rep2)
                    return false;
            }

            if (noRep1 != noRep2)
            {
				bool noRepComp = noRep1 == "" && noRep2 == "0" || noRep1 == "0" && noRep2 == "";
				string noRepPs = noRepPart1.ToString(), noRepPt = noRepPart2.ToString();
				bool compDiff = true;
				int idx = 0;
				while (idx < noRepPs.Length || idx < noRepPt.Length)
				{
					if (idx < noRepPs.Length && idx < noRepPt.Length)
					{
						if (noRepPs[idx] != noRepPt[idx])
						{
							compDiff = false;
							break;
						}
					}
					else if (idx < noRepPs.Length && noRepPs[idx] != '0')
					{
						compDiff = false;
						break;
					}
					else if (idx < noRepPt.Length && noRepPt[idx] != '0')
					{
						compDiff = false;
						break;
					}
					idx++;
				}

				return compDiff | noRepComp;
            }
        }

        string p1 = noRepPart1 != -1 ? noRepPart1.ToString() : noRep1;
        if(p1.Length < noRep1.Length)
            p1 = string.Concat(Enumerable.Repeat('0', noRep1.Length-p1.Length)) + p1;
        
        string p2 = noRepPart2 != -1 ? noRepPart2.ToString() : noRep2;
        if(p2.Length < noRep2.Length)
            p2 = string.Concat(Enumerable.Repeat('0', noRep2.Length-p2.Length)) + p2;
        return Comp(p1, rep1, p2, rep2);
    }
}
```