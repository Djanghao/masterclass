# Day 53 || Binary Search || Easiest Beginner Friendly Sol

**Author:** singhabhinash
**Votes:** 175
**Link:** [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/3216547/](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/3216547/)

---

# Intuition of this Problem:\r
The intuition behind this code is that we want to find the minimum capacity of the ship that can ship all the packages within days days. We can use binary search to efficiently search for this minimum capacity.\r
\r
To perform binary search, we need to define the search range [left, right]. The minimum capacity should be at least as large as the largest package, so we set left to be the maximum weight in weights. The maximum capacity should be the sum of weights, so we set right to be the sum of all weights in weights.\r
\r
For each mid value in the search range [left, right], we simulate the shipping process to see if it can be done within days days using a ship with capacity mid. We start with the first package and add packages to the ship until it is full. When the ship is full, we start a new day and continue adding packages until all packages are shipped. We count the number of days needed to ship all packages with the current mid value.\r
\r
If the number of days needed with the current mid value is greater than days, it means that the ship capacity is too small, and we need to increase the capacity. Therefore, we set left = mid + 1. Otherwise, we can try to reduce the capacity by setting right = mid.\r
\r
We repeat this process until left >= right, at which point left is the minimum capacity of the ship that can ship all the packages within days days. We return left as the answer.\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
**NOTE - PLEASE READ APPROACH FIRST THEN SEE THE CODE. YOU WILL DEFINITELY UNDERSTAND THE CODE LINE BY LINE AFTER SEEING THE APPROACH.**\r
\r
# Approach for this Problem:\r
1. Initialize maxWeight as -1 and totalWeight as 0\r
2. Iterate through the weights array and update maxWeight to the maximum weight in the array, and update totalWeight to the sum of all weights in the array\r
3. Use binary search to search for the minimum capacity of the ship that can ship all the packages within days days. Set left endpoint as maxWeight and right endpoint as totalWeight\r
4. While left endpoint is less than right endpoint, calculate mid-point as (left+right)/2\r
5. Simulate the shipping process using mid-point as the ship's capacity to see how many days are needed to ship all the packages.\r
6. Keep track of the current weight being loaded onto the ship and the number of days needed to complete the shipment. If the current weight plus the weight of the next package exceeds the mid-point, start a new day and reset the current weight. Repeat this until all the packages have been loaded onto the ship.\r
7. If the number of days needed is greater than days, set left endpoint to mid+1. Otherwise, set right endpoint to mid.\r
8. Continue the binary search until left endpoint is greater than or equal to right endpoint. At this point, left endpoint will be the minimum capacity of the ship that can ship all the packages within days days.\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Humble Request:\r
- If my solution is helpful to you then please **UPVOTE** my solution, your **UPVOTE** motivates me to post such kind of solution.\r
- Please let me know in comments if there is need to do any improvement in my approach, code....anything.\r
- **Let's connect on** https://www.linkedin.com/in/abhinash-singh-1b851b188\r
\r
![57jfh9.jpg](./images/0.jpeg)\r
\r
# Code:\r
```C++ []\r
class Solution {\r
public:\r
    int shipWithinDays(vector<int>& weights, int days) {\r
        int maxWeight = -1, totalWeight = 0;\r
        for (int weight : weights) {\r
            maxWeight = max(maxWeight, weight);\r
            totalWeight = totalWeight + weight;\r
        }\r
        //here weight and total weight work as left and right pointer of bunary search\r
        while (maxWeight < totalWeight) {\r
            int midWeight = maxWeight + (totalWeight - maxWeight) / 2;\r
            int daysNeeded = 1, currWeight = 0;\r
            for (int weight : weights) {\r
                if (currWeight + weight > midWeight) {\r
                    daysNeeded++;\r
                    currWeight = 0;\r
                }\r
                currWeight = currWeight + weight;\r
            }\r
            if (daysNeeded > days) {\r
                maxWeight = midWeight + 1;\r
            } else {\r
                totalWeight = midWeight;\r
            }\r
        }\r
        return maxWeight;\r
    }\r
};\r
```\r
```Java []\r
class Solution {\r
    public int shipWithinDays(int[] weights, int days) {\r
        int maxWeight = -1, totalWeight = 0;\r
        for (int weight : weights) {\r
            maxWeight = Math.max(maxWeight, weight);\r
            totalWeight += weight;\r
        }\r
        int left = maxWeight, right = totalWeight;\r
        while (left < right) {\r
            int mid = (left + right) / 2;\r
            int daysNeeded = 1, currWeight = 0;\r
            for (int weight : weights) {\r
                if (currWeight + weight > mid) {\r
                    daysNeeded++;\r
                    currWeight = 0;\r
                }\r
                currWeight += weight;\r
            }\r
            if (daysNeeded > days) {\r
                left = mid + 1;\r
            } else {\r
                right = mid;\r
            }\r
        }\r
        return left;\r
    }\r
}\r
\r
```\r
```Python []\r
class Solution:\r
    def shipWithinDays(self, weights: List[int], days: int) -> int:\r
        maxWeight, totalWeight = -1, 0\r
        for weight in weights:\r
            maxWeight = max(maxWeight, weight)\r
            totalWeight += weight\r
        left, right = maxWeight, totalWeight\r
        while left < right:\r
            mid = (left + right) // 2\r
            daysNeeded, currWeight = 1, 0\r
            for weight in weights:\r
                if currWeight + weight > mid:\r
                    daysNeeded += 1\r
                    currWeight = 0\r
                currWeight += weight\r
            if daysNeeded > days:\r
                left = mid + 1\r
            else:\r
                right = mid\r
        return left\r
\r
```\r
\r
# Time Complexity and Space Complexity:\r
- Time complexity: **O(N*log(S))**, where N is the number of packages (i.e., size of the weights vector) and S is the total weight of all the packages.\r
\r
The reason for this time complexity is the binary search algorithm that is used to find the least weight capacity of the ship. In the worst case, the binary search algorithm performs log(S) iterations, and for each iteration, it needs to traverse the entire weights vector, which takes O(N) time. Therefore, the overall time complexity of the algorithm is O(N*log(S)).\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity: **O(1)**\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->