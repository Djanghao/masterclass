# Python solution with comments

**Author:** wangruiqi498
**Votes:** 10
**Link:** [https://leetcode.com/problems/design-log-storage-system/solutions/324253/](https://leetcode.com/problems/design-log-storage-system/solutions/324253/)

---

```
class LogSystem(object):

    def __init__(self):
        self.log = {} # Define a dictionary to store all log information

    def put(self, id, timestamp):
        """
        :type id: int
        :type timestamp: str
        :rtype: None
        """
        
        # Add the id and timestamp into the dictionary, split the timestamp base on granularity
        self.log[id] = timestamp.split(":") 

    def retrieve(self, s, e, gra):
        """
        :type s: str
        :type e: str
        :type gra: str
        :rtype: List[int]
        """
        output = []
        
        # Split the start and end time strings
        start_string = s.split(":")
        end_string = e.split(":")
        
        # Create a granularity dictionary to store time-based index
        granularity = {"Year":0, "Month":1, "Day":2, "Hour":3, "Minute":4, "Second":5}
        
        # Convert the time string into a integer for comparison
        start_time = int(''.join(start_string[:granularity[gra]+1]))
        end_time = int(''.join(end_string[:granularity[gra]+1]))
        
        # For each log in storage, check whether it is within the time range
        for k, v in self.log.items():
            if int(''.join(v[:granularity[gra]+1]))>=start_time and int(''.join(v[:granularity[gra]+1]))<=end_time:
                output.append(k)

        return output
```