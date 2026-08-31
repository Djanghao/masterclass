# LITERALLY BEATS INBUILT SORT ✅✅69_BEATS_100%✅✅🔥Easy Solution🔥With Explanation🔥

**Author:** phoenix_sr
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5310471/](https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5310471/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we need to sort the elements so that we can be sure that any unique number after the number we are on must be greater than the number we are on .. 
from this we can look for said element and just add the difference 
understand the 1st paragrapgh that is key main
# Approach
<!-- Describe your approach to solving the problem. -->
I used sparse arrays to sort the nums you can use inbuilt sort also
from there just look for elemnts bigger than the one you are on and add up the difference thats all 
comment if u hav doubt
# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![upvote.jpeg](./images/0.jpeg)

# Code
```javascript []
var minIncrementForUnique = function(nums) {
    let max=0
    let min=999999
    let arr= new Array(10**5 +1).fill(0)
    for(let x of nums){
        if(x<min)min=x
        if(x>max)max=x
        arr[x]++
    }
    let exp=min
    let cost=0
    for(let i=min;i<max+1;i++){
        for(let y=0;y<arr[i];y++){
            if(i>exp)exp=i+1
            else{
                cost+=(exp-i)
                exp++
            }
        }
    }
    return cost
};
```
```python []
class Solution:
    def minIncrementForUnique(self, nums):
        max_val = 0
        min_val = float('inf')
        arr = [0] * (10**5 + 1)
        for x in nums:
            if x < min_val:
                min_val = x
            if x > max_val:
                max_val = x
            arr[x] += 1
        exp = min_val
        cost = 0
        for i in range(min_val, max_val + 1):
            for y in range(arr[i]):
                if i > exp:
                    exp = i + 1
                else:
                    cost += (exp - i)
                    exp += 1
        return cost

```
```java []
public class Solution {
    public int minIncrementForUnique(int[] nums) {
        int max = 0;
        int min = Integer.MAX_VALUE;
        int[] arr = new int[100001];
        for (int x : nums) {
            if (x < min) min = x;
            if (x > max) max = x;
            arr[x]++;
        }
        int exp = min;
        int cost = 0;
        for (int i = min; i < max + 1; i++) {
            for (int y = 0; y < arr[i]; y++) {
                if (i > exp) exp = i + 1;
                else {
                    cost += (exp - i);
                    exp++;
                }
            }
        }
        return cost;
    }
}

```
```c []
#include <stdio.h>

int minIncrementForUnique(int nums[], int numsSize) {
    int max = 0;
    int min = 999999;
    int arr[100001] = {0};
    for (int i = 0; i < numsSize; i++) {
        int x = nums[i];
        if (x < min) min = x;
        if (x > max) max = x;
        arr[x]++;
    }
    int exp = min;
    int cost = 0;
    for (int i = min; i < max + 1; i++) {
        for (int y = 0; y < arr[i]; y++) {
            if (i > exp) exp = i + 1;
            else {
                cost += (exp - i);
                exp++;
            }
        }
    }
    return cost;
}

int main() {
    int nums[] = {3, 2, 1, 2, 1, 7};
    int numsSize = sizeof(nums) / sizeof(nums[0]);
    printf("Minimum increment for unique: %d\
", minIncrementForUnique(nums, numsSize));
    return 0;
}
```