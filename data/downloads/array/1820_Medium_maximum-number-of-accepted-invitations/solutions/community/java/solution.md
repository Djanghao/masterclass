# Fast Java Solution - Faster than 100 % of Java solutions - Simple and clean

**Author:** AbanobAshraf
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/2206650/](https://leetcode.com/problems/maximum-number-of-accepted-invitations/solutions/2206650/)

---

```
class Solution {
    public int maximumInvitations(int[][] grid) {
        int boys = grid.length;
        int girls = grid[0].length;

        Deque < Integer > [] girlsQueues = new ArrayDeque[boys];
        int[] invited = new int[girls];
        Arrays.fill(invited, -1);

        for (int row = 0; row < boys; row++) {
            girlsQueues[row] = new ArrayDeque < > ();
            for (int col = 0; col < girls; col++) {
                if (grid[row][col] > 0) {
                    girlsQueues[row].push(col);
                }
            }
        }

        int totalInvitedGirls = 0; 
        for (int boy = 0; boy < boys; boy++) {
            totalInvitedGirls += inviteGirl(boy, girlsQueues, invited);
        }

        return totalInvitedGirls;

    }

    int inviteGirl(int boy, Deque < Integer > [] girlsQueues, int[] invited) {

        while (!girlsQueues[boy].isEmpty()) {
            int girl = girlsQueues[boy].poll();
            if (invited[girl] == -1 || inviteGirl(invited[girl], girlsQueues, invited) > 0) {
                invited[girl] = boy;
                return 1;
            }
        }

        return 0;
    }
}
```