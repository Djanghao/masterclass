# Typescript O(nlog(n)) Time O(n) Space

**Author:** Sameer177
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-pairs/solutions/1794755/](https://leetcode.com/problems/reverse-pairs/solutions/1794755/)

---

```
// THE APPROACH BEHIND THIS IS 

// 1. WE KEEP DEVIDING THE ARRAY IN TWO JUST LIKE WE DO IN MERGE SORT

// 2. NOW AT SOME POINT WE GET TWO SUBARRAYS AFTER DIVIDING THE CURRENT SUBARRAY. LETS CALL THEM LEFT SUB ARRAY AND RIGHT SUBARRAY.

// 3. WE HAVE POINTERS TO THE START INDICES OF BOTH SUBARRAYS.

// 4. NOW WE START COMPARING THEM AND SINCE WE KNOW BOTH SUBARRAYS ARE SORTED WE CAN SAY THAT ALL THE INTEGERS TO THE LEFT OF AN INTEGER ARE SMALLER THAN IT AND ALL THE NUMBERS TO THE RIGHT ARE BIGGER THAN THAT INTEGER.

// 5. NOW USING THIS WE KEEP CHECKING THE GIVEN CONDITION OF NUMS[I] > 2NUMS[J] AND MOVE OUR POINTERS ACCORDINGLY.

// 6. NOW TO MAINTAIN THE FACT THAT BOTH LEFT SUBARRAAY AND RIGHT SUBARRAY ARE SORTED FOR FURTHER REFERENCE, WE MERGE THE CURRENT SUBARRAYS WHILE SORTING THEM JUST LIKE MERGE SORT.

//PS: the code just seems bigger because of most of merge sort logic but actual logic code is not that much. So please don't get frustrated by the length of the code just like me.

function reversePairs(nums: number[]): number {
    return mergeSort(nums,0,nums.length-1);
};

function merge(nums: number[],left: number,mid: number,right: number): number {
    let i = left;
    let j = mid;
    let k = 0;
    let temp = new Array(right - left + 1).fill(0);
    let pairCount = 0;
    
    // HERE WE ARE COUNTING THE REVERSED PAIRS 
    while(i < mid && j <= right) {
        if(nums[i] > 2*nums[j]) {
            pairCount += (mid - i);     
            j++;
        } else {
            i++;
        }
    }
    // ALL THE CODE BELOW IS JUST TO SORT THE ARRAY JUST LIKE WE DO IN MERGE SORT
    i = left;
    j = mid;
    k = 0;
    while(i < mid && j <= right) {
        if(nums[i] > nums[j]) {
            temp[k] = nums[j];
            j++;
            k++;
        } else {
            temp[k] = nums[i];
            i++;
            k++;
        }
    }
    while(i < mid) {
        temp[k] = nums[i];
        i++;
        k++;
    }
    while(j <= right) {
        temp[k] = nums[j];
        j++;
        k++;
    }
    k = 0;
    while(left <= right ) {
        nums[left] = temp[k];
        k++;
        left++;
    }
    return pairCount;
}

function mergeSort(nums: number[],left: number,right: number): number {
    let pairCount = 0;
    if(left < right) {
        let mid = Math.floor((right + left)/2)
        pairCount = mergeSort(nums,left,mid);
        pairCount += mergeSort(nums,mid+1,right);
        pairCount += merge(nums,left,mid+1,right);
    }
    return pairCount;
}