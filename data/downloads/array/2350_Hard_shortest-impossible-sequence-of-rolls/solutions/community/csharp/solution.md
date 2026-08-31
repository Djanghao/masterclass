# O(N) Time Complexity, O(M) Space Complexity.

**Author:** abdelwhabkamal17
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/3540409/](https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/3540409/)

---


# Approach
The problem aims to find the shortest sequence of unique numbers in an array before encountering a specified count k. Here's a brief description of the approach used in the optimized code:

Initialize variables:

ans to keep track of the number of sequences found.
maxRoll to store the maximum value in the rolls array.
visited as a boolean array to keep track of visited numbers.
count to track the current count of unique numbers encountered.
Iterate through the rolls array:

For each element, check if it has been visited before using visited[rolls[i]].
If it hasn't been visited, mark it as visited by setting visited[rolls[i]] to true.
Increment count by 1.
Check if count equals k:

If count equals k, it means we have found a sequence of k unique numbers.
Reset the visited array by using Array.Clear(visited, 0, visited.Length).
Reset count to 0.
Increment ans by 1 to count the found sequence.
After iterating through the rolls array, return ans + 1 to account for the last sequence found, if any.

By using a boolean array visited to track visited numbers, we avoid adding duplicate numbers to the sequence. This approach allows us to optimize the code by reducing memory usage and eliminating unnecessary HashSet operations.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(M)

# Code
```
public class Solution {
    public int ShortestSequence(int[] rolls, int k) {
        int ans = 0;
        int maxRoll = rolls.Max();
        bool[] visited = new bool[maxRoll + 1];
        int count = 0;

        for (int i = 0; i < rolls.Length; i++) {
            if (!visited[rolls[i]]) {
                visited[rolls[i]] = true;
                count++;

                if (count == k) {
                    Array.Clear(visited, 0, visited.Length);
                    count = 0;
                    ans++;
                }
            }
        }

        return ans + 1;
    }
}

```