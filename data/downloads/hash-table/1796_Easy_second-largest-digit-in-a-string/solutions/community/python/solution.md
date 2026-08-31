# Clean python with comments

**Author:** it_bilim
**Votes:** 16
**Link:** [https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/1118787/](https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/1118787/)

---

```
def secondHighest(self, s):
        t = set()  # create set to store unique digits
        for i in s:
            if '0'<=i<='9':
                t.add(int(i))  # add digit to the set
        if len(t)>1:
            return sorted(list(t))[-2] #  sort and return second largest one if number of elements are more than 1 
        return -1     # otherwise return -1
```