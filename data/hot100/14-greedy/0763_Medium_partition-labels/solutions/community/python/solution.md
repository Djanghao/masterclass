# Python easy two pass with explanation. O(N) time O(1) space

**Author:** bindloss
**Votes:** 59
**Link:** [https://leetcode.com/problems/partition-labels/solutions/390697/](https://leetcode.com/problems/partition-labels/solutions/390697/)

---


Store the last seen index in the first pass. In the second pass, lookup the last seen for each character as we encounter them and keep track of the maximum last seen value so far. Whenever we reach an index that equals the maximum last seen so far, we start a new partition.
```
class Solution(object):
    def partitionLabels(self, S):
        result, last_seen, max_last_seen, count = [], {}, 0, 0
        for i, char in enumerate(S):
            last_seen[char] = i
        for i, char in enumerate(S):
            max_last_seen = max(max_last_seen, last_seen[char])
            count += 1
            if i == max_last_seen:
                result.append(count)
                count = 0
        return result
```