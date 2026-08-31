# Clean Codes🔥🔥|| Full Explanation✅|| Binary Search✅|| C++|| Java|| Python3

**Author:** N7_BLACKHAT
**Votes:** 37
**Link:** [https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/3216643/](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/solutions/3216643/)

---

# Intuition :\r
- We need to find the minimum ship capacity (x) such that you can ship all the packages in D days.\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach :\r
- First ,find the minimum and maximum ship capacity by using the max() and sum() methods of the Arrays class in Java. \r
- Then use a while loop to perform binary search on the ship capacity range [l, r]. In each iteration, compute the midpoint m = (l + r) / 2, and check whether all the packages can be shipped in D days using the shipDays() function. \r
- If the function returns a number less than or equal to D, then the minimum ship capacity can be reduced, and the search continues in the left half of the range. \r
- Otherwise, the minimum ship capacity needs to be increased, and the search continues in the right half of the range.\r
- The shipDays() function takes an array of weights and a ship capacity, and returns the number of days it would take to ship all the packages using that capacity.\r
-  It uses a loop to iterate over the weights, and keeps track of the current capacity and the number of days. \r
- If adding the weight of the current package to the capacity would exceed the ship capacity, then the number of days is incremented, and the capacity is reset to the weight of the current package.\r
- Otherwise, the weight of the current package is added to the capacity, and the loop continues.\r
- At the end of the binary search, the return the minimum ship capacity l, which is the smallest value of x that satisfies the problem statement.\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Explanation to Approach :\r
- First ,find the minimum and maximum ship capacity by using the highest and the sum of the weights of the packages.\r
-  Then performs binary search to find the minimum ship capacity that can ship all the packages in the given number of days. \r
- In each iteration,check if it's possible to ship all the packages within the given days using the current ship capacity. \r
- If it's possible, the search continues in the left half of the search space; otherwise, the search continues in the right half.\r
- The shipDays() function checks how many days it would take to ship all the packages using a given ship capacity. \r
- It does this by iterating over the packages and keeping track of the current ship capacity and the number of days. \r
- If the ship capacity is exceeded, the current package is shipped on the next day, and the ship capacity is reset to the weight of the current package. \r
- If not, the current package is added to the ship capacity.\r
- At the end of the binary search, the function returns the minimum ship capacity that can ship all the packages in the given number of days.\r
\r
# Complexity :\r
- Time complexity :O(nlog(\u03A3\u2223piles[i]\u2223))\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity : O(1)\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D\r
```\r
Thanks for visiting my solution.\uD83D\uDE0A\r
```\r
# Codes [C++ |Java |Python3] :\r
```C++ []\r
class Solution {\r
 public:\r
  int shipWithinDays(vector<int>& weights, int days) {\r
    int l = *max_element(begin(weights), end(weights));\r
    int r = accumulate(begin(weights), end(weights), 0);\r
\r
    while (l < r) {\r
      const int m = (l + r) / 2;\r
      if (shipDays(weights, m) <= days)\r
        r = m;\r
      else\r
        l = m + 1;\r
    }\r
\r
    return l;\r
  }\r
\r
 private:\r
  int shipDays(const vector<int>& weights, int shipCapacity) {\r
    int days = 1;\r
    int capacity = 0;\r
    for (const int weight : weights) {\r
      if (capacity + weight > shipCapacity) {\r
        ++days;\r
        capacity = weight;\r
      } else {\r
        capacity += weight;\r
      }\r
    }\r
    return days;\r
  };\r
};\r
```\r
```Java []\r
class Solution \r
{\r
  public int shipWithinDays(int[] weights, int days) \r
  {\r
    int l = Arrays.stream(weights).max().getAsInt();\r
    int r = Arrays.stream(weights).sum();\r
\r
    while (l < r) {\r
      final int m = (l + r) / 2;\r
      if (shipDays(weights, m) <= days)\r
        r = m;\r
      else\r
        l = m + 1;\r
    }\r
    return l;\r
  }\r
\r
  private int shipDays(int[] weights, int shipCapacity) \r
  {\r
    int days = 1;\r
    int capacity = 0;\r
    for (final int weight : weights) \r
    {\r
      if (capacity + weight > shipCapacity) \r
      {\r
        ++days;\r
        capacity = weight;\r
      } \r
      else\r
        capacity += weight;\r
    }\r
    return days;\r
  }\r
}\r
```\r
```Python3 []\r
class Solution:\r
  def shipWithinDays(self, weights: List[int], days: int) -> int:\r
    l = max(weights)\r
    r = sum(weights)\r
\r
    def shipDays(shipCapacity: int) -> int:\r
      days = 1\r
      capacity = 0\r
      for weight in weights:\r
        if capacity + weight > shipCapacity:\r
          days += 1\r
          capacity = weight\r
        else:\r
          capacity += weight\r
      return days\r
\r
    while l < r:\r
      m = (l + r) // 2\r
      if shipDays(m) <= days:\r
        r = m\r
      else:\r
        l = m + 1\r
\r
    return l\r
```\r
# Please Upvote\uD83D\uDC4D\uD83D\uDC4D\r
![ezgif-3-22a360561c.gif](./images/0.gif)\r
\r
