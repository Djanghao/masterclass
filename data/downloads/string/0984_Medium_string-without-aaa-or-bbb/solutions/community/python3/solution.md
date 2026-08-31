# Simple Math Problem Without Recursion

**Author:** Dentiny
**Votes:** 3
**Link:** [https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/344787/](https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/344787/)

---

This problem can easily be done without recursion.
Suppose `A > B`, it can be splitted into two situations.
1. When `A >= 2 * B`, the result string can be constructed with `B "aab"`; since the last character for the current string mush be` 'b'`, it can be followed with `A - B 'a'`.
1. When `B < A < 2 * B`, the result string can be constructed with m `"aab"`, followed be n `"ab"`.

Thus two equations can be listed:
* the number of 'a': 2 * m + n = A
* the number of 'b': m + n = B

The value of m and n can easily be solved.
```
m = A - B
n = 2 * B - A
```

Here is my code.
Python Version
```
class Solution:
    def strWithout3a3b(self, A, B):
        if(B <= A < 2 * B): return "aab" * (A - B) + "ab" * (2 * B - A);
        elif(2 * B <= A <= 2 * B + 2): return "aab" * B + "a" * (A - B * 2);
        elif(A < B < 2 * A): return "bba" * (B - A) + "ba" * (2 * A - B); 
        elif(2 * A <= B <= 2 * A + 2): return "bba" * A + "b" * (B - A * 2);
        else: return "";
```

C++ Version
```
class Solution 
{
private:
	string repearStr(string s, int num)
	{
		string res = "";
		for(int i = 0; i < num; i++) res += s;
		return res;
	}

public:
    string strWithout3a3b(int A, int B) 
    {
        if(B <= A && A < 2 * B) return repearStr("aab", A - B) + repearStr("ab", 2 * B - A);
        else if(2 * B <= A && A <= 2 * B + 2) return repearStr("aab", B) + repearStr("a", A - B * 2);
        else if(A < B && B < 2 * A) return repearStr("bba", B - A) + repearStr("ba", 2 * A - B);
        else if(2 * A <= B && B <= 2 * A + 2) return repearStr("bba", A) + repearStr("b", B - A * 2);
        else return "";
    }
};
```

Feel free to ask any question. : )