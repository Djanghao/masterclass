# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5899212/](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5899212/)

---

![image.png](./images/0.png)



---

# Intuition
The goal is to assign the smallest available chair to each friend when they arrive and to free up the chair when they leave. We use sorting and a min-heap or sorted list for efficient chair allocation.

---

# Approach
1. **Sort the input** by arrival times.
2. **Use a heap (or sorted list)** to manage chair availability.
3. Track the chair each friend sits in and when they leave.
4. Return the chair of the `targetFriend` when they arrive.

---

# Complexity
- **Time Complexity**: \\(O(n \\log n)\\) due to sorting.
- **Space Complexity**: \\(O(n)\\) for tracking arrivals, leaving times, and chair assignments.

---

# Code Implementations

```dart []
class Solution {
  int smallestChair(List<List<int>> times, int targetFriend) {
    final Map<int, int> arrivalMap = {};
    final Map<int, List<int>> leavingMap = {};
    final Map<int, int> friendToChair = {};
    final List<int> chairs = List.generate(times.length, (index) => -1);
    int pointer = 0;
    int endTime = 0;

    for (int i = 0; i < times.length; i++) {
      arrivalMap[times[i].first] = i;
      leavingMap.update(times[i].last, (value) => value..add(i), ifAbsent: () => [i]);
      endTime = max(endTime, times[i].last);
    }

    for (int i = 0; i <= endTime; i++) {
      if (leavingMap.containsKey(i)) {
        for (final friend in leavingMap[i]!) {
          final chair = friendToChair[friend]!;
          pointer = min(pointer, chair);
          chairs[chair] = -1;
        }
      }

      if (arrivalMap.containsKey(i)) {
        final friend = arrivalMap[i]!;
        if (friend == targetFriend) return pointer;
        chairs[pointer] = friend;
        friendToChair[friend] = pointer;
        while (chairs[pointer] != -1) pointer++;
      }
    }

    return -1;
  }
}
```

```python []
import heapq

class Solution:
    def smallestChair(self, times: List[List[int]], targetFriend: int) -> int:
        arrival_map = {}
        leaving_map = {}
        friend_to_chair = {}
        chairs = [-1] * len(times)
        pointer = 0
        end_time = 0

        for i in range(len(times)):
            arrival_map[times[i][0]] = i
            if times[i][1] not in leaving_map:
                leaving_map[times[i][1]] = []
            leaving_map[times[i][1]].append(i)
            end_time = max(end_time, times[i][1])

        for i in range(end_time + 1):
            if i in leaving_map:
                for friend in leaving_map[i]:
                    chair = friend_to_chair[friend]
                    pointer = min(pointer, chair)
                    chairs[chair] = -1

            if i in arrival_map:
                friend = arrival_map[i]
                if friend == targetFriend:
                    return pointer
                chairs[pointer] = friend
                friend_to_chair[friend] = pointer
                while chairs[pointer] != -1:
                    pointer += 1

        return -1
```

```cpp []
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

class Solution {
public:
    int smallestChair(vector<vector<int>>& times, int targetFriend) {
        unordered_map<int, int> arrivalMap;
        unordered_map<int, vector<int>> leavingMap;
        unordered_map<int, int> friendToChair;
        vector<int> chairs(times.size(), -1);
        int pointer = 0;
        int endTime = 0;

        for (int i = 0; i < times.size(); i++) {
            arrivalMap[times[i][0]] = i;
            leavingMap[times[i][1]].push_back(i);
            endTime = max(endTime, times[i][1]);
        }

        for (int i = 0; i <= endTime; i++) {
            if (leavingMap.count(i)) {
                for (int friend_ : leavingMap[i]) {
                    int chair = friendToChair[friend_];
                    pointer = min(pointer, chair);
                    chairs[chair] = -1;
                }
            }

            if (arrivalMap.count(i)) {
                int friend_ = arrivalMap[i];
                if (friend_ == targetFriend) return pointer;
                chairs[pointer] = friend_;
                friendToChair[friend_] = pointer;
                while (chairs[pointer] != -1) pointer++;
            }
        }

        return -1;
    }
};
```

```java []
import java.util.*;

class Solution {
    public int smallestChair(int[][] times, int targetFriend) {
        Map<Integer, Integer> arrivalMap = new HashMap<>();
        Map<Integer, List<Integer>> leavingMap = new HashMap<>();
        Map<Integer, Integer> friendToChair = new HashMap<>();
        int[] chairs = new int[times.length];
        Arrays.fill(chairs, -1);
        int pointer = 0;
        int endTime = 0;

        for (int i = 0; i < times.length; i++) {
            arrivalMap.put(times[i][0], i);
            leavingMap.computeIfAbsent(times[i][1], k -> new ArrayList<>()).add(i);
            endTime = Math.max(endTime, times[i][1]);
        }

        for (int i = 0; i <= endTime; i++) {
            if (leavingMap.containsKey(i)) {
                for (int friend : leavingMap.get(i)) {
                    int chair = friendToChair.get(friend);
                    pointer = Math.min(pointer, chair);
                    chairs[chair] = -1;
                }
            }

            if (arrivalMap.containsKey(i)) {
                int friend = arrivalMap.get(i);
                if (friend == targetFriend) return pointer;
                chairs[pointer] = friend;
                friendToChair.put(friend, pointer);
                while (chairs[pointer] != -1) pointer++;
            }
        }

        return -1;
    }
}
```

```javascript []
var smallestChair = function(times, targetFriend) {
    const arrivalMap = {};
    const leavingMap = {};
    const friendToChair = {};
    const chairs = new Array(times.length).fill(-1);
    let pointer = 0;
    let endTime = 0;

    for (let i = 0; i < times.length; i++) {
        arrivalMap[times[i][0]] = i;
        if (!leavingMap[times[i][1]]) leavingMap[times[i][1]] = [];
        leavingMap[times[i][1]].push(i);
        endTime = Math.max(endTime, times[i][1]);
    }

    for (let i = 0; i <= endTime; i++) {
        if (leavingMap[i]) {
            for (const friend of leavingMap[i]) {
                const chair = friendToChair[friend];
                pointer = Math.min(pointer, chair);
                chairs[chair] = -1;
            }
        }

        if (arrivalMap[i]) {
            const friend = arrivalMap[i];
            if (friend === targetFriend) return pointer;
            chairs[pointer] = friend;
            friendToChair[friend] = pointer;
            while (chairs[pointer] !== -1) pointer++;
        }
    }

    return -1;
};
```

```go []
func smallestChair(times [][]int, targetFriend int) int {
    arrivalMap := make(map[int]int)
    leavingMap := make(map[int][]int)
    friendToChair := make(map[int]int)
    chairs := make([]int, len(times))
    for i := range chairs {
        chairs[i] = -1
    }
    pointer := 0
    endTime := 0

    for i := range times {
        arrivalMap[times[i][0]] = i
        leavingMap[times[i][1]] = append(leavingMap[times[i][1]], i)
        if times[i][1] > endTime {
            endTime = times[i][1]
        }
    }

    for i := 0; i <= endTime; i++ {
        if friends, ok := leavingMap[i]; ok {
            for _, friend := range friends {
                chair := friendToChair[friend]
                if chair < pointer {
                    pointer = chair
                }
                chairs[chair] = -1
            }
        }

        if friend, ok := arrivalMap[i]; ok {
            if friend == targetFriend {
                return pointer
            }
            chairs[pointer] = friend
            friendToChair[friend] = pointer
            for chairs[pointer] != -1 {
                pointer++
            }
        }
    }

    return -1
}
```

---
![image.png](./images/1.png) {:style='width:250px'}
