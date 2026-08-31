# best approach

**Author:** ayyubi_vh
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-binary-substrings/solutions/5676239/](https://leetcode.com/problems/count-binary-substrings/solutions/5676239/)

---

# Intuition
The problem involves finding substrings with equal numbers of consecutive '0's and '1's. The key observation is that these valid substrings occur at the boundaries where the character changes from '0' to '1' or vice versa
# Approach
We use two counters: prev to store the length of the previous group of characters and current to store the length of the current group

As we iterate through the string, we compare adjacent characters:

If they are different, it means we reached the end of a group. We then add the smaller of prev or current to the result (since that determines the number of valid substrings).
Update prev with current, and reset current to 1.
If they are the same, just increment the current counter.

Finally, after the loop, we add the minimum of the last prev and current values to the result.


# Complexity
- Time complexity:
O(n) where n is the length of the string s. We make a single pass through the string.
- Space complexity:
O(1) as we use only a few variables to store counters and the result.
# Code
```dart []
class Solution {
  int countBinarySubstrings(String s) {

    int prev = 0, current = 1, result = 0;
     
    for(int i = 1; i < s.length; i++)
    {
        if(s[i] != s[i-1])
        {
           result += prev < current ? prev : current;
           prev = current;
           current = 1;
        }
        else
        {
           current ++;
        }
    }
     
     result += result = prev < current ? prev : current;
     return  result;
  }
}
```