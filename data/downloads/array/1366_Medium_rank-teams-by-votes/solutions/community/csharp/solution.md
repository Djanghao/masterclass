# C# Solution with Array

**Author:** mattliuoz
**Votes:** 8
**Link:** [https://leetcode.com/problems/rank-teams-by-votes/solutions/1886809/](https://leetcode.com/problems/rank-teams-by-votes/solutions/1886809/)

---

Intuition: 
**Voting position**
Since all teams are present in every vote, i.e. "abc","bac" rather than "ab", "b"

So voting position is bascially how many teams, so if you have 4 teams, and you will have 4 voting position. 

**Store the vote**
Use a 2D int array to store team name and stats and if team name is represented by int (since you can `char-'A'` to get idx by team name),  so that it's very easy to access team vote stats by name as idx.
It will be something look liks this:
for team A if it's voted once at 1st voting position, none at 2nd voting position, once at 3rd voting position, then the array will look like: 
```
teamStats[0][0]=1
teamStats[0][1]=0
teamStats[0][2]=1
```
where
```
       team 'A' (Because 'A'-'A' ==0)
          \u2193	
teamStats[0][0]=1
             \u2191	
       1st voting position        
```
**Sorting part**
if there are N teams, then it will have N vote positions, then the sequence of ordering teams will be
1) sort teams by 1st vote position 
2) if tie, sort teams by 2nd vote position
3) if tie, sort team by 3rd vote position
4) ....
if all tie, till Nth vote, then sort team by name in alphabaticall order.

Above mentioned steps can break down into two main part
* Part 1: sort team by first vote position and if tie move on to second vote position and then keep on moving till find if no tie
	And code can be something like
	```
	votes = ["abc","cba","bac"];

	var numberOfVotePosition = votes[0].Length;

	for(int i=0; i<numberOfVotePosition; i++)
	{
		sort team by votes in this position;
		if not tie, then done(sorted) and return sorted result
	}
	```


* Part 2: sort team by alphabatic order if all the way tie to Nth vote

One tricky part to me is that originally I was thinking to sort the 2D array, but that will rearrange the stats but not team index(since before sorting teamStas[0] is for team A, but after sorting teamStats[0] may not be team A anymore), so the team index will no longer accurate.

To solve that, I have to use a second array which only contains team name in array, and sort this array **with the help of** the team stats array.


**Final code looks like this:**

```
public class Solution {
    public string RankTeams(string[] votes) 
    {
        var numOfVotePositions = votes[0].Length;
        int[][] teamStats = new int[26][];
        var team = new int[26];
        
        for(int i =0; i<26; i++)
        {
            teamStats[i] = new int[numOfVotePositions];    
            team[i]=i;
        }
        
        foreach(var vote in votes)
        {
            for(int i=0; i<numOfVotePositions; i++)
            {
                var teamIdx = vote[i]-'A';
                teamStats[teamIdx][i]++;
            }
        }
        //Sort team array with the help of teamStats array
        Array.Sort(team, (a,b)=>
                   {
                       for(int i = 0; i< numOfVotePositions; i++)
                       {
                           if(teamStats[a][i]!=teamStats[b][i])
                           {
                               return teamStats[b][i] - teamStats[a][i]; // vote order, if vote 0 same, then test vote 1 till all vote, if still tie, then go to a-b;
                           }
                       }
                       return a - b;//alphabatic order
                        
                   });
        var sb = new StringBuilder();
        
        for(int i = 0; i<numOfVotePositions; i++)
        {
            sb.Append((char)(team[i]+'A'));        
        }
        
        return sb.ToString();
        
    }
}
```