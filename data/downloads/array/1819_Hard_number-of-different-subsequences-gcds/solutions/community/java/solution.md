# [Java] Concise Code with explanation

**Author:** vinsinin
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/1142378/](https://leetcode.com/problems/number-of-different-subsequences-gcds/solutions/1142378/)

---

**PLEASE UPVOTE IF YOU FIND THIS USEFUL**

* Generating all subsets and finding the gcd will lead you to `TLE`
* We can try to build optimization around based on the constraint `1 <= nums[i] <= 2 * 10^5`
* The limit is `200000` and we find GCD for all the numbers available between them. we can limit to the `max` number in the input array, `nums`. 
* We pick a number `num` and check if the GCD subsequence exists equals to the same number. If it exists then the elements of the gcd susequence will be the multiple of the same number passed. This is the reason why we increment the value by num in `findGCD`
* Maintaining a set `exist` for easy existence check for the number in the `nums`
* Increment the counter `count` if the gcd between the numbers matches

**Time:**  N Log N (GCD worst case is logN)
**Space:** O(N) (usage of Set for N numbers)
```
class Solution {
    int max = 0;
    Set<Integer> exist = new HashSet();
    public int countDifferentSubsequenceGCDs(int[] nums) {
        getMax(nums);
        for(int num : nums) exist.add(num);
        int count = 0;
        for (int i=1;i<=max;i++) if(findGCD(i)) count++;      //  <---- findGCD
        return count;
    }
    public void getMax(int[] nums){
        for(int i : nums) max = Math.max(max, i);
    }
    public int gcd(int a, int b){
        return (a == 0) ? b : gcd(b % a, a);
    }
	public boolean findGCD(int num){
        int val = 0;
        for(int i = num; i <= max; i+= num)
            if(exist.contains(i)) val = gcd(i, val);          //  <---- gcd between two number
        return (val == num);
    }
}
```