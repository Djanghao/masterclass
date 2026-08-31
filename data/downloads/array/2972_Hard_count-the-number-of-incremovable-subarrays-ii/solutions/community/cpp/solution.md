# C++ | Two pointer | O(N) | Detailed Explanation

**Author:** chandanagrawal23
**Votes:** 100
**Link:** [https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii/solutions/4447351/](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii/solutions/4447351/)

---

This question is very intresting.

I solved this question with opposite langauge in question see test case 3 : [8,7,6,6] 

we remove -

[8,7,6] to make remaining [6] as our valid array ( in question we have given after removal the remaining array should be strictly increasing)
[7,6,6] to make remaining [8] as our valid array ( in question we have given after removal the remaining array should be strictly increasing)
[8,7,6,6] to make remaining [] as our valid array ( in question we have given after removal the remaining array should be strictly increasing)


So instead of saying how many subarrays we have to remove , I will say how many valid array I can Make - 


Let's take bigger example - 

Arr : [1,2,5,3,4,6,7] , answer will be 18 let see how ?


let's try to parition this array into two strictly sorted part 

1 => [1,2,5] called as left

2 => [3,4,6,7] called as right

There are 4 parts of solution -


1) Take only from left array, so how many elements I can take ? obviously 3 how ? [1], [1,2] , [1,2,5] and see all are valid LOOK CAREFULLY PREFIX are valid

2) Take only from right arrar, so how many elements I can take ? obviously 4 how ? [7], [6,7] , [4,6,7],  [3,4,6,7] and see all are valid LOOK CAREFULLY SUFFIX are valid

3) Take prefix from left + suffix from right such that the merge will be sorted ?

   so [1],[7]
   [1],[6,7]
   [1],[4,6,7]
   [1],[3,4,6,7]
   [1,2],[7]
   [1,2],[6,7]
   [1,2],[4,6,7]
   [1,2],[3,4,6,7]
   [1,2,5],[7]
   [1,2,5],[6,7]

   So that means given two sorted arrays how many sorted arrays I can make such that I will take prefix of first array and suffix of second array and the resultant array will be sorted.


4) add extra 1 to delete whole array and empty array [] will be valid array.

**TOTAL = 3 + 4 + 10 + 1 = 18**

```
class Solution {
public:
    long long countSortedArrays(const vector<int>& arr1, const vector<int>& arr2) {
        int n1 = arr1.size();
        int n2 = arr2.size();

        long long result = 0;
        int i = 0, j = 0;

        while (i < n1 && j < n2) {
            if (arr1[i] < arr2[j]) {
                // If arr1[i] is less than arr2[j], you can form sorted arrays with arr1[0..i] and arr2[j..n2-1]
                result += (n2 - j);
                i++;
            } else {
                // If arr1[i] is greater than arr2[j], move to the next element in arr2
                j++;
            }
        }

    return result;
}
    long long incremovableSubarrayCount(vector<int>& a) {
        long long n = a.size();
		
        if(n==1)
            return 1;
        
		int i=0;
        int j=n-1;
		
        vector<int>arr1,arr2;

        while((i+1)<n and a[i]<a[i+1])
        {
            arr1.push_back(a[i]);
            i++;
        }
        arr1.push_back(a[i]);
  
        while((j-1)>=0 and a[j]>a[j-1]){
            arr2.push_back(a[j--]);
        }
        arr2.push_back(a[j]);
		
        reverse(arr2.begin(),arr2.end());
        if(j<i)
        {
            long long ans = (1ll*n*(n+1)*1LL)/2;
            return ans;
        }
		
        long long ans = 0;
		ans += arr1.size();   //1
        ans += arr2.size();  //2
        ans += countSortedArrays(arr1,arr2); //3
		ans++; //4
        
		return ans;
        
    }
};
```

PS : if whole array is struclty sorted, we will just find total subarray.

Thanks for reading, please upvote :)

Connect me on Linkedin  : https://www.linkedin.com/in/chandanagrawal23/
