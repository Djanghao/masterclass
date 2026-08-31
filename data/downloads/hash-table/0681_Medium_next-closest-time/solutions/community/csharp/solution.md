# C# beats 90% by runtime and 100% by memory

**Author:** maryiamam
**Votes:** 2
**Link:** [https://leetcode.com/problems/next-closest-time/solutions/3692905/](https://leetcode.com/problems/next-closest-time/solutions/3692905/)

---

# Approach
Try increasing time digits from right to left. If increasing a digit makes new time invalid - set current digit to smallest possible number and move on to the left and try do the same.

1. Create a **sorted** array from time digits. It should contain only **distinct** values.
2. Create a variable where you will assemble next closest time.
3. Iterate over input time string starting from the end.
If a current digit is the **maximum** of all time digits we have, set it to the minimal one on the new time variable and move on to the next digit.
If **not**, try setting the bigger value of existing digits.
    If time is **valid** after this, leave other digits as they were and return closest time. 
    If **not**, set it to the minimal digit and move on to the next one.
4. Return new closes time variable.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public string NextClosestTime(string time) {
        var digits = new int []
        {
            time[0] - '0',
            time[1] - '0',
            time[3] - '0',
            time[4] - '0',
        }.Distinct().OrderBy(x => x).ToArray();

        var newTime = string.Empty;

        for (var i = 4; i >= 0; i--) {
            if (i == 2) newTime = ':' + newTime;
            
            if (time[i] - '0' == digits[digits.Length - 1]) {
                newTime = digits[0].ToString() + newTime;
            } 
            else {
                for (var j = 0; j < digits.Length; j++) {
                    if (digits[j] == time[i] - '0') {
                        var canUse = true;
                        if (i == 0) canUse = digits[j + 1] < 3;
                        if (i == 1) canUse = digits[j + 1] < 4 || time[0]-'0' < 2;
                        if (i == 3) canUse = digits[j + 1] < 6;

                        if (canUse) {
                            return time.Substring(0, 4 - newTime.Length) + digits[j + 1].ToString() + newTime;
                        } else {
                            newTime = digits[0].ToString() + newTime;
                        }

                        break;
                    }
                }
            }
        }

        return newTime;
    }
}
```