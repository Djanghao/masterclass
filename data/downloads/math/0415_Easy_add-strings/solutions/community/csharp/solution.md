# easy solution

**Author:** vinuaqua4u
**Votes:** 5
**Link:** [https://leetcode.com/problems/add-strings/solutions/3560254/](https://leetcode.com/problems/add-strings/solutions/3560254/)

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
    public string AddStrings(string num1, string num2) {
        int carry = 0, i = num1.Length - 1, j = num2.Length - 1;
        StringBuilder sb = new();
        while (i > -1 || j > -1 || carry != 0) {
            int a = i > -1 ? num1[i] - '0' : 0;
            int b = j > -1 ? num2[j] - '0' : 0;
            i--;
            j--;

            int sum = a + b + carry;
            sb.Insert(0, sum % 10);
            carry = sum / 10;
        }

        return sb.ToString();
    }
}
```