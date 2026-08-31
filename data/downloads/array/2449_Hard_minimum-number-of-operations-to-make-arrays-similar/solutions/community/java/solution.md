# java simple code easy understanding

**Author:** deepakkdkk
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/2734913/](https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/solutions/2734913/)

---

Answer exists, therefore we can say that number of odd elements  and even elements in both array are equal because we can increase or decrease the element by 2 only. 
Adding +- 2 any element will not change even to odd or odd to even.
After sorting nearby elements will come closer so that answer will be minimize.
Answer exist therefore it will compensate by another element further.
```
class Solution {
    public long makeSimilar(int[] nums, int[] target) {
        
        for(int i = 0; i < nums.length; i++){
            if(nums[i] % 2 == 1){
                nums[i] = -nums[i];
            }
            if(target[i] % 2 == 1){
                target[i] = -target[i];
            }
        }
        ArrayList<Integer> arr1 = new ArrayList<>();
        ArrayList<Integer> arr2 = new ArrayList<>();
        ArrayList<Integer> arr3 = new ArrayList<>();
        ArrayList<Integer> arr4 = new ArrayList<>();
        for(int i = 0; i< nums.length; i++){
            if(nums[i] < 0){
                arr1.add(nums[i]);
            }else{
                arr3.add(nums[i]);
            }
            if(target[i] < 0){
                arr2.add(target[i]);
            }else{
                arr4.add(target[i]);
            }
        }
        Collections.sort(arr1, (a, b) -> (b - a));
        
        Collections.sort(arr3);
        Collections.sort(arr2, (a, b) -> (b - a));
        Collections.sort(arr4);
        for(int i = 0; i < arr1.size(); i++){
            nums[i] = arr1.get(i);
            target[i] = arr2.get(i);
        }
        for(int i = arr1.size(); i < arr3.size() + arr1.size(); i++){
            nums[i] = arr3.get(i - arr1.size());
            target[i] = arr4.get(i - arr1.size());
        }
        for(int i = 0; i < nums.length; i++){
            if(nums[i] < 0){
                nums[i] = -nums[i];
            }
            if(target[i] < 0){
                target[i] = -target[i];
            }
        }                     // till now i sorted the array in such a way that all odd numbers appears before even numbers in increasing order.
        long less = 0;    // it represents how many times we can decrement any number
        long more = 0; // it represents how many times we can increment any number
        long ans = 0;  // count minimum number so that nums and target array would be similar
        for(int i = 0; i < nums.length; i++){
            if(i == 0){
                int diff = nums[i] - target[i];
                if(diff > 0){        // At 0th index we are calculating how many times we need to decrease  or increase element.
                    more = diff/2;
                    ans = ans + more;  // adding to the ans if difference is larger then we will decrease this element and assign half of the difference to 'more' because this difference we will also have to increase in anyone element
                }else{
                    less = (-diff)/2;
                    ans = ans + less;    // similar to more
                }
            }else{
                int diff = nums[i] - target[i];
                if(diff >= 0){
                    if(less >= diff/2){
                        less = less - diff/2;       // if less is larger than difference, it means we have already that much value which is needed to be equal, then use that much diff and subtract from 'less'
                    }else{
                        long t = diff - less*2;   // if difference is greater then use 'less' as much as we can and then increase more variable which needed to make array element equal.
                        more = more + t/2;
                        ans = ans + t/2;
                        less = 0;
                    }
                }else{
                    if(more >= (-diff)/2){
                        more = more - (-diff)/2;   // similar like 'less' case
                    }else{
                        long t = (-diff) - more*2;
                        less = less + t/2;
                        ans = ans + t/2;
                        more = 0;
                    }
                }
            }   
        }
        return ans;
    }
    
}
```