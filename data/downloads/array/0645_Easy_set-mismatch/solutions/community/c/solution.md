# C++ || Set Mismatch || Simple && Easy && Unique Solution || Explained

**Author:** animeshAlok
**Votes:** 43
**Link:** [https://leetcode.com/problems/set-mismatch/solutions/2734799/](https://leetcode.com/problems/set-mismatch/solutions/2734799/)

---

The simple idea is that 
1. We store the sum of all the elements in nums, say **initialSum**.
2. Put all the elements of nums in set to remove the duplicate element and store the sum of elements of set, say **sum**.
3. Difference of initialSum and sum will give us the **duplicate element**.
4. Calculate the sum of natural numbers from 1 to n using the formula n * (n + 1) / 2.
5. Difference of **sum of natural numbers** and **sum of elements of the set** will give us the **missing number**.

Time to code.
```
vector<int> findErrorNums(vector<int>& nums) {
    //sum of elements on nums
    int initialSum = accumulate(nums.begin(), nums.end(), 0);

    //put the element of nums into set to remove the duplicate number
    set<int> s;
    for(auto &i: nums){
        s.insert(i);
    }

    //sum of elements of the set
    int sum = accumulate(s.begin(), s.end(), 0);

    //difference of initialSum and sum will give us the repeated number
    int repeatedNum = initialSum - sum;

    //subtracting the sum of elements in set i.e. sum from the sum of the natural numbers will give us the missing number
	int n = nums.size();
    int missingNum = n * (n+1)/2 - sum;

    return {repeatedNum, missingNum};
}
```