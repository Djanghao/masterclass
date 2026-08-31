# ✔💯 DAY 395 | EASY | 100% 0ms | [PYTHON/JAVA/C++] | EXPLAINED | Approach 🆙🆙🆙

**Author:** ManojKumarPatnaik
**Votes:** 21
**Link:** [https://leetcode.com/problems/make-array-empty/solutions/3469773/](https://leetcode.com/problems/make-array-empty/solutions/3469773/)

---

# Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
# Intuition & Approach
<!-- Describe your approach to solving the problem. -->
Intuition:

Think backwards: simulate in reverse direction. When you remove the last remaining element, how will it affect? When you will have 2 elements left, how will it affect and so on\u2026

The relative position of an element to the next element which will be removed will determine the number of operations required to remove that element.

Approach:

Store the index and element in an array and then sort the array. This will tell us if after doing some operation what will be the relative position of that given element to the next element which will be removed.

Use a HashMap to store the index of each element in the input array.

Iterate over the sorted array in reverse order, starting from the second last element.

For each element, check if its index in the original array is greater than the index of the next element to be removed. If it is, then the element will move to the end of the array after the next element is removed, and we need to perform n - i operations to remove it, where n is the length of the input array. Otherwise, we only need to perform 1 operation to remove the element.

Add the number of operations required to remove the current element to the answer.

Return the answer.

The time complexity of this approach is O(n log n), where n is the length of the input array, due to the sorting operation.


# Code
```java []
public long countOperationsToEmptyArray(int[] nums) {
    HashMap<Integer,Integer> map = new HashMap<>();
    int n=nums.length;
    for(int i=0;i<n;i++)map.put(nums[i],i);
    Arrays.sort(nums);
    long ans=1;
    for(int i=n-2;i>=0;i--){
        ans += (map.get(nums[i])>map.get(nums[i+1]))?n-i:1;
    }return ans;
}
```
```python []
def countOperationsToEmptyArray(self, nums: List[int]) -> int:
    n = len(nums)
    map = {nums[i]: i for i in range(n)}
    nums.sort()
    ans = 1
    for i in range(n - 2, -1, -1):
        ans += (map[nums[i]] > map[nums[i+1]]) * (n - i) + (map[nums[i]] <= map[nums[i+1]])
    return ans
```
```c++ []
 long countOperationsToEmptyArray(vector<int>& nums) {
        unordered_map<int, int> map;
        int n = nums.size();
        for(int i = 0; i < n; i++) {
            map[nums[i]] = i;
        }
        sort(nums.begin(), nums.end());
        long ans = 1;
        for(int i = n - 2; i >= 0; i--) {
            ans += (map[nums[i]] > map[nums[i+1]]) ? n - i : 1;
        }
        return ans;
    }
```




# Complexity
- Time complexity: o(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:o(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

Please Upvote as it really motivates me \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99


![BREUSELEE.webp](./images/0.webp)
![image.png](./images/1.png)


# Please Upvote\uD83D\uDC4D\uD83D\uDC4D
Thanks for visiting my solution.\uD83D\uDE0A Keep Learning
Please give my solution an upvote! \uD83D\uDC4D \uD83C\uDD99\uD83C\uDD99\uD83C\uDD99
It's a simple way to show your appreciation and
keep me motivated. Thank you! \uD83D\uDE0A