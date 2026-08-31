# C# Generating Grey Code Sequence Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/5528800/](https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/5528800/)

---

# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->A well-known sequence that satisfies these conditions is the Gray code sequence. The Gray code sequence for n bits ensures that each adjacent number differs by exactly one bit. Our task is to generate the Gray code sequence and then adjust it to start with the given start number.\r
___\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->//  GenerateGrayCode Method:\r
//  *This method generates the Gray Code sequence for n bits.\r
//  *It iterates from 0 to 2^n - 1.\r
//  *For each number i, it calculates the Gray code using the formula i(i >> 1).\r
//  CircularPermutation Method:\r
//  *It first generates the Gray code sequence for n bits.\r
//  *It finds the index of the 'start' number in the Gray code sequence.\r
//  *It creates the result list by rotating the Gray code sequence to start from the 'start' number.\r
//  *This is done by iterating through the sequence and adjusting the index using modulo operation to \r
//  ensure it wraps around correctly.\r
___\r
\r
# Complexity\r
- Time complexity:\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(2^n).\r
___\r
\r
- Space complexity:\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(2^n).\r
___\r
\r
# Code\r
```\r
using System;\r
using System.Collections.Generic;\r
\r
public class Solution {\r
    public IList<int> CircularPermutation(int n, int start) {\r
        List<int> grayCode = GenerateGrayCode(n);\r
        int startIndex = grayCode.IndexOf(start);\r
        List<int> result = new List<int>();\r
\r
        for (int i = 0; i < grayCode.Count; i++) {\r
            result.Add(grayCode[(startIndex + i) % grayCode.Count]);\r
        }\r
\r
        return result;\r
    }\r
\r
    private List<int> GenerateGrayCode(int n) {\r
        List<int> result = new List<int>();\r
        int totalNumbers = 1 << n;  // 2^n\r
        for (int i = 0; i < totalNumbers; i++) {\r
            result.Add(i ^ (i >> 1));   // Generating Gray code\r
        }\r
        return result;\r
    }\r
}\r
```