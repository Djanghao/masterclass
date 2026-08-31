# Sliding | Math | explain formula

**Author:** CS_MONKS
**Votes:** 99
**Link:** [https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4939869/](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4939869/)

---

# Intuition 
The problem requires counting the number of subarrays where the maximum element of the array appears at least k times. This can be approached using a sliding window technique.
# Approach
1. Find max element.
2. l,r starting and ending point of current window.
3. Iterate through the array with the r pointer, decrementing k whenever the element at r equals the maximum element.
4. When k becomes zero, it indicates that the frequency of the maximum element in the current window has reached to k.
5. Increment the l pointer until the frequency of the maximum element in the window becomes  k-1.
6. During this process, count the number of subarrays that can be formed using the current window. This count is equal to the number of elements to the left of the window with the maximum element included.
7. Add this count to the answer.
8. Continue this process until the r pointer reaches the end of the array.
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
- 1. O(1) 
- 2. O(n)

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
![Screenshot from 2024-03-29 14-19-45.png](./images/0.png)


```
Let array= [1, 2, 4, 4, 2, 3] and k=2
```
In my initial answer, I found the subarray ```[4, 4]```. Now, I need to consider how many different ways I can add elements to both the ```left and right sides ```to create different types of arrays.
```
If there are 2 elements on the left side, I can create 3 different types of arrays: 
[1, 2, 4, 4], [2, 4, 4], and [4, 4].

if i move right by one it will create 3 new arrays
[1, 2, 4, 4, 1],  [2, 4, 4, 1], and [4, 4, 1]

[1, 2, 4, 4, 1, 3],  [2, 4, 4, 1, 3], and [4, 4, 1, 3]
as i move right by one 3 new arrays are creating
that's why every time i am incrementing ans by l
```
As I move to the right of this window by adding a new element to each subarray,``` I can create 3 different types of arrays each time I encounter a new element on the right side.``` So, I will add 3 each time I encounter a new element on the right side

```c++ []
class Solution {
public:
    long long countSubarrays(vector<int>& nums, int k) {
        
        int mx=*max_element(begin(nums),end(nums));
        long long ans=0;
        
        int l=0,r=0,n=size(nums);
        while(r<n){
            k-=(nums[r++]==mx);
            while(k==0){
                k+=(nums[l++]==mx);
            }
            ans+=l;
        }
        return ans;
    }
};
```
```python3 []
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        mx,ans,l,r,n=max(nums),0,0,0,len(nums)
        while r<n:
            k-= nums[r]==mx
            r+=1
            while k==0:
                k+=nums[l]==mx
                l+=1
            ans+=l
        return ans;
```
```java []

class Solution {
    public long countSubarrays(int[] nums, int k) {
        int mx = Arrays.stream(nums).max().getAsInt();
        long ans = 0;
        int l = 0,r=0,n=nums.length;
        
        while (r < n) {
            k -= nums[r] == mx ? 1 : 0;
            r++;
            while (k == 0) {
                k += nums[l] == mx ? 1 : 0;
                l++;
            }
            ans += l;
        }
        
        return ans;
    }
}

```
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let mx = Math.max(...nums);
    let ans = 0;
    let l = 0;
    let r = 0;
    const n = nums.length;

    while (r < n) {
        k -= nums[r] === mx ? 1 : 0;
        r++;
        while (k === 0) {
            k += nums[l] === mx ? 1 : 0;
            l++;
        }
        ans += l;
    }

    return ans;
};

```
``` c []
long long countSubarrays(int* nums, int numsSize, int k) {
    int mx=0,l=0,r=0;
    for(int i=0;i<numsSize;i++){
        if(nums[i]>mx)mx=nums[i];
    }
    long long ans=0;
    
    while(r<numsSize){
        k-=(mx==nums[r++]);
        while(k==0){
            k+=(mx==nums[l++]);
        }
        ans+=l;
    }
    return ans;
}
```

# Math
# Understand this thing before jumping into code
  1. let my array is [1,2,4,4,2,3] and k=2
  2. now since 4 is max number and k is 2
  3. i will have only one window [4,4]
 now i have to find out in how many ways i can include left and right side elements in window so that they will form different arrays and freq of 4 remain same.
```
if i just include left side or right side elements
      left side          right side
1.    2,[4,4]           [4,4],2
2.   1,2,[4,4]        [4,4],2,3
 ```
there are only two ways from left side
there are only two ways from right side also
let say there are 'a' ways from left side and 'b' ways from right side
```
so total ways if include both left and right side elements in window = a*b
     2,[4,4],2    2[4,4]2,3    1,2,[4,4],2    1,2[4,4],2,3
```
and  last way is not include any one just [4,4]

```
so total subarrays = no. of ways if i  include(left side elements + right side elements+ both side elements + not include both side elements)
=  a+b+a*b+1
= (a+1)*(b+1)
```
Here a = left elements , b= right elements
```c++ []
class Solution {
public:
    long long countSubarrays(vector<int>& nums, int k) {
        int maxnum = *max_element(begin(nums), end(nums));
        long long ans = 0;
        int n = nums.size();

        vector<int> maxind(1,-1);
        for (int i = 0; i < n; i++) {
            if (nums[i] == maxnum) {
                maxind.push_back(i);
            }
        }
       
        int indsize = maxind.size();

        long long l, r;
      
        for (int i = 1; i <= indsize - k; i++) {
            // Calculate 'l' as the difference between the current maximum index and the previous maximum index
            l = maxind[i] - maxind[i - 1] - 1;
            // Calculate 'r' (number of elements to the right of the window)
            r = n - 1 - maxind[i + k - 1];
           
            ans += (l + 1) * (r + 1);
        }
        return ans;
    }
};

```
``` python3 []
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        maxnum = max(nums)
        ans = 0
        n = len(nums)

        maxind = [-1]  # Initialize with -1 to handle edge case
        for i in range(n):
            if nums[i] == maxnum:
                maxind.append(i)

        indsize = len(maxind)

        for i in range(1, indsize - k + 1):
            l = maxind[i] - maxind[i - 1] - 1
            r = n - 1 - maxind[i + k - 1]
            ans += (l + 1) * (r + 1)

        return ans

```
``` java []

class Solution {
    public long countSubarrays(int[] nums, int k) {
        int maxnum = Arrays.stream(nums).max().getAsInt();
        long ans = 0;
        int n = nums.length;

        List<Integer> maxind = new ArrayList<>();
        maxind.add(-1); // Initialize with -1 to handle edge case
        for (int i = 0; i < n; i++) {
            if (nums[i] == maxnum) {
                maxind.add(i);
            }
        }

        int indsize = maxind.size();

        for (int i = 1; i <= indsize - k; i++) {
            long l = maxind.get(i) - maxind.get(i - 1) - 1;
            long r = n - 1 - maxind.get(i + k - 1);
            ans += (l + 1) * (r + 1);
        }

        return ans;
    }
}


```
``` javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let maxnum = Math.max(...nums);
    let ans = 0;
    let n = nums.length;

    let maxind = [-1]; // Initialize with -1 to handle edge case
    for (let i = 0; i < n; i++) {
        if (nums[i] === maxnum) {
            maxind.push(i);
        }
    }

    let indsize = maxind.length;

    for (let i = 1; i <= indsize - k; i++) {
        let l = maxind[i] - maxind[i - 1] - 1;
        let r = n - 1 - maxind[i + k - 1];
        ans += (l + 1) * (r + 1);
    }

    return ans;
};


```



![upvote.jpg](./images/1.jpeg)
