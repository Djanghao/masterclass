# C# 100% 12ms Fastest Solution

**Author:** starwind064
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-word-distance-iii/solutions/5962628/](https://leetcode.com/problems/shortest-word-distance-iii/solutions/5962628/)

---

# Intuition
Keep track of each indices when words are found and add the distances to a list, then return the minimum distance from the list.

# Approach
**Case 1**: The words are the same. This means that only one index has to be stored each time the word is encountered. Once the word is encountered more than once, add the distance to the list of distances. After iterating through the word dictionary, return the minimum value from the distance list.

**Case 2**: The words are different. This means that two indices have to be stored. One for each word. Use the absolute value of the difference between the two indices and add to the distance list only after both words have been encountered atleast once. This is indicated by initially setting the index variables to -1;

# Complexity
- Time complexity: O(N)

- Space complexity: O(N)

# Code
```csharp []
public class Solution {
    public int ShortestWordDistance(string[] wordsDict, string word1, string word2) 
    {
        int result = 0;

        if(word1 == word2)
        {
            List<uint> distances = new List<uint>();
            int lastIndex = -1;

            for(int i = 0; i < wordsDict.Length; i++)
            {
                if(wordsDict[i] == word1 && lastIndex < 0)
                {
                    lastIndex = i;
                }
                else if(wordsDict[i] == word1)
                {
                    distances.Add((uint)(i - lastIndex));
                    lastIndex = i;
                }
            }

            result = (int)distances.Min();
        }
        else
        {
            List<uint> distances = new List<uint>();
            int lastIndexWord1 = -1;
            int lastIndexWord2 = -1;

            for(int i = 0; i < wordsDict.Length; i++)
            {
                if(wordsDict[i] == word1)
                {
                    lastIndexWord1 = i;
                }
                else if(wordsDict[i] == word2)
                {
                    lastIndexWord2 = i;
                }

                uint distance = 0;

                if(lastIndexWord2 >= 0 && lastIndexWord1 >= 0)
                    distance = (uint)Math.Abs((lastIndexWord2 - lastIndexWord1));
                
                if(distance > 0)
                    distances.Add(distance);
            }

            result = (int)distances.Min();
        }

        return result;
    }
}
```