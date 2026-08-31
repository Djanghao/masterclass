# ✅Java Simple Solution || ✅Runtime 1ms || ✅ Beats100%

**Author:** ahmedna126
**Votes:** 29
**Link:** [https://leetcode.com/problems/add-strings/solutions/4205075/](https://leetcode.com/problems/add-strings/solutions/4205075/)

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
class Solution {
    public String addStrings(String num1, String num2) {
        StringBuilder str = new StringBuilder();

        int i = num1.length() - 1, j = num2.length() - 1, carry = 0, sum;

        while (i >= 0 || j >= 0 || carry > 0) {
            int digit1 = (i >= 0) ? num1.charAt(i--) - '0' : 0;
            int digit2 = (j >= 0) ? num2.charAt(j--) - '0' : 0;

            sum = digit1 + digit2 + carry;
            str.append(sum % 10);
            carry = sum / 10;
        }

        return str.reverse().toString();
    }
}

```
## For additional problem-solving solutions, you can explore my repository on GitHub: [GitHub Repository](https://github.com/ahmedna126/java_leetcode_challenges)


![abcd1.jpeg](./images/0.jpeg)
