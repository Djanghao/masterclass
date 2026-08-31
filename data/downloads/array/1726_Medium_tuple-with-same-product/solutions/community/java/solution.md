# JAVA HashMap Solution with Explanation | O(n^2) time

**Author:** Vishal_Sherawat
**Votes:** 22
**Link:** [https://leetcode.com/problems/tuple-with-same-product/solutions/1027156/](https://leetcode.com/problems/tuple-with-same-product/solutions/1027156/)

---

Main idea :
A possible sequence can have 8 possible arrangements
a * b = c * d
We can't choose all 4 numbers (a, b, c, d) from the array as it will increase time complexity ( O(n^4) )
But we can choose 2 numbers as O(n^2) solution is allowed because of constraints
We will store the product of a and b in a HashMap corresponding to its frequency(Why : Because then we can compare it with c * d)
Since all elements are distinct, there won't be any duplicacy ( a != b != c != d )
To get the solution we have to choose 2 equal products ( Since a * b = c * d ) (a * b = first pair and c * d = second pair)
nC2 = n * (n - 1) / 2
Then we have to multiply this by 8 because a possible sequence can have 8 arrangements

```
class Solution {
    public int tupleSameProduct(int[] nums) {
        
        if(nums.length < 4){
            return 0;
        }
        
        int res = 0;
        
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for(int i = 0; i < nums.length - 1; i++){
            
            for(int j = i + 1; j < nums.length; j++){
                
                int val = nums[i] * nums[j];
                map.put(val, map.getOrDefault(val, 0) + 1);
            }
        }
        
        for(int key : map.keySet()){
            
            int val = map.get(key);
            
            if(val > 1){
                res += val * (val - 1) * 4;    // (val * (val - 1) / 2) * 8
            }
        }
        
        return res;
    }
}
```
If you liked this post, Please Upvote