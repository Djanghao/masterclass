# Brute force solution, but still beats 100%

**Author:** winston_wolfe
**Votes:** 0
**Link:** [https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/solutions/5045795/](https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/solutions/5045795/)

---

# Code
```
public class Solution 
{
    public int[] FindPattern(int[][] board, string[] pattern) 
    {
        var map = new Dictionary<int, char>();
        var set = new HashSet<char>();

        for (var r = 0; r <= board.Length - pattern.Length; r++)
        for (var c = 0; c <= board[0].Length - pattern[0].Length; c++)
        {
            if (Check(r, c)) return new int[2] { r, c };
            map.Clear();
            set.Clear();
        }

        return new int[2] { -1, -1 };

        bool TryNumber(char letter, out int number)
        {
            if (Char.IsNumber(letter))
            {
                number = (letter - '0');
                return true;
            }

            number = -1;
            return false;
        }

        bool Check(int r, int c)
        {
            for (var r1 = 0; r1 < pattern.Length; r1 += 1)
            for (var c1 = 0; c1 < pattern[0].Length; c1 += 1)
            {
                var number = board[r + r1][c + c1];
                var letter = pattern[r1][c1];
                if (TryNumber(letter, out var existingNumber))
                {
                    if (existingNumber != number) return false;
                }
                else if (map.TryGetValue(number, out var assignedValue))
                {
                    if (assignedValue != letter) return false;
                }
                else if (set.Contains(letter)) return false;
                else
                {
                    map.Add(number, letter);
                    set.Add(letter);
                }
            }
            return true;
        }
    }
}
```