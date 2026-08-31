# Easy Merge Sort based solution | C++ | O(NlogN) time complexity

**Author:** faisal_habib
**Votes:** 46
**Link:** [https://leetcode.com/problems/reverse-pairs/solutions/1201949/](https://leetcode.com/problems/reverse-pairs/solutions/1201949/)

---

**Brute force solution:**
For each value in given sample, we\u2019ll check all other front values to see if, the value is greater than double of the front value.
```
int reversePairCount = 0;
for(int i=0; i<nums.size(); i++) {
	for(int j=i+1; j<nums.size(); j++) {
		if( nums[i] > 2*nums[j]) reversePairCount++;
	}
}
return reversePairCount;
```
***Time complexity:*** O(N^2)
***Space complexity:*** O(1)
Where N is the size of array \u201Cnums\u201D.
As the size of size of array \u201Cnums\u201D can be max 5*10^4, this brute force approach will give **TLE** as verdict.

**Merge Sort based solution:**
This problem can be solved very easily using merge sort.
Let\u2019s consider the common top-down approach of merge sort.
Assume, there\u2019re 2 functions.
1. _mergeSort : Divides the array.
2. _merge: Compares elements of 2 sub-array, then merge them into 1 array.

For this problem, we\u2019ll modify the \u201C_merge\u201D function to get the required output.
```
void _merge(int ar[], int low, int mid, int high) {
    int leftInd=low, rightInd=mid+1, temp[high-low+1], tempInd = 0;

    while(leftInd<=mid && rightInd<=high) {
        if(ar[leftInd] <= ar[rightInd]) temp[tempInd++] = ar[leftInd++];
        else temp[tempInd++] = ar[rightInd++];
    }

    while(leftInd <= mid) temp[tempInd++] = ar[leftInd++];

    while(rightInd<=high) temp[tempInd++] = ar[rightInd++];

    for(int i=0; i<tempInd; i++) ar[low++] = temp[i];
}
```
This is a sample code of typical \u201C_merge\u201D function. Here we check which part between 2 sub-array has the smaller element. Then we keep it into the additional array (in the code \u201Ctemp\u201D).

For this problem, instead of checking whether current value of left sub-array is less than or equal to current value of right sub-array, we\u2019ll check whether current value of left sub-array is greater than double of current value of right sub-array.
That means, current value of left sub-array > 2 * current value of right sub-array.
This is the main idea for solving the problem.

Solution Code:
```
void _merge(vector<int>& nums, int low, int mid, int high, int &reversePairCount) {
    int leftInd = low, rightInd = mid+1, r = rightInd, temp[high-low+1], tempInd = 0, counter = 0;
    // 4 6 8,  1 2 3
    while(leftInd<=mid) {
        while( r<=high && (nums[leftInd] > (long)2*nums[r]) ) counter++, r++;
        reversePairCount+= counter;
        while( rightInd<=high && nums[rightInd]<=nums[leftInd] ) {
            temp[tempInd++] = nums[rightInd++];
        }
        temp[tempInd++] = nums[leftInd++];
    }
    while(rightInd<=high) {
        temp[tempInd++] = nums[rightInd++];
    }
    for(int i=0; i<tempInd; i++) nums[low++] = temp[i];
}

void _mergeSort(vector<int>& nums, int low, int high, int &reversePairCount) {
    if(low < high) {
        int mid = low + (high-low)/2;
        _mergeSort(nums, low, mid, reversePairCount);
        _mergeSort(nums, mid+1, high, reversePairCount);
        _merge(nums, low, mid, high, reversePairCount);
    }
}

int reversePairs(vector<int>& nums) {
    int reversePairCount = 0;
    int sz = nums.size();
    if(sz<=1) return reversePairCount;
    _mergeSort(nums, 0, sz-1, reversePairCount);
    return reversePairCount;
}
```
***Time complexity:*** O(N * logN)
***Space complexity:*** O(N)

Explanation with example:
Let\u2019s consider 2 sub-array [4, 6, 8] and [1, 2, 3].

index:	 0	1	2	3	4	5
value:	 4	6	8	1	2	3
count:	1	2	3	0	0	0

For value 4, there's only 1 value in right sub-array, **1** (4 > 2x1).
For value 6, there're 2 values in right sub-array, **1** (4 > 2x1), **2** (6 > 2x2).
For value 8, there're 3 values in right sub-array, **1** (4 > 2x1), **2** (8 > 2x2), **3** (8 > 2x3).

So output will be 1+2+3 = 6.

Hope this helps. Happy coding!