# Simple solution for C# (explanation + complexity)

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/3468891/](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/3468891/)

---

# Approach
Straight solution where we need to calculate scores for each player and get the result

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```
public int IsWinner(int[] player1, int[] player2)
{
    var score1 = CalcScores(player1);
    var score2 = CalcScores(player2);

    if (score1 > score2)
    {
        return 1;
    }

    return score2 > score1 ? 2 : 0;
}

/// <summary>
/// Support void to calc scores
/// </summary>
/// <param name="player"> Player scores </param>
/// <returns> Total score </returns>
private int CalcScores(IReadOnlyList<int> player)
{
    var result = 0;

    for (var i = 0; i < player.Count; i++)
    {
        switch (i)
        {
            //// Check if one of the two previous values is equal to 10,
            /// then multiply the current score.
            case >= 1 when player[i - 1] == 10:
            case >= 2 when player[i - 2] == 10:
                result += player[i] * 2;
                break;
            default:
                result += player[i];
                break;
        }
    }

    return result;
}
```