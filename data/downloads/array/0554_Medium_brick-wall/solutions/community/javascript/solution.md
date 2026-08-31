# JS, Python, Java, C++ | Easy Frequency Map Solution w/ Explanation

**Author:** sgallivan
**Votes:** 23
**Link:** [https://leetcode.com/problems/brick-wall/solutions/1170889/](https://leetcode.com/problems/brick-wall/solutions/1170889/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

If the goal here is to find where a line will cross the fewest bricks, then we could also say that the goal is to find where the most brick edges line up. We can consider the edges to occur at an index representing the current running total of the previous elements of a given row of the wall. For example, if the row is defined as **[1,2,2,1]**, then the inside edges occur at **[1,1+2,1+2+2]**, or **[1,3,5]**.

If we now know how to find the edges, then we're left with finding out which index has the highest frequency of edges, which naturally calls for a **frequency map.**

So we can iterate through each **row** in the **wall**, keep a running total of the current row (**rowSum**), and then update the frequency of each edge's index in our frequency map (**freq**).

Once we're done filling **freq**, we just need to iterate through it to find the highest value (**best**), which represents the number of edges aligned on a single index. Our actual answer, however, is the number of bricks, not edges, so we should **return** the total number of rows minus **best**.

---

#### ***Implementation:***

For Javascript, it's more performant to iterate through the finished **freq** looking for the **best** result

In Python it's easier to run **max()** directly on **freq**.

For Java and C++ it's faster to keep track of **best** as we add values to **freq**.

For Java, it's also weirdly more performant to extract the **row** processing to a helper function.

---

#### ***Javascript Code:***

The best result for the code below is **88ms / 44.6MB** (beats 96% / 62%).
```javascript
var leastBricks = function(wall) {
    let freq = new Map(), best = 0
    for (let i = 0; i < wall.length; i++) {
        let row = wall[i], rowSum = row[0]
        for (let j = 1; j < row.length; j++) {
            freq.set(rowSum, (freq.get(rowSum) || 0) + 1)
            rowSum += row[j]
        } 
    }
    for (let [k,v] of freq)
        if (v > best) best = v
    return wall.length - best
};
```

---

#### ***Python Code:***

The best result for the code below is **172ms / 19.1MB** (beats 92% / 86%).
```python
class Solution:
    def leastBricks(self, wall: List[List[int]]) -> int:
        freq = defaultdict(int)
        for row in wall:
            rowSum = row[0]
            for j in range(1, len(row)):
                freq[rowSum] += 1
                rowSum += row[j]
        return len(wall) - max(freq.values() or [0])
```

---

#### ***Java Code:***

The best result for the code below is **4ms / 41.9MB** (beats 100% / 79%).
```java
class Solution {
    int best = 0;
    Map<Integer, Integer> freq = new HashMap<>();
    public int leastBricks(List<List<Integer>> wall) {
        for (int i = 0; i < wall.size(); i++)
            processRow(wall.get(i));
        return wall.size() - best;
    }
    public void processRow(List<Integer> row) {
        int rowSum = row.get(0);
        for (int j = 1; j < row.size(); j++) {
            int f = freq.getOrDefault(rowSum, 0) + 1;
            freq.put(rowSum, f);
            if (f > best) best = f;
            rowSum += row.get(j);
        } 
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **36ms / 21.5MB** (beats 97% / 81%).
```c++
class Solution {
public:
    int leastBricks(vector<vector<int>>& wall) {
        unordered_map<int, int> freq;
        int best = 0;
        for (int i = 0; i < wall.size(); i++) {
            int rowSum = wall[i][0];
            for (int j = 1; j < wall[i].size(); j++) {
                freq[rowSum]++;
                best = max(best, freq[rowSum]);
                rowSum += wall[i][j];
            };
        };
        return wall.size() - best;
    };
};
```