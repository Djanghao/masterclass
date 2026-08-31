# C++ || PRIORITY QUEUE || EASY TO IMPLEMENT || BEGINNER FRIENDLY

**Author:** VineetKumar2023
**Votes:** 58
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/1310672/](https://leetcode.com/problems/find-k-closest-elements/solutions/1310672/)

---

* Make a min-heap of pair of absolute difference and value corresponding to each element in the array arr.
* insert the elements one by one 
* pop k elements and store them in array and return.

```

vector<int> findClosestElements(vector<int>& arr, int k, int x) {

    // making a min-heap of absolute difference and corresponding array value
	priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

    // store the difference one by one with the array value
	for (int i = 0; i < arr.size(); i++)
		pq.push({abs(arr[i] - x), arr[i]});

	vector<int> ans;

    // get the top of the heap i.e. the element with minimum absolute difference
	for (int i = 0; i < k; i++)
	{
		ans.push_back(pq.top().second);
		pq.pop(); // pop it k times
	}

	sort(ans.begin(), ans.end());
	return ans;
}
```


also ,
can be implemented using max-heap 
* make a max-heap and keep storing the pair of (absolute difference with x, corresponding key)
* if the size of heap becomes more than k, just pop it (this will remove the element with largest absolute difference).
* like this iterate over the array.
* return the elements of the heap.

```
  vector<int> findClosestElements(vector<int>& arr, int k, int x) {
        
        priority_queue<pair<int,int>> pq;
        
        for(int i=0;i<arr.size();i++)
            {pq.push({abs(arr[i]-x),arr[i]});
              if(pq.size()>k)
                  pq.pop();
            }
        vector<int> ans;
        while(pq.size()>0)
        {
            ans.push_back(pq.top().second);
            pq.pop();
        }
        sort(ans.begin(),ans.end());
        return ans;
    }
```