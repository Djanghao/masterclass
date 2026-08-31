# Python 3 | Brutal Force | Explanation

**Author:** idontknoooo
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-log-storage-system/solutions/851149/](https://leetcode.com/problems/design-log-storage-system/solutions/851149/)

---

### Explanation
- Prettry straightforward question, but make sure you read the question carefully.
- e.g. 
	- As question described, `retrieve("2016:01:01:01:01:01","2017:01:01:23:00:00","Year")` 
	- Need to return every logs happened **in** 2016 and 2017, **NOT between** 2016 and 2017
	- Or in another way return logs between the beginning of 2016 and the end of 2017
	- That is, for any time within `[2016:00:00:00:00:00, 2017:59:59:59:59:59]` inclusive
- Everytime we got a start & end, we modify the start & end time accordingly to the granularity, as explained above
- Then iterate the dictionary to find valid `log_id` with timestamp in that range
### Implementation
```
class LogSystem:
    def __init__(self):
        self.d = collections.defaultdict(int)                                 # {timestamp: log_id}
        self.gra_start = {'Year': 1, 'Month': 2, 'Day': 3, 'Hour': 4, 'Minute': 5, 'Second': 6} # start index for changing granularity

    def put(self, log_id: int, timestamp: str) -> None:
        self.d[timestamp] = log_id                                            # set time: id

    def retrieve(self, s: str, e: str, gra: str) -> List[int]:
        s, e = s.split(':'), e.split(':')                                     # split timestamp for easier update
        for i in range(self.gra_start[gra], 6): s[i], e[i] = '00', '59'       # update start/end timestamp boundary
        s, e = ':'.join(s), ':'.join(e)                                       # re-join to string
        return [log_id for time, log_id in self.d.items() if s <= time <= e]  # O(n) iterative
```
