# [Prefix Sum + Number Theory + Hash Table Tutorial] Subarray Sums Divisible by K

**Author:** never_get_piped
**Votes:** 26
**Link:** [https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5281785/](https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/5281785/)

---

**Topic** :  Prefix Sum, Number Theory, Hash Table

### Prefix Sum:
Prefix sum, also known as cumulative sum, is a technique used in computer science and mathematics to efficiently calculate the sum of a sequence of numbers. The prefix sum of a sequence `a[0], a[1] ... a[n - 1]` is another sequence` s[0], s[1] ... s[n - 1]` where each element `s[i]` represent the sum of the first i elements of the original array. (ChatGPT)

An example of prefix sum array:
`a = [1, 2, 3, 4, 5]` =>
`s = [1, 3, 6, 10, 15]`

### Hash Table:
A Hash table is defined as a data structure used to insert, look up, and remove key-value pairs quickly. It operates on the hashing concept, where each key is translated by a hash function into a distinct index in an array. The index functions as a storage location for the matching value. In simple words, it maps the keys with the value. (GFG Reference)


### Number Thory:
Basic modular math:
```
1. (a % m + b % m) % m === (a + b) % m
2. (a - b) % m === ((a % m - b % m) + m) % m assume a >= b
3. If a < 0, its module value is equivalent to (a % k) + k
```

___

# **Solution**:
To solve this problem, we may use the **prefix sum** skill and basic **modular math** above.

We begin by computing the prefix sum for each index `i` of the provided array `nums`. It's important to note that the sum is computed and maintained positive with modulo by `k`.

With the given example `nums = [4, 5, 0, -2, -3, 1]` and `k = 5`, here is the running prefix sum : `p = [4, 4, 4, 2, 4, 0]`. 

Note that the sum of a subarray `nums[i] + nums[i + 1] + ... nums[j]` can be represented as `p[j] - (i > 0 ? p[i - 1] : 0)`. 

If a subarray  `nums[i] + nums[i + 1] + ... nums[j]` is divisible by k, it must satisfy:
* ` j - i > 0` and
* `(((p[j] % k) - (i > 0 ? (p[i - 1] % k) : 0)) + k ) % k == 0` **=> In simplicity**: `p[j] % k == p[i] % k` or `p[j] % k == 0 if i == 0`

We can utilize a **Hash Table** to store our prefix sums, where each key represents a prefix sum value and its corresponding value is the number of occurrences of that particular value. 

For the current running `j`, if there exists an index `i` in our hash table such that `j > i` and it satisfies the above mentioned two conditions, we increase our result count with its correspoding `(i > 0 ? p[i - 1] : 0)` frequency.


**C++:**
```C++
class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        unordered_map<int, int> prefix_map = {{0, 1}};
        int sum = 0, ans = 0;
        for(int i = 0; i < nums.size(); i++) {
            sum = (sum + nums[i]) % k;
            if(sum < 0) sum += k;
            if(prefix_map.find(sum) != prefix_map.end()) {
                ans += prefix_map[sum];
                prefix_map[sum]++;
            } else {
                prefix_map[sum] = 1;
            }
        }
        return ans;
    }
};
```

**Java**:
```
class Solution {
    public int subarraysDivByK(int[] nums, int k) {
        Map<Integer, Integer> prefix_map = new HashMap<>();
        prefix_map.put(0, 1);
        int sum = 0, ans = 0;
        for(int i = 0; i < nums.length; i++) {
            sum = (sum + nums[i]) % k;
            if(sum < 0) sum += k;
            if(prefix_map.containsKey(sum)) {
                ans += prefix_map.get(sum);
                prefix_map.put(sum, prefix_map.get(sum) + 1);
            } else {
                prefix_map.put(sum, 1);
            }
        }
        return ans;
    }
}
```

**Python**:
```
class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        prefix_map = {0 : 1}
        s, ans = 0, 0
        for i in range(len(nums)):
            s = (s + nums[i]) % k
            if s < 0:
                s += k
            if s in prefix_map:
                ans += prefix_map[s]
                prefix_map[s] += 1
            else:
                prefix_map[s] = 1
        return ans
```

**Go:**
```
func subarraysDivByK(nums []int, k int) int {
    prefix_map := make(map[int]int)
    prefix_map[0] = 1
    sum, ans := 0, 0
    for i := 0; i < len(nums); i++ {
        sum = (sum + nums[i]) % k
        if sum < 0 {
            sum += k
        }
        if _, ok := prefix_map[sum]; ok {
            ans += prefix_map[sum]
            prefix_map[sum]++
        } else {
            prefix_map[sum] = 1
        }
    }
    return ans
}
```

**PHP**:
```
class Solution {
    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function subarraysDivByK($nums, $k) {
        $prefix_map = [0 => 1];
        $sum = 0;
        $ans = 0;
        for($i = 0; $i < count($nums); $i ++) {
            $sum = ($sum + $nums[$i]) % $k;
            if($sum < 0) $sum += $k;
            if(isset($prefix_map[$sum])){
                $ans += $prefix_map[$sum];
                $prefix_map[$sum]++;
            } else {
                $prefix_map[$sum] = 1;
            }
        }
        return $ans;
    }
}
```
**Complexity:**
* Time Complexity : `O(n)`.
* Space Complexity : `O(k)`.

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**