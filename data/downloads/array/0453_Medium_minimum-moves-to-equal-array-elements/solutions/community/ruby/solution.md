# [JS/Ruby/C#/Java] - Math Solution O(n) / O(1)

**Author:** spacepumpkin
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/1133708/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/1133708/)

---

**Solution Complexity**: 
- **time**: **O(n)** to find sum and minimum
- **space**: **O(1)** without extra space
	where n = length of nums

**Explanation**:
- **typical brute force approach** O(n^2) | O(1):
	- find the maximum element for each iteration and hold it while incrementing the rest
	- keep iterating until all elements are the same value
- **improved math/reverse approach** O(n) | O(1):
	- if we think of it the other way around, incrementing n-1 elements other than nums[i] is effectively the same as decrementing nums[i] to make all elements equal
	- thus, the number of moves to increment n-1 elements is the same as the number of moves to decrement each element to get to the minimum
	- I like to think of each element as a tower of blocks -- **how many blocks do we have to remove so that all towers are at the minimum tower height?**
```markdown
ex. for [1, 2, 4], we have:

      [x]
      [x]
   [x][x]
[ ][ ][ ]  -- remove 4 blocks (x) --> [ ][ ][ ]
```
so, based on this way of thinking, the formula is: 
`number of blocks removed = (sum of all 'blocks') - (number of towers * minimum tower height)`

(in our example, total # blocks = 7, number of towers = 3, & minimum tower height = 1)
##### JS
```javascript
function minMoves(nums) {
  let sum = nums[0];
  let min = nums[0];

  // find the total # of blocks and min tower height
  for (let i = 1; i < nums.length; i++) { 
    if (nums[i] < min) min = nums[i];
    sum += nums[i];
  }
   // # blocks removed = total # blocks - (# towers * min height)
  return sum - (nums.length * min);
};
```
##### Ruby
```ruby
def min_moves(nums)
  # blocks removed = total # blocks - (# towers * min height)
  nums.sum - (nums.length * nums.min)
end
```
##### C#
```csharp
public class Solution
{
  public int MinMoves(int[] nums)
  {
	  // # blocks removed = total # blocks - (# towers * min height)
	  return nums.Sum() - (nums.Length * nums.Min()); 
  }
}
```
##### Java
```java
class Solution {
    public int minMoves(int[] nums) {
        int sum = nums[0];
        int min = nums[0];
		
        // find the total # of blocks and min tower height
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] < min) min = nums[i];
            sum += nums[i];
        }
		// # blocks removed = total # blocks - (# towers * min height)
        return sum - (nums.length * min); 
    }
}
```