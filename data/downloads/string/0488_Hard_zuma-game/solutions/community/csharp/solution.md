# 💥Runtime beats 100.00%, Memory beats 50.00%

**Author:** r9n
**Votes:** 10
**Link:** [https://leetcode.com/problems/zuma-game/solutions/5703576/](https://leetcode.com/problems/zuma-game/solutions/5703576/)

---

# Intuition
It's about clearing a row of colored balls by inserting balls from your hand in such a way that you form groups of three or more balls of the same color. When you create such groups, they disappear, potentially causing new groups to form. You need to find the minimum number of balls to insert to clear the board, or determine if it\u2019s impossible.

# Approach
Remove Groups: Insert a ball and remove any three or more consecutive same-colored balls.

BFS: Use BFS to find the minimum insertions to clear the board.

Track States: Use a queue and a set to manage and check board states.

# Complexity
- Time complexity:
 O(5^H * B^2) due to exploring possible board states.

- Space complexity:
O(5^H * B) for storing board states and hand configurations.

# Code
```csharp []
using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int FindMinStep(string board, string hand)
    {
        string RemoveSame(string s, int i)
        {
            if (i < 0)
                return s;

            int left = i, right = i;
            while (left > 0 && s[left - 1] == s[i])
                left--;
            while (right + 1 < s.Length && s[right + 1] == s[i])
                right++;

            int length = right - left + 1;
            if (length >= 3)
            {
                string newS = s.Substring(0, left) + s.Substring(right + 1);
                return RemoveSame(newS, left - 1);
            }
            else
            {
                return s;
            }
        }

        string sortedHand = new string(hand.OrderBy(c => c).ToArray());

        Queue<(string, string, int)> queue = new Queue<(string, string, int)>();
        HashSet<(string, string)> visited = new HashSet<(string, string)>();

        queue.Enqueue((board, sortedHand, 0));
        visited.Add((board, sortedHand));

        while (queue.Count > 0)
        {
            (string currBoard, string currHand, int step) = queue.Dequeue();

            for (int i = 0; i <= currBoard.Length; i++)
            {
                for (int j = 0; j < currHand.Length; j++)
                {
                    if (j > 0 && currHand[j] == currHand[j - 1])
                        continue;

                    if (i > 0 && currBoard[i - 1] == currHand[j])
                        continue;

                    bool pick = false;
                    if (i < currBoard.Length && currBoard[i] == currHand[j])
                        pick = true;
                    if (i > 0 && i < currBoard.Length && currBoard[i - 1] == currBoard[i] && currBoard[i] != currHand[j])
                        pick = true;

                    if (pick)
                    {
                        string newBoard = RemoveSame(currBoard.Substring(0, i) + currHand[j] + currBoard.Substring(i), i);
                        string newHand = currHand.Substring(0, j) + currHand.Substring(j + 1);
                        if (newBoard.Length == 0)
                        {
                            return step + 1;
                        }
                        if (!visited.Contains((newBoard, newHand)))
                        {
                            queue.Enqueue((newBoard, newHand, step + 1));
                            visited.Add((newBoard, newHand));
                        }
                    }
                }
            }
        }

        return -1;
    }
}

```