# Java | Prefix sum | Easy to Understand | What if constraints were different

**Author:** SudhanshuMallick
**Votes:** 16
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/1284329/](https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/1284329/)

---

**Here I am discussing my approach to this problem**
**Approach:**
1. Here `1 <= nums[i] <= 100`, which kind of helps us to **solve it easily**.
2. Create a `count` array which **stores the count of each number from 1 to 100** till` ith` index for each index.
3. Traverse the queries array, each query will have a `low` and `high` index / range.
	3.1 Traverse all numbers from 1 to 100 and **get the count of each of them** from `low index` to `high index`. It can easily be done using `count array` (**constant time**).
	3.2 **Store** those numbers in a `list`, which have `count > 0` in the given range, because it means that these **numbers are present**.
	3.3 **If ->** the **size of list is equal to 1**, make answer of this query as **-1**, because we don't have any **distinct pair to calculate the difference**.
	3.4 **Else ->** travese all the elements from `lowest to highest` and get **the minimum difference**, it will be obvious to **traverse the list elements in increasing or decreasing order**, because then only we will **get any pair with minimum absolute difference**.
4. **Return** the `answer` array formed.

**Source Code:**
```
class Solution {
    public int[] minDifference(int[] nums, int[][] queries) {
        int n = nums.length;
        int[][] count = new int[n + 1][100];
        int q = queries.length;
        int ans[] = new int[q];
        
        for(int i = 0; i < n; ++i) {
            for(int j = 0; j < 100; ++j)
                count[i + 1][j] = count[i][j];
            
            ++count[i + 1][nums[i] - 1];
        }
        
        for(int i = 0; i < q; ++i) {
            int low = queries[i][0];
            int high = queries[i][1] + 1;
            List<Integer> present = new ArrayList<>();
            int min = 100;
            
            for(int j = 0; j < 100; ++j)
                if(count[high][j] - count[low][j] != 0)
                    present.add(j);
            
            for(int j = 1; j < present.size(); ++j)
                min = Math.min(min, present.get(j) - present.get(j - 1));
            
            if(present.size() == 1)
                min = -1;
            
            ans[i] = min;
        }
        
        return ans;
    }
}
```

**Complexity Analysis:**
```
Time Compexity: O((m + n) * 100) // m = queries.length, n = nums.length
Space Complexity: O(n * 100) // n = nums.length
```

**Thing to ponder about:**
What if nums[i] range is from 0 to 10<sup>5</sup> ?