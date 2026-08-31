# Using Max Heap

**Author:** mxvlshn
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/6032049/](https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/6032049/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
- Building frequency array is O(n)
- Building the heap is O(26logk) where k is the count of unique characters it's can't be greater then 26, so we can say it' O(1)
- Building result is iterating over the heap in the worst case scenario we can enqueue and dequeue and element n times, with log26 complexity, so we can say it's n


- Space complexity: O(n)
Where n is the count of characters in string

# Code
```csharp []
public class MaxHeapComparer : IComparer<char> {
    public int Compare(char x, char y) {
        // Reverse lexicographical order: larger character comes first
        return y.CompareTo(x);
    }
}

public class Solution {
    public string RepeatLimitedString(string s, int repeatLimit) {
        // Count the frequency of each character
        int[] freq = new int[26];
        foreach (char c in s) 
        {
            freq[c - 'a']++;
        }

        // Use a max-heap to store characters based on their lexicographical order
        PriorityQueue<(char ch, int count), char> maxHeap = new PriorityQueue<(char, int), char>(
            new MaxHeapComparer()
        );

        for (int i = 0; i < 26; i++) 
        {
            var frequency = freq[i];
            if (frequency == 0) 
            {
                continue;
            }
            var ch = (char)(i + 'a');
            maxHeap.Enqueue((ch, frequency), ch);
        }

        // Build the result string
        var result = new List<char>();

        while (maxHeap.Count > 0) 
        {
            var (ch, count) = maxHeap.Dequeue();

            // Add up to repeatLimit of the current character
            int addCount = Math.Min(count, repeatLimit);
            for (int i = 0; i < addCount; i++) 
            {
                result.Add(ch);
            }

            // If we used all count of current characters move to next one
            if (count <= repeatLimit)
            {
                continue;
            }

            // If there's remaining count of the current character
            // Check if we can insert another character in between
            if (maxHeap.Count == 0) break; // No more characters to alternate, we're done

            // Take the next character in the heap to break the repetition
            var (nextCh, nextCount) = maxHeap.Dequeue();
            result.Add(nextCh);
            
            // Decrease the count of the next character and reinsert if it's still needed
            if (--nextCount > 0) {
                maxHeap.Enqueue((nextCh, nextCount), nextCh);
            }

            // Reinsert the original character with the remaining count
            maxHeap.Enqueue((ch, count - repeatLimit), ch);
        }

        return new string(result.ToArray());
    }
}
```