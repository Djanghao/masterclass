# Faster solution + Easy Explanation || C++ || Java || Python

**Author:** shivam-727
**Votes:** 61
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761659/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761659/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we can think about map to get the prev element in log n time otherwise we have to traverse to all the prev element and find is 
arr[i]-diff is present so we can increament the count of the  arithmetic subsequence and if arr[i]-diff not present we can make that element as a first element of the arithmetic sequence may be that element can be arithmetic subsequence first element.

For detailed explanation you can refer to my youtube channel (hindi Language)
https://youtu.be/438_QMFSpwc
 or link in my profile.Here,you can find any solution in playlists monthwise from June 2023 with detailed explanation.i upload daily leetcode solution video with short and precise explanation (5-10) minutes.
or
search \uD83D\uDC49 `Longest arithmetic subsequence of given difference by Let's Code Together` on youtube 

# Approach

Here is the approach used in the code:

1. Initialize an unordered map `m` to store the frequency of elements encountered in the input vector `arr`.
2. Initialize a variable `mx` to keep track of the maximum length of the subsequence found so far.
3. Iterate over each element in the input vector `arr` using a for loop.
4. For each element `c` at index `i`, check if there is an element `c-difference` present in the map `m`. This is done using the `find` function of the unordered map.
   - If `c-difference` is found in the map, update the frequency of the current element `c` in the map `m` by incrementing the frequency of `c-difference` by 1 and assign it to `m[c]`.
   - If `c-difference` is not found in the map, assign 1 to `m[c]` as it is the first occurrence of `c` with the given difference.
5. Update the maximum length `mx` by taking the maximum value between `mx` and the frequency of the current element `m[c]`.
6. Repeat steps 4-5 for all elements in the input vector `arr`.
7. After the loop completes, return the maximum length `mx`, which represents the length of the longest subsequence with the given difference.

# Complexity
- Time complexity:$$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```C++ []
class Solution {
public:
    int longestSubsequence(vector<int>& arr, int difference) {
       unordered_map<int,int>m;
       int mx=0;
        for(int i=0;i<arr.size();i++){
            int c=arr[i];
            if(m.find(c-difference)!=m.end())
            m[c]=m[c-difference]+1;
            else
            m[c]=1;
            mx=max(mx,m[c]);
        }
        return mx;
    }
};
```
```Java []
class Solution {
    public int longestSubsequence(int[] arr, int difference) {
        Map<Integer, Integer> m = new HashMap<>();
        int mx = 0;
        for (int i = 0; i < arr.length; i++) {
            int c = arr[i];
            if (m.containsKey(c - difference))
                m.put(c, m.get(c - difference) + 1);
            else
                m.put(c, 1);
            mx = Math.max(mx, m.get(c));
        }
        return mx;
    }
}

```
```Python []
class Solution:
    def longestSubsequence(self, arr: List[int], difference: int) -> int:
        m = {}
        mx = 0
        for i in range(len(arr)):
            c = arr[i]
            if c - difference in m:
                m[c] = m[c - difference] + 1
            else:
                m[c] = 1
            mx = max(mx, m[c])
        return mx

```
![upvote-this-you.jpg](./images/0.jpeg)

