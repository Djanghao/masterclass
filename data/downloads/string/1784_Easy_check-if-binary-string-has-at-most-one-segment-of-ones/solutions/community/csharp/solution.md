# C# Solution | Two Approaches | O(n)

**Author:** anshulgarg904
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/4271359/](https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/solutions/4271359/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$ O(n) $$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$ O(1) $$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool CheckOnesSegment(string s) {
        int i=0;

        while(i < s.Length && s[i] == '1'){
            i++;
            continue;
        }

        while(i < s.Length){
            if(s[i] == '1'){
                return false;
            }

            i++;            
        }

        return true;
    }
}
```

**One Liner Approach:**

```
public class Solution {
    public bool CheckOnesSegment(string s) {
        return !s.Contains("01");
    }
}
```