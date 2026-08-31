# 【Video】Give me 5 minutes - O(n) time and space - How we think about a solution

**Author:** niits
**Votes:** 99
**Link:** [https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4271506/](https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/solutions/4271506/)

---

# Intuition
Try to find numbers that have only one adjacent number.

---

# Solution Video

https://youtu.be/P14SbuALeJ8

\u25A0 Timeline of the video

`0:04` A key point to solve this question
`1:09` How do you know adjacent number of each number?
`2:33` Demonstrate how it works
`6:07` Coding
`9:07` Time Complexity and Space Complexity

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,021
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

**My channel reached 3,000 subscribers yesterday. Thank you so much for your support!**

---

# Approach

## How we think about a solution

Look at this.
```
[1,2,3,4]
```

Simply, edge of numbers(= `1`,`4`) have one adjacent number and inside of the array(= `2`,`3`) have two adjacent numbers.

So, the numbers that have one adjacent number should be start number or end number. But we don't have care about start number or end number because the description says "If there are multiple solutions, return any of them". That means we can return `[1,2,3,4]` or `[4,3,2,1]`.

---

\u2B50\uFE0F Points

Try to find numbers that have only one adjacent number. The numbers should be start number or end number. We can start from one of them.

---

- How do you know adjacent number of each number?

The next question is how you know adjacent number of each number.

My answer is simply to create adjacent candidate list.

```
Input: adjacentPairs = [[2,1],[3,4],[3,2]]
```
From the input, we can create this. We use `HashMap`. In solution code `graph`.

```
{2: [1, 3], 1: [2], 3: [4, 2], 4: [3]}

2: [1, 3]
\u2192 1 from [2:1], 3 from [3,2]

1: [2]
\u2192 2 from [2,1]

3: [4, 2]
\u2192 4 from [3,4], 2 from [3,2]

4: [3]
\u2192 3 from [3,4]

values are adjacent candidate numbers of the key number
```

What are the numbers that have only one adjacent number? The answer is `1` or `4`. We can take one of them. I start with `1`.

```
res = [1, 2]
```
We know that `2` is adjacent number of `1`, so add `2` to `res` after `1`.

Then we check candidates of the last number which is `2` in this case.

```
{2: [1, 3], 1: [2], 3: [4, 2], 4: [3]}
```
The candidates are `1` or `3`. It's obvious that `3` is the next adjacent number right?

In solution code, we can compare like if candidate number is not `1`, that is the next number because `1` is left adjacent number of `2`. Now we are tyring to find right adjacent number of `2`. That's why before we compare the numbers, we take the last two numbers of `res`, so that we can compare them easily.

Let's see how it works!

```
{2: [1, 3], 1: [2], 3: [4, 2], 4: [3]}
res = [1, 2]

last = 2
prev = 1

Check last values
candidates = [1, 3] (from 2: [1, 3])

compare candidates[0] != prev
true \u2192 the next number is candidates[0](= 1)
false \u2192 the next number is candidates[1](= 3)

In this case, it's false. so add 3 to res

In the end, res = [1, 2, 3]
```
Let's go next. Take the last two numbers from `res`.
```
{2: [1, 3], 1: [2], 3: [4, 2], 4: [3]}
res = [1, 2, 3]

last = 3
prev = 2

Check last values
candidates = [4, 2] (from 3: [4, 2])

compare candidates[0] != prev
true \u2192 the next number is candidates[0](= 4)
false \u2192 the next number is candidates[1](= 2)

In this case, it's true. so add 4 to res

res = [1, 2, 3, 4]
```
Then we stop.

```
Output: [1, 2, 3, 4]
```

Easy\uFF01\uD83D\uDE06
Let's see a real algorithm!

I added comments in Python code. I hope it helps you understand solution code.

---



### Algorithm Overview:

The algorithm aims to restore an array given a list of adjacent pairs. It uses a graph representation to model the adjacent relationships and then iteratively builds the array.

### Detailed Explanation:

1. **Create a Graph:**
   - Initialize an empty graph using a `defaultdict` to represent adjacent pairs. Iterate through the given pairs, and for each pair `[u, v]`, add `v` to the list of neighbors of `u` and vice versa.

   ```python
   graph = defaultdict(list)
   for u, v in pairs:
       graph[u].append(v)
       graph[v].append(u)
   ```

2. **Initialize Result List:**
   - Initialize an empty list `res` to store the elements of the restored array.

   ```python
   res = []
   ```

3. **Find Starting Node:**
   - Iterate through the nodes in the graph and find the starting node with only one neighbor. Set `res` to contain this starting node and its neighbor.

   ```python
   for node, neighbors in graph.items():
       if len(neighbors) == 1:
           res = [node, neighbors[0]]
           break
   ```

4. **Build the Array:**
   - Use a `while` loop to continue building the array until its length matches the number of pairs plus one.

   ```python
   while len(res) < len(pairs) + 1:
       last, prev = res[-1], res[-2]  # Get the last two elements in the result array
       candidates = graph[last]       # Find the candidates for the next element
       next_element = candidates[0] if candidates[0] != prev else candidates[1]  # Choose the candidate that is not the previous element
       res.append(next_element)      # Append the next element to the result array
   ```

5. **Return Result:**
   - Return the final restored array.

   ```python
   return res
   ```

In summary, the algorithm builds the array by selecting adjacent elements based on the graph representation until the array is fully restored. The starting point is identified by finding a node with only one neighbor. The process continues until the array's length matches the number of pairs.

# Complexity
- Time complexity: $$O(n)$$
`n` is the number of pairs.

- Space complexity: $$O(n)$$
`n` is the number of pairs.

```python []
class Solution:
    def restoreArray(self, pairs: List[List[int]]) -> List[int]:
        # Create a graph to represent adjacent pairs
        graph = defaultdict(list)
        for u, v in pairs:
            graph[u].append(v)
            graph[v].append(u)

        # Initialize the result list
        res = []

        # Find the starting node with only one neighbor
        for node, neighbors in graph.items():
            if len(neighbors) == 1:
                res = [node, neighbors[0]]
                break

        # Continue building the array until its length matches the number of pairs
        while len(res) < len(pairs) + 1:
            # Get the last two elements in the result array
            last, prev = res[-1], res[-2]

            # Find the candidates for the next element
            candidates = graph[last]

            # Choose the candidate that is not the previous element
            next_element = candidates[0] if candidates[0] != prev else candidates[1]

            # Append the next element to the result array
            res.append(next_element)

        return res
```
```javascript []
/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    const graph = new Map();

    for (const [u, v] of adjacentPairs) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    let result = [];

    for (const [node, neighbors] of graph.entries()) {
        if (neighbors.length === 1) {
            result = [node, neighbors[0]];
            break;
        }
    }

    while (result.length < adjacentPairs.length + 1) {
        const [last, prev] = [result[result.length - 1], result[result.length - 2]];
        const candidates = graph.get(last);
        const nextElement = candidates[0] !== prev ? candidates[0] : candidates[1];
        result.push(nextElement);
    }

    return result;    
};
```
```java []
class Solution {
    public int[] restoreArray(int[][] adjacentPairs) {
        Map<Integer, List<Integer>> graph = new HashMap<>();

        for (int[] pair : adjacentPairs) {
            graph.computeIfAbsent(pair[0], k -> new ArrayList<>()).add(pair[1]);
            graph.computeIfAbsent(pair[1], k -> new ArrayList<>()).add(pair[0]);
        }

        List<Integer> result = new ArrayList<>();

        for (Map.Entry<Integer, List<Integer>> entry : graph.entrySet()) {
            if (entry.getValue().size() == 1) {
                result.add(entry.getKey());
                result.add(entry.getValue().get(0));
                break;
            }
        }

        while (result.size() < adjacentPairs.length + 1) {
            int last = result.get(result.size() - 1);
            int prev = result.get(result.size() - 2);
            List<Integer> candidates = graph.get(last);
            int nextElement = candidates.get(0) != prev ? candidates.get(0) : candidates.get(1);
            result.add(nextElement);
        }

        return result.stream().mapToInt(Integer::intValue).toArray();        
    }
}
```
```C++ []
class Solution {
public:
    vector<int> restoreArray(vector<vector<int>>& adjacentPairs) {
        unordered_map<int, vector<int>> graph;

        for (const auto& pair : adjacentPairs) {
            graph[pair[0]].push_back(pair[1]);
            graph[pair[1]].push_back(pair[0]);
        }

        vector<int> result;

        for (const auto& entry : graph) {
            if (entry.second.size() == 1) {
                result = {entry.first, entry.second[0]};
                break;
            }
        }

        while (result.size() < adjacentPairs.size() + 1) {
            int last = result[result.size() - 1];
            int prev = result[result.size() - 2];
            const vector<int>& candidates = graph[last];
            int nextElement = (candidates[0] != prev) ? candidates[0] : candidates[1];
            result.push_back(nextElement);
        }

        return result;        
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
https://leetcode.com/problems/design-graph-with-shortest-path-calculator/solutions/4276911/video-give-me-10-minutes-how-we-think-about-a-solution/

video
https://youtu.be/llptwOvEstY

\u25A0 Timeline of the video

`0:05` Explain constructor and addEdge function
`1:31` Explain shortestPath
`3:29` Demonstrate how it works
`11:47` Coding
`17:17` Time Complexity and Space Complexity

### My previous daily coding challenge post and video.

\u2B50\uFE0F **Including all posts from yesterday, my post reached the top spot for the first time!**

post
https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4266765/video-give-me-5-minutes-on-time-o1-space-how-we-think-about-a-solution/

video
https://youtu.be/VcZrmO045Bo

\u25A0 Timeline of the video

`0:04` Let's find a solution pattern
`1:38` A key point to solve Count Number of Homogenous Substrings
`2:20` Demonstrate how it works with all the same characters
`4:55` What if we find different characters
`7:13` Coding
`8:21` Time Complexity and Space Complexity