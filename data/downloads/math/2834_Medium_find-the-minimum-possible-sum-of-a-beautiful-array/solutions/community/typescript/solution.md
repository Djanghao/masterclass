# Typescript solution TC: O(N) SC: O(N)

**Author:** haydenthai
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/3965334/](https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array/solutions/3965334/)

---

# Intuition
The problem statement requires us to find an array of `n` distinct positive integers *(this should be a hint you should use a **SET**)* where no two of them sum up to the given target. 

Since our set is guaranteed to have the number `1` since the constraints specify `1 <= n <= 105`. We can proceed by adding initializing the set to `1`.

Since the numbers have to be distinct we can declare a number `beautifulNum` outside of the loop and iterate up until `nums.length === n` and increase that number `beautifulNum` everytime time we iterate.



# Rules
1. `nums.length == n.`
2. `nums` consists of pairwise distinct positive integers. 
   - *(cant have `[1, 1, 2]`) since 1 and 1 are repeated*
3. There doesn't exist two distinct indices, `i` and `j`, in the range `[0, n - 1]`, such that `nums[i] + nums[j] == target.`
# Approach
- Start by adding the number 1 to the set.
- Starting from 2, attempt to add n-1 more numbers into the set while making sure that no two numbers in the set add up to the target.
- For each candidate number:
  - Check if the number or its complement (target - number) is in the set.
  - If neither is in the set, add the candidate to the set.
  - If either the number or its complement is in the set, skip this candidate and move to the next.

# Complexity
- Time complexity: $$O(n)$$
  - For each of the `n-1` numbers, in the worst case, we could potentially have to iterate up to `105` times to find the next suitable number.
  - So, the worst-case time complexity is $$O(n\xD7105)$$ which simplifies to $$O(n)$$ because `105` is a constant.   


- Space complexity: $$O(n)$$
  - We are using a set to store n distinct numbers.
  - Therefore, the space complexity is $$O(n)$$

# Code
```
function minimumPossibleSum(n: number, target: number): number {
    let nums = new Set([1])
    let beautifulNum = 2;

    for(let i = 2; i < n+1; i++){
        let findingBeautifulNum = true;
        while(findingBeautifulNum){
            //handle rule 2 by checking if the value already exists
            //handle rule 3 by checking if the difference between target and the iterator exists
            if(!nums.has(beautifulNum) && !nums.has(target - beautifulNum)){
                nums.add(beautifulNum) 
                findingBeautifulNum = false;
            }else{
                beautifulNum++;
            }   
        }
    }
    //convert the set to an array and get the sum of the set
    return [...nums].reduce((res, val) => res + val, 0)
};
```