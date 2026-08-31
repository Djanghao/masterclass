# Simple solution | C# | 100% efficient

**Author:** Baymax_
**Votes:** 1
**Link:** [https://leetcode.com/problems/base-7/solutions/3566784/](https://leetcode.com/problems/base-7/solutions/3566784/)

---

# Intuition & Approach
<!-- Describe your first thoughts on how to solve this problem. -->
Simple divide and track-reminder approach to find base 7 of a number.
It is similar to how we find base 2 conversion or any other base conversion

![Screenshot 2023-05-27 104630.png](./images/0.png)


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(Log7) - as we keep reducing the given number by 7-times in every iteration

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) - as we only use constant memory

## Please upvote if you like the approach

# Code
```
public class Solution {
    public string ConvertToBase7(int num) {
        if (num > -7 && num < 7)
            return num.ToString();

        StringBuilder sb = new StringBuilder();
        int n = Math.Abs(num);
        int rem = 0;
        while (n > 0)
        {
            rem = n % 7;
            n = n / 7;
            sb.Insert(0, rem);
        }

        if (num < 0)
            sb.Insert(0, "-");

        return sb.ToString();
    }
}
```

## Please upvote if you like the approach
![Upvote please - Do this.jpg](./images/1.jpeg)
