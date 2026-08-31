# Java O(n) 1ms, less memory than 100% explained

**Author:** dimitrova
**Votes:** 185
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/641884/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/641884/)

---

```
public int[] smallerNumbersThanCurrent(int[] nums) {
        int[] buck = new int[101];
        
        for(int i=0; i<nums.length; i++) {
            buck[nums[i]] +=1;
        }
        
        for(int j=1; j<= 100; j++) {
            buck[j] += buck[j-1];
        }
        
        for(int k=0; k< nums.length; k++) {
            int pos = nums[k];
            nums[k] = pos==0 ? 0 : buck[pos-1];
        }
        
        return nums;
    }
```

This solution maps the numbers in the array to a counter.
Since the numbers are between 0 and 100  I create an array of length 101 and iterate over the original array and put each number in the corresponding index in the bucket array. If the original array contains the number 1, number 1 goes to index 1 in the new array.

Since the nums array may contain duplicates, in the bucket array I store a counter for each of the numbers, not the number itself. So if the number 1 occurs 3 times in the nums array, in index 1 of the bucket array we store the value 3.

4 5 1 3 5 4 4 1 4 5 1 4
becomes
0 3 0 1 5 3

(0 zeros, 3 ones, 0 twos, 1 three, 5 fours and 3 fives)

After the bucket array has been populated, I iterate it again from index 1 to index 100 and to each of the values I add the previous value. A similar example with a smaller array:

0 3 0 1 5 3
becomes
0 3 3 4 9 12

(0 numbers are <= 0, 3 numbers are are <= 1, 3 numbers are are <= 2, 4 numbers are are <= 3 and so on.)

 That way each position contains how many numbers are smaller or equal than the current position.

Finally I iterate the original nums array and get the index from bucket corresponding the value of the number from nums - 1 (minus one because without it we also get the ones equal to it and we only want smaller). When doing this I assign the result as the new value in the nums array instead of creating a new array. Also if value is 0 we automatically return 0 as no element can be smaller than it.

For example, if nums array is
4 5 1 3 5 4 4 1 4 5 1 4

and the final bucket mapping is:
0 3 3 4 9 12

buck[4-1] = 4
buck[5-1] = 9
buck[1-1] = 0
buck[3-1] = 3
buck[5-1] = 9
buck[4-1] = 4
buck[4-1] = 4
buck[1-1] = 0
buck[4-1] = 4
buck[5-1] = 9
buck[1-1] = 0
buck[4-1] = 4