# C++/Java/Python/JavaScript |||==> 🚀 ✅ Optimized with Stack (10 Lines of code) ||| 🚀 ✅ Brute Force

**Author:** devanshupatel
**Votes:** 71
**Link:** [https://leetcode.com/problems/next-greater-element-i/solutions/3384541/](https://leetcode.com/problems/next-greater-element-i/solutions/3384541/)

---

# Intuition:
The problem asks us to find the next greater element for each element in nums1 in the corresponding position of nums2. If there is no next greater element in nums2, the output should be -1 for that element.

# Approach:

There are two common approaches to solve this problem:

## Brute Force Approach
The brute force approach is straightforward. For each element in nums1, iterate through nums2 to find the matching element. Once we find the matching element, iterate through the remaining elements in nums2 to find the next greater element. If we find a greater element, update the max variable. Finally, add max to the answer vector.

## Using stack with map
The second approach uses a stack and a map. We traverse nums2 and push each element onto the stack. If the current element is greater than the top element of the stack, we pop elements from the stack and add them to the map with the current element as the value. Once we finish traversing nums2, we iterate through nums1 and check if each element has a next greater element in the map. If it has, we update the element in nums1 with the corresponding value in the map. Otherwise, we update the element in nums1 with -1.

# Complexity:

## Time Complexity:

- Approach 1: Brute Force Approach
For each element in nums1, we iterate through nums2. So, the time complexity is O(n*m), where n and m are the lengths of nums1 and nums2, respectively.
- Approach 2: Using stack with map
We traverse nums2 once and push each element onto the stack. So, the time complexity of this step is O(m).
For each element in nums1, we check if it has a next greater element in the map. The time complexity of this step is O(n).
So, the overall time complexity is O(n+m).
## Space Complexity:

- Approach 1: Brute Force Approach
We use an answer vector to store the next greater elements. So, the space complexity is O(n), where n is the length of nums1.
- Approach 2: Using stack with map
We use a stack to store the elements and a map to store the next greater elements. So, the space complexity is O(m+n), where m and n are the lengths of nums1 and nums2, respectively.
# C++
## Approach: Brute Force 
```
class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        vector<int> ans;
        for(int i=0;i<nums1.size();i++){
            int max=-1;
            for(int j=0;j<nums2.size();j++){
                int index=j;
                if(nums1[i]==nums2[j]){ // Found element in nums2 that matches current element in nums1
                     while(index!=nums2.size()){ // Iterate through remaining elements in nums2 to find next greater element
                        if(nums2[index]>nums1[i]){
                            max=nums2[index]; // Update max if we find a greater element
                            break;
                        }
                        index++;
                    }
               }
            }
            ans.push_back(max);
        }
        return ans;
    }
};
```
## Approach: Stack
```
class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        unordered_map<int, int> map; // map for next greater element
        stack<int> st;
        for (int num : nums2) {
            while (!st.empty() && st.top() < num){ // Pop elements from stack and update map with next greater element
                map[st.top()] = num;
                st.pop();
            }
            st.push(num); // Push current element onto stack
        }   
        for (int i = 0; i < nums1.size(); i++){ // Check if each element in nums1 has a next greater element in map
            nums1[i] = map.count(nums1[i]) ? map[nums1[i]] : -1; // Update element in nums1 with next greater element or -1
        }
        return nums1;
    }
};
```
---
# JAVA
## Approach: Brute Force 
```
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        int[] ans = new int[nums1.length];
        for(int i = 0; i < nums1.length; i++){
            int max = -1;
            for(int j = 0; j < nums2.length; j++){
                int index = j;
                if(nums1[i] == nums2[j]){ // Found element in nums2 that matches current element in nums1
                    while(index != nums2.length){ // Iterate through remaining elements in nums2 to find next greater element
                        if(nums2[index] > nums1[i]){
                            max = nums2[index]; // Update max if we find a greater element
                            break;
                        }
                        index++;
                    }
                }
            }
            ans[i] = max;
        }
        return ans;
    }
}

```
## Approach: Stack
```
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        Map<Integer, Integer> map = new HashMap<>(); // map for next greater element
        Stack<Integer> stack = new Stack<>();
        for (int num : nums2) {
            while (!stack.empty() && stack.peek() < num) { // Pop elements from stack and update map with next greater element
                map.put(stack.pop(), num);
            }
            stack.push(num); // Push current element onto stack
        }
        for (int i = 0; i < nums1.length; i++) { // Check if each element in nums1 has a next greater element in map
            nums1[i] = map.containsKey(nums1[i]) ? map.get(nums1[i]) : -1; // Update element in nums1 with next greater element or -1
        }
        return nums1;
    }
}

```
---
# Python
## Approach: Brute Force 
```
class Solution(object):
    def nextGreaterElement(self, nums1, nums2):
        ans = []
        for i in range(len(nums1)):
            max_num = -1
            for j in range(len(nums2)):
                index = j
                if nums1[i] == nums2[j]: # Found element in nums2 that matches current element in nums1
                    while index != len(nums2): # Iterate through remaining elements in nums2 to find next greater element
                        if nums2[index] > nums1[i]:
                            max_num = nums2[index] # Update max if we find a greater element
                            break
                        index += 1
            ans.append(max_num)
        return ans

```
## Approach: Stack
```
class Solution(object):
    def nextGreaterElement(self, nums1, nums2):
        map = {} # map for next greater element
        stack = []
        for num in nums2:
            while stack and stack[-1] < num: # Pop elements from stack and update map with next greater element
                map[stack.pop()] = num
            stack.append(num) # Push current element onto stack
        for i in xrange(len(nums1)): # Check if each element in nums1 has a next greater element in map
            nums1[i] = map.get(nums1[i], -1) # Update element in nums1 with next greater element or -1
        return nums1

```
---
# JavaScript
## Approach: Brute Force 
```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const ans = [];
    for(let i = 0; i < nums1.length; i++){
        let max = -1;
        for(let j = 0; j < nums2.length; j++){
            let index = j;
            if(nums1[i] === nums2[j]){ // Found element in nums2 that matches current element in nums1
                while(index !== nums2.length){ // Iterate through remaining elements in nums2 to find next greater element
                    if(nums2[index] > nums1[i]){
                        max = nums2[index]; // Update max if we find a greater element
                        break;
                    }
                    index++;
                }
            }
        }
        ans.push(max);
    }
    return ans;
}

```
## Approach: Stack
```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map = new Map(); // map for next greater element
    const stack = [];
    for (let num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) { // Pop elements from stack and update map with next greater element
            map.set(stack.pop(), num);
        }
        stack.push(num); // Push current element onto stack
    }
    for (let i = 0; i < nums1.length; i++) { // Check if each element in nums1 has a next greater element in map
        nums1[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1; // Update element in nums1 with next greater element or -1
    }
    return nums1;
}


```