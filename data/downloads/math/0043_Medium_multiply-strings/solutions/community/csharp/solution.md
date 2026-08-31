# C# solution which beats 91.42% others in memory

**Author:** Muhammad-Diyor
**Votes:** 7
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/3589682/](https://leetcode.com/problems/multiply-strings/solutions/3589682/)

---


# Code
```
public class Solution {
    public string Multiply(string num1, string num2) {
            int length1 = num1.Length;
    int length2 = num2.Length;
    int[] result = new int[length1 + length2];

    for (int i = length1 - 1; i >= 0; i--)
    {
        for (int j = length2 - 1; j >= 0; j--)
        {
            int digit1 = num1[i] - '0';
            int digit2 = num2[j] - '0';
            int product = digit1 * digit2;
            int sum = result[i + j + 1] + product;

            result[i + j + 1] = sum % 10;
            result[i + j] += sum / 10;
        }
    }

    StringBuilder sb = new StringBuilder();
    foreach (int digit in result)
    {
        sb.Append(digit);
    }

    // Remove leading zeros if any
    while (sb.Length > 1 && sb[0] == '0')
    {
        sb.Remove(0, 1);
    }

    return sb.ToString();

    }
}
```