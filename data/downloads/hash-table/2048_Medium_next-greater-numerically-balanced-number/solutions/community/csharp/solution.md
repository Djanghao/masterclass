# c# solution with a dictionary 100%

**Author:** CetinBudak
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/5086292/](https://leetcode.com/problems/next-greater-numerically-balanced-number/solutions/5086292/)

---


![image.png](./images/0.png)

# Complexity
- Time complexity:
O(log n)

- Space complexity:
O(1)
# Code
```
public class Solution {
    public int NextBeautifulNumber(int n) {
        int digits = n + 1;
        int number = 0;
        bool found = false;
        Dictionary<int, int> map = new Dictionary<int, int>();
        while (!found)
        {
            map.Clear();
            number = digits;
            while (number > 0)
            {
                int digit = number % 10;
                if (map.ContainsKey(digit))
                    map[digit]++;
                else
                    map[digit] = 1;
                number /= 10;
            }
            int mapCount = map.Count;
            found = map.Where(x => x.Key == x.Value).Count() == map.Count;
            if (found)
                return digits;
            digits++;
        }
        return digits;        
    }
}
```