# TS | JS - MinHeap code

**Author:** tjdgus05
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-rooms-iii/solutions/4924265/](https://leetcode.com/problems/meeting-rooms-iii/solutions/4924265/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type Comparator<T> = (a:T, b:T) => number;
type MeetingNode = {
  endTime: number;
  room:number;
}

class BookMinHeap<T> {
  nodes = [];
  constructor(private comparator: Comparator<T>) {
  }

  add(value:T) {
    this.nodes.push(value);
    this.bubbleUp();
  }

  remove() {
    const len = this.nodes.length;
    if (len === 0) return null;
    if (len > 1) {
      [this.nodes[0], this.nodes[len - 1]] = [this.nodes[len - 1], this.nodes[0]];
    }
    const min = this.nodes.pop();
    this.bubbleDown();
    return min;
  }

  bubbleUp() {
    let index = this.nodes.length - 1;
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      if (this.comparator(this.nodes[parentIdx], this.nodes[index]) <= 0) break;
      [this.nodes[parentIdx], this.nodes[index]] = [this.nodes[index], this.nodes[parentIdx]];
      index = parentIdx;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.nodes.length;
    const element = this.nodes[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.nodes[leftChildIndex];
        if (this.comparator(element, leftChild) > 0) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.nodes[rightChildIndex];
        if ((swap === null && this.comparator(element, rightChild) > 0) || 
            (swap !== null && this.comparator(leftChild, rightChild) > 0)) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      [this.nodes[index], this.nodes[swap]] = [this.nodes[swap], this.nodes[index]];
      index = swap;
    }
  }

  size() {
    return this.nodes.length;
  }

  peek() {
    return this.nodes[0] ?? null;
  }
}

const meetingComparator:Comparator<MeetingNode> = (a, b)=> {
  if (a.endTime === b.endTime) {
    return a.room - b.room;
  }
  return a.endTime - b.endTime;
}

function roomComparator(a:number, b:number) {
  return a - b;
}


function mostBooked(n: number, meetings: number[][]): number {
  meetings.sort((a,b)=> a[0]-b[0])

  const meetingList = new BookMinHeap(meetingComparator);
  const openRoom = new BookMinHeap(roomComparator);
  let totalStartedRooms = 0; 
  const countRooms = Array(n).fill(0);
  let time = 0;
  
  meetings.forEach(([start,end]) => {
    time = Math.max(time, start)

    while(meetingList.peek() && meetingList.peek().endTime <= time){
      const finishedMeeting = meetingList.remove();
      openRoom.add(finishedMeeting.room);
    }

    let room:number;
    if(openRoom.size()) {
      room = openRoom.remove();
    }
    else if(totalStartedRooms < n){
      room = totalStartedRooms++;
    }else{
      const roomInfo = meetingList.remove();
      time = roomInfo.endTime;
      room = roomInfo.room;
    }

    countRooms[room]++;
    const newMeeting:MeetingNode = {
      room,
      endTime:time+(end-start),
    } 
    meetingList.add(newMeeting)   
  })

  const maxIdx = countRooms.reduce((a,c,i,arr) => arr[a] >= c ? a: i,0);
  return maxIdx
};


```