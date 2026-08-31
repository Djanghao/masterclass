# C#, Linq two ways

**Author:** JamesDeadman
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-words-containing-character/solutions/4330189/](https://leetcode.com/problems/find-words-containing-character/solutions/4330189/)

---

# Code
```
public class Solution 
{
    public IList<int> FindWordsContaining(string[] words, char x) => words
        .Select((w, i) => (w, i))  // change to a touple (index, value)
        .Where(kvp => kvp.Item1.Contains(x)) // filter for containing the character
        .Select(kvp => kvp.Item2)  // Get the index
        .ToList();  // Convert to a list
}

```
```
public class Solution 
{
    public IList<int> FindWordsContaining(string[] words, char x) => Enumerable
        .Range(0, words.Length) // Sequence of indicies
        .Where(i => words[i].Contains(x)) // Filter for indicies of words containing the character 
        .ToList(); // Convert to a list
}
```