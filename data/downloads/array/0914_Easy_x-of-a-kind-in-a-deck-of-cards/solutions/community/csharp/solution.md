# C# 解決方案

**Author:** z087757775
**Votes:** 0
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/6047164/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/6047164/)

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
        public bool HasGroupsSizeX(int[] deck)
        {
            Dictionary<int, int> Din = new Dictionary<int, int>();

            foreach(int n in deck)
            {
                if (Din.ContainsKey(n))
                {
                    Din[n]++;
                }
                else
                {
                    Din[n] = 1;
                }
            }

            int gcd = Din.Values.First();

            foreach(KeyValuePair<int, int> item in Din)
            {
                gcd = GCD(gcd, item.Value);
                if (gcd == 1) return false;
            }

            return true;
        }

        private int GCD(int a, int b)
        {
            while(b != 0)
            {
                int temp = a % b;
                a = b;
                b = temp;
            }
            return a;
        }
}
```