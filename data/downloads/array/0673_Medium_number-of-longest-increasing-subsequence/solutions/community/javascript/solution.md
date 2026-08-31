# Heavily Commented | Easy to Read | Faster than 93%

**Author:** anmolvj
**Votes:** 39
**Link:** [https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/1389782/](https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/1389782/)

---

Hi All,
I found a most of the javascript solutions posted in discussion board a bit hard to understand so I decided to heavily commment my solution to make it easier to follow why each decision was made. 
Hope this helps!

```
var findNumberOfLIS = function(nums) {
    // We initialize an array named "tracker" to track the longest increasing subsequence ending at each
    // index and initialize all positions with 1 as each item in nums can be considered as subsequence in
    // itself.
    let tracker = new Array(nums.length).fill(1);
    
    
    // While tracking, we will realize that at times there is more than one set of preceding items in nums
    // that can make the longest increasing subsequence that end at the index we are currently processing.
    // The best way to track this is in a seperate array called frequency. Each element will here is
    // initialized to 1. This signifies that initially, there can only be a single longest
    // subsequence ending at any index.
    let frequency = new Array(nums.length).fill(1);
    
    // Now let's start processing from left to right, starting with the second element at index 1
    // Skipping first element as we cannot find a subsequence longer than 1 that can end at index 0.
    for(let i = 0; i < nums.length; i++){
        // Now let's compare it with every element before it
        for(let j = 0; j < i; j++){

            // VERIFY: Quick verification that j can be a part of a strictly increasing subsequence ending
            // at i
            if(nums[j] < nums[i]){

                // CASE 1: Is Connecting i to the subsequence ending at j makes a subsequence larger that
                // any other subsequence that has ended at i. This increases the subsequence ending at j
                // by just 1 hence the addition.
                if(tracker[i] < tracker[j]+1){
                    // we update longest subsequence ending at i
                    tracker[i] = tracker[j]  + 1;
                    
                    // The new longest subsequence length is created by any and every path that could have
                    // ended at the jth index. Hence we set i's frequency same as j.
                    frequency[i] = frequency[j];
                } else if(tracker[i] === tracker[j]  + 1){

                    // CASE 2: This means this is not the first time we found a j that helps make the
                    // longest subsequence ending at i. Since length of subsequence itself didn't change,
                    // no updates have to be made to the tracker array.
                    
                    // But this still needs to be tracked in our frequency array. So we add frequency of
                    // all longest subsequences that end at j to our frequency tracker for i.
                    frequency[i] += frequency[j];
                }
            }
        }
    }
    
    // FINALLY: 
    // 1. We find the longest path we ever saw using our tracker array
    const longestPath = Math.max(...tracker);
    
    // 2. For each index/element that had the longest path end at it, we add it's frequency to our 
    // overall result
    let result = 0;
    for(let k = 0; k < nums.length; k++){
        if(tracker[k] === longestPath) result += frequency[k];
    }
    
    return result;
};


```