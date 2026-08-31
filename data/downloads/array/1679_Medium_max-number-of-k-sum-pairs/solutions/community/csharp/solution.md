# Two solutions: Map, Two pointers

**Author:** ilya-chumakov
**Votes:** 5
**Link:** [https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/3564973/](https://leetcode.com/problems/max-number-of-k-sum-pairs/solutions/3564973/)

---

Here are two approaches, they differ by time and space complexities.

# Approach 1: Two pointers
First of all, we sort the array in-place, it takes $$O(n*log(n))$$ time. Then we place one pointer to the begin and the second to the end. We name it "left" and "right" respectively and check the sum of corresponding elements.
1. Sum equals `k`. This is the target pair, we move both pointers towards each other.
2. Sum is smaller than `k`. We move the left pointer to increase the sum.
3.  Sum is bigger than `k`. We move the right pointer to decrease the sum.


# Complexity
- Time complexity: $$O(n*log(n))$$ - in-place sorting.

- Space complexity: $$O(1)$$.

# Code
```
public class Solution
{
    public int MaxOperations(int[] nums, int k)
    {
        Array.Sort(nums);
        int answer = 0;
        int l = 0;
        int r = nums.Length - 1;

        while (l < r)
        {
            int sum = nums[l] + nums[r];
            
            if (sum == k)
            {
                answer++;
                l++;
                r--;
            }
            else if (sum < k)
            {
                l++;
            }
            else
            {
                r--;
            }
        }
        return answer;
    }
}
```


# Approach 2: Map
Let's declare a map to store value-count pair. We traverse the array, checking for each value if its complementary is on the map. If so, we decrease the count for the complementary value. This imitates removing a pair from the array. If there is no complementary, we add current value to the map with count 1, or increase existing count by 1.

# Complexity
- Time complexity: $$O(n)$$ - array is traversed once.

- Space complexity: $$O(n)$$ - a dictionary of size up to `n` is declared.

# Code
```
public class Solution
{
    public int MaxOperations(int[] nums, int k)
    {
        var map = new Dictionary<int, int>();
        int answer = 0;
        foreach (int num in nums)
        {
            if (map.ContainsKey(k - num) && map[k - num] > 0)
            {
                map[k - num]--;
                answer++;
            }
            else
            {
                if (!map.TryAdd(num, 1))
                {
                    map[num]++;
                }
            }
        }
        return answer;
    }
}
```