# Three Python 3 solutions, explained

**Author:** epistoteles
**Votes:** 40
**Link:** [https://leetcode.com/problems/logger-rate-limiter/solutions/1535532/](https://leetcode.com/problems/logger-rate-limiter/solutions/1535532/)

---

Unfortunately, most answers to this question are implemented in Java.
This post compares and explains three solutions implemented in Python3.

**Don't run away because of the percentages in the table below!**
**Instead, read the _Takeaway_ section at the end of this post.**

| Method | Runtime | Runtime % | Memory | Memory % |
| ------------- |:------:| :--------:|:------:|---------:|
| Hash map | O(n) | 46.9% | O(n<sub>unique</sub>) | 59.1% |
| Hash map, cleaned up | O(n*m<sub>10</sub>) | 30.1% | O(m<sub>10</sub>) | 24.5% |
| Set + Queue | O(n) | 32.2% | O(m<sub>10</sub>+n<sub>unique</sub>) | 68.4% |

Percentage values are the mean of 5 consecutive submissions.

n<sub>unique</sub> = number of unique messages
m<sub>10</sub> = maximum number of messages in a 10 timestep window

**Solution 1: Hash map, plain and simple**

This solution is dead simple: we create an empty hash map and fill or update it with the times at which a specific message has been last printed. While the lookup time inside our hash map is O(1) (given a reasonable hash function), this solution has a drawback: our hash map can only grow over time, even though most of its entries may have ceased to have any relevance.

```
class Logger:

    def __init__(self):
        self.history = {}  # stores past messages in the form {message: last print timestamp}

    def shouldPrintMessage(self, timestamp: int, message: str) -> bool:
        if message in self.history and timestamp - self.history[message] < 10:  # O(1)
            return False
        else:
            self.history[message] = timestamp  # O(1)
            return True
```

**Solution 2: Hash map, cleaned up**

This incorporates the idea that we can _throw away_ all entries that are older than 10 timesteps, reducing our space complexity. Unfortunately, iterating over the hash map takes O(m<sub>10</sub>) time, where m<sub>10</sub> is the size of the hash map and the maximum number of messages in a 10 timestep window.

While this reduces the space complexity in theory, it does not do so in practice. When calling `list(self.history.items())`, Python creates a shallow copy of the items in the dictionary, i.e. a new list containing references to all keys and values. In the LeetCode test cases, this uses up more space than it saves. The reason for this is that the amount of unique messages is small (I took one for the team and submitted a few false answers to leak some test cases - especially the large test cases seem to contain mostly the messages 'A1' and 'A2', 'A3' and 'A4'). If this is a realistic real-world scenario for logs can be debated.

This solution is __not recommended__, because it makes the code more complicated while resulting in no empirical improvement to our runtime and memory. If given this question in an interview, you may therefore ask: 'How many unique log messages are there?' or 'Is there a finite amount of unique log messages?'.

```
class Logger:

    def __init__(self):
        self.history = {}  # stores past messages in the form {message: last print timestamp}
        self.last_timestamp = 0

    def shouldPrintMessage(self, timestamp: int, message: str) -> bool:
        if timestamp != self.last_timestamp:  # every time we get a new timestamp ...
            for m, t in list(self.history.items()):  # ... purge the old messages, O(m10)
                if t <= timestamp - 10:
                    del self.history[m]
            self.last_timestamp = timestamp
        if message in self.history and timestamp - self.history[message] < 10:  # O(1)
            return False
        else:
            self.history[message] = timestamp  # O(1)
            return True
```

**Solution 2: Set meets queue**

This combination can be found in many other posts as well. It keeps track of the inputs in the order of their arrival (ordered by default). This eliminates the need to iterate over the hash map when deleting old messages, because we already know which keys are to be deleted.

```
class Logger:

    def __init__(self):
        self.history = set()  # set of past messages younger than 10 timesteps
        self.queue = list()  # ordered list of messages younger than 10 timesteps

    def shouldPrintMessage(self, timestamp: int, message: str) -> bool:
        q = self.queue
        h = self.history
        while self.queue and self.queue[0][0] <= timestamp - 10:
            self.history.remove(self.queue[0][1])
            self.queue.pop(0)
        if message in self.history:
            return False
        else:
            self.history.add(message)
            self.queue.append((timestamp, message))
            return True
```

**Takeaway**

You may wonder why the runtimes of all these approaches are so shitty. I do as well.

The submission runtimes of the evaluated implementations had an extremely high variance. Code has been better than 97% of solutions in one run, then only better than 24% of solutions in the next one. I have tried all Python implementations from other posts that boast about achieving runtimes of 98% or higher. All of them failed to do this in 2021. One of them achieved a runtime of 3%. It seems that the runtimes in this challenge are determined more by chance than by skill.

Other posts seem to have strong opinions on which solutions are better. An empirical evaluation shows that there are however only small differences, and most additions to the naive implementation only make the code worse. For this reason, I do not like this problem: it does not incentivize 'better' algorithms, and there are no order-of-magnitude differences between the different solutions.d

I hope you found this post helpful. Please upvote it if you did. If you find any mistakes in this post, please leave a comment and I will try to correct them. If your experience with this problem was as frustrating as mine, let me know in the comments as well.