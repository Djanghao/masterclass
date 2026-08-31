# Using Greedy Approach

**Author:** mxvlshn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/6110940/](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/6110940/)

---

# Approach
Using greedy approach

# Complexity
- Time complexity: O(nlogn + mlogm)
Where n and m are the length of the players and trainers array

- Space complexity: O(1)

# Code
```csharp []
public class Solution 
{
    public int MatchPlayersAndTrainers(int[] players, int[] trainers) 
    {
        // sorting both players and trainers array
        Array.Sort(players);
        Array.Sort(trainers);

        // index of the player
        var player = 0;

        // index of the trainer
        var trainer = 0;
        
        var match = 0;

        // using two pointers approach start iterating over players and trainers arrays
        while (player < players.Length && trainer < trainers.Length)
        {
            // if player and trainer are matching the rule increase the match and move to the next player
            if (players[player] <= trainers[trainer])
            {
                player++;
                match++;
            }

            // take the next trainer
            trainer++;
        }   
        
        return match; 
    }
}
```