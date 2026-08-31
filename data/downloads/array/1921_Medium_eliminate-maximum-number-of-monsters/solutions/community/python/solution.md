# Sort by arrival

**Author:** votrubac
**Votes:** 114
**Link:** [https://leetcode.com/problems/eliminate-maximum-number-of-monsters/solutions/1314550/](https://leetcode.com/problems/eliminate-maximum-number-of-monsters/solutions/1314550/)

---

We first compute how many minutes each monster needs to reach the city, based on the initial position and speed.

Then, we sort our monsters by their arrival time. 

> I tried to use min heap (second solution below), but, even with the bulk insert, it was slower than sorting (154 vs 116 ms). 

Finally, we shoot monsters (in the arrival order), until a monster arrives earlier than we can make our next shot. For example, if we have made 5 shots, and the next monster arrives in 4 minutes, we lose.

**C++**
```cpp
int eliminateMaximum(vector<int>& dist, vector<int>& speed) {
    for (int i = 0; i < dist.size(); ++i)
        dist[i] = (dist[i] - 1) / speed[i];
    sort(begin(dist), end(dist));
    for (int i = 0; i < dist.size(); ++i)
        if (i > dist[i])
            return i;
    return dist.size();
} 
```
**Java**
```java
public int eliminateMaximum(int[] dist, int[] speed) {
    for (int i = 0; i < dist.length; ++i)
        dist[i] = (dist[i] - 1) / speed[i];
    Arrays.sort(dist);
    for (int i = 0; i < dist.length; ++i)
        if (i > dist[i])
            return i;
    return dist.length;
}
```
**Python 3**
```python
class Solution:
    def eliminateMaximum(self, dist: List[int], speed: List[int]) -> int:
        for i, t in enumerate(sorted([(d - 1) // s for d, s in zip(dist, speed)])):
            if i > t:
                return i
        return len(dist)  
```
#### Min Heap
Note that this solution is slower than when sorting, perhaps related to the test cases. Min heap should be faster if we can eliminate less than `n` monsters.

**C++**
```cpp
int eliminateMaximum(vector<int>& dist, vector<int>& speed) {
    for (int i = 0; i < dist.size(); ++i)
        dist[i] = (dist[i] - 1) / speed[i];
    priority_queue<int, vector<int>, greater<int>> pq(begin(dist), end(dist));
    for (int i = 0; i < dist.size() && i <= pq.top(); ++i)
        pq.pop();
    return dist.size() - pq.size();
}   
```