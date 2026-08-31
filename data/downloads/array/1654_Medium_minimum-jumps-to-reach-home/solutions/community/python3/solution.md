# Fast Python and C++ solution with explanation - BFS

**Author:** geekcoder1989
**Votes:** 27
**Link:** [https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/950952/](https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/950952/)

---

The objective is to find the minimum number of hops. BFS is the ideal candidate for this question since it will provide the shortest path.
**Solution:**
1. We start exploring from `0` position. 
2. At each position, we can either go forward by `a` and go backward by `b`. Thing to note here is we cannot go backward twice in a row so we will maintain a flag `isForward` to signal if the previous jump was a `forward` jump.
3. If the previous jump was `isForward` then we have 2 positions we can go to from current position `pos` -> `pos+a` and `pos-b`
4. If the previous jump was not `isForward` then we  can go to 1 position only from current position `pos` -> `pos+a`
5. To avoid going to the same `pos` multiple times we will maintain a `visited` data-structure which will keep track of already visited positions. We will also add forbidden positions to this data structure.
6. The tricky bit is to figure out when the forward limit. Since the question mentions that the max x is 2000. The absolute limit is `2000 + a + b`. As anything beyond this limit will always be greater than x because there is only one backward move allowed. So any position above this limit will not be added to the search queue.
7. Keep exploring the positions in the `queue` until you reach destination `x` in which case `return hops` or until the `queue` is empty in which case `return -1`

Python
```
class Solution:
    def minimumJumps(self, forbidden: List[int], a: int, b: int, x: int) -> int:
        limit = 2000 + a + b
        visited = set(forbidden)
        myque = collections.deque([(0, True)]) # (pos, isForward) 
        hops = 0
        while(myque):
            l = len(myque)
            while(l > 0):
                l -= 1
                pos, isForward = myque.popleft()
                if pos == x:
                    return hops
                if pos in visited: continue
                visited.add(pos)
                if isForward:
                    nxt_jump = pos - b
                    if nxt_jump >= 0:
                        myque.append((nxt_jump, False))
                nxt_jump = pos + a
                if nxt_jump <= limit:
                    myque.append((nxt_jump, True))
            hops += 1
        return -1
```

C++
```
class Solution {
public:
    int minimumJumps(vector<int>& forbidden, int a, int b, int x) {
        int limit = 2000 + a + b;
        std::queue<std::pair<int, int>> cur;
        cur.push({0, 1});
        std::unordered_set<int> visited;
        for (auto& x : forbidden){
            visited.insert(x);
        }
        
        int hops = 0;
        while(!cur.empty()){
            int size = cur.size();
            while(size--){
                auto it = cur.front(); cur.pop();
                int num = it.first;
                int forward = it.second;
                if (num == x) return hops;
                if (visited.count(num) != 0)
                    continue;
                visited.insert(num);
                if (forward){
                    int nxt = num - b;
                    if (nxt >= 0){
                        cur.push({nxt, 0});
                    }
                }
                int nxt = num + a;
                if (nxt <= limit){
                    cur.push({nxt, 1});
                }
            }
            ++hops;
        }
        return -1;
        
    }
};