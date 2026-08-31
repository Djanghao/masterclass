# ✅Beats 100% - Explained with [ Video ] - Largest and Smallest - C++/Java/Python/JS  - Visualized

**Author:** lancertech6
**Votes:** 61
**Link:** [https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/4418493/](https://leetcode.com/problems/maximum-product-difference-between-two-pairs/solutions/4418493/)

---

![Screenshot 2023-12-18 081529.png](./images/0.png)\r
\r
# YouTube Video Explanation:\r
\r
[https://youtu.be/NMSo-GyBVJ4](https://youtu.be/NMSo-GyBVJ4)\r
<!-- **If you want a video for this question please write in the comments** -->\r
\r
**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**\r
\r
Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1\r
\r
*Subscribe Goal: 900 Subscribers*\r
*Current Subscribers: 856*\r
\r
---\r
\r
# Intuition\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
To maximize the product difference between pairs, we need to select the largest and second-largest values for one pair and the smallest and second-smallest values for the other pair. By finding these extreme values, we ensure that the product difference is maximized.\r
\r
# Approach\r
<!-- Describe your approach to solving the problem. -->\r
1. Initialize variables to keep track of the largest (`largest`) and second-largest (`secondLargest`) values, as well as the smallest (`smallest`) and second-smallest (`secondSmallest`) values.\r
2. Iterate through the array, updating the extreme values based on the current element.\r
3. Calculate the product difference using the formula: `(largest * secondLargest) - (smallest * secondSmallest)`.\r
4. Return the calculated product difference.\r
\r
# Complexity\r
- Time complexity:  `O(N)` - We iterate through the array once.\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity: `O(1)` - We use a constant amount of space for variables.\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```java []\r
class Solution {\r
    public int maxProductDifference(int[] nums) {\r
        int firstBig = 0, secondBig = 0;\r
        int firstSmall = Integer.MAX_VALUE, secondSmall = Integer.MAX_VALUE;\r
\r
        for (int n : nums) {\r
            if (n < firstSmall) {\r
                secondSmall = firstSmall;\r
                firstSmall = n;\r
            } else if (n < secondSmall) {\r
                secondSmall = n;\r
            }\r
\r
            if (n > firstBig) {\r
                secondBig = firstBig;\r
                firstBig = n;\r
            } else if (n > secondBig) {\r
                secondBig = n;\r
            }\r
        }\r
\r
        return firstBig * secondBig - firstSmall * secondSmall;        \r
    }\r
}\r
```\r
```C++ []\r
class Solution {\r
public:\r
    int maxProductDifference(vector<int>& nums) {\r
        int largest = 0, secondLargest = 0;\r
        int smallest = INT_MAX, secondSmallest = INT_MAX;\r
\r
        for (int n : nums) {\r
            if (n < smallest) {\r
                secondSmallest = smallest;\r
                smallest = n;\r
            } else if (n < secondSmallest) {\r
                secondSmallest = n;\r
            }\r
\r
            if (n > largest) {\r
                secondLargest = largest;\r
                largest = n;\r
            } else if (n > secondLargest) {\r
                secondLargest = n;\r
            }\r
        }\r
\r
        return (largest * secondLargest) - (smallest * secondSmallest);\r
    }\r
};\r
```\r
```Python []\r
class Solution(object):\r
    def maxProductDifference(self, nums):\r
        largest, secondLargest = 0, 0\r
        smallest, secondSmallest = float('inf'), float('inf')\r
\r
        for n in nums:\r
            if n < smallest:\r
                secondSmallest = smallest\r
                smallest = n\r
            elif n < secondSmallest:\r
                secondSmallest = n\r
\r
            if n > largest:\r
                secondLargest = largest\r
                largest = n\r
            elif n > secondLargest:\r
                secondLargest = n\r
\r
        return (largest * secondLargest) - (smallest * secondSmallest)\r
```\r
```JavaScript []\r
/**\r
 * @param {number[]} nums\r
 * @return {number}\r
 */\r
var maxProductDifference = function(nums) {\r
    let largest = 0, secondLargest = 0;\r
    let smallest = Number.MAX_SAFE_INTEGER, secondSmallest = Number.MAX_SAFE_INTEGER;\r
\r
    for (const n of nums) {\r
        if (n < smallest) {\r
            secondSmallest = smallest;\r
            smallest = n;\r
        } else if (n < secondSmallest) {\r
            secondSmallest = n;\r
        }\r
\r
        if (n > largest) {\r
            secondLargest = largest;\r
            largest = n;\r
        } else if (n > secondLargest) {\r
            secondLargest = n;\r
        }\r
    }\r
\r
    return (largest * secondLargest) - (smallest * secondSmallest);\r
};\r
```\r
![upvote.png](./images/1.png)\r
