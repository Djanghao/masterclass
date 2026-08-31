# C++ solution | simple and easy

**Author:** ajiteshgautam4
**Votes:** 4
**Link:** [https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/2393710/](https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/2393710/)

---

class Solution {
public:

    // if we choose any two elements from the array:
	// if the gcd is 1 then the required condition is true and
	// if gcd is not equal to 1 then the condition will never satisfy
	// its an observation, so don't get confused ( like an AXIOM )
	// you can dry run the given test cases to confirm
	
    int gcd(int a, int b){
        while (a%b != 0){
            int rem=a%b;
            a=b;
            b=rem;
        }
        return b;
    }
    bool isGoodArray(vector<int>& nums) {
        int n = nums.size();
        int a = 0;
        for(int i=0; i<n; i++){
            a = gcd(a,nums[i]);
            if(a==1)
                return true;
        }
        return false;
    }
};