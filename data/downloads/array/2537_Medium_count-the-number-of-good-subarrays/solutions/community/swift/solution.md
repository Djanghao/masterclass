# Swift Solution | Simple and easy to understand.

**Author:** aayushkumar20
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3062300/](https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3062300/)

---

# Approach
1. We use a HashMap to keep track of the number of times we have seen a particular number.
2. We keep a count variable that keeps track of the number of duplicates we have seen.
3. We use the two pointer technique to count the number of pairs we have for a given window.
4. If we have seen k duplicates, then we add the number of elements we have not yet seen to the answer.
5. If we have seen more than k duplicates, we move the left pointer to the right and subtract the number of duplicates we have seen for that number.
6. If we have seen less than k duplicates, we move the right pointer to the right. 

<hr>

# Explanation
1. Calculate the number of subarrays with at most K distinct numbers.
2. If we know the number of subarrays with at most K distinct numbers, we can calculate the number of subarrays with exactly K distinct numbers. 

<hr>

> The number of subarrays with at most K distinct numbers is equal to the number of subarrays with exactly K distinct numbers minus the number of subarrays with exactly K-1 distinct numbers. 

> Note that we can calculate the number of subarrays with exactly K distinct numbers by subtracting the number of subarrays with at most K-1 distinct numbers from the number of subarrays with at most K distinct numbers.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
class Solution 
{
    // Explanation: we use a sliding window to count the number of bad elements in the window. If the number of bad elements is greater than k, we move the left pointer to the right until the number of bad elements is less than k. We add the number of elements in the window to the answer.
    func countGood(_ nums: [Int], _ k: Int) -> Int {
        var j=0
        var i=0
        var ans=0
        var count=0
        // key is the number, value is the number of times it appears in the window
        var hm=Dictionary<Int,Int>()
        // we move the right pointer to the right
        while(j<nums.count){
            // we add the number of times the number appears in the window
            hm[nums[j]]=(hm[nums[j]] ?? 0)+1
            // if the number of times the number appears in the window is greater than 1, we add it to the count
            count += hm[nums[j]]! - 1
            // if the number of bad elements is greater than k, we move the left pointer to the right
            while(count>=k){
                // we add the number of elements in the window to the answer
                ans += (nums.count - j)
                // we remove the number of times the number appears in the window
                let lf = hm[nums[i]]
                // we subtract the number of times the number appears in the window from the count
                count-=lf!-1
                // we remove the number of times the number appears in the window
                hm[nums[i]] = hm[nums[i]]! - 1
                // if the number of times the number appears in the window is 0, we remove it from the hashmap
                if(hm[nums[i]]==0)
                // we remove the number of times the number appears in the window
                {
                    hm.removeValue(forKey: nums[i])  
                    //  print(hm)
                }            
                i+=1
            }
            j+=1
        }
        return ans
    }
}
```