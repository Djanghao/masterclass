# Python | Precompute + Binary Search

**Author:** sr_vrd
**Votes:** 4
**Link:** [https://leetcode.com/problems/online-election/solutions/2036847/](https://leetcode.com/problems/online-election/solutions/2036847/)

---

* For `__init__` we precompute the top voted person for each `time` in `times` in an ordered list `topVoted`.
* For `q` we use Binary Search in `topVoted` (recycling code from <a href="https://leetcode.com/problems/search-insert-position/">35. Search Insert Position</a>) to find the top voted person at time `t`.

```
class TopVotedCandidate:
    
    def __init__(self, persons: List[int], times: List[int]):
        self.topVoted = [0] * len(times)
        countVotes = Counter()
        currentTop = persons[0]
        
        for i, (person, time) in enumerate(zip(persons, times)):
            countVotes[person] += 1
            if countVotes[person] >= countVotes[currentTop]:
                currentTop = person
            self.topVoted[i] = (time, currentTop)

    def q(self, t: int) -> int:
        left, right = 0, len(self.topVoted) - 1
        
        while left <= right:
            mid = (left + right) // 2
            time, top = self.topVoted[mid]
            if time == t:
                return top
            if time < t:
                left = mid + 1
            else:
                right = mid - 1

        time, top = self.topVoted[right]
        return top
```