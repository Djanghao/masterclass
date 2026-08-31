# 💥 Beats 100% on runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subsequence-repeated-k-times/solutions/5965111/](https://leetcode.com/problems/longest-subsequence-repeated-k-times/solutions/5965111/)

---

# Intuition
Find the longest subsequence in a given string that can be repeated 
k times. A subsequence allows us to skip characters while preserving the order, so we need to determine how many times we can extract the same sequence from the string.

# Approach
Count the frequency of each character in the string, create a list of characters that appear at least k times, then explore all combinations of these characters to find the longest valid subsequence that can be repeated k times.

# Complexity
- Time complexity:
O(n 2 ), where \uD835\uDC5B n is the length of the string, due to checking each combination of characters and verifying their repetitions.

- Space complexity:
O(26+m), where \uD835\uDC5A m is the maximum length of the valid subsequence, for storing character counts and the queue of subsequences.

# Code
```csharp []
public class Solution
{
    public string LongestSubsequenceRepeatedK(string s, int k)
    {
        // Initialize the result string
        string res = "";

        // Array to count occurrences of each character
        int[] map = new int[26];
        
        // Count frequency of each character in the input string
        for (int i = 0; i < s.Length; i++)
        {
            char ch = s[i];
            map[ch - 'a']++;
        }

        // List to store characters that can form a valid subsequence
        List<char> list = new List<char>();
        for (int i = 0; i < 26; i++)
        {
            // If the character appears at least k times, add it to the list
            if (map[i] >= k)
            {
                list.Add((char)('a' + i));
            }
        }

        // Queue to manage the subsequences for exploration
        Queue<string> queue = new Queue<string>();
        queue.Enqueue(""); // Start with an empty subsequence
        
        // Explore all combinations of valid characters
        while (queue.Count > 0)
        {
            string rem = queue.Dequeue(); // Get the current subsequence
            
            foreach (char ch in list)
            {
                // Create a new subsequence by adding the current character
                string next = rem + ch;
                
                // Check if this new subsequence can form k occurrences in s
                if (IsKSub(s, next, k))
                {
                    queue.Enqueue(next); // Add new valid subsequence to the queue
                    res = next; // Update result with the latest valid subsequence
                }
            }
        }

        return res; // Return the longest valid subsequence found
    }

    // Helper method to check if the subsequence can be formed k times
    private bool IsKSub(string s, string sub, int k)
    {
        int j = 0; // Index for tracking position in subsequence
        int rep = 0; // Count of repetitions found
        
        // Iterate through the original string
        for (int i = 0; i < s.Length; i++)
        {
            // If the current character matches the subsequence character
            if (s[i] == sub[j])
            {
                j++; // Move to the next character in subsequence
                
                // If we have matched the entire subsequence
                if (j == sub.Length)
                {
                    rep++; // Increment the repetition count
                    j = 0; // Reset index to start searching for the next repetition
                    
                    // If we have found k repetitions, return true
                    if (rep == k)
                    {
                        return true;
                    }
                }
            }
        }
        return false; // If not found k repetitions, return false
    }
}



```