# Intuition Explained || Map || GCD || C++

**Author:** i_QUaSaR
**Votes:** 66
**Link:** [https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/1458508/](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/1458508/)

---

**Intuition :** 

* Idea is very easy. We need to find the ratio of width and height for each rectangle in the vector.
* Now, if we have already seen that ratio earlier in the map, simply add the count of ratio to result. It includes all the possbile combinations of rectangle pairs with same ratio. 
* Also, increment the count of current ratio in the map as it denotes the number of rectangle with current ratio.
# Code : Approach 1
```
long long interchangeableRectangles(vector<vector<int>>& rectangles) 
{
	long long result = 0;
	unordered_map<double, int> mp;

	for (auto& rect : rectangles)
	{
		double ratio = (double)rect[0] / rect[1];
		if(mp.find(ratio) != mp.end()) result += mp[ratio];
		mp[ratio]++;
	}

	return result;
}
```
**Time : O(n)** -> iterate over all rectangles and find ratio, unordered_map has O(1) search/insert operation.
**Space : O(n)** -> worst case when all ratios are unique and stored in map

**Update : Thanks to @[coderPlusTester](https://leetcode.com/coderPlusTester) for pointing out.**

* **Comment :** "Don't you think creating unordered_map based on double may result in WA? Floating Points only provide precision to a limit because of which it may cause two double values to be not equal, even if they are."

When we use *double* as a **key** in unordered_map, we compromise on precision. Since, floating point numbers have a limited precision. So, mighy give wrong answer on some cases even when two ratios are equal. 

To handle this, instead of storing ratio as key, we can store the pair of `{width, height}` as key in a map. Also, we first need to convert **widht/height** into its *simplest form* by diving both by `gcd(width, height)`

# Code : Approach 2 (more accurate)

```
long long interchangeableRectangles(vector<vector<int>>& rectangles) 
{
	long long result = 0;
	map<pair<int, int>, int> mp;

	for (auto& rect : rectangles)
	{
		int gcd = __gcd(rect[0], rect[1]);
		pair<int, int> key = {rect[0]/gcd, rect[1]/gcd};
		if(mp.find(key) != mp.end()) result += mp[key];
		mp[key]++;
	}

	return result;
}
```

This solution is much faster and more accurate that the preivous one. Again thanks @[coderPlusTester](https://leetcode.com/coderPlusTester) and credit goes to him for this suggestion. 

***If you liked the solution, do give it an upvote.***
