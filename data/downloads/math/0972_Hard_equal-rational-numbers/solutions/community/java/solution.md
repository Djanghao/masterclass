# Solution

**Author:** deleted_user
**Votes:** 3
**Link:** [https://leetcode.com/problems/equal-rational-numbers/solutions/3532970/](https://leetcode.com/problems/equal-rational-numbers/solutions/3532970/)

---

```C++ []
class Solution {
 public:
  bool isRationalEqual(string S, string T) {
    return abs(valueOf(S) - valueOf(T)) < 1e-9;
  }
 private:
  vector<double> ratios{1.0, 1.0 / 9, 1.0 / 99, 1.0 / 999, 1.0 / 9999};

  double valueOf(const string& s) {
    if (s.find('(') == string::npos)
      return stod(s);

    double integer_nonRepeating = stod(s.substr(0, s.find_first_of('(')));
    int nonRepeatingLength = s.find_first_of('(') - s.find_first_of('.') - 1;
    int repeating =
        stoi(s.substr(s.find_first_of('(') + 1, s.find_first_of(')')));
    int repeatingLength = s.find_first_of(')') - s.find_first_of('(') - 1;

    return integer_nonRepeating +
           repeating * pow(0.1, nonRepeatingLength) * ratios[repeatingLength];
  }
};
```

```Python3 []
from fractions import Fraction

class Solution:
    def isRationalEqual(self, S, T):
        def f(s):
            i = s.find('(')
            if i >= 0:
                s = s[:i] + s[i + 1:-1] * 20
            return float(s[:20])
        return f(S) == f(T)
```

```Java []
class Solution {
  public boolean isRationalEqual(String s, String t) {
    return Math.abs(valueOf(s) - valueOf(t)) < 1e-9;
  }
  private static double[] ratios = new double[] {1.0, 1.0 / 9, 1.0 / 99, 1.0 / 999, 1.0 / 9999};

  private double valueOf(final String s) {
    if (!s.contains("("))
      return Double.valueOf(s);

    final int leftParenIndex = s.indexOf('(');
    final int rightParenIndex = s.indexOf(')');
    final int dotIndex = s.indexOf('.');

    final double nonRepeating = Double.valueOf(s.substring(0, leftParenIndex));
    final int nonRepeatingLength = leftParenIndex - dotIndex - 1;

    final int repeating = Integer.parseInt(s.substring(leftParenIndex + 1, rightParenIndex));
    final int repeatingLength = rightParenIndex - leftParenIndex - 1;
    return nonRepeating + repeating * Math.pow(0.1, nonRepeatingLength) * ratios[repeatingLength];
  }
}
```
