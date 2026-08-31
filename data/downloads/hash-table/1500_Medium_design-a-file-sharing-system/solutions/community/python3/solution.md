# Python3 dicts of set and a smallest available ID - Design a File Sharing System

**Author:** r0bertz
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-a-file-sharing-system/solutions/808273/](https://leetcode.com/problems/design-a-file-sharing-system/solutions/808273/)

---

```
class FileSharing:

    def __init__(self, m: int):
        self.usersHaveChunk = defaultdict(set)
        self.chunkBelongToUser = defaultdict(set)
        self.nextID = 1

    def join(self, ownedChunks: List[int]) -> int:
        uid = self.nextID
        for i in itertools.count(uid+1):
            if i not in self.chunkBelongToUser:
                self.nextID = i
                break
        self.chunkBelongToUser[uid] = set(ownedChunks)
        for ch in ownedChunks:
            self.usersHaveChunk[ch].add(uid)
        return uid    

    def leave(self, userID: int) -> None:
        if userID < self.nextID:
            self.nextID = userID
        for ch in self.chunkBelongToUser[userID]:
            self.usersHaveChunk[ch].remove(userID)
        del self.chunkBelongToUser[userID]

    def request(self, userID: int, chunkID: int) -> List[int]:
        ans = sorted(self.usersHaveChunk[chunkID])        
        if ans:
            self.usersHaveChunk[chunkID].add(userID)
            self.chunkBelongToUser[userID].add(chunkID)
        return ans
```