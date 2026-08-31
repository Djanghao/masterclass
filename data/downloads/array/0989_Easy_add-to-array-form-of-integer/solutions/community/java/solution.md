# 🔥🚀Simplest Solution🚀||🔥Full Explanation||🔥C++🔥|| Python3 || Java

**Author:** Naman_Ag
**Votes:** 340
**Link:** [https://leetcode.com/problems/add-to-array-form-of-integer/solutions/3187080/](https://leetcode.com/problems/add-to-array-form-of-integer/solutions/3187080/)

---

# Consider\uD83D\uDC4D
```
                    Please Upvote If You Find It Helpful
```
# Intuition
We are taking `k` as carry.
We start from the last or lowest digit in array `num` add `k`.
Then **update** `k` and move untill the highest digit.
After traversing array if carry is  **>** `0` then we add it to begining of `num`.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
    Example: `num` = [2,1,5], `k` = 806
    At index 2 num = [2, 1, 811] 
    So, `k` = 81 and `num` = [2, 1, 1]

    At index 1 num = [2, 82, 1]
    So, `k` = 8 and `num` = [2, 2, 1]

    At index 0 num = [10, 2, 1]
    So, `k` = 1 and `num` = [0, 2, 1]

    Now `k` > 0
    So, we add at the beginning of num
    `num` = [1, 0, 2, 1]

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    vector<int> addToArrayForm(vector<int>& num, int k) {
        for(int i=num.size()-1;i>=0;i--){
            num[i] += k;
            k = num[i]/10;
            num[i] %= 10;
        }
        while(k > 0){
            num.insert(num.begin(), k%10);
            k /= 10;
        }
        return num;
    }
};
```
```python []
class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        for i in range(len(num) - 1, -1, -1):
            k, num[i] = divmod(num[i] + k, 10)
        while k:
            k, a = divmod(k, 10)
            num = [a] + num
        return num
```
```Java []
public List<Integer> addToArrayForm(int[] num, int K) {
    List<Integer> res = new LinkedList<>();
    for (int i = num.length - 1; i >= 0; --i) {
        res.add(0, (num[i] + K) % 10);
        K = (num[i] + K) / 10;
    }
    while (K > 0) {
        res.add(0, K % 10);
        K /= 10;
    }
    return res;
}
```

```
                    Give a \uD83D\uDC4D. It motivates me alot
```
Let's Connect On [Linkedin](https://www.linkedin.com/in/naman-agarwal-0551aa1aa/)