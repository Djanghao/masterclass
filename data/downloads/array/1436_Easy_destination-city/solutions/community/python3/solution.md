# 【Video】Give me 3 minutes - How we think about a solution

**Author:** niits
**Votes:** 51
**Link:** [https://leetcode.com/problems/destination-city/solutions/4406091/](https://leetcode.com/problems/destination-city/solutions/4406091/)

---

# Intuition
We use subtraction.

---

# Solution Video

https://youtu.be/tjILACCjQI0

\u25A0 Timeline of the video

`0:04` Explain how we can solve this question
`1:29` Coding
`2:40` Time Complexity and Space Complexity
`3:13` Step by step algorithm of my solution code

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,469
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

---

# Approach

## How we think about a solution

We know that we have the same number of start cities and end cities. I thought if I create group of start cities and end cities, we can use subtraction.

```
Input: paths = [["B","C"],["D","B"],["C","A"]]
```

We use `set` to create groups because we can use subtraction with set easily. Start group and end group should be
```
start_cities = {"B", "D", "C"}
```
```
end_cities = {"C", "B", "A"}
```
Then subtract `end` - `start`, which means remove `common cities` in the end group.

```
end_cities - start_cities
= {"C", "B", "A"} - {"B", "D", "C"}
```
We have "C" and "B" in both groups, so in the end, end group should be
```
destination = {"A"}
```
Then just pop from `set`
```
Output: "A"
```
There is not "A" city in start group, so we are sure that "A" is definitely destination city.

Easy! \uD83D\uDE04
Let's see a real algorithm!

I usually write 4 languages Python, JavaScript, Java and C++. But today, I don't have enough time. I want to create a video before I go out. 

If possible, could someone convert this Python code to JavaScript, Java, and C++?


---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        start_cities, end_cities = map(set, zip(*paths))
        destination = (end_cities - start_cities).pop()
        return destination
```

## Step by step algorithm

1. **Create Sets for Start and End Cities:**
   - Use `zip(*paths)` to transpose the matrix of paths, separating the start cities and end cities.
   - Apply `set` to convert each set of cities to unique sets.

    ```python
    start_cities, end_cities = map(set, zip(*paths))
    ```

2. **Find the Destination City:**
   - Use set subtraction (`end_cities - start_cities`) to find the set of cities that are destinations but not starting points.
   - Use `pop()` to retrieve any element from the set (since we expect only one element).

    ```python
    destination = (end_cities - start_cities).pop()
    ```

3. **Return the Result:**
   - Return the found destination city.

    ```python
    return destination
    ```

This code essentially finds the city that is a destination but not a starting point by utilizing sets and set operations. The order of the paths and the uniqueness of cities in sets make it efficient for this specific task.

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/valid-anagram/solutions/4410317/video-give-me-5-minutes-4-solutions-how-we-think-about-a-solution/

video
https://youtu.be/UR9geRGBvhk

\u25A0 Timeline of the video

`0:03` Explain Solution 1
`2:52` Coding of Solution 1
`4:38` Time Complexity and Space Complexity of Solution 1
`5:04` Step by step algorithm of my solution code of Solution 1
`5:11` Explain Solution 2
`8:20` Coding of Solution 2
`10:10` Time Complexity and Space Complexity of Solution 2
`10:21` Step by step algorithm of my solution code of Solution 2
`10:38` Coding of Solution 3
`12:18` Time Complexity and Space Complexity of Solution 3
`13:15` Coding of Solution 4
`13:37` Time Complexity and Space Complexity of Solution 4
`13:52` Step by step algorithm of my solution code of Solution 3

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4401811/video-give-me-5-minutes-how-we-think-about-a-solution/

video
https://youtu.be/swafoNFu99o

\u25A0 Timeline of the video

`0:06` Create number of 1 in each row and column
`1:16` How to calculate numbers at each position 
`4:03` Coding
`6:32` Time Complexity and Space Complexity
`7:02` Explain zip(*grid)
`8:15` Step by step algorithm of my solution code

