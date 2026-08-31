# [Python] Very well explained Detailed solution with examples

**Author:** 101leetcode
**Votes:** 8
**Link:** [https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/699299/](https://leetcode.com/problems/rearrange-string-k-distance-apart/solutions/699299/)

---

```
class Solution:
    def rearrangeString(self, s: str, k: int) -> str:
        ## RC ##
        ## APPROACH : GREEDY ##
        ## Similar to Leetcode: 621. Task Scheduler ##
        ## LOGIC ##
        """
         1. go through Task Scheduler problem first, https://leetcode.com/problems/task-scheduler/discuss/699297/Python-Very-detailed-explanation-with-examples
         2. Here the number of slots will be, Maximum freq number. ( consider a:4, b:4, c:4, d:2 )
         3. WATCH OUT, lets say for now there is no K given, fill all the slots. (Intially I was limiting my slot size to only k, question says minimum distance should be k, it doesn't matter if it is greater than k )
         4. a b c d
            a b c d
            a b c _
            a b c _
         5. another case: a:6, b:2, c:2 ( rearrange not possible )
            a b
            a b
            a c
            a c
            a 
            a
         After filling the slots when you try to join them, slot5 and slot6 are not k-distant apart, so we return false.
         6. But edge case comes : a:3, b:2, c:1, e:1
            a b e
            a b 
            a c
            This is wrong combination.
        If you carefully analyze, we donot actually care about last row if it has k characters or not. so we fill only till maxFreq - 1
            correct combination:
            a b c
            a b e
            a
         
         Time Complexicity : O(N) + O(26Log26) (sort)
        """
        
        counter = collections.Counter(s)
        items = sorted( [ (freq, ch) for ch,freq in counter.items() ] )
        maxFreq = items[-1][0]
        slots = [ "" for _ in range(maxFreq) ]
        
        slot = 0
        while( items ):
            freq, ch = items.pop()
            if( freq == maxFreq ):
                for i in range(maxFreq):
                    slots[i] = slots[i] + ch
            else:
                while( freq ):
                    slot = slot % (maxFreq-1)
                    slots[ slot ] = slots[ slot ] + ch
                    freq -= 1
                    slot += 1
        for i in range(maxFreq-1):  # up until last slot
            if len(slots[i]) < k:
                return ""
        return "".join(slots)
```