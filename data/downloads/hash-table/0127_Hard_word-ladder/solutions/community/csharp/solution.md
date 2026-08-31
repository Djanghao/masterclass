# Word Ladder

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/word-ladder/solutions/5638603/](https://leetcode.com/problems/word-ladder/solutions/5638603/)

---

```
using System;
using System.Collections.Generic;

public class Solution
{
    public int LadderLength(string beginWord, string endWord, IList<string> wordList)
    {
        // Convert the word list to a set for O(1) lookups
        var wordSet = new HashSet<string>(wordList);
        
        // Early exit if endWord is not in the word list
        if (!wordSet.Contains(endWord)) return 0;
        
        // BFS initialization
        var queue = new Queue<string>();
        queue.Enqueue(beginWord);
        var level = 1;
        
        while (queue.Count > 0)
        {
            int size = queue.Count;
            
            for (int i = 0; i < size; i++)
            {
                var currentWord = queue.Dequeue();
                
                // Try all possible single letter transformations
                for (int j = 0; j < currentWord.Length; j++)
                {
                    char[] wordArray = currentWord.ToCharArray();
                    
                    for (char c = 'a'; c <= 'z'; c++)
                    {
                        wordArray[j] = c;
                        string newWord = new string(wordArray);
                        
                        if (newWord == endWord)
                        {
                            return level + 1;
                        }
                        
                        if (wordSet.Contains(newWord))
                        {
                            queue.Enqueue(newWord);
                            wordSet.Remove(newWord); // Mark as visited
                        }
                    }
                }
            }
            
            level++;
        }
        
        return 0; // No transformation sequence found
    }
}

```