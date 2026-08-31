# ✅Short || C++ || Java || PYTHON || Explained Solution✔️ || Beginner Friendly ||🔥 🔥 BY MR CODER

**Author:** mrcoderrm
**Votes:** 55
**Link:** [https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/2578114/](https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/2578114/)

---

**Please UPVOTE if you LIKE!!**
**Watch this video \uD83E\uDC83 for the better explanation of the code.

https://www.youtube.com/watch?v=qJmw5PS6rJs


**Also you can SUBSCRIBE  \uD83E\uDC81 \uD83E\uDC81 \uD83E\uDC81 this channel for the daily leetcode challange solution.**
https://t.me/dsacoder  \u2B05\u2B05 **Telegram link** to discuss leetcode daily questions and other dsa problems

**C++**
```

    class Solution {
public:
    vector<int> findOriginalArray(vector<int>& changed) {
        int n = changed.size();
		// size of the array
        vector<int> ans;
		// answer storing array
        vector<int> vacans;
		// when we need to return vacant array
         unordered_map<int, int> um;
		 // for storing the frequencies of each input
        if (n % 2 !=0) return ans;
		// when we will have odd number of integer in our input(double array can't be in odd number)
        sort(changed.begin(), changed.end());
		// sorting in increasing order
        for(auto x: changed){
            um[x]++;
			// storing the frequencies
        }
        for (auto y: changed) {
          if (um[y] == 0) continue;
		  // if we have already decreased it's value when we were checking y/2 value, like 2,4 we will remove 4 also when we will check 2 but our iteration will come again on 4.
          if (um[y * 2] == 0) return vacans;
		  // if we have y but not y*2 return vacant array
          ans.push_back(y);
		  // if we have both y and y*2, store in our ans array
          um[y]--;
		  // decrease the frequency of y and y*2
          um[y * 2]--;
        }
        return ans;
    }
};
```
**JAVA**
```
class Solution {
    public int[] findOriginalArray(int[] nums) {
       int[] vacarr = new int[0];
	   	// when we need to return vacant array
        int n= nums.length;
			// size of the array
        if(n%2!=0)
        {
            return vacarr;
			// when we will have odd number of integer in our input(double array can't be in odd number)
    
        }
        HashMap<Integer, Integer> hm = new HashMap<Integer, Integer>();
			 // for storing the frequencies of each input
        int[] ans = new int[(nums.length/2)];
        // answer storing array
     
        for(int i=0;i<n;i++)
        {
            hm.put(nums[i], hm.getOrDefault(nums[i],0)+1);
			// storing the frequencies
        }
        int temp = 0;
        
        Arrays.sort(nums);
		// sorting in increasing order
        for(int i: nums)
        {
           
            if(hm.get(i)<=0)
            {
			  // if we have already decreased it's value when we were checking y/2 value, like 2,4 we will remove 4 also when we will check 2 but our iteration will come again on 4.
      
                continue;
            }
         
            if(hm.getOrDefault(2*i,0)<=0)
            {   // if we have y but not y*2 return vacant array
                return vacarr;
            }
            ans[temp++] = i;
			 // if we have both y and y*2, store in our ans array
           // decrease the frequency of y and y*2
            hm.put(i, hm.get(i)-1); 
            hm.put(2*i, hm.get(2*i)-1);
        }
        
        return ans;
    }
}
```
**PYTHON**
```
class Solution:
    def findOriginalArray(self, nums: List[int]) -> List[int]:
            ans = [] 
			#answer storing array
            vacans = [] 
			#when we need to return vacant array
            if len(nums)%2:
                    return ans
					#when we will have odd number of integer in our input(double array can't be in odd number)
    
            nums.sort()
			#sorting 

            temp = Counter(nums)
			#storing the frequencies
            for i in nums:    
                if temp[i] == 0:  
				#if we have already decreased it's value when we were checking y/2 value, like 2,4 we will remove 4 also when we will check 2 but our iteration will come again on 4.
      
                    continue
                else:
                    if temp.get(2*i,0) >= 1:
					#if we have both y and y*2, store in our ans array
                        ans.append(i)
						#decrease the frequency of y and y*2
                        temp[2*i] -= 1
                        temp[i] -= 1
                    else:        
                        return vacans
            return ans
```
**Please do UPVOTE to motivate me to solve more daily challenges like this !!**