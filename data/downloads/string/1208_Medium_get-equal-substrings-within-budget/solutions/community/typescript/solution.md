# Sliding Window Technique || beats 93% users with C++ & 85% with java || python3 || typescript

**Author:** SanketSawant18
**Votes:** 2
**Link:** [https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5218569/](https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5218569/)

---

# Approach
Sliding Window Technique

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Explanation
1. **Initialize Variables:**

- n: Length of the strings s and t.
- maxLength: To store the maximum length of the valid substring found.
- currentCost: To track the total cost of the current window.
- left: The left pointer of the sliding window.
2. **Expand the Window:**

- Iterate through the string s using the right pointer.
- For each character at position right, calculate the cost to change s.charAt(right) to t.charAt(right) and add it to currentCost.
3. **Shrink the Window if Needed:**

- If currentCost exceeds maxCost, increment the left pointer to reduce the window size until currentCost is less than or equal to maxCost.
4. **Update Maximum Length:**

- For each valid window, update maxLength with the size of the current window, which is right - left + 1.
5. **Return Result:**

- Finally, return maxLength, which holds the maximum length of the substring that can be transformed within the given cost.

---

```java []
class Solution {
    public int equalSubstring(String s, String t, int maxCost) {
        int n = s.length();
        int maxLength = 0;
        int currentCost = 0;
        int left = 0;
        
        for (int right = 0; right < n; right++) {
            // Calculate the cost of changing s[right] to t[right]
            currentCost += Math.abs(s.charAt(right) - t.charAt(right));
            
            // While currentCost exceeds maxCost, move the left pointer to the right
            while (currentCost > maxCost) {
                currentCost -= Math.abs(s.charAt(left) - t.charAt(left));
                left++;
            }
            
            // Update the maximum length of the substring found so far
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
}

```
```C++ []
class Solution {
public:
    int equalSubstring(string s, string t, int maxCost) {
        int n = s.length();
        int maxLength = 0;
        int currentCost = 0;
        int left = 0;

        for (int right = 0; right < n; right++) {
            // Calculate the cost of changing s[right] to t[right]
            currentCost += abs(s[right] - t[right]);

            // While currentCost exceeds maxCost, move the left pointer to the right
            while (currentCost > maxCost) {
                currentCost -= abs(s[left] - t[left]);
                left++;
            }

            // Update the maximum length of the substring found so far
            maxLength = max(maxLength, right - left + 1);
        }

        return maxLength;
    }
};

```
```python3 []
class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        n = len(s)
        max_length = 0
        current_cost = 0
        left = 0
        
        for right in range(n):
            # Calculate the cost of changing s[right] to t[right]
            current_cost += abs(ord(s[right]) - ord(t[right]))
            
            # While current_cost exceeds maxCost, move the left pointer to the right
            while current_cost > maxCost:
                current_cost -= abs(ord(s[left]) - ord(t[left]))
                left += 1
            
            # Update the maximum length of the substring found so far
            max_length = max(max_length, right - left + 1)
        
        return max_length

```
```Typescript []
function equalSubstring(s: string, t: string, maxCost: number): number {
    let n = s.length;
    let maxLength = 0;
    let currentCost = 0;
    let left = 0;

    for (let right = 0; right < n; right++) {
        // Calculate the cost of changing s[right] to t[right]
        currentCost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));

        // While currentCost exceeds maxCost, move the left pointer to the right
        while (currentCost > maxCost) {
            currentCost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }

        // Update the maximum length of the substring found so far
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

```
