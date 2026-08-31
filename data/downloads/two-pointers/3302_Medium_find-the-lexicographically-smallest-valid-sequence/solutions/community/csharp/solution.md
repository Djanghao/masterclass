# Track same items counts

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/6114199/](https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/6114199/)

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
```csharp []
public class Solution {
    public int[] ValidSequence(string word1, string word2) {
        int len1 = word1.Length, len2 = word2.Length;
        if(len1 < len2 || len2 == 0) // invalid cases
            return new int[0];

        int[] res = new int[len2];
        int[] restSameCnt = new int[len1]; // track the same items Cnt from current to last;
        int index = len2-1;
        for(int i = len1-1; i >= 0; i--)
        {
            if(index >= 0 && word1[i] == word2[index])
                index--;

            restSameCnt[i] = len2-1-index;
        }

        bool replaced = false;
        index = 0;
        for(int i = 0; i <= len1; i++)
        {
            if(i == len1 || index == len2)
                return index == len2 ? res : new int[0];

            if(word1[i] == word2[index])
            {
                res[index++] = i;
            }
            else if(!replaced && (i == len1-1 || restSameCnt[i+1] >= len2-1-index))
            {
                res[index++] = i;
                replaced = true;
            }
        }

        return new int[0];
    }
}
```