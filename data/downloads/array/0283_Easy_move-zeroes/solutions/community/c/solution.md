# Simple C++ solutions—Know your STL!

**Author:** phelt
**Votes:** 114
**Link:** [https://leetcode.com/problems/move-zeroes/solutions/809349/](https://leetcode.com/problems/move-zeroes/solutions/809349/)

---

It is easy to create your own solution to this problem, take this for instance:
```C++
void moveZeroes(vector<int>& nums)
{
	for(int i=0,next=0;i<nums.size();++i)
		if(nums[i])
			swap(nums[i],nums[next++]);
}
```
and an interviewer would probably ask you to do so even if you bring up one of the other solutions I mention here, but it is also important to know your STL. An interviewer might be more impressed with this solution that uses std::stable_parition:
```C++
void moveZeroes(vector<int>& nums)
{
    stable_partition(begin(nums),end(nums),[](int i){return i;});
}
```
But you can even avoid using a lambda if you know your STL extremely well\u2014check this out:
```C++
void moveZeroes(vector<int>& nums)
{
    stable_partition(rbegin(nums),rend(nums),logical_not<int>());
}
```
std::logical_not is template function object that returns `!argument` for whatever is passed in. If the number is non-zero it will return false and if it is zero it will return true. This is the reverse of what the lambda does in the previous solution and so would move all the zeroes to the front, but to fix this we can just use the reverse iterators for the vector.