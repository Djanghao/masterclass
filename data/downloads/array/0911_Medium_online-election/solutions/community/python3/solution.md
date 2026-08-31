# Python3 solution beats 91.11% 🚀 || quibler7

**Author:** quibler7
**Votes:** 2
**Link:** [https://leetcode.com/problems/online-election/solutions/3526018/](https://leetcode.com/problems/online-election/solutions/3526018/)

---



# Code
```
class TopVotedCandidate:

    def __init__(self, persons: List[int], times: List[int]):
        self.persons = []
        self.times = []
        self.dic = collections.defaultdict(int)
        self.m = 0
        self.idx = -1

        for i in range(len(times)):
            self.times.append(times[i])
            self.dic[persons[i]] += 1
            if self.dic[persons[i]] >= self.m:
                self.persons.append(persons[i])
                self.m = self.dic[persons[i]]
            else:
                self.persons.append(self.persons[-1])

    def q(self, t: int) -> int:
        idx = bisect.bisect_right(self.times,t)
        return self.persons[idx-1]

```