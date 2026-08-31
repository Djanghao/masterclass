# sorting and 2 pointers, explained.

**Author:** remedydev
**Votes:** 1
**Link:** [https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/4916310/](https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/solutions/4916310/)

---

# Approach
1) Split the elements into two arrays: "evens," which contains only even numbers, and "odds," which holds odd numbers exclusively.
2) Sort the arrays in descending order.
3) Utilize two pointers to select the highest value either from the odds or evens arrays to compute their sum.
4) If the sum is even, return it; otherwise, consider two scenarios to obtain the larger sum:
  4.1. Deduct the smallest even number and add the largest odd number since (odd + odd = even).
  4.2. Deduct the smallest odd number and add the largest even number since (even + even = even).

# Complexity
- Time complexity:
$$O(nLogn)$$

- Space complexity:
$$O(n)$$

# Code
```
var largestEvenSum = function(nums, k) {
    const evens=[],odds=[];
    nums.forEach((n)=>{
        if(n%2===0) evens.push(n);
        else odds.push(n);
    })

    evens.sort((a,b)=>b-a);
    odds.sort((a,b)=>b-a);

    let i=0, j=0,sum=0;
    // use two pointers to pick a largest value
    while(k>0 && i<evens.length && j<odds.length){
        if(evens[i]>odds[j]){
            sum+=evens[i++];
        }else{
            sum+=odds[j++];
        }
        k--;
    }
    
    // picking leftovers from even numbers
    while(k>0 && i<evens.length){
        sum+=evens[i++]; k--;
    }

    // picking leftovers from odd numbers
    while(k>0 && j<odds.length){
        sum+=odds[j++]; k--;
    }

    if(sum%2===0) return sum;
    let ans=-1;
    
    // If we get to this point it means we have an odd sum it means we have 2 scenarios to get larger sum

    // 1) subtract smallest even and add largest odd
    if(i>0 && i<=evens.length && j<odds.length){
        ans=sum-evens[i-1]+odds[j];
    }

    // 2) subtract smallest odd and add largest even 
    if(j>0 && j<=odds.length && i<evens.length){
        ans=Math.max(ans,sum-odds[j-1]+evens[i]);
    }

    return ans;
};
```