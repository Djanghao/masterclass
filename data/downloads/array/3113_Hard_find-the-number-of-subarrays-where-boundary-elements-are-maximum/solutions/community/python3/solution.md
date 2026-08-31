# 【EN/中文】 Monotonic stack 单调栈

**Author:** RealFan
**Votes:** 33
**Link:** [https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5017085/](https://leetcode.com/problems/find-the-number-of-subarrays-where-boundary-elements-are-maximum/solutions/5017085/)

---

# Intuition
1. When encountering this kind of counting problem, the most common idea is to enumerate one end and count the feasible number of the other end. We try to enumerate the right end.
    \u78B0\u5230\u8FD9\u79CD\u8BA1\u6570\u7684\u95EE\u9898\uFF0C\u6700\u5E38\u89C1\u7684\u601D\u8DEF\u662F\u679A\u4E3E\u4E00\u7AEF\uFF0C\u5E76\u7EDF\u8BA1\u53E6\u4E00\u7AEF\u7684\u53EF\u884C\u6570\u91CF\u3002\u8FD9\u91CC\u6211\u4EEC\u5C1D\u8BD5\u679A\u4E3E\u53F3\u7AEF\u3002
2. To enumerate the right end $$x$$, you need to calculate how many $$x$$ can be used as the left end. And there mustn't exist larger elements between two ends. Noitce the important property: 
    - **If a larger element $$y$$ appears in the middle, it can mask out all $$x$$ occurs at the left.**

    \u679A\u4E3E\u53F3\u7AEF$$x$$\uFF0C\u9700\u8981\u8BA1\u7B97\u6709\u591A\u5C11\u4E2A$$x$$\u53EF\u4EE5\u4F5C\u4E3A\u5DE6\u7AEF\uFF0C\u4E24\u7AEF\u4E4B\u95F4\u4E0D\u80FD\u6709\u66F4\u5927\u7684\u5143\u7D20\u3002\u6CE8\u610F\u5230\u91CD\u8981\u7684\u6027\u8D28\uFF1A
    - **\u5982\u679C\u6709\u4E00\u4E2A\u66F4\u5927\u7684\u5143\u7D20$$y$$\u51FA\u73B0\u5728\u4E2D\u95F4\uFF0C\u5219\u5B83\u53EF\u4EE5\u5C4F\u853D\u6389\u5176\u5DE6\u4FA7\u6240\u6709\u7684$$x$$\u3002**
3. Immediately consider using a monotonic stack to solve the problem. 
    \u90A3\u4E48\u7ACB\u523B\u8003\u8651\u5230\u4F7F\u7528\u5355\u8C03\u6808\u6765\u89E3\u51B3\u3002


*Stack is usually used for "**elements enters later have some strategy to block which enters before**". If that strategy is based on the quantitative relationship, an ordered sequence will automatically formed inside the stack, so it's called "monotonic stack".
    \u6808\u5E38\u7528\u4E8E\u201C**\u540E\u8FDB\u5165\u7684\u5143\u7D20\u53EF\u4EE5\u6709\u67D0\u79CD\u7B56\u7565\u5C4F\u853D\u5148\u8FDB\u5165\u7684\u5143\u7D20**\u201D\u3002\u800C\u5F53\u8FD9\u79CD\u5C4F\u853D\u7B56\u7565\u6765\u81EA\u4E8E\u5927\u5C0F\u5173\u7CFB\u65F6\uFF0C\u6808\u5185\u4F1A\u81EA\u52A8\u5F62\u6210\u6709\u5E8F\u7684\u5E8F\u5217\uFF0C\u5219\u8BE5\u6808\u88AB\u79F0\u4E3A\u201C\u5355\u8C03\u6808\u201D\u3002*

# Approach

Enumerate all right end $$x$$, maintaining `(value, count)` pairs in a monotonic stack. If the value of the last pair is equal to the current $$x$$, it means that these $$x$$ can be used as left end to match the current $$x$$.

\u679A\u4E3E\u6240\u6709\u7684\u53F3\u7AEF\u70B9$$x$$\uFF0C\u5728\u5355\u8C03\u6808\u4E2D\u7EF4\u62A4`\uFF08\u503C\uFF0C\u8BA1\u6570\uFF09`\u5BF9\u3002\u5982\u679C\u6700\u540E\u4E00\u4E2A\u5BF9\u7684\u503C\u4E0E\u5F53\u524D\u7684$$x$$\u76F8\u7B49\uFF0C\u5219\u8868\u660E\u8FD9\u4E9B$$x$$\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u5DE6\u7AEF\u70B9\u4E0E\u5F53\u524D\u7684$$x$$\u8FDB\u884C\u5339\u914D\u3002

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
``` C++ []
class Solution {
public:
    long long numberOfSubarrays(vector<int>& nums) {
        long long res = 0;
        stack<vector<int>> s;
        for (auto c: nums) {
            while (s.size() && s.top()[0] < c) s.pop();
            if (s.size() == 0 || s.top()[0] > c) s.push({c, 0});
            res += ++s.top()[1];
        }
        return res;
    }
};
```
``` Java []
class Solution {
    public long numberOfSubarrays(int[] nums) {
        ArrayDeque<int[]> s = new ArrayDeque<>();
        long res = 0;
        for (int c : nums) {
            while (s.size() > 0 && s.peek()[0] < c)
                s.pop();
            if (s.size() == 0 || s.peek()[0] > c)
                s.push(new int[]{c, 0});
            res += ++s.peek()[1];
        }
        return res;
    }
}
```
``` Python3 []
class Solution:
    def numberOfSubarrays(self, nums: List[int]) -> int:
        s, res = [], 0
        for c in nums:
            while len(s) and s[-1][0] < c: s.pop()
            if len(s) == 0 or s[-1][0] > c: s.append([c, 0])
            s[-1][1] += 1
            res += s[-1][1]
        return res
```
``` C []
long long numberOfSubarrays(int* nums, int numsSize) {
    int *s = (int*)malloc(2 * numsSize * sizeof(int)), *p = s, i;
    long long res = 0;
    for (i = 0; i < numsSize; ++i) {
        while (p != s && p[-2] < nums[i]) p -= 2;
        if (p == s || p[-2] > nums[i]) {
            p[0] = nums[i];
            p[1] = 0;
            p += 2;
        }
        res += ++p[-1];
    }
    free(s);
    return res;
}
```
``` C# []
public class Solution {
    public long NumberOfSubarrays(int[] nums) {
        Stack s = new Stack();
        long res = 0;
        foreach (var c in nums) {
            while (s.Count > 0 && (s.Peek() as int[])[0] < c)
                s.Pop();
            if (s.Count == 0 || (s.Peek() as int[])[0] > c)
                s.Push(new int[]{c, 0});
            res += ++(s.Peek() as int[])[1];
        }
        return res;
    }
}
```
``` Javascript []
var numberOfSubarrays = function(nums) {
    let s = [];
    let res = 0;
    for (let c of nums) {
        while (s.length > 0 && s[s.length-1][0] < c) 
            s.pop();
        if (s.length === 0 || s[s.length-1][0] > c) 
            s.push([c, 0]);
        s[s.length-1][1] += 1;
        res += s[s.length-1][1];
    }
    return res;
};
```
``` TypeScript []
function numberOfSubarrays(nums: number[]): number {
    let s: number[][] = [];
    let res: number = 0;
    for (let c of nums) {
        while (s.length > 0 && s[s.length-1][0] < c) 
            s.pop();
        if (s.length === 0 || s[s.length-1][0] > c) 
            s.push([c, 0]);
        s[s.length-1][1] += 1;
        res += s[s.length-1][1];
    }
    return res;
};


```
``` Go []
func numberOfSubarrays(nums []int) int64 {
    var res int64 = 0
    var s [][]int
    for _, c := range nums {
        for len(s) > 0 && s[len(s)-1][0] < c {
            s = s[:len(s)-1]
        }
        if len(s) == 0 || s[len(s)-1][0] > c {
            s = append(s, []int{c, 0})
        }
        s[len(s)-1][1]++
        res += int64(s[len(s)-1][1])
    }
    return res
}
```
``` Rust []
impl Solution {
    pub fn number_of_subarrays(nums: Vec<i32>) -> i64 {
        let mut res = 0;
        let mut s: Vec<Vec<i32>> = Vec::new();
        for c in nums {
            while s.len() > 0 && s.last().unwrap()[0] < c {
                s.pop();
            }
            if s.len() == 0 || s.last().unwrap()[0] > c {
                s.push(vec![c, 0]);
            }
            s.last_mut().unwrap()[1] += 1;
            res += s.last().unwrap()[1] as i64;
        }
        res
    }
}
```
``` Swift []
class Solution {
    func numberOfSubarrays(_ nums: [Int]) -> Int {
        var s: [[Int]] = []
        var res: Int = 0
        for c in nums {
            while !s.isEmpty && s.last![0] < c {
                s.removeLast()
            }
            if s.isEmpty || s.last![0] > c {
                s.append([c, 0])
            }
            s[s.count-1][1] += 1
            res += s.last![1]
        }
        return res
    }
}
```
