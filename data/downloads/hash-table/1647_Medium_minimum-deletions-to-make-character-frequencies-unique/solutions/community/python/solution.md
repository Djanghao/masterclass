# ✅99.32%☑️Greedy+Heap|🔥|Beginner Friendly✅☑️||Full Explanation🔥||C++||Java||Python✅☑️

**Author:** singhhh_sidhantttt
**Votes:** 202
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solutions/4033214/](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solutions/4033214/)

---

# Problem Understanding
The given problem **asks you to find the minimum number of characters you need to delete from a string s to make it "good."** A string is **considered "good" if there are no two different characters in it that have the same frequency.**
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this approach is that by **sorting the frequencies in non-decreasing order**, you can start from the highest frequency characters **and gradually decrease their frequencies by deleting characters until they become unique.** This ensures that you delete the minimum number of characters necessary to satisfy the condition of having no two different characters with the same frequency.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initialize a vector freq of size 26** (for the lowercase English letters) to store the frequency of each character in the input string s. Initialize all elements of freq to 0.

2. **Iterate through the characters of the string s and update the frequency of each character in the freq vector**.

3. **Sort the freq vector** in ascending order. This will arrange the frequencies in non-decreasing order.

4. Initialize a **variable del to keep track of the minimum deletions** required and set it to 0.

5. Iterate through the sorted freq vector in reverse order, starting **from index 24 (since there are 26 lowercase English letters).**

6. Inside the loop, check **if the current frequency freq[i] is greater than or equal to the next frequency freq[i+1]**. If it is, then you need to delete some characters to make them unique.

7. Calculate the number of characters to delete to make freq[i] less than freq[i+1]. **This is done by subtracting freq[i+1] - 1 from freq[i] and setting freq[i] to this new value**. Update the del variable by adding this difference.

8. Continue this process until you have iterated through all frequencies, or until you encounter a frequency of 0, indicating that there are no more characters of that frequency.

9. **Finally, return the value of del**, which represents the minimum number of deletions required to make the string "good."
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(k), where k=26
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

---

# SMALL REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.I will be motivated\uD83D\uDE0A\uD83D\uDE0A

---

# Code(Greedy Approach)
```C++ []
class Solution {
public:
    int minDeletions(string s) {
        // Create a vector to store the frequency of each lowercase English letter (fixed size of 26).
        vector<int> freq(26, 0);

        // Iterate through the characters of the input string s to count their frequencies.
        for (char c : s) {
            freq[c - 'a']++; // Increment the corresponding frequency counter.
        }

        // Sort the frequency vector in non-decreasing order.
        sort(freq.begin(), freq.end());

        // Initialize a variable to keep track of the minimum number of deletions needed.
        int del = 0;

        // Iterate through the sorted frequency vector in reverse order.
        for (int i = 24; i >= 0; i--) {
            // If the current frequency is 0, break the loop (no more characters with this frequency).
            if (freq[i] == 0) {
                break;
            }
            
            // Check if the current frequency is greater than or equal to the next frequency.
            if (freq[i] >= freq[i + 1]) {
                int prev = freq[i];
                // Reduce the current frequency to make it one less than the next frequency.
                freq[i] = max(0, freq[i + 1] - 1);
                // Update the deletion count by the difference between previous and current frequency.
                del += prev - freq[i];
            }
        }

        // Return the minimum number of deletions required to make the string "good."
        return del;
    }
};
```
```Java []
import java.util.Arrays;

public class Solution {
    public int minDeletions(String s) {
        int[] freq = new int[26]; // Create an array to store character frequencies
        
        for (char c : s.toCharArray()) {
            freq[c - 'a']++; // Count the frequency of each character
        }
        
        Arrays.sort(freq); // Sort frequencies in ascending order
        
        int del = 0; // Initialize the deletion count
        
        for (int i = 24; i >= 0; i--) {
            if (freq[i] == 0) {
                break; // No more characters with this frequency
            }
            
            if (freq[i] >= freq[i + 1]) {
                int prev = freq[i];
                freq[i] = Math.max(0, freq[i + 1] - 1);
                del += prev - freq[i]; // Update the deletion count
            }
        }
        
        return del; // Return the minimum deletions required
    }
}

```
```Python3 []
class Solution:
    def minDeletions(self, s: str) -> int:
        freq = [0] * 26 # Create a list to store character frequencies
        
        for c in s:
            freq[ord(c) - ord('a')] += 1 # Count the frequency of each character
        
        freq.sort() # Sort frequencies in ascending order
        
        del_count = 0 # Initialize the deletion count
        
        for i in range(24, -1, -1):
            if freq[i] == 0:
                break # No more characters with this frequency
            
            if freq[i] >= freq[i + 1]:
                prev = freq[i]
                freq[i] = max(0, freq[i + 1] - 1)
                del_count += prev - freq[i] # Update the deletion count
        
        return del_count # Return the minimum deletions required

```
```Javascript []
var minDeletions = function(s) {
    let freq = new Array(26).fill(0); // Create an array to store character frequencies
    
    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++; // Count the frequency of each character
    }
    
    freq.sort((a, b) => a - b); // Sort frequencies in ascending order
    
    let del = 0; // Initialize the deletion count
    
    for (let i = 24; i >= 0; i--) {
        if (freq[i] === 0) {
            break; // No more characters with this frequency
        }
        
        if (freq[i] >= freq[i + 1]) {
            let prev = freq[i];
            freq[i] = Math.max(0, freq[i + 1] - 1);
            del += prev - freq[i]; // Update the deletion count
        }
    }
    
    return del; // Return the minimum deletions required
};

```
# Code using Heap Method
```C++ []
class Solution {
public:
    int minDeletions(string s) {
        // Create an unordered map to count the frequency of each character.
        unordered_map<char, int> mp;

        // Iterate through the characters in the input string 's'.
        for (auto &it : s) {
            mp[it]++; // Increment the character's frequency in the map.
        }

        // Create a max-heap (priority queue) to store character frequencies in decreasing order.
        priority_queue<int> pq;

        // Populate the max-heap with character frequencies from the map.
        for (auto &it : mp) {
            pq.push(it.second);
        }

        // Initialize a variable to keep track of the minimum number of deletions needed.
        int count = 0;

        // Continue as long as there are at least two frequencies in the max-heap.
        while (pq.size() != 1) {
            int top = pq.top(); // Get the character frequency with the highest count.
            pq.pop(); // Remove it from the max-heap.

            // Check if the next character in the max-heap has the same frequency as 'top' (and it's not zero).
            if (pq.top() == top && top != 0) {
                count++; // Increment the deletion count.
                pq.push(top - 1); // Decrease 'top' frequency by 1 and push it back into the max-heap.
            }
        }

        // Return the minimum number of deletions required to make the string "good."
        return count;
    }
};

```
```java []
import java.util.HashMap;
import java.util.PriorityQueue;
import java.util.Map;

public class Solution {
    public int minDeletions(String s) {
        // Create a HashMap to count the frequency of each character.
        Map<Character, Integer> frequencyMap = new HashMap<>();

        // Iterate through the characters in the input string 's'.
        for (char c : s.toCharArray()) {
            frequencyMap.put(c, frequencyMap.getOrDefault(c, 0) + 1);
        }

        // Create a max-heap (PriorityQueue) to store character frequencies in decreasing order.
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

        // Populate the max-heap with character frequencies from the map.
        maxHeap.addAll(frequencyMap.values());

        // Initialize a variable to keep track of the minimum number of deletions needed.
        int count = 0;

        // Continue as long as there are at least two frequencies in the max-heap.
        while (maxHeap.size() > 1) {
            int top = maxHeap.poll(); // Get the character frequency with the highest count.

            // Check if the next character in the max-heap has the same frequency as 'top' (and it's not zero).
            if (maxHeap.peek() != null && maxHeap.peek() == top && top != 0) {
                count++; // Increment the deletion count.
                maxHeap.add(top - 1); // Decrease 'top' frequency by 1 and push it back into the max-heap.
            }
        }

        // Return the minimum number of deletions required to make the string "good."
        return count;
    }
}

```
---
# SMALL REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.I will be motivated\uD83D\uDE0A\uD83D\uDE0A

---
![upvotememe.png](./images/0.png)


