# DEQUE || Simulation

**Author:** fahad_Mubeen
**Votes:** 24
**Link:** [https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5280092/](https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5280092/)

---


# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```C++ []
class Solution {
public:
    int findWinningPlayer(vector<int>& s, int k) {
        int n = s.size();
        deque<int> pq;
        // Initialize the queue with players 1 to n-1
        for (int i = 1; i < n; i++) {
            pq.push_back(i);
        }
        int ele = 0, w = 0; // ele is the current winner, w is the win count
        while (true) {
            int num = pq.front();
            pq.pop_front();
            if (s[num] < s[ele]) {
                w++; // Current winner wins again
                pq.push_back(num); // Loser goes to end of queue
            } else {
                w = 1; // New winner found
                pq.push_back(ele); // Previous winner goes to end of queue
                ele = num; // Update current winner
            }
            if (w == k || w >= n - 1) return ele; 
            // if same player wins n - 1 times then hes the winner
            // to avoid TLE ---> skills = [15,18] k = 386830937
        }
        return 1; // This line should never be reached
    }
};

```
```Java []
class Solution {
    public int findWinningPlayer(int[] skills, int k) {
        int n = skills.length;
        Deque<Integer> queue = new LinkedList<>();
        // Initialize the queue with players 1 to n-1
        for (int i = 1; i < n; i++) {
            queue.addLast(i);
        }
        int ele = 0, w = 0; // ele is the current winner, w is the win count
        while (true) {
            int num = queue.pollFirst();
            if (skills[num] < skills[ele]) {
                w++; // Current winner wins again
                queue.addLast(num); // Loser goes to end of queue
            } else {
                w = 1; // New winner found
                queue.addLast(ele); // Previous winner goes to end of queue
                ele = num; // Update current winner
            }
            if (w == k || w >= n - 1) return ele; // Check for win condition
        }
    }
    return 1;
}
```
```Python3 []
from typing import List
from collections import deque

class Solution:
    def findWinningPlayer(self, skills: List[int], k: int) -> int:
        n = len(skills)
        queue = deque(range(1, n))  # Initialize the queue with players 1 to n-1
        ele = 0
        w = 0  # ele is the current winner, w is the win count
        
        while True:
            num = queue.popleft()
            if skills[num] < skills[ele]:
                w += 1  # Current winner wins again
                queue.append(num)  # Loser goes to end of queue
            else:
                w = 1  # New winner found
                queue.append(ele)  # Previous winner goes to end of queue
                ele = num  # Update current winner
                
            if w == k or w >= n - 1:
                return ele  # Check for win condition
    return 1
```
