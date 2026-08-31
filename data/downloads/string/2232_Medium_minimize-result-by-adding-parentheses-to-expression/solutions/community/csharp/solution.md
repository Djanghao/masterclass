# C# | Brute Force

**Author:** BrutalReviewer
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/4115313/](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/4115313/)

---

# Code
```
public class Solution
{
  public string MinimizeResult(string expression)
  {
    var sums = expression.Split('+');
    var left = sums[0];
    var right = sums[1];
    var minExpression = "";
    var minValue = int.MaxValue;
    for (var l = 0; l < left.Length; l++)
    {
      var l1 = left[..l];
      var l2 = left[l..];
      for (var r = 1; r <= right.Length; r++)
      {
        var r1 = right[..r];
        var r2 = right[r..];
        var value = CalcValue(l1, l2, r1, r2);
        if (value < minValue)
        {
          minValue = value;
          minExpression = $"{l1}({l2}+{r1}){r2}";
        }
      }
    }
    return minExpression;
  }

  private static int CalcValue(string s1, string s2, string s3, string s4)
  {
    var n1 = s1 == "" ? 1 : int.Parse(s1);
    var n2 = int.Parse(s2);
    var n3 = int.Parse(s3);
    var n4 = s4 == "" ? 1 : int.Parse(s4);
    return n1 * (n2 + n3) * n4;
  }
}
```