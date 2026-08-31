# Beats 70%, O(n + m)

**Author:** Igor0
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-merge-of-two-strings/solutions/4791929/](https://leetcode.com/problems/largest-merge-of-two-strings/solutions/4791929/)

---

# Intuition
Create 2 indices for 2 input strings.

# Approach
Create 2 indices for 2 input strings:
```
var index0 = 0;
var index1 = 0;
```
Then in cycle while get the most profitable index:
```
while (index0 < word1.Length || index1 < word2.Length)
{
    var index = GetStringIndex(index0, index1, word1, word2);
    if (index == 0)
    {
        aux.Add(word1[index0]);
        index0++;
    }
    else
    {
        aux.Add(word2[index1]);
        index1++;
    }
}
```
We do it with an auxiliary method
```
private int GetStringIndex(int index0, int index1, string word0, string word1)
```

# Complexity
- Time complexity:
$$O(n + m)$$, where n and m are the lengths of strings `word1` and `words2` respectively

- Space complexity:
$$O(n + m)$$, where n and m are the lengths of strings `word1` and `words2` respectively

# Code
```
public class Solution {
    public string LargestMerge(string word1, string word2) {
        var index0 = 0;
        var index1 = 0;
        var aux = new List<char>();
        while (index0 < word1.Length || index1 < word2.Length)
        {
            var index = GetStringIndex(index0, index1, word1, word2);
            if (index == 0)
            {
                aux.Add(word1[index0]);
                index0++;
            }
            else
            {
                aux.Add(word2[index1]);
                index1++;
            }
        }
        var rs = new string(aux.ToArray());
        return rs;
    }
    private int GetStringIndex(int index0, int index1, string word0, string word1)
    {
        while (index0 < word0.Length && index1 < word1.Length && word0[index0] == word1[index1])
        {
            index0++;
            index1++;
        }
        if (index0 >= word0.Length)
        {
            return 1;
        }
        if (index1 >= word1.Length)
        {
            return 0;
        }
        if (word0[index0] > word1[index1])
        {
            return 0;
        }
        else
        {
            return 1;
        }
    }
}
```