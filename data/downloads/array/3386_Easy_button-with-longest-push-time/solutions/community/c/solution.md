# Simple Simulation Solution C++ || Python || Java || T.C O(N) S.C (1) Upvote if this helps you :)

**Author:** mammarqaisar11a55
**Votes:** 2
**Link:** [https://leetcode.com/problems/button-with-longest-push-time/solutions/6148622/](https://leetcode.com/problems/button-with-longest-push-time/solutions/6148622/)

---

**Time Complexity: O(N)**
**Space Complexity: O(1)**

**C++:**

```
class Solution
{
public:
    int buttonWithLongestTime(vector<vector<int>> &events)
    {

        int Longest_time = events[0][1];
        int ButtonIndex = events[0][0];

        for (int i = 1; i < events.size(); i++)
        {
            int Current_Button_Time = events[i][1] - events[i - 1][1];
            int Current_Index = events[i][0];

            if (Current_Button_Time > Longest_time)
            {
                Longest_time = Current_Button_Time;
                ButtonIndex = Current_Index;
            }
            else if (Current_Button_Time == Longest_time && Current_Index < ButtonIndex)
            {
                Longest_time = Current_Button_Time;
                ButtonIndex = Current_Index;
            }
        }

        return ButtonIndex;
    }
};
```

**Python:**

```
from typing import List

class Solution:
    def buttonWithLongestTime(self, events: List[List[int]]) -> int:
        Longest_time = events[0][1]
        ButtonIndex = events[0][0]

        for i in range(1, len(events)):
            Current_Button_Time = events[i][1] - events[i - 1][1]
            Current_Index = events[i][0]

            if Current_Button_Time > Longest_time:
                Longest_time = Current_Button_Time
                ButtonIndex = Current_Index
            elif Current_Button_Time == Longest_time and Current_Index < ButtonIndex:
                Longest_time = Current_Button_Time
                ButtonIndex = Current_Index

        return ButtonIndex


```

**Java:**

```
import java.util.List;

class Solution {
    public int buttonWithLongestTime(List<List<Integer>> events) {
        int longestTime = events.get(0).get(1);
        int buttonIndex = events.get(0).get(0);

        for (int i = 1; i < events.size(); i++) {
            int currentButtonTime = events.get(i).get(1) - events.get(i - 1).get(1);
            int currentIndex = events.get(i).get(0);

            if (currentButtonTime > longestTime) {
                longestTime = currentButtonTime;
                buttonIndex = currentIndex;
            } else if (currentButtonTime == longestTime && currentIndex < buttonIndex) {
                longestTime = currentButtonTime;
                buttonIndex = currentIndex;
            }
        }

        return buttonIndex;
    }
}

```