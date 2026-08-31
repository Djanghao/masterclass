# ✅ Clean and fully Explained Code🔥|| Step by Step breakdown

**Author:** UK07
**Votes:** 135
**Link:** [https://leetcode.com/problems/longest-square-streak-in-an-array/solutions/5976360/](https://leetcode.com/problems/longest-square-streak-in-an-array/solutions/5976360/)

---

# Intuition
The problem involves finding the longest "square streak" in a list of numbers, where each number in a streak is the square of the previous number. Observing the problem, one might realize that if we can store and reference each square root's streak length, we can build up streaks efficiently by iterating over a sorted list of numbers.

# Approach
1. **Sort the Array**: Sorting the input list of numbers in ascending order ensures that smaller numbers and their squares appear before the larger squares in the list.
2. **Initialize a Map**: Use a map `mp` to keep track of the streak length for each number.
3. **Iterate Through Numbers**: For each number in the sorted list, calculate its integer square root.
   - If the number is a perfect square (i.e., the square of the square root equals the number) and the square root exists in the map, we can extend a streak.
   - Update the map entry for the current number to `mp[_sqrt] + 1` to indicate it's part of an extended streak.
4. **Track the Longest Streak**: Update the result with the maximum streak length found during the iteration.

Finally, return the result, which represents the longest square streak.

# Complexity
- Time complexity:  
  Sorting takes $$O(n \\log n)$$, and iterating over the list to calculate the square root and update the map takes $$O(n)$$, making the overall complexity $$O(n \\log n)$$.

- Space complexity:  
  The map `mp` may store up to $$O(n)$$ entries (for each unique number in `nums`), giving a space complexity of $$O(n)$$.

# Code Breakdown:
- **Sorting**: Sorts the array in $$O(n \\log n)$$ to ensure that smaller squares are processed before larger ones.
- **Map Setup**: A map `mp` tracks the length of streaks associated with each number.
- **Square Check and Update**: For each number, we check if it\u2019s a perfect square and if its square root has a streak in the map, extending that streak if both conditions are met. Otherwise, we initialize a new streak.
- **Result Calculation**: The maximum streak length is updated continuously, so at the end, `res` contains the length of the longest square streak.


# Code
```cpp []
class Solution {
public:
    int longestSquareStreak(vector<int>& nums) {
        map<int, int>mp;
        sort(nums.begin(), nums.end());
        int res = -1;
        for(int num: nums) {
            int _sqrt = sqrt(num);
            if(_sqrt*_sqrt == num && mp.find(_sqrt)!=mp.end()) {
                mp[num] = mp[_sqrt]+1;
                res = max(res, mp[num]);
            } else mp[num] = 1;
        }
        return res;
    }
};
```
```java []
class Solution {
    public int longestSquareStreak(int[] nums) {
        Map<Integer, Integer> mp = new HashMap<>();
        Arrays.sort(nums);
        int res = -1;

        for (int num : nums) {
            int sqrt = (int) Math.sqrt(num);

            if (sqrt * sqrt == num && mp.containsKey(sqrt)) {
                mp.put(num, mp.get(sqrt) + 1);
                res = Math.max(res, mp.get(num));
            } else {
                mp.put(num, 1);
            }
        }
        return res;
    }
}
```
```python []
class Solution:
    def longestSquareStreak(self, nums):
        mp = {}
        nums.sort()
        res = -1

        for num in nums:
            sqrt = isqrt(num)

            if sqrt * sqrt == num and sqrt in mp:
                mp[num] = mp[sqrt] + 1
                res = max(res, mp[num])
            else:
                mp[num] = 1

        return res
```
```javascript []
function longestSquareStreak(nums) {
    const mp = new Map();
    nums.sort((a, b) => a - b);
    let res = -1;

    for (const num of nums) {
        const sqrt = Math.floor(Math.sqrt(num));

        if (sqrt * sqrt === num && mp.has(sqrt)) {
            mp.set(num, mp.get(sqrt) + 1);
            res = Math.max(res, mp.get(num));
        } else {
            mp.set(num, 1);
        }
    }

    return res;
}
```
```golang []
func longestSquareStreak(nums []int) int {
    mp := make(map[int]int)
    sort.Ints(nums)
    res := -1

    for _, num := range nums {
        sqrt := int(math.Sqrt(float64(num)))

        if sqrt*sqrt == num {
            if val, exists := mp[sqrt]; exists {
                mp[num] = val + 1
                if mp[num] > res {
                    res = mp[num]
                }
            } else {
                mp[num] = 1
            }
        } else {
            mp[num] = 1
        }
    }

    return res
}
```
```rust []
impl Solution {
    pub fn longest_square_streak(nums: Vec<i32>) -> i32 {
        let mut mp = HashMap::new();
        let mut nums = nums.clone();
        nums.sort();
        let mut res = -1;

        for &num in &nums {
            let sqrt = (num as f64).sqrt() as i32;

            if sqrt * sqrt == num {
                if let Some(&streak) = mp.get(&sqrt) {
                    let new_streak = streak + 1;
                    mp.insert(num, new_streak);
                    res = res.max(new_streak);
                } else {
                    mp.insert(num, 1);
                }
            } else {
                mp.insert(num, 1);
            }
        }

        res
    }
}
```

![image.png](./images/0.png)
