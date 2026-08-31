# Short Intuitive Code🔥 Explained C++ Code🔥 Greedy approach 🔥

**Author:** ribhav_32
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/3958420/](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/3958420/)

---

# **PLEASE UPVOTE\uD83D\uDC4D**

![0a452532-539e-4e22-b67e-e13f2b0179fb_1687605319.248808.png](./images/0.png)


> # Intuition
- ### We aim to calculate the minimum number of operations required to transform the initial array into the target array, given the ability to increment subarrays. 
- ### The key insight is that we only need to consider the increasing segments in the target array, as these segments require increments to be transformed.

> # Approach
- ### Initialize the noOfOperations with the value of the first element in the target array. This is because the first element needs to be incremented to match the target.

- ### Loop through the target array starting from the second element. For each element target[i], compare it with the previous element target[i - 1].

- ### If target[i] is greater than target[i - 1], it means that we have an increasing segment. This segment needs to be transformed through increments to match the target array.

- ### Calculate the difference between target[i] and target[i - 1], and add this difference to the noOfOperations. This increment represents the number of operations needed to transform the current segment.

- ### Repeat this process for all segments in the target array that are increasing, calculating the necessary operations and accumulating them in noOfOperations.

- ### After iterating through the target array, the value of noOfOperations will represent the minimum number of operations required to transform the initial array into the target array, considering only the increasing segments.

> # Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# **PLEASE UPVOTE\uD83D\uDC4D**

> # Code
```
class Solution {
public:
    int minNumberOperations(vector<int>& target) {
        int noOfOperations = target[0];
        for(int i = 1; i < target. size(); i++) {
            if(target[i] > target[i-1]) 
                noOfOperations += (target[i]-target[i-1]);
        }
        return noOfOperations;
    }
};
```
![e2515d84-99cf-4499-80fb-fe458e1bbae2_1678932606.8004954.png](./images/1.png)

