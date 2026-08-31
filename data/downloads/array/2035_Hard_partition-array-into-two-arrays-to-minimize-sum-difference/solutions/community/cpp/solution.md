# BEST SOLUTION || "Tabulation" Failed ? || (FULL EXPLAINATION) || C++

**Author:** BOT_TLE
**Votes:** 177
**Link:** [https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/2721045/](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/solutions/2721045/)

---

***Before we start understanding the reason and the solution which will resolve this , all I want is ,you all to be focused ,patient and have a copy and pen with yourself!**

 *Basic Approach* :-
 
-> We'll find the total sum of the given array which will be our range of the array  **i.e arr[] = [1,2,7]**
-> our range will be **0--10**
->Now we'll use the Tabulation method to the generate the subset sum of the given array and put that element in the 
vector 

				for example --  arr[] = [1,2,7]
				sumbset sum = [ 0 , 1 , 2 , 3 , 7 , 8 , 9 , 10] // we'll get this from tabulation from the last row
				Here we'll consider *0* because ,what if we don't select any element
				

-> After getting this subset sum vector , we'll divide array into two half and check the value from the first half and minimize it
	Explained below why first half only

	 i.e minimize(abs(Sum1-Sum2))        -->where Sum1 = Sum of left part , Sum2 = sum of right part 
		Also Total Sum(Ts)= Sum1 + Sum2;      -->Total Sum is 10 here i.e Sum of Given array 
		Therefore Sum2 = Ts - Sum1;
		minimize(abs(Sum1 - (Ts - Sum1)));
		i.e **Minimize(Ts - 2*Sum1)**  // Final value which we have to be minimize
	
**NOTE : There's a problem in this i.e *It will work only for +ve intgeres (i.e All values in the given array is +ve)***

**## 1. Reason why tabulation failed!**

As we encounter the negative elements in the given array So there's a possibility that our **Total Sum or Range becomes 
negavtive**
As soon as our range becomes negative the tabulation method fails because it is impossible to create a 2D matrix of size less than 0 i.e NEGATIVE 
Or There's a possibilty that our sum or range becomes **0** in this case too it is impossible to create the 2D matrix.
So we'll follow up with another approach which is know as **Meet in the Middle** 

**## 2. Meet In The Middle Approach**
*Will explain with eg at end*

1. Here, the only and simple approach is that we'll divide our array into two parts.

2. As it is given that our array is of even length so we'll have the partitioned array of equal length (N/2) where N is the size of original array
3. Then we will find the all the subset sum in both the arrays i.e in the left array as well as right array.
		-> while calculating the subset sum of left array and right array we also have to take the count of element used while taking          out sum
4. We can store the sum with given values in MAP or in 2D vector acoording to our need, Here I've used vector because it is easy to access the value 
5. So here, to make left_ans either we can take all 3 from left_part and 0 from right_part, or 1 from left_part and (N-1) from right_part, 2 from left_part and (N-2) from right_part.

		for eg : arr[] = [3,9,7,3]
		left array = [3,9] , right array = [7,3]
		left array and right array subset sum with number of element used :
		Number used : Sum  (for left)                Number used : Sum (for right)
				  [0 : 0]                                      [0 : 0]
				  [1 : 3 , 9 ]                                 [1 : 7, 3]
				  [2 : 12 ]                                    [2 : 10]
				  

6. Now we'll iterate through the left array and find the nearest possible value which will help to minimize the ans
7. Also for finding the value in the right array we'll first sort it and use binary search to get the value
8.  So how this works is, if we take 1 from left_part, so this means we have taken one group of element, so its sum is taken from left part i.e **l_sum = left_sums[1]**, now to make is closer to **half = total / 2**(Where Total is the size of array)
  
	 we need to add **required_sum = half - l_sum**, so we will binary search the value of it in right_sums
	 So now **least_ans_sum will become l_sum + r_sum(the binary search sum we got closest go required_sum).**
	 
9. Explanation of **int b = (totalSum - 2*a)/2** :
Let **T = totalSum**. We want to **minimize abs(sum2 - sum1)**. We can say **sum2 = T - sum1**
Let say from left part we take a **subset of size sz (Let's say its sum is a)**, then from right part we need to take a **subset of size of n-sz (Let's say its sum is b).**

  Objective now becomes **minimize abs(T - 2 * sum1)**, at the best possible outcome we can have abs() = 0 which will     happen when 2 * sum1 = T

We can say **sum1 = a+b**. We know a which comes from left part.
	**So 2 * (a+b) = T ===> b = (T-2*a)/2 .**
	
10. Now it'll be more clear with code which is given below 


 ///

	class Solution {
	public:
    int minimumDifference(vector<int>& nums) {
        int n = nums.size(),  sum = 0;
        sum = accumulate(nums.begin(), nums.end(),0);  // To find the total sum of the array 
        
        int N = n/2; // Divide it into two equals parts as length is even
        vector<vector<int>> left(N+1), right(N+1); // left array and right array
        
		//All possible sum in left and right part (Generating and storing using BIT-Masking)
        for(int mask = 0; mask<(1<<N); ++mask){  // (1<<n) means 2^n i.e we'll iterate through 0 to 2^n
            int idx = 0, l_sum = 0, r_sum = 0;
            for(int i=0; i<N; ++i){
                if(mask&(1<<i)){  // To check if the bit is set or not 
                    idx++;
                    l_sum += nums[i];
                    r_sum += nums[i+N];
                }
            }
            left[idx].push_back(l_sum);
            right[idx].push_back(r_sum);   // storing
        }

        for(int idx=0; idx<=N; ++idx){
            sort(right[idx].begin(), right[idx].end());   // as we'll perform binary search on right so we have to sort it first
        }

	 int res = min(abs(sum-2*left[N][0]), abs(sum-2*right[N][0]));  // To get the minimum answer from the max sum from both array
			//iterating over left part
			for(int idx=1; idx<N; ++idx){ // iterate from 1 so we dont have to include 0 and check for all value except last as we have alr considered it
				for(auto &a : left[idx]){ // check the sum at each number position
					int b = (sum - 2*a)/2; // find the value to be minimized 
					int rightidx = N-idx; // find the number value in right array
					auto &v = right[rightidx]; // store the vector in v at right number position
					auto itr = lower_bound(v.begin(), v.end(),b); //binary search over right part

					if(itr!=v.end()) res = min(res, abs(sum-2*(a+(*itr)))); // if found in vector then only update otherwise continue

					}                
				}
			return res;

		}
	};
 
**## Why NOT TLE ?**


   This works ,because we are generating all possible subset sums using only k elements, where k is from 1 to N. Which is in total 2k, and as max value of k is 15, so 215 is 32,000. Which is easy to work with. While if you try to make all subset sums, it becomes 230 is 1,073,741,824 which will give TLE.
   
**##    IF IT HELPS YOU! UPVOTE PLEASE!**