# C# | Runtime beats 98.90%, Memory beats 73.11% [EXPLAINED]

**Author:** r9n
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-and-say/solutions/5801879/](https://leetcode.com/problems/count-and-say/solutions/5801879/)

---

# Intuition
The "Count and Say" problem is like describing a sequence of numbers based on the counts of consecutive digits. For instance, if you start with "1", the next term describes it as "one 1", which is "11". For "11", the next term describes it as "two 1s", which is "21", and so on.


# Approach
Start: Begin with the base case "1".


Iterate: For each step, generate the next term by counting consecutive digits in the current term and describing them.


Generate: Use a helper function to build the new term by counting and encoding the digits.


# Complexity
- Time complexity:
O(2n). Each term in the sequence can grow exponentially, but it\u2019s manageable for \uD835\uDC5B \u2264 30.


- Space complexity:
O(2n) due to storing intermediate results and new strings.


# Code
```csharp []
public class Solution
{
    public string CountAndSay(int n)
    {
        if (n == 1) return "1";

        string result = "1";
        for (int i = 1; i < n; i++)
        {
            result = GetNextSequence(result);
        }
        return result;
    }

    private string GetNextSequence(string s)
    {
        var sb = new System.Text.StringBuilder();
        int count = 1;

        for (int i = 1; i < s.Length; i++)
        {
            if (s[i] == s[i - 1])
            {
                count++;
            }
            else
            {
                sb.Append(count).Append(s[i - 1]);
                count = 1;
            }
        }

        // Append the last counted character
        sb.Append(count).Append(s[s.Length - 1]);

        return sb.ToString();
    }
}


```