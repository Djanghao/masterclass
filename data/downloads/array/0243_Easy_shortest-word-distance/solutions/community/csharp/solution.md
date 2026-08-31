# Simple O(n) solution in C#

**Author:** user0742w
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance/solutions/5497913/](https://leetcode.com/problems/shortest-word-distance/solutions/5497913/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It is obvious that the shortest distances between the two words will be between some adjacent occurrences of the words e.g if we have

w1 * * * w1 * w2 * * w2
we can see that the shortest distance will be between the w1 and w2 that are next to each other. So we should be able to find the solution by doing one pass through the words and checking the distance between the alternate occurances of w1 and w2.

# Approach
<!-- Describe your approach to solving the problem. -->
Traverse the words and keep track of the last positions where word1 and word2 are found and the current minimal distance. 
When we find word1 we check if the distance to the last occurrance of word2 is giving us a better current result and if so update it, same for word2 - if we find word2 we check the distance to the last occurrance of word1 and if it is better than the current result we update it.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int ShortestDistance(string[] wordsDict, string word1, string word2) {
        var minDistance = Int32.MaxValue;
        var lastWord1 = -1;
        var lastWord2 = -1;
        for (var i = 0; i < wordsDict.Length; i++) {
            var word = wordsDict[i];
            if (word.Equals(word1)) {
                lastWord1 = i;
                if (lastWord2 > -1) {
                    minDistance = Math.Min(minDistance, Math.Abs(lastWord2 - lastWord1));
                }
            }
            if (word.Equals(word2)) {
                lastWord2 = i;
                if (lastWord1 > -1) {
                    minDistance = Math.Min(minDistance, Math.Abs(lastWord2 - lastWord1));
                }
            }
        }
        return minDistance;
    }
}
```