# Very simple solution using only List. Easy to understand (beats ~80%)

**Author:** YaJohny
**Votes:** 18
**Link:** [https://leetcode.com/problems/ransom-note/solutions/3122490/](https://leetcode.com/problems/ransom-note/solutions/3122490/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool CanConstruct(string ransomNote, string magazine)
        {
            List<char> list = new List<char>(magazine);
            for (int i = 0; i < ransomNote.Length; i++)
            {
                if (!list.Remove(ransomNote[i]))
                {
                    return false;
                }
            }
            return true;
        }
}
```
Feel free to ask if something not clear!