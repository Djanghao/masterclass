# Very straightforward C# solution

**Author:** bloodyblade
**Votes:** 22
**Link:** [https://leetcode.com/problems/add-binary/solutions/3059554/](https://leetcode.com/problems/add-binary/solutions/3059554/)

---

# Approach
Starting from the end of numbers `a` and `b`, sum the digits one by one in a loop while keeping track of a carry on each step. If one of the numbers ends, use a zero instead of a digit. In the end, reverse the result list and concatenate all digits to get the final number. That's it!

# Complexity
- Time complexity: $$O(Max(n,m))$$

- Space complexity: $$O(Max(n,m))$$

# Code
```
public class Solution {
    public string AddBinary(string a, string b) {
        var sum = new List<int>();
        for (int i = a.Length - 1, j = b.Length - 1, carry = 0; i >= 0 || j >= 0 || carry > 0;)
        {
            var firstDigit = i >= 0 ? a[i--] - '0' : 0;
            var secondDigit = j >= 0 ? b[j--] - '0' : 0;
            var sumDigit = firstDigit + secondDigit + carry;
            carry = sumDigit / 2;
            sum.Add(sumDigit % 2);
        }
        sum.Reverse();
        return String.Concat(sum);
    }
}
```

Please, upvote if the solution was useful for you!