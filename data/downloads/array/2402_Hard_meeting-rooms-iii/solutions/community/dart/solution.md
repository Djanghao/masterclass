# Dart - 3 MinHeap

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-rooms-iii/solutions/4745070/](https://leetcode.com/problems/meeting-rooms-iii/solutions/4745070/)

---

We don't need 3 heaps, but that's what I started with. Got lazy to transform that to a sorted list :D

# Code
```
class Solution {
  int mostBooked(int n, List<List<int>> meetings) {
    Map<int, int> roomCount = {};
    MinHeap nextMeetings = MinHeap();
    MinHeap nextEndingMeeting = MinHeap();
    MinHeap availableRooms = MinHeap();

    for (int i = 0; i < n; i++) {
      availableRooms.add((i, i));
    }
    for (int i = 0; i < meetings.length; i++) {
      List<int> meeting = meetings[i];
      nextMeetings.add((meeting[0], meeting));
    }

    while (nextMeetings.isNotEmpty) {
      int hour = 0;
      if (availableRooms.isNotEmpty) {
        hour = nextMeetings.first.$1;
      } else {
        hour = nextEndingMeeting.first.$1;
      }

      while (nextEndingMeeting.isNotEmpty && nextEndingMeeting.first.$1 <= hour) {
        var (_, _, room) = nextEndingMeeting.removeFirst();
        availableRooms.addSimple(room);
      }
      while (nextMeetings.isNotEmpty &&
          nextMeetings.first.$1 <= hour &&
          availableRooms.isNotEmpty) {
        var [start, end] = nextMeetings.removeFirst();
        int room = availableRooms.removeFirst();
        nextEndingMeeting.add((end + hour - start, (start, end, room)));
        roomCount.update(room, (value) => value + 1, ifAbsent: () => 1);
      }
    }
    int maxedRoomIdx = 0;
    int maxedRoomCount = 0;
    for (int i = 0; i < n; i++) {
      int count = roomCount[i] ?? 0;
      if (count > maxedRoomCount) {
        maxedRoomIdx = i;
        maxedRoomCount = count;
      }
    }
    return maxedRoomIdx;
  }
}


class MinHeap {
  List<(int, dynamic)> arr = [];

  bool get isNotEmpty {
    return arr.isNotEmpty;
  }

  dynamic get first {
    return arr[0];
  }

  dynamic removeFirst() {
    if (arr.isEmpty) {
      throw Exception("Heap is empty");
    }
    if (arr.length == 1) return arr.removeLast().$2;
    final (_, min) = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.removeLast();
    heapifyDown(0);
    return min;
  }

  void addSimple(int val) {
    add((val, val));
  }

  void add((int, dynamic) val) {
    arr.add(val);
    heapifyUp(arr.length - 1);
  }

  void heapifyDown(int i) {
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < arr.length) {
      if (right < arr.length && arr[i].$1 > min(arr[right].$1, arr[left].$1)) {
        int to = arr[left].$1 < arr[right].$1 ? left : right;
        swap(i, to);
        heapifyDown(to);
      } else if (arr[i].$1 > arr[left].$1) {
        int to = left;
        swap(i, to);
        heapifyDown(to);
      }
    }
  }

  void swap(from, to) {
    dynamic tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
  }

  void heapifyUp(int i) {
    if (i <= 0) return;
    int parent = (i - 1) ~/ 2;
    if (arr[parent].$1 > arr[i].$1) {
      swap(i, parent);
      heapifyUp(parent);
    }
  }
}

```