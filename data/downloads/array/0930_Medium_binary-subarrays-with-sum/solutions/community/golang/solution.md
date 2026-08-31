# 3 Approach 🚀|| All 3 explained in depth || [Java/C++/c/Python3/JavaSript/Rust/go]

**Author:** Shivansu_7
**Votes:** 24
**Link:** [https://leetcode.com/problems/binary-subarrays-with-sum/solutions/4873684/](https://leetcode.com/problems/binary-subarrays-with-sum/solutions/4873684/)

---

# Intuition\r
1. If you can solve leetcode 560, you can solve this easily, it's same. Just copy paste the code.\r
2. [Click on this for leetcode 560](https://leetcode.com/problems/subarray-sum-equals-k/solutions/4638332/beats-100-in-depth-explained-java-c-python-javascript/)\r
<!-- Describe your first thoughts on how to solve this problem. -->\r
\r
# Approach Using HashMap\r
1. **Initialization:**\r
    - Initialize sum to keep track of the cumulative sum of elements encountered so far.\r
    - Initialize count to store the count of subarrays with a sum equal to k.\r
    - Create a HashMap map to store the frequency of cumulative sums encountered so far. Initialize it with one entry {0, 1}, denoting that a sum of 0 has occurred once.\r
2. **Iterating through the array:**\r
    - Iterate through the nums array from left to right.\r
At each step, update the sum by adding the current element nums[i].\r
3. **Calculating the remainder:**\r
    - Calculate rem, which is the remainder needed to make the current sum equal to k. It's calculated as sum - k.\r
4. **Checking for subarrays:**\r
    - Check if rem exists in the map. If it does, it means there exists a subarray ending at the current index whose sum is k.      Increment count by the frequency of rem in the map.\r
5. **Updating the frequency map:**\r
    - Update the frequency of the current sum in the map by either incrementing its count if it already exists or adding a new entry with a count of 1.\r
6. **Return the count:**\r
    - After iterating through the entire array, return the final value of count, which represents the total count of subarrays with a sum equal to k.\r
<!-- Describe your approach to solving the problem. -->\r
\r
# Complexity\r
- Time complexity: $$O(n)$$\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity: $$O(n)$$\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```Java []\r
class Solution {\r
    public int numSubarraysWithSum(int[] nums, int goal) {\r
        HashMap<Integer, Integer> map = new HashMap<>();\r
        map.put(0, 1);\r
        int sum = 0;\r
        int count = 0;\r
\r
        for(int i=0; i<nums.length; i++) {\r
            sum += nums[i];\r
            \r
            int rem = sum - goal;\r
            if(map.containsKey(rem)) {\r
                count += map.get(rem);\r
            }\r
\r
            map.put(sum, map.getOrDefault(sum, 0)+1);\r
        }\r
        return count;\r
    }\r
}\r
```\r
```Python []\r
def num_subarrays_with_sum(nums, goal):\r
    hashmap = {0: 1}\r
    total_sum = 0\r
    count = 0\r
\r
    for num in nums:\r
        total_sum += num\r
        remainder = total_sum - goal\r
        if remainder in hashmap:\r
            count += hashmap[remainder]\r
        hashmap[total_sum] = hashmap.get(total_sum, 0) + 1\r
\r
    return count\r
```\r
```C++ []\r
\r
int num_subarrays_with_sum(vector<int>& nums, int goal) {\r
    unordered_map<int, int> hashmap;\r
    hashmap[0] = 1;\r
    int total_sum = 0;\r
    int count = 0;\r
\r
    for (int num : nums) {\r
        total_sum += num;\r
        int remainder = total_sum - goal;\r
        if (hashmap.find(remainder) != hashmap.end()) {\r
            count += hashmap[remainder];\r
        }\r
        hashmap[total_sum]++;\r
    }\r
\r
    return count;\r
}\r
```\r
```C# []\r
public class Solution {\r
    public int NumSubarraysWithSum(int[] nums, int goal) {\r
        Dictionary<int, int> map = new Dictionary<int, int>();\r
        map[0] = 1;\r
        int sum = 0;\r
        int count = 0;\r
\r
        foreach (int num in nums) {\r
            sum += num;\r
            int rem = sum - goal;\r
            if (map.ContainsKey(rem)) {\r
                count += map[rem];\r
            }\r
            if (!map.ContainsKey(sum)) {\r
                map[sum] = 0;\r
            }\r
            map[sum]++;\r
        }\r
\r
        return count;\r
    }\r
}\r
```\r
```Rust []\r
fn num_subarrays_with_sum(nums: &[i32], goal: i32) -> i32 {\r
    let mut map = HashMap::new();\r
    map.insert(0, 1);\r
    let mut sum = 0;\r
    let mut count = 0;\r
\r
    for &num in nums {\r
        sum += num;\r
        let rem = sum - goal;\r
        if let Some(&val) = map.get(&rem) {\r
            count += val;\r
        }\r
        *map.entry(sum).or_insert(0) += 1;\r
    }\r
\r
    count\r
}\r
```\r
```Go []\r
func numSubarraysWithSum(nums []int, goal int) int {\r
    hashmap := make(map[int]int)\r
    hashmap[0] = 1\r
    sum := 0\r
    count := 0\r
\r
    for _, num := range nums {\r
        sum += num\r
        rem := sum - goal\r
        if val, ok := hashmap[rem]; ok {\r
            count += val\r
        }\r
        hashmap[sum]++\r
    }\r
\r
    return count\r
}\r
```\r
```C []\r
int numSubarraysWithSum(int* nums, int numsSize, int goal) {\r
    int* map = (int*)calloc(numsSize + 1, sizeof(int));\r
    map[0] = 1;\r
    int sum = 0;\r
    int count = 0;\r
\r
    for (int i = 0; i < numsSize; i++) {\r
        sum += nums[i];\r
        int rem = sum - goal;\r
        count += map[rem];\r
        map[sum]++;\r
    }\r
\r
    free(map);\r
    return count;\r
}\r
```\r
\r
---\r
# Intuition\r
1. We have got the array consisting only 0 and 1.\r
2. We can use the sliding window technique, we won't require extraa space.\r
3. Here in this, we are finding subarray for atmost goal and subarry for atmost goal-1. The difference will be the answer which will be equal to excat number of subarray for goal.\r
4. \r
# Approach 2 atmost(goal)-atmost(goal-1)\r
1. **Count Subarrays with Sum goal:**\r
    - The numSubarraysWithSum function calculates the total count of subarrays in the nums array having a sum equal to the goal value.\r
    - It achieves this by computing the count of subarrays with a sum at most goal using a sliding window approach and subtracting the count of subarrays with a sum at most goal - 1.\r
2. **Calculate Subarrays with Sum at most goal using Sliding Window Technique:**\r
    - The atmostK function computes the count of subarrays with a sum at most goal.\r
    - It utilizes a sliding window approach with two pointers, i and j.\r
    - The i pointer iterates through the nums array from left to right, extending the window's right boundary.\r
    - At each step, the sum is updated by adding the current element.\r
    - If the sum exceeds the goal, the while loop with the condition `sum > goal` comes into play:\r
        - Within the while loop, the left boundary (j) of the window is moved towards the right, and elements are subtracted from the sum until the sum is within the desired range.\r
    - For each valid window, the count of subarrays that can be formed is calculated, and the total count is updated accordingly.\r
\r
# Complexity\r
- Time complexity: $$O(n)$$\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity: $$O(1)$$\r
\r
# Code\r
```Java []\r
class Solution {\r
    public int numSubarraysWithSum(int[] nums, int goal) {\r
        return atmostK(nums, goal) - atmostK(nums, goal-1);\r
    }\r
    private int atmostK(int[] nums, int goal) {\r
        int i = 0;\r
        int j = 0;\r
        int sum = 0;\r
        int ans = 0;\r
\r
        while(i < nums.length) {\r
            sum += nums[i];\r
\r
            while(j<=i && sum > goal) {\r
                sum -= nums[j];\r
                j++;\r
            }\r
            ans += i-j+1;\r
            i++;\r
        }\r
        return ans;\r
    }\r
}\r
```\r
```C++ []\r
class Solution {\r
public:\r
    int numSubarraysWithSum(vector<int>& nums, int goal) {\r
        return atmostK(nums, goal) - atmostK(nums, goal - 1);\r
    }\r
private:\r
    int atmostK(vector<int>& nums, int goal) {\r
        int i = 0;\r
        int j = 0;\r
        int sum = 0;\r
        int ans = 0;\r
\r
        while (i < nums.size()) {\r
            sum += nums[i];\r
\r
            while (j <= i && sum > goal) {\r
                sum -= nums[j];\r
                j++;\r
            }\r
            ans += i - j + 1;\r
            i++;\r
        }\r
        return ans;\r
    }\r
};\r
```\r
```Go []\r
\r
func numSubarraysWithSum(nums []int, goal int) int {\r
    return atmostK(nums, goal) - atmostK(nums, goal-1)\r
}\r
\r
func atmostK(nums []int, goal int) int {\r
    i, j := 0, 0\r
    sum := 0\r
    ans := 0\r
\r
    for i < len(nums) {\r
        sum += nums[i]\r
\r
        for j <= i && sum > goal {\r
            sum -= nums[j]\r
            j++\r
        }\r
        ans += i - j + 1\r
        i++\r
    }\r
    return ans\r
}\r
```\r
```Python3 []\r
class Solution:\r
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:\r
        return self.atmostK(nums, goal) - self.atmostK(nums, goal - 1)\r
    \r
    def atmostK(self, nums: List[int], goal: int) -> int:\r
        i = j = 0\r
        total_sum = 0\r
        count = 0\r
\r
        while i < len(nums):\r
            total_sum += nums[i]\r
\r
            while j <= i and total_sum > goal:\r
                total_sum -= nums[j]\r
                j += 1\r
            count += i - j + 1\r
            i += 1\r
        \r
        return count\r
```\r
```Rust []\r
impl Solution {\r
    pub fn num_subarrays_with_sum(nums: Vec<i32>, goal: i32) -> i32 {\r
        Self::atmost_k(&nums, goal) - Self::atmost_k(&nums, goal - 1)\r
    }\r
\r
    fn atmost_k(nums: &Vec<i32>, goal: i32) -> i32 {\r
        let mut i = 0;\r
        let mut j = 0;\r
        let mut sum = 0;\r
        let mut ans = 0;\r
\r
        while i < nums.len() {\r
            sum += nums[i];\r
\r
            while j <= i && sum > goal {\r
                sum -= nums[j];\r
                j += 1;\r
            }\r
            ans += (i - j + 1) as i32;\r
            i += 1;\r
        }\r
        ans\r
    }\r
}\r
```\r
```C# []\r
public class Solution {\r
    public int NumSubarraysWithSum(int[] nums, int goal) {\r
        return AtmostK(nums, goal) - AtmostK(nums, goal - 1);\r
    }\r
    \r
    private int AtmostK(int[] nums, int goal) {\r
        int i = 0, j = 0;\r
        int sum = 0, ans = 0;\r
\r
        while (i < nums.Length) {\r
            sum += nums[i];\r
\r
            while (j <= i && sum > goal) {\r
                sum -= nums[j];\r
                j++;\r
            }\r
            ans += i - j + 1;\r
            i++;\r
        }\r
        return ans;\r
    }\r
}\r
```\r
```C []\r
#include <stdio.h>\r
\r
int numSubarraysWithSum(int* nums, int numsSize, int goal) {\r
    return atmostK(nums, numsSize, goal) - atmostK(nums, numsSize, goal - 1);\r
}\r
\r
int atmostK(int* nums, int numsSize, int goal) {\r
    int i = 0, j = 0;\r
    int sum = 0, ans = 0;\r
\r
    while (i < numsSize) {\r
        sum += nums[i];\r
\r
        while (j <= i && sum > goal) {\r
            sum -= nums[j];\r
            j++;\r
        }\r
        ans += i - j + 1;\r
        i++;\r
    }\r
    return ans;\r
}\r
```\r
\r
---\r
# Intuition\r
1. In approach 2 we are traversing the array tiwce.\r
2. But the array have only 0 and 1, we can use this and we will traverse the array once.\r
3. We will get the answer.\r
\r
# Approach 3 Efficient Sliding Window\r
1. **Initialization:**\r
    - Initialize `i`, `j`, `sum`, `count`, and `freq` variables to track the current indices, cumulative sum, count of subarrays, and frequency of occurrences of 1s within the window.\r
2. **Sliding Window Technique:**\r
    - Iterate through the `nums` array using the `i` pointer.\r
    - Incrementally add the current element to the `sum`.\r
    - Whenever a 1 is encountered, reset the `freq` to 0, as we need to start counting the frequency of 1s within the current window.\r
3. **Adjusting the Window:**\r
    - If the `sum` exceeds the goal, we need to adjust the window's left boundary. Move the `j` pointer towards right and subtract elements from the sum until it becomes less than or equal to the goal.\r
4. **Counting Subarrays with Sum `goal`:**\r
    - While the sum is equal to the goal, count the number of subarrays with `sum` equal to `goal`.\r
    - Increment the `freq` for each `1` encountered within this subarray window.\r
    - Add the `freq` to the count as the count of subarrays with `sum` equal to `goal`.\r
5. **Iterating Through the Array:**\r
    - Continue this process until all elements of the array have been processed.\r
6. **Return Result:**\r
    - Return the final value of `count`, which represents the total count of subarrays with a `sum` equal to the given goal.\r
\r
# Complexity\r
- Time complexity: $$O(n)$$\r
<!-- Add your time complexity here, e.g. $$O(n)$$ -->\r
\r
- Space complexity: $$O(1)$$\r
\r
\r
# Code\r
```Java []\r
class Solution {\r
    public int numSubarraysWithSum(int[] nums, int goal) {\r
        int i = 0;\r
        int j = 0;\r
        int sum = 0;\r
        int count = 0;\r
        int freq = 0;\r
\r
        while(i < nums.length) {\r
            sum += nums[i];\r
            if(nums[i] == 1) {\r
                freq = 0;\r
            }\r
            if(sum > goal) {\r
                sum -= nums[j];\r
                j++;\r
            }\r
            \r
            while(j <= i && sum == goal) {\r
                sum -= nums[j];\r
                j++;\r
                freq++;\r
            }\r
            count += freq;\r
            i++;\r
        }\r
        return count;\r
    }\r
}\r
```\r
```C++ []\r
class Solution {\r
public:\r
    int numSubarraysWithSum(vector<int>& nums, int goal) {\r
        int i = 0, j = 0, sum = 0, count = 0, freq = 0;\r
\r
        while (i < nums.size()) {\r
            sum += nums[i];\r
            if (nums[i] == 1) {\r
                freq = 0;\r
            }\r
            if (sum > goal) {\r
                sum -= nums[j];\r
                j++;\r
            }\r
            while (j <= i && sum == goal) {\r
                sum -= nums[j];\r
                j++;\r
                freq++;\r
            }\r
            count += freq;\r
            i++;\r
        }\r
        return count;\r
    }\r
};\r
```\r
```Python3 []\r
class Solution:\r
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:\r
        i, j, sum_val, count, freq = 0, 0, 0, 0, 0\r
\r
        while i < len(nums):\r
            sum_val += nums[i]\r
            if nums[i] == 1:\r
                freq = 0\r
            if sum_val > goal:\r
                sum_val -= nums[j]\r
                j += 1\r
            while j <= i and sum_val == goal:\r
                sum_val -= nums[j]\r
                j += 1\r
                freq += 1\r
            count += freq\r
            i += 1\r
        return count\r
```\r
```Rust []\r
impl Solution {\r
    pub fn num_subarrays_with_sum(nums: Vec<i32>, goal: i32) -> i32 {\r
        let (mut i, mut j, mut sum, mut count, mut freq) = (0, 0, 0, 0, 0);\r
\r
        while i < nums.len() {\r
            sum += nums[i];\r
            if nums[i] == 1 {\r
                freq = 0;\r
            }\r
            if sum > goal {\r
                sum -= nums[j];\r
                j += 1;\r
            }\r
            while j <= i && sum == goal {\r
                sum -= nums[j];\r
                j += 1;\r
                freq += 1;\r
            }\r
            count += freq;\r
            i += 1;\r
        }\r
        count\r
    }\r
}\r
```\r
```C# []\r
public class Solution {\r
    public int NumSubarraysWithSum(int[] nums, int goal) {\r
        int i = 0, j = 0, sum = 0, count = 0, freq = 0;\r
\r
        while (i < nums.Length) {\r
            sum += nums[i];\r
            if (nums[i] == 1) {\r
                freq = 0;\r
            }\r
            if (sum > goal) {\r
                sum -= nums[j];\r
                j++;\r
            }\r
            while (j <= i && sum == goal) {\r
                sum -= nums[j];\r
                j++;\r
                freq++;\r
            }\r
            count += freq;\r
            i++;\r
        }\r
        return count;\r
    }\r
}\r
```\r
```Go []\r
func numSubarraysWithSum(nums []int, goal int) int {\r
	i, j, sumVal, count, freq := 0, 0, 0, 0, 0\r
\r
	for i < len(nums) {\r
		sumVal += nums[i]\r
		if nums[i] == 1 {\r
			freq = 0\r
		}\r
		if sumVal > goal {\r
			sumVal -= nums[j]\r
			j++\r
		}\r
		for j <= i && sumVal == goal {\r
			sumVal -= nums[j]\r
			j++\r
			freq++\r
		}\r
		count += freq\r
		i++\r
	}\r
	return count\r
}\r
```\r
```JavaScript []\r
/**\r
 * @param {number[]} nums\r
 * @param {number} goal\r
 * @return {number}\r
 */\r
var numSubarraysWithSum = function(nums, goal) {\r
    let i = 0, j = 0, sum = 0, count = 0, freq = 0;\r
\r
    while (i < nums.length) {\r
        sum += nums[i];\r
        if (nums[i] === 1) {\r
            freq = 0;\r
        }\r
        if (sum > goal) {\r
            sum -= nums[j];\r
            j++;\r
        }\r
        while (j <= i && sum === goal) {\r
            sum -= nums[j];\r
            j++;\r
            freq++;\r
        }\r
        count += freq;\r
        i++;\r
    }\r
    return count;\r
};\r
```\r
\r
---\r
\r
\r
---\r
\r
![5c63d377-8ef4-4beb-b09d-0edb07e09a41_1702955205.6568592.png](./images/0.png)\r
