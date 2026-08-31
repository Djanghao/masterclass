# C++/Python/Java/JavaScript |🚀✅ Using stack (With small modification in next-greater-element-1)

**Author:** devanshupatel
**Votes:** 38
**Link:** [https://leetcode.com/problems/next-greater-element-ii/solutions/3387062/](https://leetcode.com/problems/next-greater-element-ii/solutions/3387062/)

---


# Intuition:
The problem requires finding the next greater element for each element in the array, considering the array as a circular array. So, we need to compare the elements in the array in a circular manner, and for each element, we need to find the next greater element. One way to do this is to use a stack.

# Approach:
We start by initializing a stack and a vector to store the answer. We loop through the array from the end, twice the size of the array, to simulate a circular array. For each element, we compare it with the top element in the stack. If the top element in the stack is smaller than the current element, we pop it from the stack until the top element is greater than the current element or the stack becomes empty. If the stack is not empty, we store the top element as the next greater element for the current element, otherwise, we store -1. Finally, we push the current element into the stack.

# Complexity:
- Time complexity: The time complexity of the solution is O(n) because we are traversing the array twice, and for each element, we are performing a constant number of operations, which is popping elements from the stack and comparing them with the current element.

- Space complexity: The space complexity of the solution is O(n) because we are using a stack and a vector, each of size n, to store the intermediate results.

---
# C++
```
class Solution {
public:
    vector<int> nextGreaterElements(vector<int>& nums) {
        int n = nums.size();
        stack<int> st;
        vector<int> ans(n);
        for(int i=n*2-1;i>=0;i--){
            while(!st.empty() && st.top()<=nums[i%n]){
                st.pop();
            }
            if(i<n){
                if(!st.empty()){
                    ans[i]=st.top();
                }
                else{
                    ans[i]=-1;
                }
            }
            st.push(nums[i%n]);
        }
        return ans;
    }
};
```

---
# Java
```
class Solution {
    public int[] nextGreaterElements(int[] nums) {
        int n = nums.length;
        Stack<Integer> st = new Stack<>();
        int[] ans = new int[n];
        Arrays.fill(ans, -1);
        for(int i = n * 2 - 1; i >= 0; i--) {
            while(!st.isEmpty() && st.peek() <= nums[i % n]) {
                st.pop();
            }
            if(i < n) {
                ans[i] = st.isEmpty() ? -1 : st.peek();
            }
            st.push(nums[i % n]);
        }
        return ans;
    }
}

```
---
# Python
```
class Solution(object):
    def nextGreaterElements(self, nums):
        n = len(nums)
        st = []
        ans = [-1] * n
        for i in xrange(n * 2 - 1, -1, -1):
            while st and st[-1] <= nums[i % n]:
                st.pop()
            if i < n:
                ans[i] = st[-1] if st else -1
            st.append(nums[i % n])
        return ans

```
---
# JavaScript
```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function nextGreaterElements(nums) {
    const n = nums.length;
    const st = [];
    const ans = new Array(n).fill(-1);
    for(let i = n * 2 - 1; i >= 0; i--) {
        while(st.length && st[st.length - 1] <= nums[i % n]) {
            st.pop();
        }
        if(i < n) {
            ans[i] = st.length ? st[st.length - 1] : -1;
        }
        st.push(nums[i % n]);
    }
    return ans;   
};
```