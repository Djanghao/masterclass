# Java✔ || C++✔ ||Python✔ || Solution Easy To Understand

**Author:** Armorix13
**Votes:** 92
**Link:** [https://leetcode.com/problems/make-array-strictly-increasing/solutions/3646689/](https://leetcode.com/problems/make-array-strictly-increasing/solutions/3646689/)

---

#  Guys Please Voteup:))
1. To solve this problem, we can use a dynamic programming approach. Let's define a two-dimensional array dp where dp[i][j] represents the minimum number of operations needed to make the subarray arr1[0:i] strictly increasing, where the last element of arr1 is arr1[i], and the last element of arr2 used in the operation is arr2[j].

1. Initially, we can set dp[i][j] to a large value or infinity for all elements in the dp array. We'll use Infinity to represent an invalid state.
1. We'll iterate through the elements of arr1 and arr2, and for each pair of indices (i, j), we'll update dp[i][j] based on the following conditions:

1. If arr1[i] > arr1[i-1], it means that arr1[i] is greater than the previous element in arr1, and we don't need any operations. So we can set dp[i][j] = dp[i-1][j].

1. If arr1[i] > arr2[j], it means that we can make arr1[i] greater by assigning it the value of arr2[j]. We'll choose the minimum number of operations between the current value of dp[i][j] and dp[i-1][k] + 1, where k iterates from 0 to j-1.

1. At the end of the iteration, we'll find the minimum number of operations needed to make the entire arr1 strictly increasing by finding the minimum value in the last row of the dp array.

1. If there is no way to make arr1 strictly increasing, the minimum number of operations will remain as Infinity, and we'll return -1.

Instead of considering dp[][] be the minimum number of swaps required, let's think of it in another way. Let's instead consider dp[i][j] be the minimum last number of a strictly increasing sequence from 0 ... i indexes of array 1 with j swaps. The intuition is that It is in our best interest in minimizing the last number to leave more rooms for the future numbers from i+1 ... arr1.length-1.
Transitions

For each arr1[i], we have 2 options - we either swap it with an element in arr2, or we don't, but it must be greater than arr1[i-1].
Thus, we have the following transitional states:

Let a = arr1[i] if arr1[i] > arr1[i-1], else INF (don't swap)
Let b = the higher element of dp[i-1][j-1] in arr2, else INF if it does not exist (swap)
Then, dp[i][j] = min(a, b)

Where is the answer?

In the end, we loop through all dp[arr1.length-1][j] from j = 0 ... arr2.length, and the first occurrence of not INF, we return j.
Java

**Time O(NMlogM)
Space O(M)**

# Java Code
```
class Solution {
    public int makeArrayIncreasing(int[] A, int[] B) { // A = arr1, B = arr2
        TreeSet<Integer> set = new TreeSet<>(Arrays.stream(B).boxed().toList());
        int[] dp = new int[B.length+1];
        dp[0]=-1;
        int INF = (int)2e9;
        for (int i = 0; i < A.length; i++){
            for (int j = B.length; j >= 0; j--){
                int a = A[i] > dp[j]? A[i] : INF; // option A - don't swap
                Integer b = set.higher(j==0?INF:dp[j-1]); // option B - swap
                dp[j]=Math.min(a, b==null?INF:b); // take the min of A and B
            }
        }
        for (int i = 0; i <= B.length; i++) if (dp[i] != INF){
            return i;
        }
        return -1;
    }
}
```

# C++ Code
```
class Solution {
public:
    int solve(int i,int j,int &a,int &b,int p,vector<vector<int>> &dp,vector<int> &v1,vector<int> &v2){
        if(i==a){
            return 0;
        }
        j = upper_bound(v2.begin()+j,v2.end(),p)-v2.begin();
        if(dp[i][j] != -1)return dp[i][j];
        if(j==b && v1[i]<=p)return 2001;
        int take = 2001,nottake = 2001;
        if(j!=b)
        take = solve(i+1,j+1,a,b,v2[j],dp,v1,v2)+1;
        if(v1[i]>p)
        nottake = solve(i+1,j,a,b,v1[i],dp,v1,v2);
        return dp[i][j] = min(take,nottake);
    }
    int makeArrayIncreasing(vector<int>& arr1, vector<int>& arr2) {
        int n = arr1.size(),m=arr2.size();
        vector<vector<int>> dp(2001,vector<int>(2001,-1));
        sort(arr2.begin(),arr2.end());
        int a= solve(0,0,n,m,-1,dp,arr1,arr2);
        if(a>n)return -1;
        return a;
    }
};
```
# Python Code
```
class Solution(object):

    def makeArrayIncreasing(self, arr1, arr2):
     
        arr2 = sorted(arr2)
        dict_pre = {0: -float("inf")}
		
        for num in arr1:
            dict_cur = collections.defaultdict(lambda: float("inf"))
            for n_swap in dict_pre:
                if num > dict_pre[n_swap]:
                    dict_cur[n_swap] = min(dict_cur[n_swap], num)
                loc = bisect.bisect(arr2, dict_pre[n_swap])
                if loc < len(arr2):
                    dict_cur[n_swap+1] = min(dict_cur[n_swap+1], arr2[loc])
                    
            if not dict_cur:
                return -1
            dict_pre = dict_cur
            
        return min(dict_pre.keys())
		
		
```
