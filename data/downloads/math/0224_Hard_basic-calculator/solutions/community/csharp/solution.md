# C# stack

**Author:** anand9589
**Votes:** 8
**Link:** [https://leetcode.com/problems/basic-calculator/solutions/2831465/](https://leetcode.com/problems/basic-calculator/solutions/2831465/)

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

        public int Calculate(string s)
        {
            int result = 0;
            int i = 0;
            Stack<int> stack = new Stack<int>();
            int sign = 1;
            int num = 0;
            while (i < s.Length)
            {
                switch (s[i])
                {
                    case '+':
                        sign = 1;
                        break;
                    case '-':
                        sign = -1;
                        break;
                    case '(':
                        stack.Push(result);
                        stack.Push(sign);
                        result = 0;
                        sign = 1;
                        break;
                    case ')':
                        int lastSign = stack.Pop();
                        result *= lastSign;
                        int lastNum = stack.Pop();
                        result += lastNum;

                        break;
                    case ' ':
                        break;
                    default:
                        if (char.IsDigit(s[i]))
                        {
                            StringBuilder stringBuilder = new StringBuilder();
                            stringBuilder.Append(s[i]);
                            while (i+1 < s.Length && char.IsDigit(s[i+1]))
                            {
                                stringBuilder.Append(s[++i]);
                            }

                            num = int.Parse(stringBuilder.ToString());
                            num *= sign;
                            result+=num;
                            sign = 1;
                        }
                        break;
                }
                i++;
            }

            return result;
        }
      
}
```