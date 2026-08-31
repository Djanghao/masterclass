# [C++] Ten Solutions

**Author:** zxspring21
**Votes:** 115
**Link:** [https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/893847/](https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/893847/)

---

**C++:**

**(1)STL nth_element**
```
int findKthLargest(vector<int>& nums, int k) {
	nth_element(nums.begin(),nums.begin()+nums.size()-k,nums.end());
	return nums[nums.size()-k];
}
```
```
int findKthLargest(vector<int>& nums, int k) {
	nth_element(nums.begin(),nums.begin()+k-1,nums.end(),greater<int>());
	return nums[k-1];
}
```
**(2)STL partial_sort**
```
int findKthLargest(vector<int>& nums, int k) {
	partial_sort(nums.begin(),nums.begin()+nums.size()-k+1,nums.end());
	return nums[nums.size()-k];
}
```
```
int findKthLargest(vector<int>& nums, int k) {
	partial_sort(nums.begin(),nums.begin()+k,nums.end(),greater<int>());
	return nums[k-1];
}
```
**(3)MaxHeap using priority_queue**
```
int findKthLargest(vector<int>& nums, int k) {
	priority_queue<int> pq(nums.begin(),nums.end());
	for(int i=1;i<k;++i) pq.pop();
	return pq.top();
}
```
**(4)MaxHeap using multiset**
```
int findKthLargest(vector<int>& nums, int k) {
	multiset<int,greater<int>> mst(nums.begin(),nums.end());
	for(int i=1;i<k;++i) mst.erase(mst.begin());
	return *mst.begin();
}
```
**(5)MinHeap using priority_queue**
```
int findKthLargest(vector<int>& nums, int k) {
	priority_queue<int,vector<int>,greater<int>> pq;
	for(int i=0;i<nums.size();++i){
		pq.push(nums[i]);
		if(pq.size()>k) pq.pop();
	}
	return pq.top();            
}
```
**(6)MinHeap using multiset**
```
int findKthLargest(vector<int>& nums, int k) {
	multiset<int> mst;
	for(int i=0;i<nums.size();++i){
		mst.insert(nums[i]);
		if(mst.size()>k) mst.erase(mst.begin());
	}
	return *mst.begin();
}
```
**(7)HeapSort, Implement heapify and buildheap from array**
```
int findKthLargest(vector<int>& nums, int k) {
	buildheap(nums);//maxheap
	for(int i=1;i<k;++i){
		swap(nums[0],nums.back());
		nums.pop_back();
		heapify(nums,0);
	}
	return nums[0];
}
void heapify(vector<int>& nums,int i){
	int leftIdx = (i<<1)+1, rightIdx = (i<<1)+2, largestIdx=i;
	if(leftIdx<nums.size() && nums[leftIdx]>nums[largestIdx]) largestIdx = leftIdx;
	if(rightIdx<nums.size() && nums[rightIdx]>nums[largestIdx]) largestIdx = rightIdx;
	if(largestIdx!=i)
		swap(nums[i], nums[largestIdx]), heapify(nums,largestIdx);
}
void buildheap(vector<int>& nums){
	//lastnodeindex = n-1, so lastParentIdx= (n-1-1)/2 = n/2-1
	for(int i=(nums.size()>>1)-1;i>=0;--i)  heapify(nums,i);
}
```
**(8)Quickselect**
```
int findKthLargest(vector<int>& nums, int k) {
	//partition rule: >=pivot   pivot   <=pivot
	int left=0,right=nums.size()-1,idx=0;
	while(1){
		idx = partition(nums,left,right);
		if(idx==k-1) break;
		else if(idx < k-1) left=idx+1;
		else right= idx-1;
	}
	return nums[idx];
}
int partition(vector<int>& nums,int left,int right){//hoare partition
	int pivot = nums[left], l=left+1, r = right;
	while(l<=r){
		if(nums[l]<pivot && nums[r]>pivot) swap(nums[l++],nums[r--]);
		if(nums[l]>=pivot) ++l;
		if(nums[r]<=pivot) --r;
	}
	swap(nums[left], nums[r]);
	return r;
}
```