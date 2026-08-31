# [Golang] PriorityQueue and HashMap (with explanation)

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-file-sharing-system/solutions/2678325/](https://leetcode.com/problems/design-a-file-sharing-system/solutions/2678325/)

---

```go
type PriorityQueue []int // <chairId>

func (pq PriorityQueue) Len() int           { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool {
  return pq[i] < pq[j]
}
func (pq PriorityQueue) Swap(i, j int)      { pq[i], pq[j] = pq[j], pq[i] }

func (pq *PriorityQueue) Push(x interface{}) {
  *pq = append(*pq, x.(int))
}

func (pq *PriorityQueue) Pop() interface{} {
  old := *pq
  n := len(old)
  item := old[n-1]
  *pq = old[:n-1]
  return item
}

type FileSharing struct {
  // chunks contains the list of people who have a specific chunk
  chunks []map[int]struct{}
  // ownerships keeps track of the chunk owned by a user
  ownerships map[int][]int
  // User a Min Heap to keep track of the available IDs
  availableIds PriorityQueue
  // Keep track of nextId to assign new IDs starting at 1
  nextId int
}


func Constructor(m int) FileSharing {
  chunks := make([]map[int]struct{}, m+1)
  for i := 0; i < len(chunks); i++ {
    chunks[i] = make(map[int]struct{})
  }
  return FileSharing{
    chunks: chunks,
    ownerships: make(map[int][]int),
    availableIds: PriorityQueue{},
    nextId: 1,
  }
}


func (this *FileSharing) Join(ownedChunks []int) int {
  // When a user joins, we do three things:
  // 1. Assign them an ID (either available or generate a new one)
  // 2. Set their initial ownership
  // 3. Add their ID to all chunks they own
  var userId int
  if this.availableIds.Len() > 0 {
    userId = heap.Pop(&this.availableIds).(int)
  } else {
    userId = this.nextId
    this.nextId++
  }
  this.ownerships[userId] = ownedChunks
  for _, chunk := range ownedChunks {
    this.chunks[chunk][userId] = struct{}{}
  }
  return userId
}


func (this *FileSharing) Leave(userID int)  {
  // When user leaves, we do the following:
  // * Remove their ID from all the chunks they owned
  // * Remove their ownerships
  for _, chunk := range this.ownerships[userID] {
    delete(this.chunks[chunk], userID)
  }
  delete(this.ownerships, userID)
  heap.Push(&this.availableIds, userID)
}


func (this *FileSharing) Request(userID int, chunkID int) []int {
  // When a user requests a chunk, we do the following:
  // * We retrieve the IDs of all users who have the chunk and sort the user list
  // * If we get a non-empty users list, it means the user will have the chunk, so add this user
  //   to the list of users owning this chunk; update ownership as well.
  var users []int
  for k := range this.chunks[chunkID] {
    users = append(users, k)
  }
  sort.Ints(users)
  if len(users) > 0 {
    // This user now has this chunk
    this.ownerships[userID] = append(this.ownerships[userID], chunkID)
    this.chunks[chunkID][userID] = struct{}{}
  }
  return users
}


/**
 * Your FileSharing object will be instantiated and called as such:
 * obj := Constructor(m);
 * param_1 := obj.Join(ownedChunks);
 * obj.Leave(userID);
 * param_3 := obj.Request(userID,chunkID);
 */
 ```