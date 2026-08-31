# Java | Very easy explanation through a story | Time- O(n), Space- O(n)

**Author:** kshitiz23
**Votes:** 314
**Link:** [https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/844738/](https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/844738/)

---

**Consider this hypothetical story to better understand this question : [After reading this you will understand the code like a breeze. I hope you enjoy the story!]**

1. Consider the numbers in the nums array are actual persons that are looking for a job. If they are available, they try to find a job. If no one wants them they go on to start their own company. But, here is the twist, a new company can be started only if it can have atleast 3 persons available. ( Are you thinking why 3? => Read the question description again.)

2. The most important thing to note here is that each person in num, first tries to look for a job and if he/she does not gets success, he/she starts a company with 3 consecutive members. [as we want to find subsequences with consecutive numbers of length atleast 3. Think a subsequence as a company for now]

3. So, let's come to our first scenario - A person `(let's say x)` looks for a job and finds it. YAY!! So, this person joins an already existing company and then he/she creates a vacancy for another person `x+1` in the job search section, so that another one like him/her do not have to face any struggle like he/she faced. He/She is a good guy/girl. No?

4. Now, let's come to our second possibility of our story. The guy/girl was not able to find a job :( 
BUT, he/she `(let's say x)` was very ambitious. So he/she decides- 'Let's build a company with me (that is x), x+1 and x+2'. So he/she checks with (x+1) and (x+2), if they are available to build a company as it requires 3 persons to start a company. 

Here comes two scenario:

a. x finds both the potential teammates/partners, `(x+1)` & `(x+2)` to be available so, they go on to start a new company and then after finding their own company, as a goodwill they create a new job vacancy looking for `(x+3)` so that `(x+3)` do not face any struggle they faced. People are good, believe me :) 

b. x was just out of luck, he/she was able to find their teammates i.e. (x+1) & (x+2). In this case have hope and just return false to quickly complete the program execution (BACK TO REALITY :p )


**Here is the code [If you haven't read the story above, please read it to understand the solution] :**

```
// This is a greedy approach. The whole idea is to first look for an existing group
// to join for the current num. If no, then create a new group. 
// Here a group means group of 3 or more numbers as mentioned in question description. 

//Well, If u didn't understand, keep the above story of company in mind and try to understand the code below through comments, you will be fine.

class Solution {
    public boolean isPossible(int[] nums) {
        // This hashmap tells us about whether a number in num is available for a job or not
        HashMap<Integer,Integer> avaibilityMap = new HashMap<>();
        
        // This hashmap tells a number (say x), if there is a job vacancy for them
        HashMap<Integer,Integer> wantMap = new HashMap<>();
        
        // We store the count of every num in nums into avaibilityMap. Basically, a number's count is the avaibility of it.
        for(int i : nums){
            avaibilityMap.put(i, avaibilityMap.getOrDefault(i,0)+1);
        }
        
        // We iterate through each number in the nums array. Remember the story ? So, treat them like a person.
        for(int i=0;i<nums.length;i++){
            // First we check if our current num/person is available. If it is not we just continue with next num/person
            if(avaibilityMap.get(nums[i])<=0){
                continue;
            }
            
            // If the person is available, first we check if there is a job vacancy for him/her. Basically, is someone looking for him/her?
            else if(wantMap.getOrDefault(nums[i],0)>0){
                // Yes, someone is looking, so we decrease the avaibility count of that number
                avaibilityMap.put(nums[i], avaibilityMap.getOrDefault(nums[i],0)-1);
                
                // we also decrease its count from the job vacancy space / wantMap
                wantMap.put(nums[i], wantMap.getOrDefault(nums[i],0)-1);
                
                // Then as a goodwill, he/she will also create a job vacancy for (num[i]+1) in job vacancy space / wantMap, as we need consecutive numbers only
                wantMap.put(nums[i]+1, wantMap.getOrDefault(nums[i]+1,0)+1);
            }
            
            // Ooh, we are here means nums[i] was not able to find a job.
            // so, nums[i] tries to start his/her own company by checking avaibility of his/her friends i.e. (nums[i]+1) and (nums[i]+2)
            else if(avaibilityMap.getOrDefault(nums[i],0)>0 && avaibilityMap.getOrDefault(nums[i]+1,0)>0 && avaibilityMap.getOrDefault(nums[i]+2,0)>0){
                
                // Yay! both 2 friends are available. Let's start a company.
                // So we decrease the avaibility count of nums[i], (nums[i]+1) and (nums[i]+2) from the 
                // avaibilityMap
                avaibilityMap.put(nums[i], avaibilityMap.getOrDefault(nums[i],0)-1);
                avaibilityMap.put(nums[i]+1, avaibilityMap.getOrDefault(nums[i]+1,0)-1);
                avaibilityMap.put(nums[i]+2, avaibilityMap.getOrDefault(nums[i]+2,0)-1);
                
                // Also, as a goodwill, we create a new job vacancy for (nums[i]+3), as we need consecutive numbers only
                wantMap.put(nums[i]+3, wantMap.getOrDefault(nums[i]+3,0)+1);
            }
            
            // Bad luck case, nums[i] not able to start his/her company, so just return false
            else{
                return false;
            }
        }
        
        // All good till here so we return true
        return true;
    }
}
```


***Again to reiterate the logic :
The logic is to just apply a greedy approach and try to find a group of 3 consecutive numbers first and then for other numbers try to check if existing groups can be used or it is neccessary to create a new group.***

**Hope you enjoyed the story and if you liked it please upvote.Thanks!**