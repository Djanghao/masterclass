# C# - Single Queue | Single Ban Scale

**Author:** ansche
**Votes:** 7
**Link:** [https://leetcode.com/problems/dota2-senate/solutions/3353103/](https://leetcode.com/problems/dota2-senate/solutions/3353103/)

---

# Intuition
Put all senators into a queue. On each poll, if the senator is not banned, let him ban an opponent and put him back in the queue. If the senator is banned, remove him from queue.

# Approach
I keep a single variable ```scale``` to let me know which direction the bans are tipped. A positive value means there are pending bans in the "Dire" team. A negative value means there are pending bans in the "Radiant" team. A value of zero means there are no pending bans. 

If the scale is in the favor of the senator, they can ban and re-insert themselves. If not, then the are simply removed. In either case, the scale tips toward the senator's team 1 level. Exit when 1 team's total count is reduced to zero.

# Code
```
public class Solution {
    public string PredictPartyVictory(string senate)
    {
        Queue<char> senators = new Queue<char>(senate);
        int countR = senate.Count(x => x == 'R');
        int countD = senate.Length - countR;

        // [Positive = Radiant Favor, Negative = Dire Favor]
        int scale = 0; 

        while (countR > 0 && countD > 0) {

            char senator = senators.Dequeue();

            if (senator == 'R') {
                if (scale >= 0) {
                    countD--;
                    senators.Enqueue(senator);
                }
                scale++;
            }
            else {
                if (scale <= 0) {
                    countR--;
                    senators.Enqueue(senator);
                }
                scale--;
            }
        }

        return countR == 0 ? "Dire" : "Radiant";
    }
}
```