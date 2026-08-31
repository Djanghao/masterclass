# 【Video】Give me 15 minutes - How we can think about a solution - Python, JavaScript, Java, C++

**Author:** niits
**Votes:** 52
**Link:** [https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/4156243/](https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/4156243/)

---

Welcome to my post! This post starts with "How we think about a solution". In other words, that is my thought process to solve the question. This post explains how I get to my solution instead of just posting solution codes or out of blue algorithms. I hope it is helpful for someone.

# Intuition
calculate how many flowers are available in days

---

# Solution Video

I'm sure you understand how to solve this question in 15 minutes by the video.

https://youtu.be/kiIYG6drNZo

\u25A0 Timeline of the video
`0:00` Read the question of Number of Flowers in Full Bloom
`0:35` How we think about a solution
`2:50` Demonstrate solution with an example
`6:09` Find available flowers
`8:36` We don't have to reset the right pointer to 0 or something
`9:32` Coding
`13:31` Time Complexity and Space Complexity

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 2,664
My initial goal is 10,000
Thank you for your support!

---


# Approach

### How we think about a solution

First of all, I try brute force like this.
```
class Solution:
    def fullBloomFlowers(self, flowers: List[List[int]], people: List[int]) -> List[int]:
        hash = {}
        for f in flowers:
            for day in range(f[0], f[1] + 1):
                hash[day] = 1 + hash.get(day, 0)
        
        res = []

        for p in people:
            res.append(hash.get(p, 0))
        
        return res
```
I just keep flower counts in all available days in `hash`, then try to check visit days...but I got memory limit exceeded...lol

That's how I think about $$O(n)$$ space solution.

But I felt like I can solve this question with straightforward solution, because even though the brute force solution didn't pass all test cases, the algorithm works except a memory.

That's why simply, I tried to create a `list` or `hashMap` containing number of new flowers or not available flowers in `start day` and `end day + 1`.

```
flowers = [[1,6],[3,7],[9,12],[4,13]]
people = [2,3,7,11]
```
In the end, I created this `HashMap` from Input above.
```
{1: 1, 7: -1, 3: 1, 8: -1, 9: 1, 13: -1, 4: 1, 14: -1}

key is start day or end day + 1
value is number of new flowers or not available flowers from the day
```
when I added the key and value to `HashMap`, I added `+1 with start day` and `-1 with end day + 1`

---

\u2B50\uFE0F Points

- Why `end day + 1`?
That's because description says end day is inclusive, so number of flowers is changed next day of end day.

- Why `-1 with end day + 1` instead of `+1 with end day + 1`?
Simply from next day of end day, flowers will finish full bloom days, so in the next day, at least one flower is not available. If we have the same end day for multiple flowers, value should be -2 or -3....

---

Next, I took all days regardless of `start days` or `end days + 1` with ascending order.
```
days = [1, 3, 4, 7, 8, 9, 13, 14]
```
We know that number of flowers will be changed in the days. Let's count exact number of flowers in each day. The values are `accumulative number including postive and negative`.

```
{1: 1, 7: -1, 3: 1, 8: -1, 9: 1, 13: -1, 4: 1, 14: -1}

day 1

total flowers are 1 (= 0 + 1)

+1: [1,6] flower starts from day 1
```
```
day 3

total flowers are 2 (= 1 + 1)

1: from day 1
+1: [3,7] flower starts from day 3
```
```
day 4

total flowers are 3 (= 2 + 1)

2: from day 3
+1: [4,13] flower starts from day 4
```
```
day 7

total flowers are 2 (= 3 - 1)

3: from day 4
-1: [1,6] flower finish in day 7
```
```
day 8

total flowers are 1 (= 2 - 1)

2: from day 7
-1: [3,7] flower finish in day 8
```
```
day 9

total flowers are 2 (= 1 + 1)

1: from day 8
+1: [9,12] flower starts from day 9
```
```
day 13

total flowers are 1 (= 2 - 1)

2: from day 9
-1: [9,12] flower finish from day 13
```
```
day 14

total flowers are 0 (= 1 - 1)

1: from day 13
-1: [4,13] flower finish from day 14
```
In the end, we have this `HashMap`
```
flower_count = {1: 1, 7: 2, 3: 2, 8: 1, 9: 2, 13: 1, 4: 3, 14: 0}
```
We can use the same `HashMap` because we iterate through with keys from this `HashMap` when we count exact number of flowers in each day.

At last, we iterate through `people` and get each `visit day`.
```
people = [2,3,7,11]
days = [1, 3, 4, 7, 8, 9, 13, 14]
```
Since days are sorted, we can use binary search to find visit day.

```
visit day: 2
```
There is not a exact day in `days`.

---

\u2B50\uFE0F Points

If you don't find a exact day, use `previous changing day`. when visit day is `2`, use `day 1`, because the flower state remains unchanged until `day 3` from `day 1`.

That's why we try to find index of right position of the exact day.

`days list` doesn't have `day 2`, so binary search should return `index 1`, so that we can access `index 0` easily with `index - 1`

---

Again,
```
people = [2, 3, 7, 11]
days = [1, 3, 4, 7, 8, 9, 13, 14]
flower_count = {1: 1, 7: 2, 3: 2, 8: 1, 9: 2, 13: 1, 4: 3, 14: 0}
```

```
visit day: 2
binary search return 1 (index)
target index = 1 - 1 (index from binary search - 1) 

flower_count[days[0]] = 1
res = [1]
```

```
visit day: 3
binary search return 2 (right position of index 1)
target index = 2 - 1

flower_count[days[1]] = 2
res = [1, 2]
```

```
visit day: 7
binary search return 4 (right position of index 3)
target index = 4 - 1

flower_count[days[3]] = 2
res = [1, 2, 2]
```

```
visit day: 11
binary search return 6
target index = 6 - 1

flower_count[days[5]] = 2
res = [1, 2, 2, 2]
```

```
Output: [1, 2, 2, 2]
```

That is my thought process to solve this question. It's a very straightforward solution.

Yesterday's post was really tough. lol

Let's see real algorithm!

### Algorithm Overview:

This is based on Python code. Other might be different a bit.

1. Initialize a dictionary `flower_count` using `defaultdict` from the collections module to store the count of flowers for each day.
2. Iterate through the `flowers` list and increment the count of flowers for the start day and decrement for the day after the end day in the `flower_count` dictionary.
3. Sort the unique days (start and end days) from the `flower_count` keys and accumulate the flower count efficiently for each day.
4. For each person's time in the `people` list, use binary search (`bisect_right`) to find the index of the closest day in the `days` list and append the accumulated flower count for that day to the answer list.

### Detailed Explanation:

1. Initialize a dictionary `flower_count` using `defaultdict(int)` to store the count of flowers for each day. This dictionary will have keys representing the days and values representing the count of flowers for that day.

2. **Iterate through the `flowers` list:**
   a. For each flower range (start, end), increment the count of flowers for the start day in the `flower_count` dictionary.
   b. Decrement the count of flowers for the day after the end day in the `flower_count` dictionary.

3. Sort the unique days (start and end days) from the `flower_count` keys. This sorted list of days will be stored in the variable `days`.

4. **Accumulate the flower count efficiently for each day:**
   a. Initialize a variable `total_flowers` to keep track of the total flower count.
   b. Iterate through the sorted `days`:
      - Add the count of flowers for the current day to the `total_flowers`.
      - Update the `flower_count` for the current day with the accumulated `total_flowers`.

5. **For each person's time in the `people` list:**
   a. Use binary search (`bisect_right`) on the sorted `days` list to find the index of the closest day that is greater than the person's time.
   b. If the index is 0 (meaning the person's time is before the first day with flowers), append 0 to the answer list.
   c. If the index is not 0, append the accumulated flower count for the day before the found index to the answer list.

6. Return the answer list, which contains the accumulated flower counts for each person's time.


---


# Complexity
- Time complexity: $$O((n + m) log n)$$

We sorted `key` for `flower_count` which is $$O(n * log n)$$.
We iterate through `visit days` and every time we use `binary search` which is $$O(m * log n)$$

So, total time compelxity should be $$O((n + m) log n)$$

- Space complexity: $$O(n)$$

`flower_count` has $$O(2n)$$, because we put all start days and end days to `flower_count`, which is $$O(n)$$

# Python Code

```python []
class Solution:
    def fullBloomFlowers(self, flowers: List[List[int]], people: List[int]) -> List[int]:
        flower_count = defaultdict(int)

        for start, end in flowers:
            flower_count[start] += 1
            flower_count[end + 1] -= 1

        days = sorted(flower_count.keys())
        total_flowers = 0
        for day in days:
            total_flowers += flower_count[day]
            flower_count[day] = total_flowers

        answer = []
        for person_time in people:
            index = bisect_right(days, person_time)
            if index == 0:
                answer.append(0)
            else:
                answer.append(flower_count[days[index - 1]])

        return answer
```
```javascript []
/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    const flower_count = new Map();

    for (const [start, end] of flowers) {
        flower_count.set(start, (flower_count.get(start) || 0) + 1);
        flower_count.set(end + 1, (flower_count.get(end + 1) || 0) - 1);
    }

    const days = Array.from(flower_count.keys()).sort((a, b) => a - b);

    let total_flowers = 0;
    for (const day of days) {
        total_flowers += flower_count.get(day) || 0; // Use 0 if flower count is undefined
        flower_count.set(day, total_flowers);
    }

    const answer = [];
    for (const person_time of people) {
        const index = days.findIndex(day => day > person_time);

        if (index === -1) {
            answer.push(0);
        } else {
            answer.push(flower_count.get(days[index - 1]) || 0); // Use 0 if flower count is undefined
        }
    }

    return answer;       
};
```
```java []
class Solution {
    public int[] fullBloomFlowers(int[][] flowers, int[] people) {
        TreeMap<Integer, Integer> flowerCount = new TreeMap<>();

        for (int[] flower : flowers) {
            flowerCount.put(flower[0], flowerCount.getOrDefault(flower[0], 0) + 1);
            flowerCount.put(flower[1] + 1, flowerCount.getOrDefault(flower[1] + 1, 0) - 1);
        }

        int totalFlowers = 0;

        for (Map.Entry<Integer, Integer> entry : flowerCount.entrySet()) {
            int day = entry.getKey();
            int flowersDelta = entry.getValue();

            totalFlowers += flowersDelta;
            flowerCount.put(day, totalFlowers);
        }

        int[] answer = new int[people.length];
        for (int i = 0; i < people.length; i++) {
            int personTime = people[i];
            Integer floorKey = flowerCount.floorKey(personTime);
            answer[i] = (floorKey != null) ? flowerCount.get(floorKey) : 0;
        }

        return answer;
    }
}

```
```C++ []
class Solution {
public:
    vector<int> fullBloomFlowers(vector<vector<int>>& flowers, vector<int>& people) {
        map<int, int> flowerCount;

        for (const auto& flower : flowers) {
            flowerCount[flower[0]]++;
            flowerCount[flower[1] + 1]--;
        }

        vector<int> days;
        for (const auto& entry : flowerCount) {
            days.push_back(entry.first);
        }
        sort(days.begin(), days.end());

        int totalFlowers = 0;
        for (int day : days) {
            totalFlowers += flowerCount[day];
            flowerCount[day] = totalFlowers;
        }

        vector<int> answer;
        for (int personTime : people) {
            auto it = upper_bound(days.begin(), days.end(), personTime);
            int index = distance(days.begin(), it);
            if (index == 0)
                answer.push_back(0);
            else
                answer.push_back(flowerCount[days[index - 1]]);
        }

        return answer;        
    }
};
```

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u2B50\uFE0F next post for daily coding challenge
https://leetcode.com/problems/find-in-mountain-array/solutions/4159293/video-give-me-10-minutes-how-we-think-about-a-solution-python-javascript-java-c/

\u2B50\uFE0F next daily challenge video

https://youtu.be/09RZINmppQI

\u25A0 Timeline of the video
`0:04` How we think about a solution
`2:45` An important point when you find peak index
`4:47` An important point when you find peak index
`6:13` Coding
`11:45` Time Complexity and Space Complexity

\u2B50\uFE0F previous post for daily coding challenge
https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4152964/video-give-me-15-minutes-how-we-think-about-a-solution/

\u2B50\uFE0F previous daily challenge video

https://youtu.be/9DLAvMurzbU

\u25A0 Timeline of the video
`0:00` Read the question of Minimum Number of Operations to Make Array Continuous
`0:42` How we think about a solution
`4:33` Demonstrate solution with an example
`8:10` Why the window has all valid numbers?
`8:36` We don't have to reset the right pointer to 0 or something
`10:36` Why we need to start window from each number?
`12:24` What if we have duplicate numbers in input array?
`14:50` Coding
`17:11` Time Complexity and Space Complexity

