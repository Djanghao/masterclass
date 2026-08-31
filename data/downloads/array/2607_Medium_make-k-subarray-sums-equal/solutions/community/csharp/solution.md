# Verbose explanation of logic.

**Author:** michael187
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3563000/](https://leetcode.com/problems/make-k-subarray-sums-equal/solutions/3563000/)

---

# Intuition
So the trick to understanding this problem is that logically there is only one way these overlapping k-length subarrays can have an equal sum. That only way is if they have the same elements in the sub arrays. For example the following works:
```
    [1,2,3,1,2,3,1,2,3]  with k == 3
```
There are 9 sub arrays:
```
    1,2,3
    2,3,1
    3,1,2
    1,2,3
    2,3,1
    3,1,2
    1,2,3
    2,3,1 // Note "1" from circuling back to beginning
    3,1,2 // Note "1,2" from circuling back to beginning
```

These all have the same sum. **Change any number in the array** and the optimal way to bring the k-sums back to equality will be to make the elements match again. 

Note, it is not enough to have the same "elements" they have to appear in the same order in the original array! Why is that? Because of the overlapping nature of k-sum arrays. Changing one element in the original array changes "k" of the sub arrays. In order for the sub arrays to get each of the elements needed to sum then they need to each have right elements. 

Consider how the last k array uses k-1 elements of the first k array. In the above example the first k-array is "1,2,3" and the last one us "1,2" from the first array as it loops over the end. The only way for it to match in "sum" with the first array is to add a "3". For every overlapping k array you can say it needs to have the element of the previous one to have the sum be equal.

All that explanation gives a picture of what the final answer will look like, but not how we get there. We still need to understand how to minimally change it to get there and a nuance on the repeating pattern and GCD.

In order to make the "minimum number of moves" we really need to compare the "stripes" in the pattern. Those are the pieces we need to be make all identical.

Again in our example above our repeating pattern is "1,2,3". Say instead the input array looked like this:
```
[1,2,3,2,3,4,1,2,3] with k== 3
```

For now let's consider our pattern needs to repeat every "k" elements. Selecting the "first" of the k-repeating pattern we get the following values
```
    [1,_,_,2,_,_,1,_,_]
       or
    [1,2,1]
```
 
They all need to be equal. Visually we see the easiest way to make them equal is to turn the 2 into 1. However, programitically to make a list of numbers equal it is best to move them all to the "median". The "median" of "1,2,1" is "1". Median can be programmatically found by sorting and taking the middle element:
```
    [1,1,2] // 1 is the middle element of the sorted list
            // and thus the median
```

Then you have to calculate the distance to move each number to that median. You can use "absolute value" and a subtraction for find which is bigger before subracting. Either way just make sure you are calculating the distance and not just the difference (keep answers positive).

Sum all those distances and you now know the minimum "cost" to make one stripe in the puzzle have an equal sum. You'll have to do this for "k" stripes.

**Wait!** There is one problem! If K does not evenly divide into the length of the array it will cause issues for our pattern. For example if k == 3 and our array is "8" long then we can't possibly "k" repeat. See this example:
```
[a,b,c,a,b,c,a,b] with k==3 and a length of 8
 c
```
Note with the looping end of the array we want the first element to be both "c" and "a". That means we canot us a k-length repeating pattern as it does not line up with itself as we loop off the end of the tail. 

The best we can do in this case is to make everything the same.
```
[a,a,a,a,a,a,a,a] with k==3 and a length of 8
```

Why not have a two repeating pattern? Because k==3 and they wouldn't have an equal sum
```
[a,b,a,b,a,b,a,b] with k==3 and a length of 8

// k-arrays
[a,b,a]
[b,a,b] // already not equal.

```

You can afford to have some repeating pattern when k does not even divide the length of the array. Taking advantage of that option reduces our total cost and is nescessary to get the minimum. The length is essentially something that will evenly work for the repeating part at the end. 

For k==6 and an array of size 9:
```
[a,b,c,d,e,f,a,b,c] // repeating 6 pattern doesn't work
[a,b,c,a,b,c,a,b,c] // repeating 3 pattern does fit!
```

The repeating pattern is not "k" but rather the greatest common divisor between "k" and the array length. 

Really, this problem should help us understand Euclid's Theorem. Whatever is "left over" from a multiple of k will be wrapped back over the array and will need to "match" that k. We really only care about the remainder and how it matches up with our repeating pattern.

This concludes everything you need to understand for the intution part.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(nlog(n))$$ where $$g$$ is the $$gcd(n,k)$$

- Space complexity:
$$O(n/g)$$ where $$g$$ is the $$gcd(n,k)$$. In some case this is n, so $$O(n)$$ is an appropriate description.

# Code
```
public class Solution {
    public long MakeSubKSumEqual(int[] arr, int k) {
        //Intuition:
        // In order for the sums to be equal the elements in side need to be equal in a striped pattern throughout the array.
        // Since we loop at the end of the array back to the beginning that pattern is not as long as "k" but gcd(n,k) so that it
        // can match the patter when looping back from the end.
        // The optimal item to change them too in a striped segment is the median of the segment.

        var g = GCD(k, arr.Length);

        var ans = 0L;
        for(var i=0; i<g; i++) {
            var stripe = new List<int>();
            for(var j=i; j<arr.Length; j += g) {
                stripe.Add(arr[j]);
            }

            stripe.Sort();
            var median = stripe[stripe.Count / 2];

            foreach(var val in stripe) {
                ans += Math.Abs(median - val);
            }
        }
    
        return ans;
    }

    private int GCD(int a, int b) {
        while(a != 0 && b != 0) {
            if(a > b) {
                a %= b;
            } else {
                b %= a;
            }
        }

        return  a | b; // short hand for returning the non-zero option of the two variables
    }
}
