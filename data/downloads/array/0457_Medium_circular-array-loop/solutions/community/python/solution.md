# Python: Fast-Slow pointers - O(n) time + O(1) space

**Author:** tea_for_two
**Votes:** 26
**Link:** [https://leetcode.com/problems/circular-array-loop/solutions/784810/](https://leetcode.com/problems/circular-array-loop/solutions/784810/)

---

Hello,

Here is my solution.

Intuition:
* Scan all cells of the list
* For each cell `i`, 
	* Use `Fast-Slow Pointers` to check if there is a cycle starting from `i`
	* If there is no cycle from cell `i`, mark visited (nums[j] = 0) all cells that belong to the path starting from cell `i`

Complexity Analysis:
* Time Complexity: O(|nums|):
	* Each cell is visited at most twice
	* The 1st. visit is while we're checking if there is a cycle
	* The 2nd. visit is when we mark `visited` cells that do no belong to a cycle
            
* Space Complexity: O(1)

```python
def __init__(self):
        self.__visited = lambda x: not x # a cell i is visited when nums[i] = 0

def circularArrayLoop(self, nums: List[int]) -> bool:
        
        for i in range(len(nums)):
            if self.__visited(nums[i]):
                continue
            
            direction = nums[i] > 0
            
            # 1. Check if there is a cycle starting from i
            slow = fast = i
            while not (self.__visited(nums[slow]) or self.__visited(nums[fast])):
                
                slow = self.__next(nums, slow, direction)
                fast = self.__next(nums, self.__next(nums, fast, direction), direction)
                
                if slow == -1 or fast == -1:
                    break
                
                elif slow == fast:
                    return True
            
            # 2. Mark visited all cells that belong to the path starting from i
            slow = i
            while self.__next(nums, slow, direction) != -1:
                nums[slow], slow = 0, self.__next(nums, slow, direction)
            
        return False
        
    def __next(self, nums, idx, direction):
        if idx == -1: # To handle the case of next(next(fast)) = next(-1) = -1
            return -1
                
        elif (nums[idx] > 0) != direction: # check the direction
            return -1
        
        next_idx = (idx + nums[idx]) % len(nums)
        if next_idx < 0:
            next_idx += len(nums)
        
        return -1 if next_idx == idx else next_idx
    			
```