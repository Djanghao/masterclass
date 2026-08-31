# Fastest (100%) || Easiest || Shortest || Binary Search || Multiple Langs

**Author:** gameboey
**Votes:** 126
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/5149850/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/5149850/)

---



# Approach
Picture this: You're exploring a treasure-filled island, but the path to the treasure is tricky\u2014it's like a maze. Now, this approach is like having a smart compass that helps you navigate through the maze efficiently.

Here's how Franky (from OnePiece) would break it down:

1. **Setting sail**: You start with two markers, one at the beginning of the path (let's call it "left") and one at the end (that's "right"). These markers help you keep track of where you are.

2. **Sailing through the maze**: You sail through the maze using a special technique called "binary search". It's like cutting the maze in half each time to find the quickest route to the treasure.

3. **Calculating the midpoint**: At each intersection, you calculate the midpoint to decide which direction to go next.

4. **Reading the signs**: Now, here's the trick\u2014when you reach an intersection, you check the signs. If the sign at the midpoint points toa smaller number than the one at the end of the path, you know the treasure is in the left half. So, you adjust your right marker to the midpoint.

5. **Deciding the route**: But if the sign at the midpoint suggests the number is larger than the one at the end of the path, it means the treasure is likely in the right half. So, you move your left marker to just after the midpoint.

6. **Narrowing down**: You keep repeating this process, narrowing down your search until your markers converge.

7. **Treasure found!**: When your markers meet, it means you've found the smallest number, which is like discovering the treasure in the maze. That's the number you return\u2014it's the minimum value in the rotated array.

So, with this clever compass-like approach, you efficiently navigate through the maze of numbers and find your treasure in no time! That's the spirit of adventure, just like sailing with the Straw Hat Pirates!


# Dry - Run
Let's dry run the provided solution with the example `nums = [4,5,6,7,0,1,2]`:

Initial state:
- `left = 0`, `right = 6`.
- `mid = 3`, `nums[mid] = 7`, `nums[right] = 2`.

Since `nums[mid] >= nums[right]`, we update `left = mid + 1 = 4`.

After the first iteration:
- `left = 4`, `right = 6`.
- `mid = 5`, `nums[mid] = 1`, `nums[right] = 2`.

Since `nums[mid] < nums[right]`, we update `right = mid = 5`.

After the second iteration:
- `left = 4`, `right = 5`.
- `mid = 4`, `nums[mid] = 0`, `nums[right] = 1`.

Since `nums[mid] < nums[right]`, we update `right = mid = 4`.

After the third iteration:
- `left = 4`, `right = 4`.

The loop stops as `left` is no longer less than `right`, and the algorithm returns `nums[left]`, which is `0`.

So, for the input `nums = [4,5,6,7,0,1,2]`, the output of the algorithm is `0`, which is correct. 

# Complexity
- Time complexity: O(logn)

- Space complexity: O(1)

# Code
```C++ []
#pragma GCC optimize ("Ofast")
#pragma GCC target ("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx")
#pragma GCC optimize ("-ffloat-store")

class Solution {
public:
    int findMin(vector<int>& nums) {
        ios_base::sync_with_stdio(0), cin.tie(0), cout.tie(0);
        int left = 0, right = nums.size() - 1;

        while(left < right) {
            int mid = left + (right - left) / 2;
            if(nums[mid] < nums[right]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return nums[left];
    }
};
```
```java []
class Solution {
    public int findMin(int[] nums) {
        int left = 0, right = nums.length - 1;
        while(left < right) {
            int mid = left + (right - left) / 2;

            if(nums[mid] < nums[right]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return nums[left];
    }
}
```
```python []
class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = left + (right - left) // 2
            if nums[mid] < nums[right]:
                right = mid
            else:
                left = mid + 1
                
        return nums[left]
```
```C []
int findMin(int* nums, int numsSize) {
    int left = 0, right = numsSize - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return nums[left];
}
```
```C# []
public class Solution {
    public int FindMin(int[] nums) {
        int left = 0, right = nums.Length - 1;
        while (left <right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] < nums[right]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return nums[left];
    }
}
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        
        if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return nums[left];
};
```
```Kotlin []
class Solution {
    fun findMin(nums: IntArray): Int {
        var left = 0
        var right = nums.size - 1
        while (left < right) {
            val mid = left + (right - left) / 2
            if (nums[mid] < nums[right]) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        
        return nums[left]
    }
}
```

## **"Ahoy there, navigator! We're diving into a sea of numbers, searching for the tiniest treasure in this digital jungle. But fear not, 'cause with this Super-duper binary search trick, we're slicing through those digits like a hot knife through butter! Who needs a compass when you've got code? Let's navigate these waters and uncover that hidden gem, Super-style!"** \uD83C\uDFF4\u200D\u2620\uFE0F

![franky.jpg](./images/0.jpeg)
