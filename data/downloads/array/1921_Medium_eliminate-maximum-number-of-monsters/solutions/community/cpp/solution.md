# 【Video】Give me 10 minutes - O(n) solution - How we think about a solution

**Author:** niits
**Votes:** 50
**Link:** [https://leetcode.com/problems/eliminate-maximum-number-of-monsters/solutions/4259212/](https://leetcode.com/problems/eliminate-maximum-number-of-monsters/solutions/4259212/)

---

# Intuition
We can calculate number of turns to arrive at the city

# Approach

---

# Solution Video

https://youtu.be/2tUBAJEn-S8

\u25A0 Timeline of the video

`0:04` Heap solution I came up with at first
`2:38` Two key points with O(n) solution for Eliminate Maximum Number of Monsters
`2:59` Explain the first key point
`5:08` Explain the second key point
`6:19` How we can eliminate monsters that are out of bounds
`8:48` Let's see another case
`9:52` How we can calculate eliminated numbers
`10:56` Coding
`13:03` Time Complexity and Space Complexity

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 2,966
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

---

## How we think about a solution


First of all, I came up with heap solution like this.
```
class Solution:
    def eliminateMaximum(self, dist: List[int], speed: List[int]) -> int:
        heap = []
        for i in range(len(dist)):
            heapq.heappush(heap, dist[i] / speed[i])
        
        res = 0

        while heap:
            if heapq.heappop(heap) <= res:
                break
            res += 1
        
        return res        
```

The heap has `number of turns` to arrive at city and we can eliminate monsters one by one that arrive at the city earlier, so `res` should be `number of monsters we can eliminate`, but it is considered as  `chances` to try to eliminate them so far.

So if minimum turn in heap is less than or equal to `res`, monsters will arrive at the city before they are eliminated. The number of turns to arrive must be greater than or equal to `res`(chance) if you want to eliminate them.

For example
```
Input: dist = [1,2,2,3], speed = [1,1,1,1]
```

Heap has
```
[1.0, 2.0, 2.0, 3.0]
```
In that case, we can eliminate `1.0` and one of `2.0` monsters. So now `res` should be `2`. 

Look at index `3`. there is another monster arriving at the city with `2` turns. But we elimiante `2.0` at index `2` when `res = 2`, so `2.0` at index `3` will reach the city before we elimiante it.

```
output: 2
```

Time complexity is $$O(n log n)$$. I thought it was not bad. However result is slow. Actually I'm not sure why. Is there special case?

That's how I try to think about $$O(n)$$ solution.


---

## O(n) solution

We have two points from the solution above.

---

\u2B50\uFE0F Points

- We can calculate number of turns to arrive at the city.

- We can eliminate monsters if number of turns to arrive is greater than or equal to chance to eliminate them.

---

Let me explain one by one.

- **We can calculate number of turns to arrive at the city**

```
Input: dist = [1,3,4], speed = [1,1,1]
```

In this case, There are 3 monsters, so create `monsters` list which is length of `3` with all `0` values.

```
monsters = [0,0,0]

Index number is arrival(number of turns to arrive at the city)
Value is number of monsters.
```


Then calculate each arrival
```
math.ceil(dist[i] / speed[i])
```

- Why do we need `math.ceil`?

Because there are cases where we get float from `dist[i] / speed[i]`. Let's say we get `1.5`(dist = `3`, speed = `2`). In that case, the monster need `2` turns to arrive at the city. That's why we need to round it up. 

If dist = `2` and speed = `2`, the monster need only `1` turn to arrive at the city.

In the end, we will have `monsters` list like this

```
monsters = [0,1,0]

math.ceil(1 / 1) = 1
math.ceil(3 / 1) = 3 (out of bounds)
math.ceil(4 / 1) = 4 (out of bounds)
```

That means there is one monster will arrive at the city with `1` turn. Wait! Somebody is wondering where the other monsters are. They are out of bounds(`3/1` and `4/1`).

No problem, we can count them. Let me explain it later.

---


- **We can eliminate monsters if number of turns to arrive is greater than or equal to chance to eliminate them**

It's time to calculate the number of monsters we can eliminate. Let's iteration through `monsters` list

```
monsters = [0,1,0]
eliminated = 0 (0 monsters at index 0)
i = 0 (coming from len(dist) or len(speed))
```

```
monsters = [0,1,0]
eliminated = 1 (`1 monster at index 1, we can eliminate the monster)
i = 1
```
```
monsters = [0,1,0]
eliminated = 1 (0 monsters at index 2)
i = 2
```
So return value is `1`? That is wrong. We still have two monsters at index `3` and `4`. They are out of bounds.

```
monsters = [0,1,0] (solution code)
monsters = [0,1,0,1,1] (including monsters which are out of bounds)                
```
But we don't have to care about monsters which are out of bounds, because since `monsters` list is created by `len(dist)` or `len(speed)`, we know that length of mosters list is `number of monsters` approaching to the city.

---

\u2B50\uFE0F Points

We reach the end of `mosters` list, that means we can eliminate all monsters including monsters which are out of bounds. Because we have a change to elimiate a monster every turns.

In other words, `index number of monsters list`  is `chances` to eliminate them.

Do you remember the second key point? It says "We can eliminate monsters if number of turns to arrive is greater than or equal to chance to eliminate them."

We can definitely eliminate monsters that are out of bounds when we reach end of `monsters` list.

To prove that,

When we reach the end of monsters list, we have `3` chances(length of `monsters` list) and we use `1` change for a monster at index `1`.

We still have `2` chances at index `2`, the number of monsters that are out of bounds is `2` and they are coming from idnex `3` and `4`. So, we can elimaite all monsters.

In reality, 
```
when index is 0(the first turn), elimiate a monster at index 1
when index is 1(the second turn), elimiate a monster at index 3
when index is 2(the thrid turn), elimiate a monster at index 4
```
---

In that case, we can simply return `len(dist)` or `len(speed)`.
```
return 3
```

Let's see one more case quickly.

```
Input: dist = [1,2,2,3], speed = [1,1,1,1]
```
`monsters` list should be
```
monsters = [0,1,2,1]

math.ceil(dist[i] / speed[i])
math.ceil(1 / 1)
math.ceil(2 / 1)
math.ceil(2 / 1)
math.ceil(3 / 1)
```

```
monsters = [0,1,2,1]
eliminated = 0 (0 monsters at index 0)
i = 0 (coming from len(dist) or len(speed))
```
```
monsters = [0,1,2,1]
eliminated = 1 (1 monster at index 1)
i = 1
```
```
monsters = [0,1,2,1]
eliminated = 2 (2 monster at index 2, we can eliminete one monster)
i = 2
```
We can't eliminate two monsters at the same time, so
```
return 2(= eliminated)
```

- How we can calculate `eliminated` in solution code?

`i` is number of chance to eliminate monsters. So, at each index, if total number of monsters is greater than index number, some monsters reach the city, that's why we return current index `i` because we can eliminte number of `i` monsters.

Total number of monsters so far should be `eliminated monsters` + `monsters from current index`
```
if eliminated + monsters[i] > i:
    return i
```

As you can see in the first example, if we reach end of monsters list, that means we can elimiate all monsters including out of bounds. So we can eliminate `n` monster. `n` is length of `dist` or `speed`.

I hope you understand main idea now. I spent 2 hours to write this. lol
Let's see a real algorithm!

---



### Algorithm Overview:

The code is designed to determine how many monsters can be eliminated before they reach the target position based on their distances and speeds.

### Detailed Explanation:

1. Initialize necessary variables:
   - `n` is assigned the length of the `dist` list, representing the number of monsters.

   - `monsters` is initialized as a list of zeros with a length of `n`. This list will keep track of the number of monsters arriving at each time step.

2. Iterate through the monsters:
   - A loop runs from 0 to `n-1`, representing each monster.

   - For each monster, calculate the `arrival` time, which is determined by dividing the monster's distance by its speed and rounding up using `math.ceil()`. This gives the time it will take for the monster to arrive at the target position.

   - If the `arrival` time is less than `n`, increment the corresponding element in the `monsters` list to count the number of monsters arriving at that time.

3. Eliminate monsters:
   - Initialize the variable `eliminated` to 0. It will keep track of the number of eliminated monsters.

   - Iterate through the elements of the `monsters` list.

   - For each element, check if the current count of eliminated monsters (`eliminated`) plus the number of monsters arriving at this time step is greater than or equal to the time step `i`.

   - If this condition is met, return `i` as the result, indicating that the maximum number of monsters that can be eliminated before reaching their target position is at time `i`.

   - Update `eliminated` by adding the number of monsters arriving at this time step.
   
4. If no return statement is executed within the loop, it means that all monsters have arrived before being eliminated. In this case, return `n`, indicating that all monsters have reached their target positions without being eliminated.

The algorithm calculates the maximum number of monsters that can be eliminated based on their arrival times and provides the earliest time when the elimination limit is reached.

# Complexity
- Time complexity: $$O(n)$$

1. The code first iterates through the 'dist' and 'speed' lists to calculate the arrival time for each monster and increments the corresponding bucket in the 'monsters' list. This step has a time complexity of $$O(n)$$, where 'n' is the length of the input lists.

2. The code then iterates through the 'monsters' list to check if the monsters can be eliminated at each time step. This step also has a time complexity of $$O(n)$$.

Therefore, the overall time complexity of the code is $$O(n)$$.

- Space complexity: $$O(n)$$

1. The code uses an additional list 'monsters' of the same size as the input lists, which has a space complexity of $$O(n)$$ to store the counts of monsters arriving at each time step.

3. 2. There are a few integer variables used, but their space complexity is constant $$O(1)$$.

Therefore, the overall space complexity of the code is $$O(n)$$ due to the 'monsters' list.

```python []
class Solution:
    def eliminateMaximum(self, dist: List[int], speed: List[int]) -> int:
        n = len(dist)
        monsters = [0] * n

        for i in range(n):
            arrival = math.ceil(dist[i] / speed[i])

            if arrival < n:
                monsters[arrival] += 1

        eliminated = 0
        for i in range(n):
            if eliminated + monsters[i] > i:
                return i

            eliminated += monsters[i]

        return n        
```
```javascript []
var eliminateMaximum = function(dist, speed) {
    const n = dist.length;
    const monsters = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const arrival = Math.ceil(dist[i] / speed[i]);

        if (arrival < n) {
            monsters[arrival]++;
        }
    }

    let eliminated = 0;
    for (let i = 0; i < n; i++) {
        if (eliminated + monsters[i] > i) {
            return i;
        }

        eliminated += monsters[i];
    }

    return n;    
};
```
```java []
class Solution {
    public int eliminateMaximum(int[] dist, int[] speed) {
        int n = dist.length;
        int[] monsters = new int[n];

        for (int i = 0; i < n; i++) {
            int arrival = (int) Math.ceil((double) dist[i] / speed[i]);

            if (arrival < n) {
                monsters[arrival]++;
            }
        }

        int eliminated = 0;
        for (int i = 0; i < n; i++) {
            if (eliminated + monsters[i] > i) {
                return i;
            }

            eliminated += monsters[i];
        }

        return n;        
    }
}
```
```C++ []
class Solution {
public:
    int eliminateMaximum(vector<int>& dist, vector<int>& speed) {
        int n = dist.size();
        vector<int> monsters(n, 0);

        for (int i = 0; i < n; i++) {
            int arrival = ceil(static_cast<double>(dist[i]) / speed[i]);

            if (arrival < n) {
                monsters[arrival]++;
            }
        }

        int eliminated = 0;
        for (int i = 0; i < n; i++) {
            if (eliminated + monsters[i] > i) {
                return i;
            }

            eliminated += monsters[i];
        }

        return n;        
    }
};
```

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ


### My next daily coding challenge post and video.

post
https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4262613/video-give-me-5-minutes-o1-time-and-space-how-we-think-about-a-solution/

video
https://youtu.be/7nxGK97CmIw

\u25A0 Timeline of the video

`0:04` How we can calculate x and y distances
`0:55` We need to consider 2 cases and explain what if start and finish cell are the same position
`2:20` Explain case 2, what if start and finish cell are different positions
`4:53` Coding
`6:18` Time Complexity and Space Complexity

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/seat-reservation-manager/solutions/4256920/video-give-me-5-minutes-bests-9879-how-we-think-about-a-solution/

video
https://youtu.be/rgdtMOI5AKA

\u25A0 Timeline of the video

`0:04` Difficulty of Seat Reservation Manager
`0:52` Two key points to solve Seat Reservation Manager
`3:25` Coding
`5:18` Time Complexity and Space Complexity
