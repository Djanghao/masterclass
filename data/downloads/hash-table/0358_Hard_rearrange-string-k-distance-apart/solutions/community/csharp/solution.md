# Intuitive Approach with C#

**Author:** sushantsumbare
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/4016940/](https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/4016940/)

---

# Intuition
For each letter to be at least k distance apart. Once it appears it should not appear for the next k chars. So, we need to keep track of the count/frequency of the current char.

# Approach
1. So, we would need to know all chars and their count/ frequency in the string.
[Use Dictionary] data structure
2. Next we would need prioritise characters with higher frequencies, it efficiently identifies and appends the most frequent characters first, which maximizes the chances of a valid rearrangement.
To fetch the max frequency character first we would need max heap.
[Use Max Heap] data structure
3. Once we fetch the char with max frequency from maxHeap we should not add that character for next k times. So, we should keep it aside somewhere.
We could use simple FIFO queue data structure for this purpose.
Once the count in queue reaches k we can remove it from queue and add it to maxHeap as now there is no issue considering this character. As, it was away for consideration for at least k times.
[Use Queue] data structure

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public string RearrangeString(string s, int k) {
        
        if(k <= 1)
        {
            return s;
        }
      
        Dictionary<char, int> itemFrequency = new Dictionary<char, int>();
        
        foreach(var item in s)
        {
            itemFrequency[item] = itemFrequency.GetValueOrDefault(item, 0) + 1;
        }
          
        PriorityQueue<KeyValuePair<char, int>, int> maxHeap = new PriorityQueue<KeyValuePair<char, int>, int>(Comparer<int>.Create((a, b) => b - a));

        foreach(var item in itemFrequency)
        {
            maxHeap.Enqueue(item, item.Value);
        }

        Queue<KeyValuePair<char, int>> queue = new Queue<KeyValuePair<char, int>>();
        
        StringBuilder result = new StringBuilder();
        
        while(maxHeap.Count > 0) 
        {
          KeyValuePair<char, int> currentEntry = maxHeap.Dequeue();
            
          // append the current character to the result string and decrement its count
          result.Append(currentEntry.Key);
           
          currentEntry = new KeyValuePair<char, int>(currentEntry.Key, currentEntry.Value - 1);
            
          queue.Enqueue(currentEntry);
            
          if(queue.Count == k) 
          {
              KeyValuePair<char, int> entry = queue.Dequeue();

              if(entry.Value > 0)
              {
                  maxHeap.Enqueue(entry, entry.Value);
              }
          }
        }

        // if we were successful in appending all the characters to the result string, return it
        return result.Length == s.Length ? result.ToString() : "";
    }
}
```