# C++ || Detailed Explanation || Binary Search || Counting ||

**Author:** khalidalam980
**Votes:** 5
**Link:** [https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/5874613/](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/5874613/)

---

# Intuition
###### The key intuition to solve this problem is to use **`binary search`** on the answer space rather than generating all possible products. Instead of asking "what is the **`kth`** smallest product?", we transform the question to "how many products are less than or equal to a given value **`x`**?". If we can efficiently answer this question, we can binary search for the **`kth`** smallest product. The tricky part is counting these products quickly. Since we're dealing with multiplication, we need to consider **three** **cases**: when the first number is **positive**, **negative**, or **zero**, as this affects how we count valid pairs. For positive numbers, we're looking for products less than **`x`**, so we need the second number to be less than **`x`** divided by our first number. For negative numbers, the inequality flips, so we need the second number to be greater than **`x`** divided by our first number. Since our second array is sorted, we can use binary search (**`upper_bound`** for **positive**, **`lower_bound`** for **negative**) to quickly count how many numbers satisfy these conditions. Zero is a special case that's easy to handle separately. By leveraging this counting method within our binary search on the answer space, we can efficiently find the **`kth`** smallest product without actually generating all possible products, giving us a solution that's much faster than a brute force approach.

# Approach
###### The solution uses binary search on the answer space **`[-10^10, 10^10]`** to find the **`kth`** smallest product 
- For each potential answer **`x`**, we count how many products are **`\u2264 x`** 
- For efficient counting, we iterate through each number **`a`** in **`nums1`** and handle three cases: **positive**, **negative**, and **zero** 
  - For **positive** **`a`**, we find how many **`b`** in **`nums2`** satisfy **`b \u2264 x/a`** using **`upper_bound`** 
  - For **negative** **`a`**, we find how many **`b`** in **`nums2`** satisfy **`b \u2265 x/a`** using **`lower_bound`** (since the inequality flips) 
  - For **zero**, we count all numbers in **`nums2`** if **`x \u2265 0`** 
  - The counting function can terminate early if we find **`k`** or more valid products 
- If we find **`\u2265 k`** products **`\u2264 x`**, we store **`x`** as a potential answer and try a smaller value in our binary search 
- If we find **`< k`** products, we need to try a larger value 
- Binary search continues until we find the smallest **`x`** that has at least **`k`** products less than or equal to it 
- The solution avoids generating all possible products, instead using binary search twice: once for the answer and once for counting, making it efficient for large inputs.

# Code Walkthrough
- The binary search implementation:
    ```
    ll low = -1e10;
    ll high = 1e10;
    ll ans = 0;
    while(low <= high) {
        ll mid = low + (high-low)/2;
        if(isPossible(mid, nums1, nums2, k)) {
            ans = mid;
            high = mid-1;
        } else {
            low = mid+1;
        }
    }
    ```
    - ###### This is trying to find the smallest value 'x' such that there are at least k pairs whose product is less than or equal to x.
- The crucial part is the isPossible function:
    ```
    bool isPossible(ll x, vector<int>& nums1, vector<int>& nums2, ll k)
    ```
    - ###### This function checks if there are at least **`k`** pairs whose product is less than or equal to **`x`**.
    - 
###### Let's understand the **three cases**:
###### **a)** When **`nums1[i] < 0`** (negative number):
```
if(nums1[i] < 0) {
    ll rem = ceil((double)x/nums1[i]);
    int ind = lower_bound(nums2.begin(), nums2.end(), rem) - nums2.begin();
    count += (n2-ind);
}
```
###### When multiplying a negative number, the inequality reverses. So, for **`nums1[i] * nums2[j] <= x`**:
- We need **`nums2[j] >= x/nums1[i]`**
- We use ceil because we want the smallest number that satisfies this
- lower_bound finds the first element **`>= rem`**
- All elements from this index to the end will satisfy our condition

###### **b)** When **`nums1[i] > 0`** (positive number):
```
else if(nums1[i] > 0) {
    ll rem = floor((double)x/nums1[i]);
    int ind = upper_bound(nums2.begin(), nums2.end(), rem) - nums2.begin();
    count += ind;
}
```
###### For positive numbers:
- We need **`nums2[j] <= x/nums1[i]`**
- We use floor because we want the largest number that satisfies this
- **`upper_bound`** finds the first **`element > rem`**
- All elements before this index will satisfy our condition

###### **c)** When **`nums1[i] == 0`**:
```
else {
    if(x >= 0) {
        count += n2;
    }
}
```
###### When multiplying by **`zero`**:
- If **`x >= 0`**, all products (which will be 0) are **`<= x`**
- If **`x < 0`**, no products satisfy the condition

###### The function returns **`true`** if the total count of satisfying pairs is **`>= k`**.

# Special Focus(Dry Run):

###### Let's dive deeper into these two cases with examples.

###### **A)** When **`nums1[i] < 0`** (Negative Number Case)
###### Let's take an example:
```
nums1[i] = -2
nums2 = [1, 3, 5, 7]
x = 10
```
###### We want to find how many products **`(-2 * nums2[j])`** are less than or equal to **`10`**.

- ###### First, we calculate **`rem = ceil(x/nums1[i])`**
    ```
    rem = ceil(10/-2) = ceil(-5) = -5
    ```
- ###### Now, the inequality we're solving:
    ```
    -2 * nums2[j] \u2264 10
    nums2[j] \u2265 -5    (dividing both sides by -2, inequality sign flips)
    ```
- ###### We use **`lower_bound`** to find the first element in **`nums2`** that is **`\u2265 -5`**. In our example, all elements are **`\u2265 -5`**, so **`index = 0`**
- ###### **`Count`** is incremented by **`(n2 - index) = 4 - 0 = 4`**

###### This means all four products ($$-2\	imes1$$ = -2, $$-2\	imes3$$ = -6, $$-2\	imes5$$ = -10, $$-2\	imes 7$$ = -14) are **`\u2264 10`**.

###### **B)** When nums1[i] > 0 (Positive Number Case)
###### Let's take another example:
```
nums1[i] = 2
nums2 = [1, 3, 5, 7]
x = 10
```
###### We want to find how many products **`(2 * nums2[j])`** are less than or equal to **`10`**.

- First, we calculate rem = floor(x/nums1[i])
    ```
    rem = floor(10/2) = floor(5) = 5
    ```
- The inequality we're solving:
    ```
    2 * nums2[j] \u2264 10
    nums2[j] \u2264 5    (dividing both sides by 2, inequality sign remains the same)
    ```
- We use upper_bound to find the first element in nums2 that is > 5. In our example, this is the index 3 (element 7)
- Count is incremented by this index: 3

###### This means three products ($$2*1 = 2,~~2*3 = 6,~~2*5 = 10$$) are **`\u2264 10`**.

###### **Why the difference in approach?**

- **Ceiling vs Floor**

    - For negative numbers, we use ceiling because when we divide by a negative number, we want to round up to get the smallest number that satisfies our inequality
For positive numbers, we use floor because we want the largest number that satisfies our inequality


- **Lower_bound vs Upper_bound**

    - For negative numbers, we use lower_bound because we're looking for numbers greater than or equal to our calculated rem
For positive numbers, we use upper_bound because we're looking for the point where numbers become greater than our calculated rem


- **Counting**

  - For negative numbers, we count from the found index to the end
  - For positive numbers, we count from the beginning to the found index



###### **Here's a visualization:**
```
Negative case (-2):
nums2:  1   3   5   7
x/n1:  -5  -5  -5  -5
        \u2191   \u2191   \u2191   \u2191
     All count because all \u2265 -5

Positive case (2):
nums2:  1   3   5   7
x/n1:   5   5   5   5
        \u2191   \u2191   \u2191   
     These count   \u2934 This doesn't
     because \u2264 5
```

# Complexity
- **Time complexity:**
  - Binary search takes $$O(log(10^{10}))$$ iterations
  - For each iteration, isPossible function takes O(n1 * log(n2))
  - Total: $$O(n1 * log(n2) * log(10^{10}))$$

- **Space complexity:** $$O(1)$$

# Code
```cpp []
class Solution {
public:
    using ll = long long;
    bool isPossible(ll x, vector<int>& nums1, vector<int>& nums2, ll k){
        int n1 = nums1.size();
        int n2 = nums2.size();
        ll count=0;
        for(int i=0;i<n1;i++){
            if(nums1[i]<0){
                ll rem = ceil((double)x/nums1[i]);
                int ind = lower_bound(nums2.begin(), nums2.end(), rem)-nums2.begin();
                count += (n2-ind);
            }else if(nums1[i]>0){
                ll rem = floor((double)x/nums1[i]);
                int ind = upper_bound(nums2.begin(), nums2.end(), rem)-nums2.begin();
                count += ind;
            }else{
                if(x>=0){
                    count += n2;
                }
            }
            if(count>=k) return true;
        }
        return count>=k;
    }
    ll kthSmallestProduct(vector<int>& nums1, vector<int>& nums2, ll k) {
        int n1 = nums1.size();
        int n2 = nums2.size();
        ll low = -1e10;
        ll high = 1e10;
        ll ans=0;
        while(low<=high){
            ll mid = low+(high-low)/2;
            if(isPossible(mid, nums1, nums2, k)){
                ans = mid;
                high = mid-1;
            }else{
                low = mid+1;
            }
        }
        return ans;
    }
};
```
## If you found this helpful, an upvote would be greatly appreciated!
## Comment any doubt or suggestions.