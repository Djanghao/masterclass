# C# Hash Map Aggregation/ Frequency Counting Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/sender-with-largest-word-count/solutions/5979431/](https://leetcode.com/problems/sender-with-largest-word-count/solutions/5979431/)

---

# Intuition
- <!-- Describe your first thoughts on how to solve this problem. -->Understand the Problem Requirements:
- We need to find the sender with the largest total word count.
- In case of a tie, we need to return the sender with the lexicographically largest name.
- Choose Appropriate Data Structures:
- A dictionary (hash map) is ideal for mapping senders to their word counts because it allows for efficient updates and lookups.
- Process Each Message:
- Count Words in Messages:
- Since words are separated by spaces, splitting the message by spaces gives us all the words.
- The number of words is the length of the resulting array after splitting.
- Update Sender's Word Count:
- For each message, increment the sender's total word count in the dictionary.
- If the sender isn't already in the dictionary, add them with the current word count.
- Determine the Sender with the Largest Word Count:
- Initialize Variables:
- Keep track of the maximum word count found so far and the corresponding sender's name.
- Iterate Over the Dictionary:
- For each sender, compare their total word count to the current maximum.
- Update Logic:
- If a sender has a higher word count, update the maximum and the result sender.
- If there's a tie, compare the sender's name lexicographically.
- Use String.Compare with StringComparison.Ordinal to ensure that uppercase letters are considered smaller than lowercase letters, as per Unicode values.
- Edge Cases and Constraints:
- Handle Ties Correctly:
- Be cautious with the lexicographical comparison, ensuring it adheres to the problem's note about uppercase letters coming before lowercase letters.
- Constraints Simplify Complexity:
- Given that message lengths are capped (up to 100 characters), and sender names are relatively short (up to 10 characters), we can proceed without worrying about extreme cases affecting performance.
___
# Approach
- <!-- Describe your approach to solving the problem. -->We use a Dictionary<string, int> to keep track of the total word counts for each sender.
- For each message, we split it by spaces to count the number of words.
- We update the word count for the corresponding sender in the dictionary.
- After processing all messages, we iterate through the dictionary to find the sender with the highest word count. In case of a tie, we compare the sender names lexicographically using String.Compare with StringComparison.Ordinal to ensure correct ordering based on Unicode values.
- The StringComparison.Ordinal parameter ensures that the comparison is based on Unicode values, which respects the lexicographical order where uppercase letters come before lowercase letters.
___
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(N * L), where 'N' is the number of messages, and 'L' is the average length of the messages (in terms of words or characters).
___
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(K), where 'K' is the number of unique senders.
___
# Code
```csharp []
public class Solution {
    public string LargestWordCount(string[] messages, string[] senders) {
        Dictionary<string, int> wordCounts = new Dictionary<string, int>();

        for (int i = 0; i < messages.Length; i++) {
            string message = messages[i];
            string sender = senders[i];

            // Count the number of words in the message
            int wordCount = message.Split(' ').Length;

            // Update the total word count for the sender
            if (!wordCounts.ContainsKey(sender)) {
                wordCounts[sender] = wordCount;
            } else {
                wordCounts[sender] += wordCount;
            }
        }

        string resultSender = "";
        int maxWordCount = 0;

        // Find the sender with the largest word count
        foreach (var kvp in wordCounts) {
            string sender = kvp.Key;
            int count = kvp.Value;

            if (count > maxWordCount) {
                maxWordCount = count;
                resultSender = sender;
            } else if (count == maxWordCount) {
                // Compare sender names lexicographically
                if (String.Compare(sender, resultSender, StringComparison.Ordinal) > 0) {
                    resultSender = sender;
                }
            }
        }

        return resultSender;
    }
}
```