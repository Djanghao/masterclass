# c# : Easy Solution

**Author:** rahul89798
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/3932592/](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/3932592/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MinimumPartition(string s, int k) {
        long num = 0;
        var partitions = 1;
  
        foreach(var chr in s) {
            var digit = chr - '0';
            if(digit > k)
                return -1;
            
            num = num * 10 + digit;
            if(num > k) {
                partitions++;
                num = digit;
            }
        }

        return partitions;
    }
}
```