# Fixed Size Sliding Window Easy Solution (Rust,Cpp,TypeScript,JavaScript,Dart)

**Author:** msanjay1907
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/4945063/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/4945063/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initialize Variables**: 
   - Initialize `sum` to keep track of the sum of elements in the current window.
   - Initialize `count` to keep track of the count of subarrays satisfying the condition.
   - Start iterating from index `0`.

2. **Calculate First Window Sum**: 
   - Iterate over the first `k` elements of the array.
   - Add each element to `sum`.

3. **Check First Window Condition**: 
   - If the average of the first window (sum/k) is greater than or equal to `threshold`, increment `count`.

4. **Sliding Window Technique**: 
   - Iterate from index `k` to the end of the array.
   - Add the current element to `sum`.
   - Subtract the element at the previous starting index of the window (`i - k`) from `sum`.
   - Check if the average of the current window is greater than or equal to `threshold`.
   - If true, increment `count`.

5. **Return Count**: 
   - After the iteration, return the final count.

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
``` rust []
impl Solution {
    pub fn num_of_subarrays(arr: Vec<i32>, k: i32, threshold: i32) -> i32 {
       let mut sum:i32=0;
       let mut count:i32=0;
       let mut i:i32=0;
       //Calculate 1st window seperately
        while i<k{
            sum+=arr[i as usize];
            i+=1;
        }
        if sum/k>=threshold{
            count+=1;
        }
        i=k;
        while i<arr.len() as i32{
            sum+=arr[i as usize];
            let mut j:i32=i-k;
            sum-=arr[j as usize];
            if sum/k>=threshold {
                count+=1;
            }
            i+=1;
        }
        return count;   
    }
}
```
``` cpp []
class Solution {
public:
    int numOfSubarrays(vector<int>& arr, int k, int threshold) {
        //Fixed Size sliding window
        int sum=0;
        int count=0;
        //First Window sum
        for(int i=0;i<k;i++){
            sum+=arr[i];
        }
        if(sum/k>=threshold){
            count++;
        }
        for(int i=k;i<arr.size();i++){
            sum+=arr[i];
            sum-=arr[i-k];
            if(sum/k>=threshold){
                count++;
            }
        }
        return count;
    }
};
```

``` TypeScript []

function numOfSubarrays(arr: number[], k: number, threshold: number): number {
        let sum:number=0;
        let count:number=0;
        //First Window sum
        for(let i=0;i<k;i++){
            sum+=arr[i];
        }
        if(sum/k>=threshold){
            count++;
        }
        for(let i=k;i<arr.length;i++){
            sum+=arr[i];
            sum-=arr[i-k];
            if(sum/k>=threshold){
                count++;
            }
        }
        return count;
};

```

``` JavaScript []

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
        let sum=0;
        let count=0;
        //First Window sum
        for(let i=0;i<k;i++){
            sum+=arr[i];
        }
        if(sum/k>=threshold){
            count++;
        }
        for(let i=k;i<arr.length;i++){
            sum+=arr[i];
            sum-=arr[i-k];
            if(sum/k>=threshold){
                count++;
            }
        }
        return count;
};

```

``` Dart []
class Solution {
  int numOfSubarrays(List<int> arr, int k, int threshold) {
     int sum=0;
        int count=0;
        //First Window sum
        for(int i=0;i<k;i++){
            sum+=arr[i];
        }
        if(sum/k>=threshold){
            count++;
        }
        for(int i=k;i<arr.length;i++){
            sum+=arr[i];
            sum-=arr[i-k];
            if(sum/k>=threshold){
                count++;
            }
        }
        return count; 
  }
}

```