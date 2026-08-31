# C# Solution (98 ms)

**Author:** nhebb
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-time-for-given-digits/solutions/3054274/](https://leetcode.com/problems/largest-time-for-given-digits/solutions/3054274/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
"This looks easy". Ha ha ha ha ha ha, boy was I wrong.
# Approach
<!-- Describe your approach to solving the problem. -->
Don't do this: "I'll just use some if statements". What a nightmare.

Do this: Permute all the combinations of the array values and check that the hours are between 0-23 and the minutes are between 0-59. Track the max hours and minutes accordingly. Finally, double check the edge cases where the max hours and minutes are both 0.
# Complexity
- Time complexity: O(n!), but n is only 4.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

- Developer complexity: Much worse than you might think.

# Code
```
public class Solution {
    public string LargestTimeFromDigits(int[] arr) {
        // impossible range, therefore exit early
        if (arr.Min() >= 3) return "";

        var time = new List<int>();
        var chosen = new bool[4];
        var maxHrs = 0;
        var maxMins = 0;

        // local function to create permutations
        void Backtrack()
        {
            for (int i = 0; i < 4; i++)
            {
                if (chosen[i])
                    continue;

                time.Add(arr[i]);
                if (time.Count == 4)
                {
                    // check if hours and minutes are within range
                    // and compare to existing max's
                    var hrs = time[0] * 10 + time[1];
                    var mins = time[2] * 10 + time[3];
                    if ((hrs > maxHrs && hrs < 24 && mins < 60) ||
                        (hrs == maxHrs && mins > maxMins && mins < 60))
                    {
                        maxHrs = hrs;
                        maxMins = mins;
                    }
                }
                else
                {
                    chosen[i] = true;
                    Backtrack();
                    chosen[i] = false;
                }
                time.RemoveAt(time.Count - 1);
            }
        }

        Backtrack();

        // Final check for out of range arr values
        if (maxHrs == 0 && maxMins == 0 && arr.Any(x => x > 0))
            return "";

        return maxHrs.ToString("00") + ":" + maxMins.ToString("00");
    }
}
```