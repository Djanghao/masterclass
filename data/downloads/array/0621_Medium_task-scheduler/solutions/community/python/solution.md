# [Python] Very detailed explanation with examples

**Author:** 101leetcode
**Votes:** 108
**Link:** [https://leetcode.com/problems/task-scheduler/solutions/699297/](https://leetcode.com/problems/task-scheduler/solutions/699297/)

---

```
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        ## RC ##
        ## APPROACH : HASHMAP ##
        ## LOGIC : TAKE THE MAXIMUM FREQUENCY ELEMENT AND MAKE THOSE MANY NUMBER OF SLOTS ##
        ##  Slot size = (n+1) if n= 2 => slotsize = 3 Example: {A:5, B:1} => ABxAxxAxxAxxAxx => indices of A = 0,2 and middle there should be n elements, so slot size should be n+1
        
        ## Ex: {A:6,B:4,C:2} n = 2
        ## final o/p will be
        ## slot size / cycle size = 3
        ## Number of rows = number of A's (most freq element)
        # [
        #     [A, B,      C],
        #     [A, B,      C],
        #     [A, B,      idle],
        #     [A, B,      idle],
        #     [A, idle,   idle],
        #     [A   -        - ],
        # ]
        #
        # so from above total time intervals = (max_freq_element - 1) * (n + 1) + (all elements with max freq)
                                     # ans   =     rows_except_last   * columns +        last_row
            
            
        ## but consider {A:5, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1} n = 1
        ## total time intervals by above formula will be 4 * 2 + 1 = 9, which is less than number of elements, which is not possible. so we have to return max(ans, number of tasks)
        
        
		## TIME COMPLEXITY : O(N) ##
		## SPACE COMPLEXITY : O(1) ##

        freq = collections.Counter(tasks)
        max_freq = max(freq.values())
        freq = list(freq.values())
        max_freq_ele_count = 0                 # total_elements_with_max_freq, last row elements
        i = 0
        while( i < len(freq)):
            if freq[i] == max_freq:
                max_freq_ele_count += 1
            i += 1
            
        ans = (max_freq - 1) * (n+1) + max_freq_ele_count
        
        return max(ans, len(tasks))
```
PLEASE UPVOTE IF YOU LIKE MY SOLUTION