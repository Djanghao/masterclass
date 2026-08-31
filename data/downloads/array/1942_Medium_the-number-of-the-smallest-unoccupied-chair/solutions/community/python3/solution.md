# Python3 || 9 lines, two heaps  || T/S: 94% / 95%

**Author:** Spaulding_
**Votes:** 61
**Link:** [https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5897455/](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5897455/)

---

Here's the plan:

1. We sort `friends` by their arrival times.

1. We initialize available seats and taken seats as heaps.
2. We track freed seats that become available.
3. We assign the smallest available seat to the next friend, and we check whether that friend is the `target`.
4. We add the current seat to takenSeats with the departure time.

```python3 []
class Solution:
    def smallestChair(self, times: List[List[int]], targetFriend: int) -> int:

        order = sorted(range(len(times)), key = lambda x: times[x][0])  # <-- 1)
        emptySeats, takenSeats = list(range(len(times))), []            # <-- 2)

        for i in order:                                                 # <-- 3)
            ar, lv = times[i]

            while takenSeats and takenSeats[0][0] <= ar:
                heappush(emptySeats, heappop(takenSeats)[1])
            seat = heappop(emptySeats)                                  # <-- 4)

            if i == targetFriend: return seat

            heappush(takenSeats,(lv, seat))                             # <-- 5)
```
```cpp []
class Solution {
public:
    int smallestChair(vector<vector<int>>& times, int targetFriend) {
        int n = times.size();

        vector<int> order(n);
        for (int i = 0; i < n; ++i) order[i] = i;

        sort(order.begin(), order.end(), [&times](int a, int b) {
            return times[a][0] < times[b][0];
        });

        priority_queue<int, vector<int>, greater<int>> emptySeats;
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> takenSeats;

        for (int i = 0; i < n; ++i) emptySeats.push(i);

        for (int i : order) {
            int arrival = times[i][0], leave = times[i][1];

            while (!takenSeats.empty() && takenSeats.top().first <= arrival) {
                emptySeats.push(takenSeats.top().second);
                takenSeats.pop();
            }

            int seat = emptySeats.top();
            emptySeats.pop();

            if (i == targetFriend) return seat;

            takenSeats.push({leave, seat});
        }

        return -1;  
    }
};

```
```java []
class Solution {
    public int smallestChair(int[][] times, int targetFriend) {
        int n = times.length;
        Integer[] order = new Integer[n];
        
        for (int i = 0; i < n; i++) order[i] = i;

        Arrays.sort(order, (a, b) -> Integer.compare(times[a][0], times[b][0]));

        PriorityQueue<Integer> emptySeats = new PriorityQueue<>();
        PriorityQueue<int[]> takenSeats = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));

        for (int i = 0; i < n; i++) emptySeats.offer(i);

        for (int i : order) {
            int arrival = times[i][0], leave = times[i][1];

            while (!takenSeats.isEmpty() && takenSeats.peek()[0] <= arrival) {
                emptySeats.offer(takenSeats.poll()[1]);
            }

            int seat = emptySeats.poll();

            if (i == targetFriend) return seat;

            takenSeats.offer(new int[]{leave, seat});
        }

        return -1;
    }
}
```

[https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/submissions/1418565403/?envType=daily-question&envId=2024-10-11](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/submissions/1418565403/?envType=daily-question&envId=2024-10-11)


I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(times)`.