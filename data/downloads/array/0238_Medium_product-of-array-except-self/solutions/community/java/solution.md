# [3 Minute Read] Mimicking an Interview

**Author:** dead_lock
**Votes:** 3442
**Link:** [https://leetcode.com/problems/product-of-array-except-self/solutions/1342916/](https://leetcode.com/problems/product-of-array-except-self/solutions/1342916/)

---

In this post, I would be discussing this question with different approaches which you would come up in an interview in the manner of increasing difficulty. I will be writting this post in such a way as if I were the person being interviewed. So, enjoy \uD83D\uDE0A

#### **1. Brute Force**
So, the first and formost, the simplest method that comes to mind is, I can loop through the complete array using a pointer, say `j`, for every index `i`, and multiply all the elements  at index `j` except when  `i == j`. This would ensure that I skip the element at index `i` from being multiplied. 

The Time Complexity for this solution would be O(n<sup>2</sup>). 

Below is the Java Code for this approach.
```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int ans[] = new int[n];
        
        for(int i = 0; i < n; i++) {
            int pro = 1;
            for(int j = 0; j < n; j++) {
                if(i == j) continue;
                pro *= nums[j];
            }
            ans[i] = pro;
        }
        
        return ans;
    }
}
```
To this, the interviewer would surely say to optimize the time complexity of the solution. 
Then a bit of acting to think \uD83E\uDD14.


### **2. Dividing the product of array with the number**
What we would do is, we would find the product of all the numbers of our Array and then divide the product with each element of the array to get the new element for that position in our final answer array.

Now after presenting the interviewer with this solution, here is our one more chance to shine out in the interview. We would specifically tell the interviewer that one major *con* in going with this method is when we have an element as `0` in our array. The problem is that, we can't perform a division by `0`, as a result, we won't be able to get corresponding values in our final answer array for the indices having `0` in our initial array at that position. 

The Time Complexity of this approach would be O(n).

Below is the Java Code for the above approach. 
```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int ans[] = new int[n];
        int pro = 1;
        for(int i : nums) {
            pro *= i;
        }
        
        for(int i = 0; i < n; i++) {
            ans[i] = pro / nums[i];
        }
        return ans;
    }
}
```

To which the interviewer would now say to overcome this problem which we face when having `0`.
Again a bit of acting acting to think \uD83E\uDD14 (because that's very important \uD83D\uDE1C). Then we would say that, `0` is our problem only when we are performing division, with multiplication, we have no such problem with `0`, so we would need to think of a way using multiplication.

### **3. Finding Prefix Product and Suffix Product**
Similar to finding Prefix Sum Array, here we would intend to find the Prefix Product Array and Suffix Product Array for our original array, i.e. `pre[i] = pre[i - 1] * a[i - 1]` (yes, we multiply with `a[i - 1]` and not with `a[i]` on purpose) and similarly `suff[i] = suff[i + 1] * a[i + 1]`. 
Now, at any index `i` our final answer `ans[i]` would be given by `ans[i] = pre[i] * suff[i]`. Why? Because the `pre[i] * suff[i]` contains product of every element before `i` and every element after `i` but not the element at index `i` (and that is the reson why we excluded `a[i]` in our prefix and suffix product). 

The Time Complexity would be O(n), but we are now using Auxilary Space of O(n) (excluding the final answer array).

Below is the Java Code for this approach
```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int pre[] = new int[n];
        int suff[] = new int[n];
        pre[0] = 1;
        suff[n - 1] = 1;
        
        for(int i = 1; i < n; i++) {
            pre[i] = pre[i - 1] * nums[i - 1];
        }
        for(int i = n - 2; i >= 0; i--) {
            suff[i] = suff[i + 1] * nums[i + 1];
        }
        
        int ans[] = new int[n];
        for(int i = 0; i < n; i++) {
            ans[i] = pre[i] * suff[i];
        }
        return ans;
    }
}
```

Now the interviewer might ask you to oprimize the space complexity of the program. Again a bit of thinking \uD83E\uDD14.

### **4. Directly store the product of prefix and suffix into the final answer array**
The logic is, we don't actually need seperate array to store prefix product and suffix products, we can do all the approach discussed in method 3 directly onto our final answer array. 

The Time Complexity would be O(n) but now, the Auxilary Space is O(1) (excluding the final answer array).

Below is the Java Code for the above algorithm.
```java
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int ans[] = new int[n];
        Arrays.fill(ans, 1);
        int curr = 1;
        for(int i = 0; i < n; i++) {
            ans[i] *= curr;
            curr *= nums[i];
        }
        curr = 1;
        for(int i = n - 1; i >= 0; i--) {
            ans[i] *= curr;
            curr *= nums[i];
        }
        return ans;
    }
}
```

After this, hope the interviewer get's impressed and you are  selected into your dream company. \uD83D\uDE0A

**Thank you for giving your time in reading this post.**











