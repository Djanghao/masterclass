# Beats 100% ✅ || FASTEST Heap 🔥|| Python, C++, Java, JavaScript & Go ☕Cup of tea

**Author:** iamsanko
**Votes:** 6
**Link:** [https://leetcode.com/problems/meeting-rooms-iii/solutions/4744840/](https://leetcode.com/problems/meeting-rooms-iii/solutions/4744840/)

---

# Intuition: 
The approach seems to allocate rooms to meetings in a way that maximizes the number of meetings scheduled. It uses a heap to efficiently manage the room allocation and deallocation based on meeting timings.

---

# Sir pls upvote !
![Web capture_14-1-2024_84135_upvote.shop.jpeg](./images/0.jpeg)

---


# Approach: 
The code first initializes a list of available rooms and an empty list for used rooms. It then iterates through the sorted meetings and allocates rooms based on availability or by extending the existing meeting in a room if no rooms are available.

---


# Complexity:

# Time complexity: 
- Sorting the meetings takes O(n log n) time, and for each meeting, the heap operations take O(log n) time. So, the overall time complexity is O(n log n), where n is the number of meetings.
# Space complexity: 
- The space complexity is O(n), where n is the number of meetings, due to the space used by the heap and other variables like meetings_per_room.

---


# Code for PYTHON 100%
```
from heapq import heappop, heappush
from operator import itemgetter

class Solution:
    def mostBooked(self, n: int, meetings: List[List[int]]) -> int:
        available_rooms = list(range(n))
        used_rooms = []
        meetings_per_room = [0] * n
 
        for start, end in sorted(meetings):
            while used_rooms and used_rooms[0][0] <= start:
                _, room = heappop(used_rooms)
                heappush(available_rooms, room)

            if available_rooms:
                room = heappop(available_rooms)
                heappush(used_rooms, (end, room))
            else:
                room_end, room = heappop(used_rooms)
                room_end += end - start
                heappush(used_rooms, (room_end, room))
            meetings_per_room[room] += 1

        max_index, max_value = max(enumerate(meetings_per_room), key=operator.itemgetter(1))
        return max_index
```

---


```GO []
func heapPush[E cmp.Ordered](heap []E, item E) []E {
    heap = append(heap, item)
    siftDown(heap, 0, len(heap)-1)
    return heap
}

func heapPop[E cmp.Ordered](heap []E) (E, []E) {
    var lastelt E
    lastelt, heap = heap[len(heap)-1], heap[:len(heap)-1]
    if len(heap) > 0 {
        returnitem := heap[0]
        heap[0] = lastelt
        siftUp(heap, 0)
        return returnitem, heap
    }
    return lastelt, heap
}

func heapReplace[E cmp.Ordered](heap []E, item E) E {
    returnitem := heap[0]
    heap[0] = item
    siftUp(heap, 0)
    return returnitem
}

func siftDown[E cmp.Ordered](heap []E, startpos, pos int) {
    newitem := heap[pos]
    for pos > startpos {
        parentpos := (pos - 1) >> 1
        parent := heap[parentpos]
        if newitem < parent {
            heap[pos] = parent
            pos = parentpos
            continue
        }
        break
    }
    heap[pos] = newitem
}

func siftUp[E cmp.Ordered](heap []E, pos int) {
    endpos := len(heap)
    startpos := pos
    newitem := heap[pos]
    childpos := 2*pos + 1
    for childpos < endpos {
        rightpos := childpos + 1
        if rightpos < endpos && !(heap[childpos] < heap[rightpos]) {
            childpos = rightpos
        }
        heap[pos] = heap[childpos]
        pos = childpos
        childpos = 2*pos + 1
    }
    heap[pos] = newitem
    siftDown(heap, startpos, pos)
}

func room(x uint64) uint8 {
    return uint8(x)
}

func endTime(x uint64) uint64 {
    return x >> 8
}

func item(e uint64, r uint8) uint64 {
    return (e << 8) | uint64(r)
}

func mostBooked(n int, meetings [][]int) int {
    slices.SortFunc(meetings, func (a, b []int) int { return a[0] - b[0] })
    S := make([]int, n)
    H := make([]uint64, 0, n)
    R := make([]uint8, n)
    for i := range R {
        R[i] = uint8(i)
    }
    for _, m := range meetings {
        starti, endi := m[0], m[1]
        for len(H) > 0 && endTime(H[0]) <= uint64(starti) {
            var x uint64
            x, H = heapPop(H)
            R = heapPush(R, room(x))
        }
        if len(R) > 0 {
            var r uint8
            r, R = heapPop(R)
            H = heapPush(H, item(uint64(endi), r))
            S[r]++
        } else {
            e, r := endTime(H[0]), room(H[0])
            heapReplace(H, item(e + uint64(endi - starti), r))
            S[r]++
        }
    }
    m, r := -1, 0
    for i, s := range S {
        if m < s {
            m = s
            r = i
        }
    }
    return r
}
}

```
```Java []
import java.util.*;

class Solution {
    public int mostBooked(int n, int[][] meetings) {
        List<Integer> availableRooms = new ArrayList<>();
        for (int i = 0; i < n; ++i) {
            availableRooms.add(i);
        }
        PriorityQueue<int[]> usedRooms = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        int[] meetingsPerRoom = new int[n];

        Arrays.sort(meetings, Comparator.comparingInt(a -> a[0]));

        for (int[] meeting : meetings) {
            int start = meeting[0];
            int end = meeting[1];

            while (!usedRooms.isEmpty() && usedRooms.peek()[0] <= start) {
                availableRooms.add(usedRooms.poll()[1]);
            }

            if (!availableRooms.isEmpty()) {
                int room = availableRooms.remove(availableRooms.size() - 1);
                usedRooms.add(new int[]{end, room});
            } else {
                int[] roomInfo = usedRooms.poll();
                int roomEnd = roomInfo[0] + (end - start);
                usedRooms.add(new int[]{roomEnd, roomInfo[1]});
            }

            meetingsPerRoom[roomInfo[1]]++;
        }

        int maxRoom = 0;
        for (int i = 1; i < n; i++) {
            if (meetingsPerRoom[i] > meetingsPerRoom[maxRoom]) {
                maxRoom = i;
            }
        }
        return maxRoom;
    }
}

```
```C++ []
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

class Solution {
public:
    int mostBooked(int n, vector<vector<int>>& meetings) {
        vector<int> available_rooms(n);
        for (int i = 0; i < n; ++i) {
            available_rooms[i] = i;
        }
        vector<pair<int, int>> used_rooms;
        vector<int> meetings_per_room(n, 0);

        sort(meetings.begin(), meetings.end());

        for (auto& meeting : meetings) {
            int start = meeting[0];
            int end = meeting[1];

            while (!used_rooms.empty() && used_rooms[0].first <= start) {
                available_rooms.push_back(used_rooms[0].second);
                pop_heap(used_rooms.begin(), used_rooms.end(), greater<pair<int, int>>());
                used_rooms.pop_back();
            }

            if (!available_rooms.empty()) {
                int room = available_rooms.back();
                available_rooms.pop_back();
                used_rooms.push_back({end, room});
                push_heap(used_rooms.begin(), used_rooms.end(), greater<pair<int, int>>());
            } else {
                pair<int, int> room_info = used_rooms.back();
                used_rooms.pop_back();
                int room_end = room_info.first + (end - start);
                used_rooms.push_back({room_end, room_info.second});
                push_heap(used_rooms.begin(), used_rooms.end(), greater<pair<int, int>>());
            }

            meetings_per_room[room_info.second]++;
        }

        auto max_room = max_element(meetings_per_room.begin(), meetings_per_room.end());
        return distance(meetings_per_room.begin(), max_room);
    }
};

```
```JavaScript []
class Solution {
    mostBooked(n, meetings) {
        let availableRooms = Array.from({ length: n }, (_, i) => i);
        let usedRooms = [];
        let meetingsPerRoom = new Array(n).fill(0);

        meetings.sort((a, b) => a[0] - b[0]);

        for (let meeting of meetings) {
            let start = meeting[0];
            let end = meeting[1];

            while (usedRooms.length > 0 && usedRooms[0][0] <= start) {
                availableRooms.push(usedRooms[0][1]);
                usedRooms.shift();
            }

            if (availableRooms.length > 0) {
                let room = availableRooms.pop();
                usedRooms.push([end, room]);
            } else {
                let [roomEnd, room] = usedRooms.shift();
                let newRoomEnd = roomEnd + (end - start);
                usedRooms.push([newRoomEnd, room]);
            }

            meetingsPerRoom[room]++;
        }

        let maxRoom = meetingsPerRoom.reduce((maxIndex, currentValue, currentIndex, array) => {
            return currentValue > array[maxIndex] ? currentIndex : maxIndex;
        }, 0);

        return maxRoom;
    }
}

```


