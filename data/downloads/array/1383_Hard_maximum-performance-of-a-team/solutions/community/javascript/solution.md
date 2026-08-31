# JS, Python, Java, C++ | Easy Priority Queue Solution w/ Explanation

**Author:** sgallivan
**Votes:** 25
**Link:** [https://leetcode.com/problems/maximum-performance-of-a-team/solutions/1252316/](https://leetcode.com/problems/maximum-performance-of-a-team/solutions/1252316/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The trick to this problem, like many best product of **x** and **y** problems, is to find a way to iterate through one of the values in order, then evaluate the other value for each combination and take the **best** result. If we sort the engineers by **efficiency**, we can iterate downward through the engineers while evaluating the combined speed (**totalSpeed**) of the ideal group.

Since the index numbers between **speed** and **efficiency** correspond to each other, we shouldn't just sort **efficiency**, however. Instead, we can create another array of arrays (**ord**) with both stats combined into one array, then sort it based on the efficiency.

As we iterate through the engineers in **ord** order and add them to the available pool, we know that all the engineers so far are at or higher than **minEff**, so we're free to only choose the **k** fastest engineers for our group. To keep track of the sorted order of speeds of the engineers in our available pool, we can use a **min priority queue** (**sppq**) or **min heap** (**spheap**) structure. This way, we can eliminate the slowest engineer from our pool every time we add an engineer over the **k** limit. At each stop, we should also find the product of **totalSpeed** and the current minimum efficiency and update the **best** result if necessary.

It's important to note that the instructions say "at most" **k** engineers, so we should start keeping track of **best** right away. Also, we should remember to **modulo 1e9+7** before we **return best**.

 - _**Time Complexity: O(N * log(N))** where **N** is the length of **speed** or **efficiency**, for the sorting of **ord** and for the priority queue / heap_
 - _**Space Complexity: O(N)** for **ord** and **sppq** / **spheap**_

---

#### ***Implementation:***

The Javascript code would be even faster with a custom **heap** implementation. The **MinPriorityQueue()** npm is easier to use, but not as efficient.

Javascript is faster by passing only the index reference into the priority queue, rather than combining both stats into an array before storage.

---

#### ***Javascript Code:***

The best result for the code below is **204ms / 57.5MB** (beats 100% / 100%).
```javascript
var maxPerformance = function(n, speed, efficiency, k) {
    let ord = Array.from({length: n}, (_,i) => i)
    ord.sort((a,b) => efficiency[b] - efficiency[a])
    let sppq = new MinPriorityQueue(),
        totalSpeed = 0n, best = 0n
    for (let eng of ord) {
        sppq.enqueue(speed[eng])
        if (sppq.size() <= k) totalSpeed += BigInt(speed[eng])
        else totalSpeed += BigInt(speed[eng] - sppq.dequeue().element)
        let res = totalSpeed * BigInt(efficiency[eng])
        if (res > best) best = res
    }
    return best % 1000000007n
};
```

---

#### ***Python Code:***

The best result for the code below is **368ms / 29.8MB** (beats 95% / 99%).
```python
class Solution:
    def maxPerformance(self, n: int, speed: List[int], efficiency: List[int], k: int) -> int:
        ord = sorted(zip(efficiency, speed), reverse=True)
        spheap, totalSpeed, best = [], 0, 0
        for eff, spd in ord:
            heappush(spheap, spd)
            if len(spheap) <= k: totalSpeed += spd
            else: totalSpeed += spd - heappop(spheap)
            best = max(best, totalSpeed * eff)
        return best % 1000000007
```

---

#### ***Java Code:***

The best result for the code below is **38ms / 50.8MB** (beats 80% / 93%).
```java
class Solution {
    public int maxPerformance(int n, int[] speed, int[] efficiency, int k) {
        int[][] ord = new int[n][2];
        for (int i = 0; i < n; i++)
            ord[i] = new int[] {efficiency[i], speed[i]};
        Arrays.sort(ord, (a, b) -> Integer.compare(b[0], a[0]));
        PriorityQueue<Integer> sppq = new PriorityQueue<>();
        long totalSpeed = 0, best = 0;
        for (int[] pair : ord) {
            int spd = pair[1];
            sppq.add(spd);
            if (sppq.size() <= k) totalSpeed += spd;
            else totalSpeed += spd - sppq.poll();
            best = Math.max(best, totalSpeed * pair[0]);
        }
        return (int)(best % 1000000007);
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **68ms / 36.6MB** (beats 89% / 83%).
```c++
class Solution {
public:
    int maxPerformance(int n, vector<int>& speed, vector<int>& efficiency, int k) {
        vector<pair<int, int>> ord;
        for (int i = 0; i < n; i++)
            ord.push_back({efficiency[i], speed[i]});
        sort(ord.rbegin(), ord.rend());
        priority_queue<int> sppq;
        long totalSpeed = 0, best = 0;
        for (auto& p : ord) {
            int spd = p.second;
            sppq.push(-spd);
            if (sppq.size() <= k) totalSpeed += spd;
            else {
                totalSpeed += spd + sppq.top();
                sppq.pop();
            }
            best = max(best, totalSpeed * p.first);
        }
        return best % 1000000007;
    }
};
```