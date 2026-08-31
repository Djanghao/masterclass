# Python 3 | Math, Bit-masking, Quick and Clean | Explanation

**Author:** idontknoooo
**Votes:** 19
**Link:** [https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/solutions/1725206/](https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/solutions/1725206/)

---

### Explanation
- The data scale for this question is very small (maximum `10` points, range in `[-100, 100]`)
- By basic Math, we all know `Two points define a line`. This tells us:
	- If there are `n` points, the maximum number of lines we need will be 
		- `math.ceil(n / 2)`
	- If we use `k` line to cover `m` points, then the maximum number of lines we need now will be 
		- `k + math.ceil((n-m)/2)`
	- Whenever there is a line that covers more than 2 points, it will be very useful
	- A line can be defined as `y = a*x + b`
- With above intuition, we will then
	- Calculate `a` and `b` in formula `y = a*x + b`, given two points `(x1, y1)` and `(x2, y2)`
		- `a = (y2-y1) / (x2-x1)`
		- `b = y1 - a * x1`
		- If `x1 == x2`, just set `a = x1, b = sys.maxsize` meaning these two points are on the same vertical line
			- The representation is not Mathmatically correct. It just a unique way to represent vertical lines here.
	- Gathering all lines that covers more than 2 points, save in `lines`
		- Given `10` points, the maximum number of lines that cover more than 2 points will be `9`, as shown below
			```
			xxx
			xxx
			xxxx
			```
		- This will lead to a mask size of `2 ** 9 == 512`, which is still pretty small scale
	- Use bitmasking to try out all possible combinations on `lines`
	- Meanwhile, calculate the minimum number of lines needed to cover all points
### Implementation
```
class Solution:
    def minimumLines(self, points: List[List[int]]) -> int:
        n, line_points = len(points), collections.defaultdict(set)               
        for i in range(n):                                                        # calculate `line_points`
            x1, y1 = points[i]
            for j in range(i+1, n):
                x2, y2 = points[j]
                if x1 == x2:                                                      # handle divided by zero case
                    a, b = x1, sys.maxsize                                        # for `b`, you can use any number not in range of [-100, 100]
                else:
                    a = (y2 - y1) / (x2 - x1)
                    b = y1 - a * x1
                line_points[(a, b)].add((x1, y1))
                line_points[(a, b)].add((x2, y2))
        lines = [line for line, points in line_points.items() if len(points) > 2] # filtering out lines that cover more than 3 points
        ans, m = math.ceil(n / 2), len(lines)                                     # based on Math, set default value for ans
        for i in range(1, 2**m):                                                  # bitmasking on `lines` (try out all combinations)
            j, cnt = 0, bin(i).count('1')                                         # cnt = number of line used for current masking
            cur_points = set()                                                    # current points covered on selected lines
            while i > 0:
                if i % 2:
                    cur_points |= line_points[lines[m-1-j]]                       # set union operaion on '1' bits
                i >>= 1                        
                j += 1
            ans = min(ans, cnt + math.ceil( (n-len(cur_points))/2 ))              # check if current masking is better
        return ans
```