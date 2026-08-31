# ✔ C++ HashMap and Brute force easy solutions

**Author:** _Aditya_Hegde_
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/2041940/](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/2041940/)

---

Hey all..
I have solved this in cpp using 2 methods:- Hashmap and brute force.
If you have any doubts be free to ask..
and please upvote if you understood or found it useful :)

Thank you..

```
  Method 1:- Using Hashmap
  TC = O( N^2) But more efficient than brute force
  SC = O(N)
  
  
class Solution {
public:
    int countPairs(vector<int>& nums, int k) {
        // Map of int and vector<int> to store the frequency and the indices of frequencies.
        unordered_map<int,vector<int>> m;
       
        int cnt=0,n=nums.size();
        
		// Traversing the vector to insert or find in the map
        for(int i=0;i<n;i++){
		    // If the element is already in the map
            if(m.find(nums[i])!=m.end()){
				// For all indices of the element discovered
                for(auto a:m[nums[i]]){
					// If products remainder is zero
                    if((a*i)%k==0){
                        cnt++;
                    }
                }
            }
            // Inserting into the map to multiply for next found same elements.
            m[nums[i]].push_back(i);
            
        }
        return cnt;
    }
};

Method 2:- Brute force
TC = O(N^2)
SC=  O(1)


class Solution {
public:
    int countPairs(vector<int>& nums, int k) {
  
        int cnt=0,n=nums.size();
		for(int i=0;i<n;i++){
		     for(int j=i+1;j<n;j++){
				 if(nums[i] == nums[j] and (i*j)%k==0){
					cnt++;
				}
			}
		}
		return cnt;
    }
};
```