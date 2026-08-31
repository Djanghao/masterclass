# Beat 100% || # Pivot Integer Finder

**Author:** CS_MONKS
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-the-pivot-integer/solutions/4867096/](https://leetcode.com/problems/find-the-pivot-integer/solutions/4867096/)

---


Intuition
To find the pivot integer, we need to determine the point where the sum of integers on one side is equal to the sum on the other side.

Approach
Start from the maximum possible integer n and decrement while updating the sums on each side. When they are equal, we've found the pivot.

Complexity
Time complexity:O(n)
Space complexity: O(1)
# Code
``` c++ []
class Solution {
public:
    int pivotInteger(int n) {
      int ls=(n*(n+1))/2,rs=0;

      while(ls>rs){
        rs+=n;
        if(rs==ls)return n;
        ls-=n;
        n--;
      }
      return -1;

    }
};
```
```javascript []
class Solution {
    pivotInteger(n) {
        let leftSum = (n * (n + 1)) / 2;
        let rightSum = 0;

        while (leftSum > rightSum) {
            rightSum += n;
            if (rightSum === leftSum) return n;
            leftSum -= n;
            n--;
        }
        return -1;
    }
}

```
```python3 []
class Solution:
    def pivotInteger(self, n: int) -> int:
        left_sum = (n * (n + 1)) // 2
        right_sum = 0

        while left_sum > right_sum:
            right_sum += n
            if right_sum == left_sum:
                return n
            left_sum -= n
            n -= 1

        return -1

```
```c []
#include <stdio.h>

int pivotInteger(int n) {
    int leftSum = (n * (n + 1)) / 2;
    int rightSum = 0;

    while (leftSum > rightSum) {
        rightSum += n;
        if (rightSum == leftSum) return n;
        leftSum -= n;
        n--;
    }
    return -1;
}

```
```ruby []
class Solution
  def pivot_integer(n)
    left_sum = (n * (n + 1)) / 2
    right_sum = 0

    while left_sum > right_sum
      right_sum += n
      return n if right_sum == left_sum
      left_sum -= n
      n -= 1
    end

    -1
  end
end

```
```c# []
public class Solution {
    public int PivotInteger(int n) {
        int ls = (n * (n + 1)) / 2;
        int rs = 0;

        while (ls > rs) {
            rs += n;
            if (rs == ls) return n;
            ls -= n;
            n--;
        }

        return -1;
    }
}
```
