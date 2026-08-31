# Solution in C#, keeping the list in sorted order for each insertion of the score

**Author:** SeenaMary
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-leaderboard/solutions/4767572/](https://leetcode.com/problems/design-a-leaderboard/solutions/4767572/)

---

# Intuition
The idea is to keep a dictionary of the playerid and linkedlistnode where each insertion into the linkedlist the list always in sorted order.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Leaderboard {

public class Player
{
    public int playerId;
    public int Score;
    public Player(int playerId, int Score)
    {
        this.playerId =playerId;
        this.Score = Score;
    }
}
Dictionary<int, LinkedListNode<Player>> playerMap;
LinkedList<Player> sortedPlayerList;
    public Leaderboard() {
       playerMap = new Dictionary<int, LinkedListNode<Player>>(); 
       sortedPlayerList = new LinkedList<Player>();
    }
    
    public void AddScore(int playerId, int score) {
        LinkedListNode<Player> node = null;
        if(!playerMap.ContainsKey(playerId))
        {
            node = new LinkedListNode<Player>(new Player(playerId,score));
            playerMap.Add(playerId,node);
            AddToSortedList(node);
        }
        else
        {
        node = playerMap[playerId];
        this.sortedPlayerList.Remove(node);
        node.Value.Score += score; //update the score and then add to sortedList
        AddToSortedList(node);
        }
    }

    public void AddToSortedList(LinkedListNode<Player> node)
    {
        
        bool isAdded = false;
        foreach(var loopnode in this.sortedPlayerList)
        {
            if(loopnode.Score <= node.Value.Score)
            {
                isAdded = true;                
                this.sortedPlayerList.AddBefore(this.playerMap[loopnode.playerId],node);
                break;
            }
        }
        if(!isAdded)
        {
            this.sortedPlayerList.AddLast(node);
        }
    }
    
    public int Top(int K) {
        var values = this.sortedPlayerList.ToList();
        int sum =0;
        for(int i =0; i<=Math.Min(K-1,values.Count()-1);i++)
        {
            sum+=values[i].Score;
        }
        //foreach(var node in values)
        //{
       //     sum+=node.Score;
       // }

      // return this.playerMap.OrderByDescending(x=>x.Values.Score).Take(K).Sum();
        return sum;
    }
    
    public void Reset(int playerId) {
       var node = playerMap[playerId];
       this.sortedPlayerList.Remove(node);
       playerMap.Remove(playerId);

        // var node = playerMap[playerId];
        //this.sortedPlayerList.Remove(node);
        //node.Value.Score =0; //update the score and then add to sortedList
        //AddToSortedList(node);
        
    }
}

/**
 * Your Leaderboard object will be instantiated and called as such:
 * Leaderboard obj = new Leaderboard();
 * obj.AddScore(playerId,score);
 * int param_2 = obj.Top(K);
 * obj.Reset(playerId);
 */
```