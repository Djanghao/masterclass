# C++ easy solution

**Author:** OleksaM
**Votes:** 20
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/898905/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/898905/)

---

```
double trimMean(vector<int>& arr) {
	sort(arr.begin(), arr.end());
	double sum = 0, count = 0;
	int size = arr.size();
	for (int i = size / 20; i < size - (size / 20); i++) {
		sum += arr[i];
		count++;
	}
	return sum / count;
}
```