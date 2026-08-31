# Explain use c#

**Author:** ThanhTung3001
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-string-after-change/solutions/4084028/](https://leetcode.com/problems/maximum-binary-string-after-change/solutions/4084028/)

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
    public string MaximumBinaryString(string binary) {
        int zeros = 0;
        int firstZero = -1;
        for (int i = 0; i < binary.Length; i++){
            if (binary[i] == '0'){
                zeros++;
                if (firstZero == -1) firstZero = i;
            }
        }
        if (zeros < 2) return binary;
        StringBuilder sb = new();
        sb.Append('1', firstZero + (zeros - 1));
        sb.Append("0");
        sb.Append('1', binary.Length - sb.Length);
        return sb.ToString();
    }
}
```