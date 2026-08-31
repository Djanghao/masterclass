# Ruby solution using comparator

**Author:** divyad25
**Votes:** 5
**Link:** [https://leetcode.com/problems/reorder-data-in-log-files/solutions/440100/](https://leetcode.com/problems/reorder-data-in-log-files/solutions/440100/)

---

```
def reorder_log_files(logs)
  comp = -> (log1, log2) {
    words1, words2 = log1.split(" ", 2) , log2.split(" ", 2)
    compare = words1[1] <=> words2[1]
    compare == 0 ? words1[0] <=> words2[0] : compare
  } 
  letter_logs = []
  digit_logs = []
  logs.each { |log|
    if number?(log.split(" ")[1])
      digit_logs << log
    else
      letter_logs << log
    end
  }
  letter_logs.sort(& comp) + digit_logs
end

def number?(c)
  true if Float c rescue false
end
```