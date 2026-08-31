# Python, C++ | Short and Clean Simulation

**Author:** nika-skybytska
**Votes:** 11
**Link:** [https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/3047307/](https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/3047307/)

---

# Intuition

Simulation with two queues and more than two hacks ;-]

# Approach

Hacks used to shorten the code (and hopefully make it more readable too):

- Keep track of the direction currently having priority with a binary flag. Change it with `direction ^= 1`.

- Use it to index your queues: `queues[direction]` refers to the queue of people currently having priority.

- Make a function to exhaust the queues (idea from [@Ante_](https://leetcode.com/problems/time-taken-to-cross-the-door/solutions/3047248/python-simulation-with-2-queues/)) to avoid code duplication.

# Complexity

- Time complexity: $$O(n)$$.

- Space complexity: $$O(n)$$.

# Python

```python
import collections


class Solution:
    def timeTaken(self, arrivals: list[int], states: list[int]) -> list[int]:
        n = len(arrivals)
        answer = [0] * n

        time, direction = 0, 1
        queues = [collections.deque(), collections.deque()]

        def exhaust_until(end_time: int=2*10**5) -> None:
            nonlocal time, direction
            while end_time > time and any(queues):
                if not queues[direction]:
                    direction ^= 1
                answer[queues[direction].popleft()] = time
                time += 1

        for index, (arrival, state) in enumerate(zip(arrivals, states)):
            exhaust_until(arrival)
            if arrival > time:
                time, direction = arrival, 1
            queues[state].append(index)

        exhaust_until()
        return answer
```

# C++
```c++
class Solution {
public:
    vector<int> timeTaken(vector<int>& arrivals, vector<int>& states) {
        const int n = arrivals.size();
        vector<int> answer(n);

        int time = 0, direction = 1;
        array<deque<int>, 2> queues;

        auto exhaust_until = [&] (int end_time) {
            while (end_time > time && (!queues[0].empty() || !queues[1].empty())) {
                if (queues[direction].empty()) {
                    direction ^= 1;
                }
                answer[queues[direction].front()] = time;
                queues[direction].pop_front();
                ++time;
            };
        };

        for (int i = 0; i < n; ++i) {
            const auto arrival = arrivals[i], state = states[i];
            exhaust_until(arrival);

            if (arrival > time) {
                time = arrival, direction = 1;
            }
            queues[state].push_back(i);
        };

        exhaust_until(200'000);
        return answer;
    }
};
```