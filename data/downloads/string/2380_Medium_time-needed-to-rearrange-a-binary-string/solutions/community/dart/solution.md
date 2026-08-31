# Dart implementation: O(N) time O(1) space

**Author:** yakiv_galkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/2903199/](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/2903199/)

---

# Intuition
Simple observation - every second we move "1" to the left whenever there is a "0" on the left side. If not and there are continues "11111" - the rightmost "1" waits number of seconds equal to the length of the "train of 1" till at least one zero comes on the left and we can start moving it. 
So for every "1" we can calculate two variables - number of 0-s to swap with and number of 1-s to wait for. Solution if the max( 0-s + 1-s) :-)



# Approach
At first we can clean the input string from the leading "1"s and tailing "0"'s since they do not affect result.

Then iterate through the remaining string and calculate two variables mentioned above- zero - number of zeros up to the index i, and dup - number of continues "11111" to wait for (increased whenever we meet "11" and decreased whenever we meet "00"). 

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```

class Solution {
  int secondsToRemoveOccurrences(String s) {
    int rem1 = s.indexOf('0');
    int rem0 = s.codeUnits.lastIndexOf("1".codeUnitAt(0));
    if (rem1 == -1 || rem0 == -1 || rem0 == rem1 - 1) return 0;
    s = s.substring(rem1, rem0 + 1);

    int N = s.length;
    int zero = 0;
    int dup = 0;
    zero = s[0] == '0' ? 1 : 0;

    int res = 0;
    for (int i = 1; i < N; i++) {
      int dupDelta = 0;
      if (s[i] == '1' && s[i - 1] == '1')
        dupDelta = 1;
      else if (s[i] == '0' && s[i - 1] == '0') dupDelta = -1;

      zero = zero + (s[i] == '0' ? 1 : 0);
      dup = max(0, dup + dupDelta);
      res = max(res, zero + dup);
    }

    return res;
  }
}

```