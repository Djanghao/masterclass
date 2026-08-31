# C#

**Author:** anand9589
**Votes:** 4
**Link:** [https://leetcode.com/problems/optimal-partition-of-string/solutions/3376750/](https://leetcode.com/problems/optimal-partition-of-string/solutions/3376750/)

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


        public int PartitionString(string s)
        {
            if (string.IsNullOrEmpty(s)) return 0;
            int result = 1;

            HashSet<char> chars = new HashSet<char>();

            foreach (char c in s)
            {
                if (chars.Contains(c))
                {
                    result++;
                    chars = new HashSet<char>() { c };

                }
                else
                {
                    chars.Add(c);
                }
            }

            return result;
        }
}
```