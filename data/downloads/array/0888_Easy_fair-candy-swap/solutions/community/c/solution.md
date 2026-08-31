# [C++] 6 lines

**Author:** zxspring21
**Votes:** 23
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/826376/](https://leetcode.com/problems/fair-candy-swap/solutions/826376/)

---

**Prerequiste:**
` `sumA -x + y = sumB +x -y
` `2y = 2x + sumB - sum A
` `y = x+ (sumB-sumA)/2

**Explanation:**
` `Alice has sumA candies and gives x candies to Bob which has sumB candies. Besides, Bob gives y candies to Alice. They need to have same number of the candies.

**C++:**

```
vector<int> fairCandySwap(vector<int>& A, vector<int>& B) {
	int sumA = accumulate(A.begin(),A.end(),0), sumB = accumulate(B.begin(), B.end(),0);
	int tmp = (sumB-sumA)/2;
	set<int> stA(A.begin(),A.end()),stB(B.begin(),B.end());
	for(auto &x:stA)
	  if(stB.find(x+tmp)!=stB.end()) return {x,x+tmp};
	return {0,0};
}
```
