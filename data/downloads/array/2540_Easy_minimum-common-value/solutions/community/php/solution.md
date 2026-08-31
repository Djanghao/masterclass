# 🍉✅Only 3 Simple Lines Logic🔥|| C++, JAVA, PYTHON, JAVASCRIPT, PHP, C# 🙌🍉

**Author:** dharmikgohil
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-common-value/solutions/4846156/](https://leetcode.com/problems/minimum-common-value/solutions/4846156/)

---


# \uD83C\uDFAFIntuition 
We can use a HashSet to efficiently check for common elements between two arrays.

# \u2705 Approach 
 We iterate through the first array and add its elements to a HashSet. Then, we iterate through the second array and check if each element exists in the HashSet. If found, we return it as the first common element. If no common element is found, we return -1.

# \uD83D\uDCA5Complexity 
- Time complexity:
Both loops iterate through their respective arrays once, so the time complexity is `O(n + m)`, where n is the length of nums1 and m is the length of nums2. 

- Space complexity:
The space complexity is `O(n)` since we store the elements of nums1 in a HashSet.

# \uD83E\uDDD1\u200D\uD83D\uDCBBCodes
```Java []
class Solution {
    public int getCommon(int[] nums1, int[] nums2) {
        HashSet<Integer> set = new HashSet<>();
        for(int num:nums1){
            set.add(num);
        }
        for(int num:nums2){
            if(set.contains(num)){
                return num;
            }
        }
        return -1;
    }
}
```
```C++ []
class Solution {
public:
    int getCommon(std::vector<int>& nums1, std::vector<int>& nums2) {
        std::unordered_set<int> set;
        // Put all nums1 values in set
        for (int num : nums1) {
            set.insert(num);
        }
        // Check nums2 with set, if it contains the value, return it
        for (int num : nums2) {
            if (set.count(num)) {
                return num;
            }
        }
        // If no element found, return -1
        return -1;
    }
};

```
```Python []
class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        num_set = set(nums1)
        for num in nums2:
            if num in num_set:
                return num
        return -1

```
```Javascript []
var getCommon = function(nums1, nums2) {
     const numSet = new Set(nums1);
        for (const num of nums2) {
            if (numSet.has(num)) {
                return num;
            }
        }
        return -1;
    
};
```
```C []
#include <stdbool.h>

int getCommon(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    bool set[1000001] = {false}; // Assuming the maximum element value is 10^6
    for (int i = 0; i < nums1Size; ++i) {
        set[nums1[i]] = true;
    }
    for (int i = 0; i < nums2Size; ++i) {
        if (set[nums2[i]]) {
            return nums2[i];
        }
    }
    return -1;
}

```
```C# []
using System.Collections.Generic;

public class Solution {
    public int GetCommon(int[] nums1, int[] nums2) {
        HashSet<int> numSet = new HashSet<int>(nums1);
        foreach (int num in nums2) {
            if (numSet.Contains(num)) {
                return num;
            }
        }
        return -1;
    }
}

```
```PHP []
class Solution {
    public function getCommon($nums1, $nums2) {
        $numSet = array_flip($nums1);
        foreach ($nums2 as $num) {
            if (isset($numSet[$num])) {
                return $num;
            }
        }
        return -1;
    }
}

```
```Typescript []
class Solution {
    getCommon(nums1: number[], nums2: number[]): number {
        const numSet: Set<number> = new Set(nums1);
        for (const num of nums2) {
            if (numSet.has(num)) {
                return num;
            }
        }
        return -1;
    }
}

```



# Code With Explaination\uD83D\uDE4C
```
import java.util.ArrayList;

class Solution {
    public int getCommon(int[] nums1, int[] nums2) {
        HashSet<Integer> set = new HashSet<>();
        //fisrt puts all nums1 values in set
        for(int num:nums1){
            set.add(num);
        }
        //now check with nums2 with set, if it contains the value so it return it
        for(int num:nums2){
            if(set.contains(num)){
                return num;
            }
        }
        //if no element found return -1;
        return -1;
    }
}

```
![HOPE YOU GOT IT (1).png](./images/0.png)

# Please\uD83E\uDD7A\uD83D\uDC4D