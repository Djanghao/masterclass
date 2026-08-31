# C# intuitive & commented code 💡

**Author:** valtss
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/4351757/](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/4351757/)

---

# Intuition
It's a graph problem in it's base.

# Approach

Simulate the process using BFS. It is quite intuitive.
1. Sort the initial boxes into locked/unlocked
2. Start BFS on unlocked box queue. Examine each box:
- Take candy
- Take boxes from inside, check if I can unlock any
- Take keys from inside, check if I can unlock any other

# Complexity
- Time complexity:
$$O(V+E)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public int MaxCandies(int[] status, int[] candies, int[][] keys, int[][] containedBoxes, int[] initialBoxes) {       
        Queue<int> unlocked = new();  // boxes queue for BFS 
        HashSet<int> keyring = new(); // Acquired keys
        HashSet<int> locked = new();  // Boxes still locked
        // Sort initialy available boxes
        foreach(var ib in initialBoxes)
        {
            if (status[ib] == 1)
                unlocked.Enqueue(ib);
            else
                locked.Add(ib);
        }

        int candy = 0; // answer
        // BFS loop
        while (unlocked.Count > 0)
        {
            var box = unlocked.Dequeue(); // take unlocked box
            candy += candies[box];

            foreach(var newbox in containedBoxes[box])
            { // any other boxes inside?
                if (status[newbox] != 0  || keyring.Contains(newbox) ) 
                { // open or got a key
                    unlocked.Enqueue(newbox);
                } else { // too bad
                    locked.Add(newbox);
                }
            }
            
            foreach(var newkey in keys[box])
            { // any new keys?
                if (locked.Contains(newkey))
                { // we can actually unlock something
                    locked.Remove(newkey);
                    unlocked.Enqueue(newkey);
                }                
                keyring.Add(newkey); // keep the key we found
            }
        }
        return candy;
    }
}
```
Vote \uD83D\uDC4D\uD83C\uDFFC if this was helpful.