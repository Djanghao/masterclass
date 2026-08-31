# 💡JavaScript Binary Search Solution w/ Explanation

**Author:** AminiCK
**Votes:** 22
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/418543/](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/418543/)

---

#### The Idea
When we have a regular sorted 2d array, we use range of index to find our target. for example, lo = 0, hi = length-1, mid = (lo+hi)/2. if the target is greater than the number at index mid, then we search the right portion, if it's smaller, we search the left.
However, in this 2d matrix sorted array, it is impossible to find such mid index. The intuition here is to use a range of numbers to test against our k. We know the first number is the smallest and the last number is the largest, this means our target number must be something in between. We can use those two numbers as our lo and hi, and set our mid to be the number in between, and check how many of the numbers in the matrix are smaller than that number and adjust lo and hi accordingly. When we get exactly k numbers, we know we have found our answer.
The extremely tricky part here is that just by looking at how we calculate mid, a lot of times the number we are testing agaist may not even in the matrix, because in the end, the numbers we are using are just arbitrary numbers.
To explain this we need to imagine that our program is at a stage where lo and hi are almost going to hit each other. if we counted less numbers than expected, we will set `lo=mid+1`, this potentially just increment our mid by 1. And by increment our mid 1 by 1, We can make sure the numbers is included in the matrix. 

``` javascript
var kthSmallest = function(matrix, k) {
    let lo = matrix[0][0], hi = matrix[matrix.length-1][matrix[0].length-1] + 1; // +1 because we don't want to forget the last number
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo)/2);
        let count = 0;
        for (let i = 0;i<matrix.length;i++) {
            for (let j=0;j<matrix.length;j++) {
                if (matrix[i][j] <= mid) count++;
                else break;
            }
        }
        if (count < k) lo = mid+1;
        else hi = mid;
    }
    return lo
};
```
I found [**this**](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/discuss/301357/Simple-to-understand-solutions-using-Heap-and-Binary-Search-JavaPython) to be a extremely clear post .