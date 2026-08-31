# 💥💥Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/5981183/](https://leetcode.com/problems/sequentially-ordinal-rank-tracker/solutions/5981183/)

---

# Intuition
Track and retrieving names based on their scores, with higher scores having priority and names being returned in alphabetical order for those with the same score. This ensures that we can efficiently manage the names and their respective scores while adhering to the desired order.

# Approach
Use a SortedDictionary to store scores as keys and lists of names as values, where each list maintains names in alphabetical order, updating the list when a new name is added and using a counter to keep track of the retrieval sequence.

# Complexity
- Time complexity:
Adding a name takes O(n) to insert it in the correct order in the list, where n is the number of names with that score. Retrieving a name takes O(1) as it directly accesses the current position.

- Space complexity:
The space complexity is O(m), where m is the total number of names stored in the data structure.

# Code
```csharp []
public class SORTracker
{
    private SortedDictionary<int, List<string>> scores; // Store scores and corresponding names
    private int getCnt; // Counter for get calls

    public SORTracker()
    {
        // Initialize scores with a descending order comparator
        scores = new SortedDictionary<int, List<string>>(Comparer<int>.Create((a, b) => b.CompareTo(a)));
    }

    public void Add(string name, int score)
    {
        // Add score to the dictionary if it doesn't exist
        if (!scores.ContainsKey(score))
        {
            scores[score] = new List<string>();
        }
        
        // Get the list of names for the given score
        List<string> locNames = scores[score];
        
        // Find the correct insertion index using binary search
        int insertionIndex = GetInsertionIndexUBinarySearch(locNames, name);
        
        // Insert the name in the correct position
        locNames.Insert(insertionIndex, name);
    }

    public string Get()
    {
        getCnt += 1; 
        int copy = getCnt; // Copy of getCnt to iterate over

        // Iterate through the scores in descending order
        foreach (var score in scores.Keys)
        {
            List<string> locs = scores[score];
            if (copy <= locs.Count)
            {
                return locs[copy - 1]; // Return the name at the current index
            }
            else
            {
                copy -= locs.Count; // Decrement the copy by the number of names in the current score
            }
        }

        return "-1"; // In case there are no more names to return
    }

    private int GetInsertionIndexUBinarySearch(List<string> locs, string name)
    {
        int left = 0, right = locs.Count - 1;
        while (left <= right)
        {
            int mid = left + (right - left) / 2;
            int compResult = string.Compare(locs[mid], name, StringComparison.Ordinal);
            if (compResult < 0)
            {
                left = mid + 1; // Move to the right side
            }
            else
            {
                right = mid - 1; // Move to the left side
            }
        }
        return left; // Return the insertion index
    }
}



```