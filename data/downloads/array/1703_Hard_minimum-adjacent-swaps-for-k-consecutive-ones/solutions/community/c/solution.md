# [Java/C++] Two pointers with Prefix Sums

**Author:** R3KT
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/987317/](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/solutions/987317/)

---

First, notice that in order to move a 1 towards another position, the amount of moves required is just the number of 0's that you pass.

Then, notice that if you want to group k consecutive ones together, you can always keep at least one '1' in the same position, and moves other 1's around it towards this '1'.
Ex. 1001. 
If you want to group 2 together, choosing to group them as 0110 is the same as grouping them as 1100 (kept left 1 at the same position).

Using these two observations, you only need to keep track of two things: the positions of the 1's, and how many 0's a '1' could pass if it were to move to another position. 

For the latter, just use prefix sums. For the former, you can use two pointers. 

First, let me define what I mean by 'center'.
This means the '1' at this position stays at the same place, everything else moves towards this '1')
Ex. 10110101. If I want k=4, and I center at index 2, the end result will be 01111001, because the '1' at index 2 did not change positions. If I center at index 7, then the result will be 10001111, meaning the '1' at index 7 does not change position.

The idea is that if we were to center everything at one position, we could have a 'right' pointer and a 'left' pointer (right - left + 1 = k). This range, from left to right, defines all of the 1's that I want to currently make consecutive.

Then, you can just perform normal two pointers.
Note the edge case in my code "if (right == i && right+1 < n)". This is because, the right and left pointers define the range I want to make consecutive, and therefore must include the point I am centering all the 1's to!

Java
```
public static int minMoves(int[] nums, int k) {
        ArrayList<Integer> ones = new ArrayList<>();
        for (int i=0; i<nums.length; i++) {
        	if (nums[i] == 1) ones.add(i);
        }
        int[] zeroespref = new int[nums.length];
        for (int i=0; i<nums.length; i++) {
        	if (i == 0) {
        		zeroespref[0] = (nums[0] == 0 ? 1 : 0);
        	}
        	else {
        		zeroespref[i] = zeroespref[i-1] + (nums[i] == 0 ? 1 : 0);
        	}
        }
        
        int n = ones.size();
        int right=k-1;
        int left=0;
        int mindist = 0;
        
        	// centered at 0
        for (int i=0; i<k; i++) {
        	mindist += zeroespref[ones.get(i)] - zeroespref[ones.get(0)];
        }
        
        int curdist = mindist;
        
        	// centered at i
        for (int i=1; i<n; i++) {
        	int zeroeschange = zeroespref[ones.get(i)] - zeroespref[ones.get(i-1)];
        	curdist += (i - left)*zeroeschange;
        	curdist -= (right - i + 1)*zeroeschange;
        	
        	while (right+1<n) {
        		int zeroesleft = zeroespref[ones.get(i)] - zeroespref[ones.get(left)];
        		int zeroesright = zeroespref[ones.get(right+1)] - zeroespref[ones.get(i)];
        		if (zeroesright < zeroesleft) {
        			curdist -= zeroesleft;
        			curdist += zeroesright;
            		right++;
            		left++;
        		}
        		else break;
        	}
        	mindist = Math.min(mindist, curdist);
        	
        	if (right == i && right+1 < n) {
        		int zeroesleft = zeroespref[ones.get(i)] - zeroespref[ones.get(left)];
        		int zeroesright = zeroespref[ones.get(right+1)] - zeroespref[ones.get(i)];
    			curdist -= zeroesleft;
    			curdist += zeroesright;
        		right++;
        		left++;
        	}
        }
        
        return mindist;
        
    }
```

C++
```
class Solution {
public:
    int minMoves(vector<int>& nums, int k) {
        vector<int> ones;
        for (int i=0; i<nums.size(); i++) {
        	if (nums[i] == 1) ones.push_back(i);
        }
        long zeroespref[nums.size()];
        for (int i=0; i<nums.size(); i++) {
        	if (i == 0) {
        		zeroespref[0] = (nums[0] == 0 ? 1 : 0);
        	}
        	else {
        		zeroespref[i] = zeroespref[i-1] + (nums[i] == 0 ? 1 : 0);
        	}
        }
        
        int n = ones.size();
        int right=k-1;
        int left=0;
        long mindist = 0;
        
        	// centered at 0
        for (int i=0; i<k; i++) {
        	mindist += zeroespref[ones[i]] - zeroespref[ones[0]];
        }
        
        long curdist = mindist;
        
        	// centered at i
        for (int i=1; i<n; i++) {
        	long zeroeschange = zeroespref[ones[i]] - zeroespref[ones[i-1]];
        	curdist += (i - left)*zeroeschange;
        	curdist -= (right - i + 1)*zeroeschange;
        	
        	while (right+1<n) {
        		long zeroesleft = zeroespref[ones[i]] - zeroespref[ones[left]];
        		long zeroesright = zeroespref[ones[right+1]] - zeroespref[ones[i]];
        		if (zeroesright < zeroesleft) {
        			curdist -= zeroesleft;
        			curdist += zeroesright;
            		right++;
            		left++;
        		}
        		else break;
        	}
        	mindist = min(mindist, curdist);
        	
        	if (right == i && right+1 < n) {
        		long zeroesleft = zeroespref[ones[i]] - zeroespref[ones[left]];
        		long zeroesright = zeroespref[ones[right+1]] - zeroespref[ones[i]];
    			curdist -= zeroesleft;
    			curdist += zeroesright;
        		right++;
        		left++;
        	}
        }
        
        return mindist;
    }
};
```