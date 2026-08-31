# Code is cheap. Show you the analysis process step by step

**Author:** jasperjoe
**Votes:** 27
**Link:** [https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/589211/](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/589211/)

---

	class Solution {
	public:
		int numOfWays(int n) {
			int mod=1e9+7;
			int twoC=6; // number of ways to paint that the last block painted with two colors
			int threeC=6;// number of ways to paint that the last block painted with three colors
			for(int i=2;i<=n;i++)
			{
			//	If the current form is ABA, which means current block is formed only by two colors, then:
			//  ABA  can become BCB BAB CAC next time with two colors
			//  ABA can also become BAC CAB next time with three colors 
			
			//  If the current form is ABC, which means current block is formed by three colors, then:
	        //  ABC can become CAB BCA next time with two colors
	        //  ABC can also become BCB BAB next time with three colors
				long oldTwo=twoC;// store old status
				long oldThree=threeC;
				twoC=(3*oldTwo+2*oldThree)%mod;
				threeC=(2*oldTwo+2*oldThree)%mod;
			}
			return (twoC+threeC)%mod; 
		}
	};
	
	

	
	
	
	
	