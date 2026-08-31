# C++ O(N) solution with example with explanation

**Author:** ashkanxy
**Votes:** 46
**Link:** [https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/303188/](https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/303188/)

---

If the array is already sorted the solution is the input array.
If not, move form right side of array toward left side until the point where the left element is larger than right element. 
At this point the left element (let's call it candid) is one of the elements that should be swapped.
But to swap with what element?
We actually need to swap candid with the largest value on its right side that is less than candid (let's call it candid_2).
Since the elements on the right side of candid are all sorted we can find the largest smaller number than candid in O(logN) by binary search

For example :
[1, 9 , 5, 7, 9]
Candid is index 1 : [1, **9**, 5,7,9]
Candid should be swapp by index 3  [1, 9, 5, **7**, 9]

Note: in case of having repeated digits we prefer to swap it with the left most one to reach a larger number.
for example in [3,1,1,3]
Candid is index 0 : [**3**,1,1,3]
Candid should be swapp by index 1 not index 2 [3,**1**,1,3]
This is because we want the candid elements which is larger than candid_2 be on left most side.
In other words "[1,3,1,3]" >  "[1,1,3,3] "

Following code is composed two helper functions.
First we check whether the algorithm is already sorted (O(N))
Then we try to find the candid_2  in O (logN) complexity if the array was not already sorted. 

````
    vector<int> prevPermOpt1(vector<int>& A) {
        int len = A.size();
        if (len<2 || is_sorted(A))
            return A;
        
        int cand = len-2;
        while (cand>=0 && A[cand+1]>=A[cand]){
            cand--;
        }
        
        int sw =swap_with (A, cand+1);
        swap (A[cand], A[sw]);
        return A;
        
    }
    
    int swap_with(vector<int> &A, int left){
        int right= A.size()-1;
        int val = A[left-1];
        int res= left;  
        while (left<=right){
            int mid = left+ (right-left)/2;           
            if (A[mid]<val){           
               if (A[res]<A[mid]) /*the preference for candid_2 is to be on left side as discussed by second example*/
                 res= mid;
               left=mid+1;
            } else
                right = mid-1;
        }
        
        return res;
    }
    bool is_sorted(vector<int> &A){
        for (int i= 1; i<A.size()-1;++i){
            if (A[i-1]>A[i])
                return false;
        }
        return true;
    }
`````