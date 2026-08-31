# Best approach using JAVA,C++,PYTHON,SWIFT with 0ms runtime!!

**Author:** madhavbsnl013
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/3707519/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/3707519/)

---


# Approach
The given code defines a class named "Solution" with a member function named "maximizeSum". This function takes a vector of integers "nums" and an integer "k" as input and returns an integer.

The purpose of the function is to maximize the sum of the elements in the vector by performing a series of operations. The operations involve incrementing the largest element in the vector and reducing the value of "k" by 1. The process is repeated "k" times.

Here's how the function works:

1. It declares two integer variables, "j" and "i". "j" is initialized as the maximum element in the "nums" vector using the `max_element` function from the `<algorithm>` library. "i" is initialized as 0.

2. The function enters a while loop that continues until "k" becomes 0.

3. Inside the loop, the value of "i" is updated by adding the current value of "j". Then, "j" is incremented by 1.

4. The value of "k" is decremented by 1 in each iteration of the loop.

5. After the loop ends, the function returns the value of "i", which represents the maximized sum of the elements in the vector after performing the specified number of operations.

In summary, the "maximizeSum" function finds the maximum sum of the elements in the vector by repeatedly incrementing the largest element and reducing the value of "k".



# Code

```C++ []
class Solution {
public:
    int maximizeSum(vector<int>& nums, int k) {
        int j=*max_element(nums.begin(),nums.end()),i=0;
        while(k){
            i=i+j;
            j++;
            k--;
        }
    return i;
     }
};
```
```java []
import java.util.Collections;
import java.util.List;

class Solution {
    public int maximizeSum(List<Integer> nums, int k) {
        int j = Collections.max(nums);
        int i = 0;
        while (k > 0) {
            i += j;
            j++;
            k--;
        }
        return i;
    }
}

```
```Swift []
class Solution {
    func maximizeSum(_ nums: [Int], _ k: Int) -> Int {
        var j = nums.max() ?? 0
        var i = 0
        var k = k
        
        while k > 0 {
            i += j
            j += 1
            k -= 1
        }
        
        return i
    }
}

```
```python []
class Solution:
    def maximizeSum(self, nums, k):
        j = max(nums)
        i = 0
        while k > 0:
            i += j
            j += 1
            k -= 1
        return i

```

