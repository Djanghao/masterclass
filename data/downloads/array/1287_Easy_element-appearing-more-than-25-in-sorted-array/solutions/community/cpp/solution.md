# ✅ Beats 100% - Explained with [ Video ]- C++/Java/Python/JS  - Single Pass - Visualized

**Author:** lancertech6
**Votes:** 93
**Link:** [https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4388396/](https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/solutions/4388396/)

---

![Screenshot 2023-12-11 071641.png](./images/0.png)

# YouTube Video Explanation:

[https://youtu.be/R2N7catcZ_I](https://youtu.be/R2N7catcZ_I)
<!-- **If you want a video for this question please write in the comments** -->

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 800 Subscribers*
*Current Subscribers: 710*

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem states that there is exactly one integer in the array that occurs more than 25% of the time. Since the array is sorted in non-decreasing order, any integer that occurs more than 25% of the time will be part of a contiguous subsequence in the array. Therefore, we can iterate through the array and keep track of the count of consecutive occurrences of the same integer.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize variables `size` to store the size of the array, `qtr` to store 25% of the size, `cnt` to keep track of consecutive occurrences, and `p` to store the current integer being checked.
2. Iterate through the array starting from index 1.
3. Compare the current integer `arr[i]` with the previous integer `p`.
   - If they are equal, increment the count `cnt`.
   - If they are not equal, reset the count `cnt` to 1.
4. Check if the count `cnt` is greater than 25% of the array size `qtr`.
   - If true, return the current integer `arr[i]` as it occurs more than 25% of the time.
   - If false, update the previous integer `p` to the current integer `arr[i]`.
5. If no integer is found during the iteration, return the last integer `p` as the answer.

# Complexity
- Time Complexity: O(n), where n is the size of the input array. We iterate through the array once.
- Space Complexity: O(1), as we use a constant amount of space for variables.

# Code
```java []
class Solution {
    public int findSpecialInteger(int[] arr) {
        int size = arr.length;
        int qtr = size / 4;
        int cnt = 1;
        int p = arr[0];
        for (int i = 1 ; i < arr.length ; i++) {

            if ( p == arr[i]) cnt++;
            else cnt = 1;
            
            if (cnt > qtr) return arr[i];
            
            p = arr[i];
        }

        return p;
    }
}
```
```C++ []
class Solution {
public:
    int findSpecialInteger(vector<int>& arr) {
        int size = arr.size();
        int qtr = size / 4;
        int cnt = 1;
        int p = arr[0];
        for (int i = 1 ; i < size ; i++) {

            if ( p == arr[i]) cnt++;
            else cnt = 1;
            
            if (cnt > qtr) return arr[i];
            
            p = arr[i];
        }

        return p;
    }
};
```
```Python []
class Solution(object):
    def findSpecialInteger(self, arr):
        size = len(arr)
        qtr = size // 4
        cnt = 1
        p = arr[0]
        
        for i in range(1, size):
            if p == arr[i]:
                cnt += 1
            else:
                cnt = 1
            
            if cnt > qtr:
                return arr[i]
            
            p = arr[i]

        return p
        
```
```JavaScript []
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let size = arr.length;
    let qtr = Math.floor(size / 4);
    let cnt = 1;
    let p = arr[0];

    for (let i = 1; i < size; i++) {
        if (p === arr[i]) {
            cnt++;
        } else {
            cnt = 1;
        }

        if (cnt > qtr) {
            return arr[i];
        }

        p = arr[i];
    }

    return p;

};
```
![upvote.png](./images/1.png)
