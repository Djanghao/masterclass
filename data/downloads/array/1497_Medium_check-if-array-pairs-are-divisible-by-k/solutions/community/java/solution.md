# ✅Can You Pair These Numbers?- Beats 100%  -Explained with [ Video ] -C++/Java/Python/JS -Explained

**Author:** lancertech6
**Votes:** 258
**Link:** [https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5854226/](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5854226/)

---

![Screenshot 2024-10-01 071831.png](./images/0.png)

# YouTube Video Explanation:

<!-- ### To watch the video please click on "Watch On Youtube" option  available the left bottom corner of the thumbnail. -->

**If you want a video for this question please write in the comments**


<!-- https://youtu.be/5ojhfhrKzV0 -->


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2900 Subscribers*
*Current Subscribers: 2885*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to pair elements in the array such that the sum of each pair is divisible by a given integer \\( k \\). For two integers \\( a \\) and \\( b \\), their sum \\( (a + b) \\) is divisible by \\( k \\) if the sum of their remainders when divided by \\( k \\) is either \\( k \\) or \\( 0 \\). This leads us to consider the remainders of each element when divided by \\( k \\).

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Calculate Remainders**:
   - For each number in the array, calculate its remainder when divided by \\( k \\). If the remainder is negative, convert it to a positive remainder by adding \\( k \\).

2. **Frequency Count**:
   - Maintain a frequency array `freq` where `freq[i]` counts how many numbers in the array give a remainder of \\( i \\) when divided by \\( k \\).

3. **Check Pairs**:
   - **Divisible by \\( k \\)**: If a number has a remainder of \\( 0 \\), it must be paired with another number that also has a remainder of \\( 0 \\). Therefore, `freq[0]` should be even.
   - **Pairs of Remainders**: For any remainder \\( i \\), it must be paired with \\( k - i \\). This means that `freq[i]` must equal `freq[k - i]`. 
     - Specifically, for \\( i = 1 \\) to \\( k/2 \\), check that `freq[i]` matches `freq[k - i]`.
   - Handle the special case when \\( k \\) is even: when \\( i = k/2 \\), the numbers with this remainder must also be paired with each other, requiring that `freq[k/2]` be even.
4. **Return Result**:
   - If all conditions are satisfied, return true; otherwise, return false.

# Complexity
- **Time Complexity**: The algorithm iterates over the array to calculate remainders, leading to a complexity of \\( O(n) \\). It then checks the frequency counts, which takes \\( O(k) \\). Therefore, the overall time complexity is \\( O(n + k) \\). Given the constraints, this is efficient.

- **Space Complexity**: The space used for the frequency array is \\( O(k) \\). Since \\( k \\) can be at most \\( 10^5 \\) (as per the problem constraints), the space complexity is acceptable.

# Step By Step Explanation

**Example Input**:
- `arr = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9]`
- `k = 5`

#### Step 1: Calculate Remainders

Create a table to show how each number in the array relates to \\( k \\).

| Number | Remainder (num % k) |
|--------|---------------------|
| 1      | 1                   |
| 2      | 2                   |
| 3      | 3                   |
| 4      | 4                   |
| 5      | 0                   |
| 10     | 0                   |
| 6      | 1                   |
| 7      | 2                   |
| 8      | 3                   |
| 9      | 4                   |

#### Step 2: Count Frequencies of Remainders

Next, we will count the occurrences of each remainder in a frequency array.

| Remainder | Count |
|-----------|-------|
| 0         | 2     |
| 1         | 2     |
| 2         | 2     |
| 3         | 2     |
| 4         | 2     |

#### Step 3: Check Pairing Conditions

Now, let's analyze the conditions for pairing:

1. **Remainder 0**: 
   - Count must be even (since pairs need to be formed).
   - `freq[0] = 2` (even) \u2192 **Condition satisfied**.

2. **Remainders 1 and 4**:
   - `freq[1]` must equal `freq[4]`.
   - `freq[1] = 2` and `freq[4] = 2` \u2192 **Condition satisfied**.

3. **Remainders 2 and 3**:
   - `freq[2]` must equal `freq[3]`.
   - `freq[2] = 2` and `freq[3] = 2` \u2192 **Condition satisfied**.

#### Step 4: Conclusion

Since all pairing conditions are satisfied, we can conclude that it is possible to pair the numbers such that the sum of each pair is divisible by \\( k \\).

**Output**: `true`

### Pairing Example

Here\u2019s a potential pairing based on the remainders:

| Pair     | Sum | Remainder (sum % k) |
|----------|-----|---------------------|
| (1, 9)   | 10  | 0                   |
| (2, 8)   | 10  | 0                   |
| (3, 7)   | 10  | 0                   |
| (4, 6)   | 10  | 0                   |
| (5, 10)  | 15  | 0                   |

Each pair's sum is divisible by \\( k = 5 \\).

### Summary Table

| Step                       | Result             |
|----------------------------|--------------------|
| Calculate remainders       | Complete            |
| Count frequencies           | Complete            |
| Check pairing conditions    | All conditions met  |
| Final result                | true                |


# Code
```java []
class Solution {
    public boolean canArrange(int[] arr, int k) {
        int [] freq = new int[k];
        for(int num: arr){
            int rem = num % k;
            if(rem < 0){
                rem = rem + k;
            }
            freq[rem]++;
        }
        if(freq[0] % 2 != 0){
            return false;
        }
        for(int i = 1;i <= k / 2;i++){
            if(freq[i] != freq[k-i]) {
                return false;
            }
        }
        return true;
    }
}
```
```C++ []
class Solution {
public:
    bool canArrange(vector<int>& arr, int k) {
        vector<int> freq(k, 0);
        for (int num : arr) {
            int rem = num % k;
            if (rem < 0) {
                rem += k;
            }
            freq[rem]++;
        }
        
        if (freq[0] % 2 != 0) {
            return false;
        }
        
        for (int i = 1; i <= k / 2; i++) {
            if (freq[i] != freq[k - i]) {
                return false;
            }
        }
        
        return true;
    }
};
```
```Python []
class Solution(object):
    def canArrange(self, arr, k):
        freq = [0] * k
        for num in arr:
            rem = num % k
            if rem < 0:
                rem += k
            freq[rem] += 1
        
        if freq[0] % 2 != 0:
            return False
        
        for i in range(1, (k // 2) + 1):
            if freq[i] != freq[k - i]:
                return False
        
        return True
        
```
```JavaScript []
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    const freq = new Array(k).fill(0);
        
        for (const num of arr) {
            let rem = num % k;
            if (rem < 0) {
                rem += k;
            }
            freq[rem]++;
        }
        
        if (freq[0] % 2 !== 0) {
            return false;
        }
        
        for (let i = 1; i <= Math.floor(k / 2); i++) {
            if (freq[i] !== freq[k - i]) {
                return false;
            }
        }
        
        return true;
};
```

![upvote.png](./images/1.png)
