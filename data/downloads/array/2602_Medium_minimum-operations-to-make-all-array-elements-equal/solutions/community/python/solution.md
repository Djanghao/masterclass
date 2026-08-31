# ✔💯DAY 361 || 100% || 0MS || EXPLAINED || DRY RUN || MEME

**Author:** ManojKumarPatnaik
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3347750/](https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3347750/)

---

# Please Upvote as it really motivates me
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
##### \u2022	The intuition behind this code is to first sort the input array of numbers and the array of queries. Then, for each query, we calculate the prefix sum of all numbers in the input array that are less than the current query. We use this prefix sum to calculate the number of operations required to make all numbers in the input array equal to the query.
##### \u2022	To do this, we first calculate the total sum of all numbers in the input array. Then, we subtract twice the prefix sum from this total sum, since we need to add q to all numbers less than q and subtract q from all numbers greater than q. The factor of 2 is because we need to perform both additions and subtractions. Finally, we add q times the number of elements less than q that we have already processed, since we have already added q to these elements.
##### \u2022	This approach allows us to efficiently calculate the answer for each query in O(n log n) time, where n is the length of the input array.



# Explain
<!-- Describe your approach to solving the problem. -->

##### \u2022	The code is implementing the following approach:

##### \u2022	Sort the input array of numbers in ascending order using the sort() function from the STL library.
##### \u2022	sort(nums.begin(), nums.end());
##### \u2022	Create a vector of pairs called aug to store the queries and their respective indices. For each query in the input array queries, create a pair with the query value and its index and add it to the aug vector.
##### \u2022	vector<pair<int, int>> aug;
##### \u2022	for (int i = 0; i < queries.size(); ++i) {
##### \u2022	aug.emplace_back(queries[i], i);
##### \u2022	}
##### \u2022	Sort the aug vector of pairs in increasing order of query value.
##### \u2022	sort(aug.begin(), aug.end());
##### \u2022	Create a new vector called ans to store the answers for each query. The size of ans is the same as the size of queries.
##### \u2022	vector<long long> ans(queries.size());
##### \u2022	Calculate the total sum of all numbers in the input array nums using the accumulate() function from the STL library.
##### \u2022	long long total = accumulate(nums.begin(), nums.end(), 0ll);
##### \u2022	Initialize a variable called prefix to 0. This variable will be used to calculate the prefix sum of all numbers in nums that are less than the current query.
##### \u2022	long long prefix = 0;
##### \u2022	Initialize a variable called k to 0. This variable will be used to keep track of the number of elements in nums that are less than the current query.
##### \u2022	int k = 0;
##### \u2022	Loop through each pair in the aug vector. For each pair, calculate the number of operations required to make all numbers in nums equal to the current query.
##### \u2022	for (auto& [q, i] : aug) {
##### \u2022	// Calculate prefix sum of all numbers less than q
##### \u2022	while (k < nums.size() && nums[k] < q)
o	prefix += nums[k++];
##### \u2022	// Calculate answer for current query
##### \u2022	ans[i] = total - 2*prefix + (long long) q*(2*k - nums.size());
##### \u2022	}
##### \u2022	Return the ans vector, which contains the answers for all queries.
##### \u2022	return ans;
##### \u2022	Overall, the approach involves sorting the input array and the queries, and then iterating through the queries and calculating the prefix sum of all numbers less than the current query. This prefix sum is then used to calculate the number of operations required to make all numbers in the input array equal to the current query.




# Code
```c++ []
vector<long long> minOperations(vector<int>& nums, vector<int>& queries) {
    sort(nums.begin(), nums.end());
    vector<pair<int, int>> aug;
    for (int i = 0; i < queries.size(); ++i) {
        aug.emplace_back(queries[i], i);
    }
    sort(aug.begin(), aug.end());
    vector<long long> ans(queries.size());
    long long total = accumulate(nums.begin(), nums.end(), 0ll);
    long long prefix = 0;
    int k = 0;
    for (auto& [q, i] : aug) {
        while (k < nums.size() && nums[k] < q) {
            prefix += nums[k];
            k++;
        }
        ans[i] = total - 2 * prefix + (long long) q * (2 * k - nums.size());
    }
    return ans;
}
```
```python []
def minOperations(self,nums: List[int], queries: List[int]) -> List[int]:
        nums.sort()
        aug = [(q, i) for i, q in enumerate(queries)]
        aug.sort()
        total = sum(nums)
        prefix = 0
        k = 0
        ans = [0] * len(queries)
        for q, i in aug:
            while k < len(nums) and nums[k] < q:
                prefix += nums[k]
                k += 1
            ans[i] = total - 2 * prefix + q * (2 * k - len(nums))
        return ans
```
```java []
public List<Long> minOperations(int[] nums, int[] queries) {
        int n = nums.length,m = queries.length;
        
        Arrays.sort(nums);
        
        long[] psum = new long[n + 1];
        for(int i = 0;i < n;i++) psum[i + 1] = psum[i] + nums[i];
        
        List<Long> ans = new ArrayList<>();
        
        for(int i = 0;i < m;i++){
            
            int si = 0,ei = n - 1,idx = 0;
            while(si <= ei){
                int mid = si + (ei - si) / 2;
                
                if(nums[mid] <= queries[i]){
                    idx = mid + 1;
                    si = mid + 1;
                }else{
                    idx = mid;
                    ei = mid - 1;
                }
            }
            
            long left = (1L * queries[i] * idx) - psum[si]; 
            long right = (psum[n] - psum[idx]) - (1L * queries[i] * (n - idx));
            
            ans.add(left + right);
        }
        return ans;
    }
# explaination


##### \u2022	The minOperations function takes two integer arrays as input, nums and queries, and returns a list of long integers as output. For each query in the queries array, the function computes the minimum number of operations required to make all the elements in the nums array greater than or equal to the query value.

##### \u2022	First, the function initializes two variables, n and m, to the lengths of the nums and queries arrays respectively. It then sorts the nums array in ascending order using Arrays.sort().

##### \u2022	Next, the function initializes a new array called psum of length n + 1. It then populates the psum array with prefix sums of the nums array using a for loop. Specifically, it sets psum[0] to 0, and for each index i from 0 to n - 1, it sets psum[i + 1] to psum[i] + nums[i].

##### \u2022	The function then initializes an empty list called ans to store the results of each query.

##### \u2022	For each query in the queries array, the function performs a binary search on the nums array to find the index of the first element that is greater than the query value. It initializes three variables, si, ei, and idx, to 0, n - 1, and 0 respectively. It then enters a while loop that continues as long as si is less than or equal to ei. In each iteration of the loop, it calculates the midpoint of the current search range using (si + ei) / 2. If the midpoint element is less than or equal to the query value, it updates idx to the midpoint index plus 1, and sets si to the midpoint index plus 1. Otherwise, it updates idx to the midpoint index, and sets ei to the midpoint index minus 1. Once the loop exits, idx will contain the index



```
HERE https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3347750/100-0ms-explained-dry-run-meme/

# DRY RUN 1
First, we sort the nums vector in ascending order: nums = [1, 3, 6, 8]. Next, we create a new vector called aug, which will store pairs of each query and its index in the queries vector. In this case, aug = [(1, 0), (5, 1)]. We sort the aug vector in ascending order based on the query value: aug = [(1, 0), (5, 1)]. We create a new vector called ans to store the results of each query. We calculate the total sum of the nums vector using the accumulate function: total = 18. We initialize the prefix variable to 0. We set k to 0. We loop through each pair in the aug vector. For the first pair, q = 1 and i = 0. For the second pair, q = 5 and i = 1. For each pair, we loop through the nums vector while k < nums.size() and nums[k] < q. In this case, k starts at 0 and nums[k] = 1, which is less than q = 1, so we do not enter the loop. For the second pair, k is still 0 and nums[k] = 1, which is less than q = 5, so we enter the loop. We add nums[k] = 1 to prefix, increment k to 1, and check if nums[k] < q. Since nums[k] = 3 is less than q = 5, we add nums[k] = 3 to prefix, increment k to 2, and check again. Since nums[k] = 6 is not less than q = 5, we exit the loop. For the first pair, we calculate ans[i] = total - 2prefix + (long long) q(2k - nums.size()) = 18 - 20 + (long long) 1*(20 - 4) = 14. For the second pair, we calculate ans[i] = total - 2prefix + (long long) q*(2k - nums.size()) = 18 - 24 + (long long) 5*(2*2 - 4) = 10. We return the ans vector: [14, 10].

# dry run 2

First, we sort the nums vector in ascending order: nums = [2, 3, 6, 9]. Next, we create a new vector called aug, which will store pairs of each query and its index in the queries vector. In this case, aug = [(10, 0)]. We sort the aug vector in ascending order based on the query value: aug = [(10, 0)]. We create a new vector called ans to store the results of each query. We calculate the total sum of the nums vector using the accumulate function: total = 20. We initialize the prefix variable to 0. We set k to 0. We loop through each pair in the aug vector. For the only pair, q = 10 and i = 0. For the pair, we loop through the nums vector while k < nums.size() and nums[k] < q. In this case, k starts at 0 and nums[k] = 2, which is less than q = 10, so we enter the loop. We add nums[k] = 2 to prefix, increment k to 1, and check if nums[k] < q. Since nums[k] = 3 is less than q = 10, we add nums[k] = 3 to prefix, increment k to 2, and check again. Since nums[k] = 6 is less than q = 10, we add nums[k] = 6 to prefix, increment k to 3, and check again. Since nums[k] = 9 is not less than q = 10, we exit the loop. For the pair, we calculate ans[i] = total - 2 * prefix + (long long) q * (2 * k - nums.size()) = 20 - 2 * (2 + 3 + 6) + (long long) 10 * (2 * 4 - 4) = 20. We return the ans vector: [20].

# Complexity
# Time complexity: 
O(nlogn + qlogq), where n is the length of the nums vector and q is the length of the queries vector. The sort function has a time complexity of O(nlogn) for sorting the nums vector and O(qlogq) for sorting the aug vector. The while loop inside the for loop has a time complexity of O(n) in the worst case, but since k is incremented at each iteration, the total time complexity of the while loop is O(n) for all iterations of the for loop. Therefore, the overall time complexity of the code is dominated by the sort function, which has a time complexity of O(nlogn + qlogq).

# Space complexity: 
O(q), where q is the length of the queries vector. The aug vector has a space complexity of O(q) and the ans vector has a space complexity of O(q), so the total space complexity of the code is O(q).

![meme2.png](./images/0.png)

