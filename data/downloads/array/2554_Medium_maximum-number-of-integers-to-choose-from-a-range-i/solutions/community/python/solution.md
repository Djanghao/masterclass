# Beats 100% | Array | Solution for LeetCode#2554

**Author:** samir023041
**Votes:** 52
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6117769/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6117769/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to count the maximum number of integers we can choose from 1 to n, excluding the banned numbers, such that their sum doesn't exceed maxSum.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Create an array arr to mark banned numbers.
2. Iterate through the banned array and mark those numbers in arr.
3. Iterate from 1 to n:
	- Skip banned numbers.
	- Add each non-banned number to the sum.
	- If the sum exceeds maxSum, break the loop.
	- Increment the count for each valid number.
4. Return the final count.

# Complexity
- Time complexity: O(banned.length + n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(10001)  [ ~O(1) ]
We use a fixed-size array of 10001 elements, which is considered constant space.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int maxCount(int[] banned, int n, int maxSum) {
        int[] arr=new int[10001];
        for(int i=0; i<banned.length; i++){
            arr[banned[i]]=1;
        }

        long sum=0;
        int cnt=0;
        for(int i=1; i<=n; i++){
            if(arr[i]==1){continue;}
            sum+=i;
            if(sum>maxSum){
               break;
            }
            cnt++;
        }

        return cnt;
    }
}
```

```cpp []
class Solution {
public:
    int maxCount(vector<int>& banned, int n, int maxSum) {
        // Create a set to mark banned numbers
        unordered_set<int> bannedSet(banned.begin(), banned.end());
        
        long long sum = 0; // Track cumulative sum
        int count = 0;     // Track count of valid numbers

        // Iterate through 1 to n
        for (int i = 1; i <= n; i++) {
            if (bannedSet.count(i)) continue; // Skip banned numbers
            sum += i; // Add current number to the sum
            if (sum > maxSum) break; // Stop if sum exceeds maxSum
            count++; // Increment count of valid numbers
        }

        return count; // Return the count of valid numbers
    }
};

```
```csharp []
public class Solution {
    public int MaxCount(int[] banned, int n, int maxSum) {
        int[] arr = new int[10001];
        foreach (int num in banned) {
            arr[num] = 1;
        }

        long sum = 0;
        int cnt = 0;
        for (int i = 1; i <= n; i++) {
            if (arr[i] == 1) continue;
            sum += i;
            if (sum > maxSum) {
                break;
            }
            cnt++;
        }

        return cnt;
    }
}
```
```Python3 []
class Solution:
    def maxCount(self, banned: list[int], n: int, maxSum: int) -> int:
        banned_set = set(banned)  # Use a set for quick lookups
        total_sum = 0  # Track the cumulative sum
        count = 0  # Track the count of valid numbers

        for i in range(1, n + 1):
            if i in banned_set:
                continue  # Skip banned numbers
            total_sum += i
            if total_sum > maxSum:
                break  # Stop if the sum exceeds maxSum
            count += 1

        return count

```
```Swift []
class Solution {
    func maxCount(_ banned: [Int], _ n: Int, _ maxSum: Int) -> Int {
        var arr = [Int](repeating: 0, count: 10001)
        for num in banned {
            arr[num] = 1
        }
        
        var sum: Int64 = 0
        var cnt = 0
        for i in 1...n {
            if arr[i] == 1 { continue }
            sum += Int64(i)
            if sum > Int64(maxSum) {
                break
            }
            cnt += 1
        }
        
        return cnt
    }
}
```
