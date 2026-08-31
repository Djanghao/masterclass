# 🆙⬆️💯✅DAY - 500 || [JAVA/C++/PYTHON] || Detailed Explanation || Approach ||  Algorithm⬆️🆙🆙

**Author:** ManojKumarPatnaik
**Votes:** 30
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-score/solutions/3901707/](https://leetcode.com/problems/apply-operations-to-maximize-score/solutions/3901707/)

---

**I hope you find this post helpful! I would appreciate an upvote if you found the post informative and well-written. Thank you!**

# Approach and Algorithm:

1. Compute the prime score of each integer in the array nums. For this, we can use a modified Sieve of Eratosthenes.
   1.1. Initialize a boolean array, prime, of size upper, where upper is the maximum element in nums plus 1.
   1.2. Initialize an integer array, primeScore, of size upper.
   1.3. Set prime[0] and prime[1] to false.
   1.4. For each integer i from 2 to upper-1, if prime[i] is true, increment primeScore[j] for all multiples j of i, and set prime[j] to false.
2. Use a monotonic stack to compute the next greater element with a greater prime score for each integer i in nums. We can do this both from the left and from the right for each i.
   2.1. initialize two arrays, nextGreaterElement and prevGreaterOrEqualElement, of size n, where n is the length of nums.
   2.2. Initialize an empty stack.
   2.3. For each integer i in nums, repeat:
         2.3.1. While the stack is not empty and the prime score of the integer at the top of the stack is less than or equal to the prime score of nums[i], pop the stack.
         2.3.2. Set nextGreaterElement[j] to the index of the top of the stack if the stack is not empty, and to n otherwise, where j is the index of nums[i].
         2.3.3. Push i onto the stack.
   2.4. Reverse the order of nums and repeat steps 2.3.1 to 2.3.3 to compute prevGreaterOrEqualElement.
3. Sort the array tuples, which is an array of pairs of integers, where each pair (num, i) corresponds to the i-th element nums[i], in descending order of the first element in each pair.
4. Loop through the sorted array tuples.
   4.1. Compute the number of operations, which is the minimum of (i - prevGreaterOrEqualElement[i]) * (nextGreaterElement[i] - i) and k, where i is the index of the current tuple.
   4.2. Multiply res by the result of pow(num, operations) modulo MOD using the helper method pow.
   4.3. Decrement k by the number of operations.
   4.4. If k is 0, return res.
5. Return res.

# Time Complexity:
The overall time complexity of this algorithm is O(max(nums)log(max(nums)) + nlog(n)), where n is the length of nums and max(nums) is the maximum element in nums. This is due to the use of a monotonic stack to compute the next greater element and sorting the array tuples, both of which take O(n) time. The computation of the prime scores using a modified Sieve of Eratosthenes takes O(max(nums)log(max(nums))) time.

# Space Complexity:
The overall space complexity of this algorithm is O(max(nums) + n), where max(nums) is the maximum element in nums and n is the length of nums. This is due to the use of the prime, primeScore, nextGreaterElement, prevGreaterOrEqualElement, and tuples arrays, which all take O(max(nums) + n) space. Additionally, the stack used to compute the next greater element takes up to O(n) space.


# Code

```java []
class Solution {
    static final int MOD = 1000000007;

    public int maximumScore(List<Integer> nums, int k) {
        int n = nums.size();

        int upper = Collections.max(nums) + 1;

        boolean[] prime = new boolean[upper];
        int[] primeScore = new int[upper];
        Arrays.fill(prime, true);
        prime[0] = prime[1] = false;
        for (int i = 2; i < upper; i++) {
            if (prime[i]) {
                for (int j = i; j < upper; j += i) {
                    primeScore[j]++;
                    prime[j] = false;
                }
            }
        }

        int[] nextGreaterElement = new int[n];
        Arrays.fill(nextGreaterElement, n);
        Stack<Integer> s = new Stack<>();
        for (int i = n - 1; i >= 0; i--) {
            while (!s.empty() && primeScore[nums.get(i)] >= primeScore[nums.get(s.peek())]) {
                s.pop();
            }
            nextGreaterElement[i] = s.empty() ? n : s.peek();
            s.push(i);
        }

        int[] prevGreaterOrEqualElement = new int[n];
        Arrays.fill(prevGreaterOrEqualElement, -1);
        s = new Stack<>();
        for (int i = 0; i < n; i++) {
            while (!s.empty() && primeScore[nums.get(i)] > primeScore[nums.get(s.peek())]) {
                s.pop();
            }
            prevGreaterOrEqualElement[i] = s.empty() ? -1 : s.peek();
            s.push(i);
        }

        int res = 1;
        int[][] tuples = new int[n][2];
        for (int i = 0; i < n; i++) {
            tuples[i][0] = nums.get(i);
            tuples[i][1] = i;
        }
        Arrays.sort(tuples, new Comparator<int[]>() {
            public int compare(int[] a, int[] b) {
                return b[0] - a[0];
            }
        });
        for (int i = 0; i < n; i++) {
            int num = tuples[i][0];
            int idx = tuples[i][1];
            int operations = Math.min((idx - prevGreaterOrEqualElement[idx]) * (nextGreaterElement[idx] - idx), k);
            res = (int)((1L * res * pow(num, operations)) % MOD);
            k -= operations;
            if (k == 0) {
                return res;
            }
        }

        return res;
    }

    public int pow(int x, int n) {
        int res = 1;
        while (n > 0) {
            if (n % 2 == 1) {
                res = (int)((1L * res * x) % MOD);
            }
            x = (int)((1L * x * x) % MOD);
            n /= 2;
        }
        return res;
    }
}
```
# c++

```
class Solution {
public:
    const int MOD = 1000000007;

    int maximumScore(vector<int>& nums, int k) {
        int n = nums.size();

        int upper = *max_element(nums.begin(), nums.end()) + 1;

        vector<bool> prime(upper, true);
        prime[0] = prime[1] = false;
        vector<int> primeScore(upper, 0);
        for (int i = 2; i < upper; i++) {
            if (prime[i]) {
                for (int j = i; j < upper; j += i) {
                    primeScore[j]++;
                    prime[j] = false;
                }
            }
        }

        vector<int> nextGreaterElement(n, n);
        stack<int> s;
        for (int i = n - 1; i >= 0; i--) {
            while (!s.empty() && primeScore[nums[i]] >= primeScore[nums[s.top()]]) {
                s.pop();
            }
            nextGreaterElement[i] = s.empty() ? n : s.top();
            s.push(i);
        }

        vector<int> prevGreaterOrEqualElement(n, -1);
        s = stack<int>();
        for (int i = 0; i < n; i++) {
            while (!s.empty() && primeScore[nums[i]] > primeScore[nums[s.top()]]) {
                s.pop();
            }
            prevGreaterOrEqualElement[i] = s.empty() ? -1 : s.top();
            s.push(i);
        }

        int res = 1;
        vector<pair<int, int>> tuples(n);
        for (int i = 0; i < n; i++) {
            tuples[i].first = nums[i];
            tuples[i].second = i;
        }
        sort(tuples.rbegin(), tuples.rend());
        for (const auto& [num, i] : tuples) {
            int operations = min((i - prevGreaterOrEqualElement[i]) * (nextGreaterElement[i] - i), k);
            res = (int)((1L * res * pow(num, operations)) % MOD);
            k -= operations;
            if (k == 0) {
                return res;
            }
        }

        return res;
    }

    int pow(int x, int n) {
        int res = 1;
        while (n > 0) {
            if (n % 2 == 1) {
                res = (int)((1L * res * x) % MOD);
            }
            x = (int)((1L * x * x) % MOD);
            n /= 2;
        }
        return res;
    }
};
```
# py

```
class Solution: 
    MOD = 1000000007

    def maximumScore(self, nums: List[int], k: int) -> int:
        n = len(nums)

        upper = max(nums) + 1

        prime = [True]*upper
        prime[0] = prime[1] = False
        primeScore = [0]*upper
        for i in range(2, upper):
            if prime[i]:
                for j in range(i, upper, i):
                    primeScore[j] += 1
                    prime[j] = False

        nextGreaterElement = [n]*n
        s = []
        for i in range(n - 1, -1, -1):
            while s and primeScore[nums[i]] >= primeScore[nums[s[-1]]]:
                s.pop()
            nextGreaterElement[i] = s[-1] if s else n
            s.append(i)

        prevGreaterOrEqualElement = [-1]*n
        s = []
        for i in range(n):
            while s and primeScore[nums[i]] > primeScore[nums[s[-1]]]:
                s.pop()
            prevGreaterOrEqualElement[i] = s[-1] if s else -1
            s.append(i)

        res = 1
        tuples = [[nums[i], i] for i in range(n)]
        tuples.sort(reverse=True)
        for num, idx in tuples:
            operations = min((idx - prevGreaterOrEqualElement[idx]) * (nextGreaterElement[idx] - idx), k)
            res = (res * self.pow(num, operations)) % self.MOD
            k -= operations
            if k == 0:
                return res

        return res

    def pow(self, x: int, n: int) -> int:
        res = 1
        while n > 0:
            if n % 2 == 1:
                res = (res * x) % self.MOD
            x = (x * x) % self.MOD
            n //= 2
        return res
```

# Bonus Tip using streams [Concise code ever] \uD83C\uDD99\u2B06\uFE0F\uD83C\uDD99

```java []
class Solution {//java 1.8+ version
    static final int MOD = 1000000007;
    public int maximumScore(List<Integer> nums, int k) {
        int size = nums.size(),upper = Collections.max(nums) + 1,primeScore[] = new int[upper],nextGreaterElement[] = new int[size],prevGreaterOrEqualElement[] = new int[size];
        boolean[] prime = new boolean[upper]; 
        Arrays.fill(prime, true);
        prime[0] = prime[1] = false;
        IntStream.range(2, upper).forEach(i->{  if (prime[i])
                for (int j = i; j < upper; j += i) {
                    primeScore[j]++;
                    prime[j] = false;
                }}); 
        Arrays.fill(nextGreaterElement, size);
        var refObj = new Object() { Stack<Integer> stack = new Stack<>(); };
        IntStream.range(0, size).map(i->size-1-i).forEach(i->{
            while (!refObj.stack.empty() && primeScore[nums.get(i)] >= primeScore[nums.get(refObj.stack.peek())]) refObj.stack.pop();
            nextGreaterElement[i] = refObj.stack.empty() ? size : refObj.stack.peek();
            refObj.stack.push(i);
        }); 
        Arrays.fill(prevGreaterOrEqualElement, -1);
        refObj.stack = new Stack<>();
        IntStream.range(0, size).forEach(i-> {
            while (!refObj.stack.empty() && primeScore[nums.get(i)] > primeScore[nums.get(refObj.stack.peek())]) refObj.stack.pop();
            prevGreaterOrEqualElement[i] = refObj.stack.empty() ? -1 : refObj.stack.peek();
            refObj.stack.push(i);
        });
        AtomicInteger kValue = new AtomicInteger(k); 
        int tuples[][] = IntStream.range(0, size).mapToObj(i -> new int[] { nums.get(i), i })
                .sorted((a, b) -> Integer.compare(b[0], a[0])).toArray(int[][]::new),res[] = { 1 };
        Arrays.stream(tuples, 0, size).forEach(tuple -> {
            int num = tuple[0];
            int idx = tuple[1];
            int operations = Math.min((idx - prevGreaterOrEqualElement[idx]) * (nextGreaterElement[idx] - idx), kValue.get());
            res[0] = (int) (((long) res[0] * pow(num, operations)) % MOD);
            kValue.addAndGet(-operations);
            if (kValue.get() == 0) return;
        }); return res[0];
    }
    public int pow(int x, int n) {
        int res = 1;
        while (n > 0) {
            if (n % 2 == 1) res = (int) (((long) res * x) % MOD);
            x = (int) (((long) x * x) % MOD);
            n /= 2;
        } return res;
    }
}
```