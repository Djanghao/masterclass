# Java Simple and easy to understand solution, 1 ms, faster than 85.85%, clean code with comments

**Author:** satyaDcoder
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/1206569/](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/1206569/)

---

**PLEASE UPVOTE IF YOU LIKE THIS SOLUTION**


```
class Solution {
    public int getMinSwaps(String num, int k) {
        int n = num.length();
        
        //store index 
        int[] number = new int[n];
        for(int i = 0; i < n; i++){
            int digit = num.charAt(i) - '0';
            number[i] = digit;
        }
        
        //compute kth smallest number
        int[] kthSmallestNumber = getKthSmallestNumber(number.clone(), k);
        
        return getMinSwaps(number, kthSmallestNumber);
    }
    
    private int[] getKthSmallestNumber(int[] nums, int k){
        while(k --> 0){
            computeNextPermutation(nums);
        }
        return nums;
    }
    
    private void computeNextPermutation(int[] nums){
        int n = nums.length;
        int i = n - 2;
        
        //find first index from last which value smaller than next element 
        while(i >= 0 && nums[i] >= nums[i + 1]){
            i--;
        }
        

        if(i >= 0){
            //find index which is just greater than that index value (e.g i)
            int j = n - 1;
            while(j > i && nums[j] <= nums[i]){
                j--;
            }
            swap(nums, i, j);
        }
        
        //sort all element which index greater than <i>
        Arrays.sort(nums, i + 1, n);
    }
    
    private void swap(int[] arr, int i, int j){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    private int getMinSwaps(int[] number, int[] kthSmallestNumber){
        int swapCount = 0;
        int n = number.length;
        
        for(int i = 0; i < n; i++){
            //ignore, as it already in correct position, no need for swap
            if(number[i] == kthSmallestNumber[i]) continue;
            
            //find the coorect position
            int j = i + 1;
            while(j < n && number[i] != kthSmallestNumber[j]){
                j++;
            }
            
            //swift to correct position
            while(j > i){
                swap(kthSmallestNumber, j - 1, j);
                swapCount++;
                j--;
            }
            
        }
        
        return swapCount;
    }
}
```