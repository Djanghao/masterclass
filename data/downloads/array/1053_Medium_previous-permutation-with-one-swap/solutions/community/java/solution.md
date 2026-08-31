# [Python/Java/C++] easy to understand O(n) solution

**Author:** horwardL
**Votes:** 22
**Link:** [https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/516381/](https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/516381/)

---

Explanation:

1. Scan from right to left, because we want to find the **largest** number that is smaller than A. ( If we start from left to right we will still find the smaller number but may not keep the '**largest**')

2. Find A[i] where A[i] > A[i + 1] for 0 <= i < A.length - 1.
	* Need to choose a number that is greater than it right because we need to make 
	[1,**9**,**4**,6,7] -> [1,**4**,**9**,6,7]
	* A smaller, if choose a number that is greater on right it would only make A greater.
[1,9,4,**6**,**7**] -> [1,9,4,**7**,**6**]
	* 	If i == -1, which mean no such A[i] > A[i+1] (sorted [1,2,3,4] ) then return A

3. After we found A[i], we need to swap with the largest number that smaller than A on the **right** side of A[i], because we want to keep it the largest number smaller than A.
	[1,**7**,4,**6**,9] -> [1,**6**,4,**7**,9]
	* 	**Cannot** swap with number on the left of A[i] because it might make it **larger** than A.
	* 	**Cannot** swap with the largest number that **larger** than A[i], because it will make the number larger.
		[1,**7**,4,6,**9**] -> [1,**9**,4,6,**7**]
	* **Cannot** swap with a number that is **not** largest. Although it will make it smaller than A but it not the **largest number that smaller than A**.

Enough Talking let's code:

**Python**
```
def prevPermOpt1(self, A):
        i = len(A) - 2
        while i >= 0 and A[i] <= A[i+1]:
            i -= 1
        if i >= 0:
			max_ = i + 1
			# max number greater on right that less than A[i]
			for j in range(max_ + 1, len(A)):
				if A[max_] < A[j] < A[i]: 
					max_ = j
			A[max_], A[i] = A[i], A[max_]
        return A
```

**Java**
```
public int[] prevPermOpt1(int[] A) {
        int i = A.length - 2, max_ = -1;
        while(i >= 0 && A[i] <= A[i+1])
            --i;
        if(i >= 0){
			max_ = i + 1;
			for(int j=max_ + 1; j < A.length; ++j)
				if(A[max_] < A[j] && A[j] < A[i])
					max_ = j;
			int temp = A[max_];
			A[max_] = A[i];
			A[i] = temp;
		}
        return A;
    }
```

**C++**
```
vector<int> prevPermOpt1(vector<int>& A) {
        int i = A.size() - 2, max_ = -1;
        while(i >= 0 && A[i] <= A[i+1])
            --i;
        if(i >= 0){
            max_ = i + 1;
            for(int j = max_ + 1; j < A.size(); ++j)
                if(A[max_] < A[j] && A[j] < A[i])
                    max_ = j;
            swap(A[max_], A[i]);
        }
        return A;
    }
```

**Complexity**
Time O(n)
Space O(n)