# C++ Clean Code Solution | Fastest | All (15+) Sorting Methods | Detailed

**Author:** umesh72614
**Votes:** 899
**Link:** [https://leetcode.com/problems/sort-an-array/solutions/1401412/](https://leetcode.com/problems/sort-an-array/solutions/1401412/)

---

### Table of Content:
* STL
	* Method1: Standard 
	* Method2: Stable
* Insertion Sort
	* Method1: Iterative
	* Method2: Recursive
* Selection Sort
	* Method1: Standard
	* Method2: Standard using inbuilt
* Bubble Sort
* Quick Sort
	* Method1: Standard
	* Method2: Randomised
* Merge Sort
	* Method1: Outplace Merging
	* Method2: Inplace Merging
* Generalised Radix Sort
	* Method1: Using MinVal
	* Method2: Using Partitioning
* Generalised Counting Sort
* Heap Sort
* Bucket Sort

##### STL

1. Method1: Standard (Accepted) [T(n) = O(n * lgn)]

```
void stlSort(vector<int>& nums) {
	sort(nums.begin(), nums.end());
}
```

2. Method2: Stable (Accepted) [T(n) = O(n * lgn)]
```
void stableStlSort(vector<int>& nums) {
	stable_sort(nums.begin(), nums.end());
}
```

##### Insertion Sort

1. Method1: Iterative (TLE) [T(n) = O(n^2)]

```
void insertionSort(vector<int> &nums) {
	int sortedInd, unsortedInd, key, size = nums.size();
	if (size <= 1) return;
	for (unsortedInd = 1; unsortedInd < size; unsortedInd++) {
		key = nums[unsortedInd], sortedInd = unsortedInd;
		while (--sortedInd >= 0 and key < nums[sortedInd])
			nums[sortedInd + 1] = nums[sortedInd];
		nums[sortedInd + 1] = key;
	}
}
```

2. Method2: Recursive (TLE) [T(n) = O(n^2)]

```
void recInsert(vector<int> &nums, int val) {
	if (!nums.size() or nums.back() <= val)
		return nums.push_back(val);
	int last = nums.back();
	nums.pop_back();
	recInsert(nums, val);
	nums.push_back(last);
}
	
void recInsertionSort(vector<int> &nums) {
	if (nums.size() <= 1) return;
	int last = nums.back();
	nums.pop_back();
	recInsertionSort(nums);
	recInsert(nums, last);
}
```

##### Selection Sort

1. Method1: Standard (TLE) [T(n) = Theta(n^2)]

```
void selectionSort(vector<int> &nums) {
	int minInd, startInd, currInd, size = nums.size();
	if (size <= 1) return;
	for (startInd = 0; startInd < size - 1; startInd++) {
		for (currInd = startInd + 1, minInd = startInd; currInd < size; currInd++)
			if (nums[minInd] > nums[currInd])
				minInd = currInd;
		if (minInd != startInd)
			swap(nums[startInd], nums[minInd]);
	}
}
```

2. Method2: Standard using inbuilt (TLE) [T(n) = Theta(n^2)]

```
void selectionSort(vector<int> &nums) {
	int minInd, startInd, size = nums.size();
	if (size <= 1) return;
	for (startInd = 0; startInd < size - 1; startInd++) {
		minInd = min_element(nums.begin() + startInd, nums.end()) - nums.begin();
		if (minInd != startInd)
			swap(nums[startInd], nums[minInd]);
	}
}
```

##### Bubble Sort (TLE)  [T(n) = Theta(n^2)]

```
void bubbleSort(vector<int> &nums) {
	int endInd, currInd, size = nums.size();
	if (size <= 1) return;
	for (endInd = size - 1; endInd; endInd--)
		for (currInd = 0; currInd < endInd; currInd++)
			if (nums[currInd] > nums[currInd + 1])
				swap(nums[currInd], nums[currInd + 1]);
}
```

##### Quick Sort

1. Method1: Standard (TLE)  [T(n) = O(n^2)]

```
int partitionArray(vector<int> &nums, int low, int high) {
	if (low >= high) return -1;
	int pivot = low, l = pivot + 1, r = high;
	while (l <= r)
		if (nums[l] < nums[pivot]) l++;
		else if (nums[r] >= nums[pivot]) r--;
		else swap(nums[l], nums[r]);
	swap(nums[pivot], nums[r]);
	return r;
}
	
void quickSort(vector<int> &nums, int low, int high) {
	if (low >= high) return;
	int pivot = partitionArray(nums, low, high);
	quickSort(nums, low, pivot);
	quickSort(nums, pivot + 1, high);
}
```

2. Method2: Randomised (TLE)  [T(n) = O(n * lgn) on avg. but O(n^2) in worst case]

```
int partitionArray(vector<int> &nums, int low, int high) {
	if (low >= high) return -1;
	int pivot = low, l = pivot + 1, r = high;
	while (l <= r)
		if (nums[l] < nums[pivot]) l++;
		else if (nums[r] >= nums[pivot]) r--;
		else swap(nums[l], nums[r]);
	swap(nums[pivot], nums[r]);
	return r;
}

void quickSort(vector<int> &nums, int low, int high) {
	if (low >= high) return;
	swap(nums[low + rand() % (high - low + 1)], nums[low]);
	int pivot = partitionArray(nums, low, high);
	quickSort(nums, low, pivot);
	quickSort(nums, pivot + 1, high);
}
```

##### Merge Sort

1. Method1: Outplace Merging (Accepted) [T(n) = O(n * lgn)]

```
void outPlaceMerge(vector<int> &nums, int low, int mid, int high) {
	if (low >= high) return;
	int l = low, r = mid + 1, k = 0, size = high - low + 1;
	vector<int> sorted(size, 0);
	while (l <= mid and r <= high)
		sorted[k++] = nums[l] < nums[r] ? nums[l++] : nums[r++];
	while (l <= mid) 
		sorted[k++] = nums[l++];
	while (r <= high) 
		sorted[k++] = nums[r++];
	for (k = 0; k < size; k++)
		nums[k + low] = sorted[k];
}

void mergeSort(vector<int> &nums, int low, int high) {
	if (low >= high) return;
	int mid = (high - low) / 2 + low;
	mergeSort(nums, low, mid);
	mergeSort(nums, mid + 1, high);
	outPlaceMerge(nums, low, mid, high);
}
```

2. Method2: Inplace Merging (TLE) [T(n) = O(n^2)]

```
void inPlaceMerge(vector<int> &nums, int low, int mid, int high) {
	if (low >= high) return;
	int l = low, r = mid + 1, size = high - low + 1;
	while (l <= mid and r <= high) {
		if (nums[l] <= nums[r]) l++;
		else {
			int val = nums[r];
			for (int k = r++; k > l; k--)
				nums[k] = nums[k - 1];
			nums[l++] = val;
			mid++;
		}
	}
}

void mergeSort(vector<int> &nums, int low, int high) {
	if (low >= high) return;
	int mid = (high - low) / 2 + low;
	mergeSort(nums, low, mid);
	mergeSort(nums, mid + 1, high);
	inPlaceMerge(nums, low, mid, high);
}
```

##### Generalised Couting Sort (Accepted) [T(n) = Theta(max(n, m)) where m = max(Arr)]

```
void countingSort(vector<int> &nums, bool isAscending=true) {
	int minVal = *min_element(nums.begin(), nums.end());
	int maxVal = *max_element(nums.begin(), nums.end());
	// int freqSize = maxVal - minVal + 1 is enough i.e its also correct
	int freqSize = maxVal - minVal + 1 + 1, size = nums.size();
	vector<int> freq(freqSize, 0), sorted(size, 0);
	for (int ind = 0; ind < size; ind++)
		freq[nums[ind] - minVal]++;
	if (isAscending)
		for (int ind = 1; ind < freqSize; ind++)
			freq[ind] += freq[ind - 1];
	else
		for (int ind = freqSize - 2; ind >= 0; ind--)
			freq[ind] += freq[ind + 1];
	// for stable sorting start ind from end and decrement till 0
	for (int ind = size - 1; ind >= 0; ind--)
		sorted[freq[nums[ind] - minVal]-- - 1] = nums[ind];
	nums = sorted;
}
```

##### Generalised Radix Sort 

1. Method1: Using MinVal (Accepted)  [T(n) = Theta(n)]

```
int getDigit(int num, int factor) {
	return (abs(num) / abs(factor)) % 10;
}

void radixCountingSort(vector<int> &nums, int factor) {
	int freqSize = 10, size = nums.size();
	vector<int> freq(freqSize, 0), sorted(size, 0);
	for (int ind = 0; ind < size; ind++)
		freq[getDigit(nums[ind], factor)]++;
	for (int ind = 1; ind < freqSize; ind++)
		freq[ind] += freq[ind - 1];
	// for stable sorting start ind from end and decrement till 0
	for (int ind = size - 1; ind >= 0; ind--)
		sorted[freq[getDigit(nums[ind], factor)]-- - 1] = nums[ind];
	nums = sorted;
}

void radixSort(vector<int> &nums) {
	int minVal = *min_element(nums.begin(), nums.end());
	for (auto &num : nums) num -= minVal;
	int factor = 1, maxVal = *max_element(nums.begin(), nums.end());
	while (maxVal / factor) {
		radixCountingSort(nums, factor);
		factor *= 10;
	}
	for (auto &num : nums) num += minVal;
}
```

2. Method2: Using Partitioning (Accepted)  [T(n) = Theta(n)]

	Idea is to partition the Array with pivot as mininum Positive Element and thus, left half array is of -ve no.s (if any) and right half array is of +ve no.s (if any). Finally we apply Radix Sort on both the parts.
	Note that to sort -ve no.s only with Radix Sort, we need to reverse sort the -ve no.s (eg: [-5,-4,-3] and [3,4,5])

```
int partitionArray(vector<int> &nums, int low=0, int high=-1) {
	high = high < 0 ? nums.size() - 1 : high;
	if (low >= high) return -1;
	int pivot = low, l = pivot + 1, r = high;
	while (l <= r)
		if (nums[l] < nums[pivot]) l++;
		else if (nums[r] >= nums[pivot]) r--;
		else swap(nums[l], nums[r]);
	swap(nums[pivot], nums[r]);
	return r;
}

int getDigit(int num, int factor) {
	return (abs(num) / abs(factor)) % 10;
}

pair<int, int> getMinAndNonNegMinInd(vector<int> &nums) {
	int minInd = nums.size(), minVal = INT_MAX;
	int nonNegMinInd = nums.size(), minNonNegVal = INT_MAX;
	for (int i = 0; i < nums.size(); i++) {
		if (nums[i] >= 0 and nums[i] < minNonNegVal)
			nonNegMinInd = i, minNonNegVal = nums[i];
		if (nums[i] < minVal)
			minInd = i, minVal = nums[i];
	}
	return {minInd, nonNegMinInd};
}

int radixSortPartionArray(vector<int> &nums) {
	auto [minInd, nonNegMinInd] = getMinAndNonNegMinInd(nums);
	if (nonNegMinInd < nums.size()) {
		if (nonNegMinInd) swap(nums[0], nums[nonNegMinInd]);
		if (nums[minInd] >= 0) nonNegMinInd = 0;
		else nonNegMinInd = partitionArray(nums);
	}
	return nonNegMinInd;
}

void radixCountingSort(vector<int> &nums, int factor, int low, int high, bool isAscending=true) {
	if (low >= high) return;
	int freqSize = 10, size = high - low + 1;
	vector<int> freq(freqSize, 0), sorted(size, 0);
	for (int ind = 0; ind < size; ind++)
		freq[getDigit(nums[ind + low], factor)]++;
	if (isAscending)
		// reference: http://analgorithmaday.blogspot.com/2011/03/counting-sortlinear-time.html
		for (int ind = 1; ind < freqSize; ind++)
			freq[ind] += freq[ind - 1];
	else
		for (int ind = freqSize - 2; ind >= 0; ind--)
			freq[ind] += freq[ind + 1];
	// for stable sorting start ind from end and decrement till 0
	for (int ind = size - 1; ind >= 0; ind--)
		sorted[freq[getDigit(nums[ind + low], factor)]-- - 1] = nums[ind + low];
	for (int ind = 0; ind < size; ind++)
		nums[ind + low] = sorted[ind];
}

void radixSortHelper(vector<int> &nums, int low, int high, bool isAscending=true) {
	if (low >= high) return;
	int maxVal = *max_element(nums.begin() + low, nums.begin() + high + 1, [] (int &a, int &b) {
		return abs(a) < abs(b);
	});
	int factor = 1;
	while (maxVal / factor) {
		radixCountingSort(nums, factor, low, high, isAscending);
		factor *= 10;
	}
}

void radixSort(vector<int> &nums) {
	int nonNegMinInd = radixSortPartionArray(nums);
	if (nonNegMinInd <= 1)
		radixSortHelper(nums, nonNegMinInd + 1, nums.size() - 1);
	else {
		radixSortHelper(nums, 0, nonNegMinInd - 1, false);
		radixSortHelper(nums, nonNegMinInd + 1, nums.size() - 1);
	}
}
```

##### Heap Sort (Accepted) [T(n) = O(n * lgn)]

```
void heapifyDown(vector<int> &nums, int size, int rootInd, bool isMin=false) {
	if (size <= 1 or rootInd < 0 or rootInd >= size - 1) return;
	int keyInd = rootInd, leftChildInd = 2 * rootInd + 1, rightChildInd = 2 * rootInd + 2;
	if (leftChildInd < size and (isMin ? nums[leftChildInd] < nums[keyInd] : nums[leftChildInd] > nums[keyInd]))
		keyInd = leftChildInd;
	if (rightChildInd < size and (isMin ? nums[rightChildInd] < nums[keyInd] : nums[rightChildInd] > nums[keyInd]))
		keyInd = rightChildInd;
	if (nums[keyInd] != nums[rootInd]) {
		swap(nums[rootInd], nums[keyInd]);
		heapifyDown(nums, size, keyInd, isMin);
	}
}

void heapifyArray(vector<int> &nums, bool isMin=false) {
	int size = nums.size();
	if (size <= 1) return;
	int tailRootInd = (size >> 1) - 1;
	for (int rootInd = tailRootInd; rootInd >= 0; rootInd--)
		heapifyDown(nums, size, rootInd, isMin);
}

void heapSort(vector<int> &nums) {
	if (nums.size() <= 1) return;
	heapifyArray(nums);
	for (int size = nums.size() - 1; size; size--) {
		swap(nums[size], nums[0]);
		heapifyDown(nums, size, 0);
	}
}
```

##### Bucket Sort

Bucket sort's performance depends upon the uniformity (distribution) of the input data. Hence, I am not discussing it here (I have not submitted it as well for given constraints). For more info on this Algo, you can google it.

##### Among above, Counting Sort was fastest in Leetcode OJ.

**IMP:** You can also bookmark/ subscribe to this post so as to revise above Sorting Algorithms whenvever you need to. 

**NOTE:** 
*If you find this post helpful then please **upvote**. It keeps me **motivated** to post such helpful solutions. Thanks!*

**PS:**
I have also written posts on Kadane's Algorithm and Follow up Questions [C++] in a cleaner way [here](https://leetcode.com/problems/maximum-subarray/discuss/1470547/C++-Easy-and-Clean-Solution-or-Fastest:-0ms-or-All-Methods-or-Follow-Ups-or-Detailed-Explanation) on leetcode.
*Do check it out/ bookmark (and upvote :)) to revise those concepts for the interview. Thanks!*

